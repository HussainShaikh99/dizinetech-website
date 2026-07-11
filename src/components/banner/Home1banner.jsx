import Link from 'next/link'
import React from 'react'

const Home1Banner = () => {
    return (
        <div className="home1-banner-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-content">
                            <h1 className="text-animation">Pushing product of marketing and SEO campaigns.</h1>
                            <p className="text-animation">Sed nisl eros, condimentum nec risus sit amet, finibus congue sem. Fusce fringilla est libero, sed tempus urna feugiat eu. Curabitur eu feugiat ligula. Suspendisse nectoraba porttitor velit go this week for work.</p>
                            <div className="button-grp">
                                <a href="#" className="primary-btn" data-text="Start Free Trial">
                                    <span>Start Free Trial</span>
                                    <svg width={18} height={10} viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6347 0.501954L15.9023 0.00888778C16.0999 -0.0139744 16.2995 0.00737545 16.4897 0.0717184C16.68 0.136061 16.8572 0.242137 17.0112 0.383884C17.1651 0.525632 17.2929 0.700275 17.3871 0.897837C17.4814 1.0954 17.5402 1.31201 17.5604 1.53529L17.9967 6.35842C18.0196 6.69936 17.9238 7.03694 17.7297 7.29921C17.5356 7.56147 17.2585 7.72767 16.9575 7.76239C16.6565 7.79711 16.3555 7.69759 16.1185 7.48505C15.8815 7.27252 15.7273 6.96377 15.6888 6.62463L15.3349 2.71026L11.8714 3.11022C11.5697 3.13614 11.271 3.02786 11.0389 2.80848C10.8069 2.58909 10.6598 2.27595 10.6291 1.93579C10.5984 1.59564 10.6864 1.25537 10.8745 0.987529C11.0626 0.719685 11.3346 0.545447 11.6347 0.501954Z" />
                                        <path d="M0.394102 9.57162C0.279607 9.45783 0.186077 9.31966 0.118858 9.165C0.0516384 9.01034 0.0120483 8.84223 0.00234993 8.67026C-0.0073484 8.4983 0.0130353 8.32587 0.062336 8.16281C0.111637 7.99976 0.188888 7.84929 0.289673 7.72L1.96574 5.01287C2.27675 4.61376 2.65802 4.29239 3.08518 4.0693C3.51234 3.84621 3.976 3.72631 4.44649 3.71726H4.50335C5.43276 3.71726 6.32736 4.15394 6.96554 4.91976L8.69441 6.99825C8.89746 7.24216 9.17013 7.37591 9.46485 7.37591H9.47066C9.61656 7.37598 9.76088 7.3416 9.89435 7.27499C10.0278 7.20837 10.1475 7.11099 10.2457 6.98907L15.0773 1.04211L16.7864 2.81636L11.9549 8.76332C11.6401 9.14979 11.2584 9.459 10.8334 9.67173C10.4085 9.88446 9.94935 9.99617 9.48458 9.99992C8.55749 9.9632 7.64432 9.56717 7.00383 8.7961L5.27496 6.71893C5.06726 6.46977 4.81547 6.35175 4.48478 6.34126C4.33731 6.34307 4.19186 6.38025 4.05804 6.45033C3.92422 6.52041 3.8051 6.62179 3.70853 6.74778L2.03247 9.45491C1.93179 9.5843 1.80953 9.69001 1.67268 9.76598C1.53583 9.84195 1.38708 9.88669 1.23493 9.89765C1.08277 9.90861 0.930194 9.88557 0.78592 9.82985C0.641647 9.77414 0.508503 9.68683 0.394102 9.57293V9.57162Z" />
                                    </svg>
                                </a>
                                <Link href="/contact" className="primary-btn transparent" data-text="Contact Us">
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="banner-img magnetic-item">
                            <img src="assets/img/home1/home1-banner-img.png" alt="" />
                        </div>
                    </div>
                </div>
                <ul className="social-list">
                    <li>
                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Home1Banner