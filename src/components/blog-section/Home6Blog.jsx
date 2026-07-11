import Link from 'next/link'
import React from 'react'

const Home6Blog = () => {
  return (
    <>
     <div className="home6-blog-section mb-120">
  <div className="container">
    <div className="row justify-content-center mb-60">
      <div className="col-xl-7 col-lg-8 text-animation">
        <div className="section-title five text-center">
          <span className="sub-title">Latest Blog</span>
          <h2>Insights And Updates From Our Experts.</h2>
        </div>
      </div>
    </div>
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-4 col-md-6">
        <div className="blog-card2 style-3 magnetic-item">
          <div className="blog-card-img-wrap">
            <Link href="/blog/blog-details" className="card-img">
              <img src="assets/img/home6/blog-img1.jpg" alt="" />
            </Link>
          </div>
          <div className="card-content">
            <div className="blog-meta">
              <Link href="/blog" className="blog-date">
                21 June, 2024
              </Link>
              <ul className="category">
                <li><Link href="/blog">Content SEO</Link></li>
              </ul>
            </div>
            <h4><Link href="/blog/blog-details">Data Ident The Most Relevant Keyword Your Business.</Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card2 style-3 magnetic-item">
          <div className="blog-card-img-wrap">
            <Link href="/blog/blog-details" className="card-img">
              <img src="assets/img/home6/blog-img2.jpg" alt="" />
            </Link>
          </div>
          <div className="card-content">
            <div className="blog-meta">
              <Link href="/blog" className="blog-date">
                12 June, 2024
              </Link>
              <ul className="category">
                <li><Link href="/blog">Data-Driven</Link></li>
              </ul>
            </div>
            <h4><Link href="/blog/blog-details">User Behavior Prov Personalize Experiences Include.</Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card2 style-3 magnetic-item">
          <div className="blog-card-img-wrap">
            <Link href="/blog/blog-details" className="card-img">
              <img src="assets/img/home6/blog-img3.jpg" alt="" />
            </Link>
          </div>
          <div className="card-content">
            <div className="blog-meta">
              <Link href="/blog" className="blog-date">
                05 June, 2024
              </Link>
              <ul className="category">
                <li><Link href="/blog">Content Creation</Link></li>
              </ul>
            </div>
            <h4><Link href="/blog/blog-details">Mastering With Tips And Tricks With Our Expert.</Link></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Home6Blog