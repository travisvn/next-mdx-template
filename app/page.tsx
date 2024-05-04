import fs from 'fs'
import path from 'path'
import NavBar from "@/components/layout/navbar";
import Link from "next/link";
import { Navbar } from '@/components/layout/nav';
import { BlogPosts } from '@/components/posts';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('_blog'))

  const paths = files.map(filename => ({
    slug: filename.replace('.mdx', '')
  }))

  return paths
}


export default function Home() {
  return (
    <>
      <NavBar />
      <Navbar />
      <main className="container mx-auto flex flex-col">
        <BlogPosts />
      </main>
    </>
  );
}
