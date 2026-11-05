"use client"
import React, { useState, useEffect } from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import blogGridData from '@/data/blog-data'
import Link from 'next/link'
import { slugify } from '@/utils/slugify'
const blog_grid = blogGridData.blog_grid
const BlogSidebar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [filteredBlogs, setFilteredBlogs] = useState(blog_grid)
  const [currentPage, setCurrentPage] = useState(1)
  const [blogsPerPage] = useState(6)

  // Extract unique categories and tags from blog_grid
  const categories = [...new Set(blog_grid.map(blog => blog.category))]
  const tags = [...new Set(blog_grid.flatMap(blog => blog.tags || []))]

  useEffect(() => {
    const filtered = blog_grid.filter(blog =>
      blog.blog_title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || blog.category === selectedCategory) &&
      (selectedTag === '' || (blog.tags && blog.tags.includes(selectedTag)))
    )
    setFilteredBlogs(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedTag])

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Header1 style={"inner-page"} fluid='container' />
      <Breadcrum pageTitle={'Blog'} pagename={'Blog'} />
      <div className="blog-grid-sidebar-page pt-150 mb-120" id="scroll-section">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="sidebar-area">
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button type="submit"><i className="bx bx-search" /></button>
                    </div>
                  </form>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Category</h5>
                  <ul className="category-list">
                    {categories.map((category, index) => (
                      <li key={index} >
                        <div className='category-item' onClick={() => setSelectedCategory(category)}>
                          <span>
                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.0015 6.99978C14.0015 7.59651 13.2684 8.08835 13.1216 8.63846C12.9701 9.20722 13.3535 9.99975 13.0656 10.4974C12.7731 11.0032 11.8931 11.0638 11.4829 11.4741C11.0726 11.8844 11.012 12.7643 10.5062 13.0568C10.0085 13.3447 9.21601 12.9613 8.64725 13.1128C8.09714 13.2596 7.6053 13.9927 7.00857 13.9927C6.41184 13.9927 5.92 13.2596 5.36989 13.1128C4.80113 12.9613 4.0086 13.3447 3.51093 13.0568C3.00511 12.7643 2.9445 11.8844 2.53425 11.4741C2.124 11.0638 1.24405 11.0032 0.951514 10.4974C0.663638 9.99975 1.04708 9.20722 0.89557 8.63846C0.748719 8.08835 0.015625 7.59651 0.015625 6.99978C0.015625 6.40305 0.748719 5.91121 0.89557 5.3611C1.04708 4.79234 0.663638 3.99981 0.951514 3.50214C1.24405 2.99632 2.124 2.93571 2.53425 2.52546C2.9445 2.11521 3.00511 1.23526 3.51093 0.942725C4.0086 0.654849 4.80113 1.0383 5.36989 0.886781C5.92 0.73993 6.41184 0.00683594 7.00857 0.00683594C7.6053 0.00683594 8.09714 0.73993 8.64725 0.886781C9.21601 1.0383 10.0085 0.654849 10.5062 0.942725C11.012 1.23526 11.0726 2.11521 11.4829 2.52546C11.8931 2.93571 12.7731 2.99632 13.0656 3.50214C13.3535 3.99981 12.9701 4.79234 13.1216 5.3611C13.2684 5.91121 14.0015 6.40305 14.0015 6.99978Z" />
                              <path d="M9.03132 4.91555L6.36934 7.57753L4.9894 6.19876C4.84548 6.05492 4.65033 5.97412 4.44686 5.97412C4.24339 5.97412 4.04824 6.05492 3.90432 6.19876C3.76049 6.34267 3.67969 6.53782 3.67969 6.74129C3.67969 6.94477 3.76049 7.13991 3.90432 7.28383L5.8402 9.21971C5.98028 9.35963 6.17018 9.43823 6.36817 9.43823C6.56616 9.43823 6.75606 9.35963 6.89614 9.21971L10.1152 6.00062C10.2591 5.85671 10.3399 5.66156 10.3399 5.45809C10.3399 5.25461 10.2591 5.05947 10.1152 4.91555C10.0441 4.84434 9.95959 4.78785 9.8666 4.7493C9.77361 4.71076 9.67393 4.69092 9.57327 4.69092C9.47261 4.69092 9.37293 4.71076 9.27994 4.7493C9.18695 4.78785 9.10246 4.84434 9.03132 4.91555Z" />
                            </svg>
                            {category}
                          </span>
                          <span>({blog_grid.filter(blog => blog.category === category).length})</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Popular Post </h5>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details"><img src="/assets/img/inner-pages/popular-post-img1.png" alt="" /></Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">20 January, 2024</Link>
                      <h6><Link href="/blog/blog-details">Looking Inspiration Traveling The World.</Link></h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details"><img src="/assets/img/inner-pages/popular-post-img2.png" alt="" /></Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">12 January, 2024</Link>
                      <h6><Link href="/blog/blog-details">Challenges creating a multi-brand system.</Link></h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details"><img src="/assets/img/inner-pages/popular-post-img3.png" alt="" /></Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">04 January, 2024</Link>
                      <h6><Link href="/blog/blog-details">Decoding the Cloud And Deep Dive Creative.</Link></h6>
                    </div>
                  </div>
                </div>

                <div className="single-widget mb-30">
                  <h5 className="widget-title">New Tags</h5>
                  <ul className="tag-list">
                    {tags.slice(0, 10).map((tag, index) => (
                      <li key={index}>
                        <div className='tag-item' onClick={() => setSelectedTag(tag)}>#{tag}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-banner-area">
                  <img src="/assets/img/inner-pages/sidebar-banner-bg.jpg" alt="" />
                  <div className="banner-content">
                    <h2>Feel Free <span>Talked</span> To Us!</h2>
                    <div className="contact-area">
                      <div className="icon">
                        <svg width={26} height={26} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.7273 19.6351L19.7174 16.2694C19.0816 15.8457 18.2294 15.9851 17.7594 16.5897L16.3001 18.48C16.2094 18.6005 16.0785 18.6839 15.9316 18.7151C15.7847 18.7462 15.6316 18.7229 15.5003 18.6495L15.2227 18.4953C14.3025 17.99 13.1575 17.361 10.8506 15.0361C8.54365 12.7113 7.91794 11.5569 7.41635 10.6316L7.26414 10.3519C7.19025 10.2197 7.16625 10.0651 7.19657 9.91654C7.22688 9.76796 7.30947 9.63541 7.42911 9.54331L9.30417 8.07362C9.90412 7.60007 10.0427 6.74178 9.62261 6.10112L6.28161 1.05416C5.85108 0.401756 4.98732 0.205908 4.32081 0.609534L2.22588 1.87729C1.56763 2.26712 1.08472 2.8985 0.878362 3.63909C0.123981 6.40813 0.691495 11.1871 7.67954 18.2277C13.2384 23.8273 17.3767 25.3332 20.2211 25.3332C20.8757 25.336 21.5277 25.2502 22.1597 25.0781C22.895 24.8704 23.5218 24.3839 23.9085 23.7206L25.1682 21.6114C25.5695 20.9398 25.3752 20.0691 24.7273 19.6351ZM24.4575 21.185L23.2007 23.2955C22.923 23.7742 22.4722 24.1262 21.9427 24.2778C19.4052 24.9796 14.972 24.3983 8.26315 17.6398C1.55434 10.8813 0.977355 6.41563 1.67402 3.85894C1.82466 3.32485 2.17449 2.87013 2.65032 2.58993L4.74525 1.32383C5.03445 1.14853 5.40934 1.2335 5.59616 1.51661L7.41104 4.26155L8.9343 6.56313C9.11672 6.84102 9.05678 7.21348 8.79654 7.41912L6.92105 8.88881C6.3503 9.32847 6.18731 10.124 6.53871 10.7554L6.68764 11.0279C7.21479 12.0019 7.87018 13.2136 10.2629 15.6236C12.6556 18.0337 13.858 18.694 14.8244 19.225L15.0954 19.3754C15.722 19.7293 16.5118 19.5652 16.9482 18.9902L18.4071 17.1008C18.6112 16.8388 18.9808 16.7785 19.2568 16.9621L24.2662 20.3278C24.5474 20.5159 24.6317 20.8937 24.4575 21.185ZM14.6502 4.55702C18.521 4.56136 21.6579 7.72146 21.6622 11.6209C21.6622 11.8504 21.8469 12.0364 22.0747 12.0364C22.3025 12.0364 22.4871 11.8504 22.4871 11.6209C22.4823 7.26267 18.9765 3.73078 14.6502 3.72601C14.4224 3.72601 14.2378 3.91202 14.2378 4.14152C14.2378 4.37101 14.4224 4.55702 14.6502 4.55702Z" />
                          <path d="M14.6468 7.05001C17.1514 7.05298 19.181 9.09765 19.184 11.6208C19.184 11.731 19.2274 11.8367 19.3048 11.9146C19.3821 11.9925 19.4871 12.0363 19.5964 12.0363C19.7058 12.0363 19.8107 11.9925 19.8881 11.9146C19.9654 11.8367 20.0089 11.731 20.0089 11.6208C20.0055 8.63885 17.6068 6.2224 14.6468 6.21899C14.419 6.21899 14.2344 6.40501 14.2344 6.6345C14.2344 6.864 14.419 7.05001 14.6468 7.05001Z" />
                          <path d="M14.6468 9.54293C15.7852 9.54429 16.7078 10.4737 16.7092 11.6206C16.7092 11.7308 16.7526 11.8364 16.83 11.9144C16.9073 11.9923 17.0122 12.0361 17.1216 12.0361C17.231 12.0361 17.3359 11.9923 17.4133 11.9144C17.4906 11.8364 17.5341 11.7308 17.5341 11.6206C17.5323 10.0149 16.2407 8.71372 14.6468 8.71191C14.419 8.71191 14.2344 8.89793 14.2344 9.12742C14.2344 9.35692 14.419 9.54293 14.6468 9.54293Z" />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Any Question</span>
                        <a href="tel:990737621432">+990-737 621 432</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-8 order-lg-2 order-1">
              <div className="row gy-5 mb-70">
                {
                  currentBlogs.length > 0 ? (
                    currentBlogs.map((item, index) => {
                      return (
                        <div className="col-md-6" key={index}>
                          <div className="blog-card2 magnetic-item">
                            <div className="blog-card-img-wrap">
                              <Link href="/blog/blog-details" className="card-img">
                                <img src={item.cover_image} alt="" />
                              </Link>
                            </div>
                            <div className="card-content">
                              <div className="blog-meta">
                                <Link href="#" className="blog-date">
                                  {item.date}
                                </Link>
                                <ul className="category">
                                  <li><Link href={`/blog/blog-sidebar?category=${item.category}`}>{item.category}</Link></li>
                                </ul>
                              </div>
                              <h4><Link href={`/blog/blog-details/${slugify(item.blog_title, { lower: true })}`}>{item.blog_title}</Link></h4>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <div className="col-12">
                      <h3>Oops! No data found matching your search criteria.</h3>
                    </div>
                  )
                }
              </div>
              {filteredBlogs.length > 0 && (
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <div className="innerpage-pagination-area">
                      <ul className="paginations">
                        <li className="page-item paginations-button">
                          <a href="#" onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}>
                            <svg width={14} height={12} viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.98 5.66372C13.9099 5.4729 13.7497 5.26524 13.5995 5.16983C13.4493 5.08003 13.0538 5.07442 8.23285 5.04636L3.02639 5.01829L4.91373 3.22795C6.14025 2.06619 6.83111 1.37026 6.88117 1.2524C7.05138 0.848309 6.89619 0.30391 6.55577 0.101865C6.36053 -0.0216073 5.98506 -0.0328321 5.81986 0.0681905C5.75978 0.107477 4.46318 1.31975 2.93128 2.76774C1.05896 4.54124 0.127801 5.46167 0.0727325 5.57953C-0.0774537 5.94433 0.00765182 6.34281 0.303018 6.6571C0.798632 7.17344 5.8549 11.8598 5.99007 11.9271C6.20534 12.0337 6.39057 12.0225 6.63587 11.8991C7.03136 11.697 7.20157 11.0909 6.9863 10.6812C6.93624 10.5858 6.03012 9.699 4.97381 8.71684C3.92251 7.72907 3.05643 6.90966 3.05643 6.88721C3.05143 6.85915 5.38932 6.84231 8.25287 6.84231L13.4493 6.84231L13.6145 6.71884C13.8648 6.52241 13.975 6.32036 13.995 6.0173C14.005 5.87137 14 5.70862 13.98 5.66372Z" />
                            </svg>
                          </a>
                        </li>
                        {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }).map((_, index) => {
                          const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
                          if (
                            index === 0 ||
                            index === totalPages - 1 ||
                            (index >= currentPage - 2 && index <= currentPage + 2)
                          ) {
                            return (
                              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <a href="#" onClick={() => paginate(index + 1)}>{index + 1}</a>
                              </li>
                            );
                          } else if (
                            index === currentPage - 3 ||
                            index === currentPage + 3
                          ) {
                            return <li key={index} className="page-item">...</li>;
                          }
                          return null;
                        })}
                        <li className="page-item paginations-button">
                          <a href="#" onClick={() => paginate(currentPage < Math.ceil(filteredBlogs.length / blogsPerPage) ? currentPage + 1 : Math.ceil(filteredBlogs.length / blogsPerPage))}>
                            <svg width={14} height={12} viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.020025 6.33628C0.0901115 6.5271 0.25031 6.73476 0.400496 6.83017C0.550683 6.91997 0.946172 6.92558 5.76715 6.95364L10.9736 6.98171L9.08627 8.77205C7.85974 9.93381 7.16889 10.6297 7.11883 10.7476C6.94862 11.1517 7.10381 11.6961 7.44423 11.8981C7.63947 12.0216 8.01494 12.0328 8.18014 11.9318C8.24022 11.8925 9.53682 10.6803 11.0687 9.23226C12.941 7.45876 13.8722 6.53833 13.9273 6.42047C14.0775 6.05567 13.9923 5.65719 13.697 5.3429C13.2014 4.82656 8.1451 0.140237 8.00993 0.0728886C7.79466 -0.0337464 7.60943 -0.0225217 7.36413 0.100951C6.96864 0.302995 6.79843 0.909129 7.0137 1.31883C7.06376 1.41424 7.96988 2.301 9.02619 3.28316C10.0775 4.27093 10.9436 5.09034 10.9436 5.11279C10.9486 5.14085 8.61068 5.15769 5.74713 5.15769L0.550683 5.15769L0.385478 5.28116C0.135167 5.47759 0.0250308 5.67964 0.00500557 5.98271C-0.00500609 6.12863 -2.49531e-07 6.29139 0.020025 6.33628Z" />
                            </svg>
                          </a>
                        </li>
                        </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  )
}

export default BlogSidebar