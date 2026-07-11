import Link from 'next/link'
import React from 'react'

const Home1blog = () => {
  return (
    <div className="home1-blog-section mb-120">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-6">
            <div className="section-title text-center text-animation">
              <span className="sub-title">Growth Hacks</span>
              <h2>Gaining Control <span>Through Blog</span> Knowledge.</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="blog-card magnetic-item">
              <div className="blog-card-img-wrap">
                <Link href="/blog/blog-details" className="card-img">
                  <img src="assets/img/home1/blog-img1.jpg" alt="" />
                </Link>
                <Link href="/blog" className="date">
                  03 April, 2024
                </Link>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li><Link href="/blog">Development</Link></li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (12)</span>
                  </div>
                </div>
                <h5><Link href="/blog/blog-details">Mastering With Tips and Tricks with our Expert.</Link></h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card magnetic-item">
              <div className="blog-card-img-wrap">
                <Link href="/blog/blog-details" className="card-img">
                  <img src="assets/img/home1/blog-img2.jpg" alt="" />
                </Link>
                <Link href="/blog" className="date">
                  10 April, 2024
                </Link>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li><Link href="/blog">Cyber Security</Link></li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (15)</span>
                  </div>
                </div>
                <h5><Link href="/blog/blog-details">How to Make Your Brand the Gossip of the Industry.</Link></h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card magnetic-item">
              <div className="blog-card-img-wrap">
                <Link href="/blog/blog-details" className="card-img">
                  <img src="assets/img/home1/blog-img3.jpg" alt="" />
                </Link>
                <Link href="/blog" className="date">
                  15 April, 2024
                </Link>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li><Link href="/blog">Consulting</Link></li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (20)</span>
                  </div>
                </div>
                <h5><Link href="/blog/blog-details">3 Free SEO Tool That Will Boost Your Website Traffic.</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home1blog