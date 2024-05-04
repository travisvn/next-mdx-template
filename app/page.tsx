import NavBar from '@/components/layout/navbar'
import BlogPosts from '@/components/posts'


export default function Home() {
  return (
    <>
      <main className='container mx-auto flex flex-col'>
        <BlogPosts />
      </main>
    </>
  );
}
