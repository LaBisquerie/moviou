import { useState, useEffect, React } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LastPosts({posts}) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'bjhivepu',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250)
          }
        })
      )
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div>
      <h2>Les derniers articles</h2>
      <div>
        {mappedPosts.length ? mappedPosts.map((p, index) => (
          <Link href={`/post/${p.slug.current}`} key={index}>
            <a>
              <h3>{p.title}</h3>
              <img src={p.mainImage} alt="" />
            </a>
          </Link>
        )) : <>No posts yet</>}
      </div>
    </div>
  )
}

