import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';

export const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
        projectId: 'bjhivepu',
        dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image])

  return (
    <div>
      <div>
        <h3>{title}</h3>
        {imageUrl && <img src={imageUrl} width={200} height={200} />}
        <BlockContent blocks={body} />
      </div>
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://bjhivepu.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res =>res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      }
    }
  }
}

export default Post;