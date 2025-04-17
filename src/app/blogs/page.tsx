"use client";
import React, { useState } from 'react';
import Image from 'next/image';


// Types
interface Author {
    id: string;
    name: string;
    image: string;
}

interface BlogPost {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    author: Author;
    date: string;
    excerpt: string;
    url: string;
    readTime: string;
}

interface Category {
    id: string;
    name: string;
}

// Sample data
const authors: Author[] = [
    { id: '1', name: 'Stu Waters', image: '/images/authors/stu-waters.jpg' },
    { id: '2', name: 'Ashesh Jain', image: '/images/authors/ashesh-jain.jpg' },
];

const categories: Category[] = [
    { id: '1', name: 'Physical Security Industry' },
    { id: '2', name: 'Customer Success' },
    { id: '3', name: 'Technology' },
    { id: '4', name: 'Company News' },
];

const allBlogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Thermal vs Night Vision vs Infrared - Which One is Right for You?',
        category: 'Physical Security Industry',
        imageUrl: '/images/thermal-vision.jpg',
        author: authors[0],
        date: 'Dec 9, 2024',
        excerpt: 'Explore the differences between thermal, night vision, and infrared technologies to determine which solution best fits your security needs.',
        url: '/blog/thermal-vs-night-vision',
        readTime: '8 min'
    },
    {
        id: '2',
        title: 'AI Checker for Text and Video: A Cryptographic Approach',
        category: 'Physical Security Industry',
        imageUrl: '/images/ai-checker.jpg',
        author: authors[1],
        date: 'Nov 14, 2024',
        excerpt: 'Learn how our new AI verification system uses cutting-edge cryptography to authenticate text and video content in real-time.',
        url: '/blog/ai-checker-for-text-and-video',
        readTime: '6 min'
    },
    {
        id: '3',
        title: 'Ridgecrest Foundation Modernizes Security with BestCity',
        category: 'Customer Success',
        imageUrl: '/images/ridgecrest.jpg',
        author: authors[0],
        date: 'Sep 23, 2024',
        excerpt: 'See how Ridgecrest Foundation transformed their security infrastructure with BestCity integrated solutions.',
        url: '/blog/ridgecrest-foundation',
        readTime: '5 min'
    },
    {
        id: '4',
        title: 'The Future of Biometric Access Control',
        category: 'Technology',
        imageUrl: '/images/biometric-access.jpg',
        author: authors[1],
        date: 'Aug 28, 2024',
        excerpt: 'Explore upcoming trends in biometric security and how theyre shaping the future of access control systems.',
        url: '/blog/biometric-access-control',
        readTime: '7 min'
    },
    {
        id: '5',
        title: 'BestCity Launches New Integration Platform',
        category: 'Company News',
        imageUrl: '/images/integration-platform.jpg',
        author: authors[0],
        date: 'Aug 10, 2024',
        excerpt: 'Introducing our new platform that seamlessly connects with your existing security ecosystem.',
        url: '/blog/new-integration-platform',
        readTime: '4 min'
    },
    {
        id: '6',
        title: 'Securing Remote Facilities: Best Practices',
        category: 'Physical Security Industry',
        imageUrl: '/images/remote-facilities.jpg',
        author: authors[1],
        date: 'Jul 15, 2024',
        excerpt: 'Discover effective strategies for maintaining security at remote and unmanned facilities.',
        url: '/blog/securing-remote-facilities',
        readTime: '9 min'
    },
];

// Blog Page Components
export default function Blogs() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const featuredPosts = allBlogPosts.slice(0, 3);
    const filteredPosts = allBlogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto py-6 px-4">
                    <h1 className="text-3xl font-bold text-gray-900">BestCity Blog</h1>
                    <p className="mt-2 text-lg text-gray-600">Insights on security, technology, and industry trends</p>
                </div>
            </header>

            {/* Featured Posts Section */}
            <section className="bg-white">
                <div className="container mx-auto py-16 px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Featured Posts</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPosts.map((post) => (
                            <div key={post.id} className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg">
                                <a href={post.url} className="block h-64 overflow-hidden">
                                    <Image
                                        width={500}
                                        height={300}
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </a>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <span className="inline-block py-1 px-4 rounded-full text-sm border border-gray-300 text-gray-700">
                                            {post.category}
                                        </span>
                                    </div>

                                    <a href={post.url} className="block mb-4">
                                        <h3 className="text-xl font-semibold hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h3>
                                    </a>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image
                                                width={500}
                                                height={300}
                                                src={post.author.image}
                                                alt={post.author.name}
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            <span className="text-gray-700">{post.author.name}</span>
                                        </div>

                                        <span className="text-sm text-gray-500">{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-lg font-semibold mb-4">Search</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full p-3 border border-gray-300 rounded-lg pr-10"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <svg
                                        className="w-5 h-5 absolute right-3 top-3 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                                <div className="space-y-2">
                                    <button
                                        className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === 'all' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                                            }`}
                                        onClick={() => setSelectedCategory('all')}
                                    >
                                        All Categories
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === category.name ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                                                }`}
                                            onClick={() => setSelectedCategory(category.name)}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:w-3/4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredPosts.map((post) => (
                                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <a href={post.url} className="block h-48 overflow-hidden">
                                            <Image
                                                width={500}
                                                height={300}
                                                src={post.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </a>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm font-medium text-blue-600">{post.category}</span>
                                                <span className="text-xs text-gray-500">{post.readTime} read</span>
                                            </div>
                                            <a href={post.url} className="block mb-3">
                                                <h3 className="text-xl font-semibold hover:text-blue-600 transition-colors">
                                                    {post.title}
                                                </h3>
                                            </a>
                                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Image
                                                        width={500}
                                                        height={300}
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        className="w-8 h-8 rounded-full mr-2"
                                                    />
                                                    <span className="text-sm text-gray-700">{post.author.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-500">{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-12 flex justify-center">
                                <nav className="flex items-center space-x-2">
                                    <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300">
                                        &laquo; Previous
                                    </button>
                                    <button className="px-3 py-2 rounded-md bg-blue-600 text-white">1</button>
                                    <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300">2</button>
                                    <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300">3</button>
                                    <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300">
                                        Next &raquo;
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter to receive the latest security insights and updates.
                    </p>
                    <form className="max-w-md mx-auto flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow p-3 rounded-l-lg text-gray-900 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-r-lg font-medium transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-xl font-bold mb-4">BestCity</h3>
                            <p className="text-gray-400 max-w-xs">
                                Innovative security solutions for businesses and organizations of all sizes.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2025 BestCity. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};