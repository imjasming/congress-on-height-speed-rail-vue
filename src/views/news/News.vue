<template>
  <div class="super_container">
    <!-- Home -->

    <div class="home">
      <div class="parallax_background parallax-window" data-parallax="scroll" :style="{ background: 'url(' + require('../../assets/news.jpg')+')'}" data-speed="0.8">
        <!--<img src="../../assets/news.jpg" alt="">-->
      </div>
      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content d-flex flex-row align-items-end justify-content-start">
                <div class="current_page">News</div>
                <div class="breadcrumbs ml-auto">
                  <ul>
                    <li><a href="/home">Home</a></li>
                    <li>News</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- News -->

    <div class="news">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">

            <div class="news_items">

              <!-- News Item -->
              <div class="news_item">
                <div class="news_image_container">
                  <div class="news_image"><img src="../../assets/news_1.jpg" alt=""></div>
                  <div class="date_container">
                    <a href="#">
										<span class="date_content d-flex flex-column align-items-center justify-content-center">
											<div class="date_day">15</div>
											<div class="date_month">May</div>
										</span>
                    </a>
                  </div>
                </div>
                <div class="news_body">
                  <div class="news_title"><a href="#">10 Tips to start your small business</a></div>
                  <div class="news_info">
                    <ul>
                      <!-- News Author -->
                      <li>
                        <div class="news_author_image"><img src="../../assets/news_author_1.jpg" alt=""></div>
                        <span>by <a href="#">Michael Smith</a></span>
                      </li>
                      <!-- Tags -->
                      <li><span>in <a href="/events">Events</a></span></li>
                      <!-- Comments -->
                      <li><a href="#">3 Comments</a></li>
                    </ul>
                  </div>
                  <div class="news_text">
                    <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                  </div>
                  <div class="button news_button"><a href="#">Read More</a></div>
                </div>
              </div>

              <!-- News Item -->
              <div class="news_item">
                <div class="news_image_container">
                  <div class="news_image"><img src="../../assets/news_2.jpg" alt=""></div>
                  <div class="date_container">
                    <a href="#">
										<span class="date_content d-flex flex-column align-items-center justify-content-center">
											<div class="date_day">15</div>
											<div class="date_month">May</div>
										</span>
                    </a>
                  </div>
                </div>
                <div class="news_body">
                  <div class="news_title"><a href="#">Ideas for a better online marketing campaign</a></div>
                  <div class="news_info">
                    <ul>
                      <!-- News Author -->
                      <li>
                        <div class="news_author_image"><img src="../../assets/news_author_1.jpg" alt=""></div>
                        <span>by <a href="#">Michael Smith</a></span>
                      </li>
                      <!-- Tags -->
                      <li><span>in <a href="/events">Events</a></span></li>
                      <!-- Comments -->
                      <li><a href="#">3 Comments</a></li>
                    </ul>
                  </div>
                  <div class="news_text">
                    <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                  </div>
                  <div class="button news_button"><a href="#">Read More</a></div>
                </div>
              </div>

              <!-- News Item -->
              <div class="news_item">
                <div class="news_image_container">
                  <div class="news_image"><img src="../../assets/news_3.jpg" alt=""></div>
                  <div class="date_container">
                    <a href="#">
										<span class="date_content d-flex flex-column align-items-center justify-content-center">
											<div class="date_day">15</div>
											<div class="date_month">May</div>
										</span>
                    </a>
                  </div>
                </div>
                <div class="news_body">
                  <div class="news_title"><a href="#">Tips to have an amazing conefrence call</a></div>
                  <div class="news_info">
                    <ul>
                      <!-- News Author -->
                      <li>
                        <div class="news_author_image"><img src="../../assets/news_author_1.jpg" alt=""></div>
                        <span>by <a href="#">Michael Smith</a></span>
                      </li>
                      <!-- Tags -->
                      <li><span>in <a href="/events">Events</a></span></li>
                      <!-- Comments -->
                      <li><a href="#">3 Comments</a></li>
                    </ul>
                  </div>
                  <div class="news_text">
                    <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                  </div>
                  <div class="button news_button"><a href="#">Read More</a></div>
                </div>
              </div>

              <!-- Pagination -->
              <div class="pagination">
                <ul>
                  <li class="active"><a href="#">01.</a></li>
                  <li><a href="#">02.</a></li>
                  <li><a href="#">03.</a></li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="sidebar">
              <div class="tickets">
                <div class="background_image" :style="{ background: 'url(' + require('../../assets/tickets.jpg')+')'}"></div>
                <div class="tickets_inner text-center">
                  <div class="tickets_title">Buy Tickets</div>
                  <div class="tickets_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis id expl icabo. Esum dolor sit amet, consect etur adipisi cing elit. Perferendis id explica bo.</div>
                  <div class="tickets_next"><a href="#">See Next Event</a></div>
                  <div class="button tickets_button"><a href="#">Buy Tickets Now!</a></div>
                </div>
              </div>
              <div class="sidebar_categories">
                <div class="sidebar_categories_title">Categories</div>
                <ul class="categories_list">
                  <li><a href="#">The Speakers</a></li>
                  <li><a href="#">Tips & Tricks</a></li>
                  <li><a href="#">Events & Lifestyle</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Uncategorized</a></li>
                </ul>
              </div>
              <div class="latest_posts">
                <div class="latest_posts_title">Latest Posts</div>
                <div class="latest_container">

                  <!-- Latest -->
                  <div class="latest d-flex flex-row align-items-start justify-content-start">
                    <div><div class="latest_image"><img src="../../assets/latest_1.jpg" alt=""></div></div>
                    <div class="latest_content">
                      <div class="latest_title"><a href="#">A big discovery in science</a></div>
                      <div class="latest_date">April 02, 2017</div>
                    </div>
                  </div>

                  <!-- Latest -->
                  <div class="latest d-flex flex-row align-items-start justify-content-start">
                    <div><div class="latest_image"><img src="../../assets/latest_2.jpg" alt=""></div></div>
                    <div class="latest_content">
                      <div class="latest_title"><a href="#">Marketing for everybody</a></div>
                      <div class="latest_date">April 02, 2017</div>
                    </div>
                  </div>

                  <!-- Latest -->
                  <div class="latest d-flex flex-row align-items-start justify-content-start">
                    <div><div class="latest_image"><img src="../../assets/latest_3.jpg" alt=""></div></div>
                    <div class="latest_content">
                      <div class="latest_title"><a href="#">New ways to improve ypurself</a></div>
                      <div class="latest_date">April 02, 2017</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped>
  @import "../../style/home.css";
  @import "../../../static/css/news.css";
  @import "../../../static/css/news_responsive.css";
</style>
