import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Home() {
  var serverURL = "https://joetarantinoapp-backend.herokuapp.com"
  const [s1Img, setS1Img] = useState('')
  const [twitter, setTwitter] = useState("")
  const [discord, setDiscord] = useState("")
  const [telegram, setTelegram] = useState("")
  useEffect(async () => {
    axios.get(`${serverURL}/section-tow-image`)
      .then(res => {
        console.log(`${serverURL}${res.data?.file?.url} is my url`)
        setS1Img(`${res.data?.file?.url}`)
      })
    axios.get(`${serverURL}/twitter-link`)
      .then(res => {
        setTwitter(res.data?.link)
      })
    axios.get(`${serverURL}/discord-link`)
      .then(res => {
        setDiscord(res.data?.link)
      })
    axios.get(`${serverURL}/telegram-link`)
      .then(res => {
        setTelegram(res.data?.link)
      })
  }, [])
  return (
    <div className="">
      {console.log(s1Img, twitter, discord, telegram)}
      <div className="wrap-fullwidth">
        <div data-elementor-type="wp-post" data-elementor-id={47} className="elementor elementor-47" data-elementor-settings="[]">
          <div className="elementor-section-wrap">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-d3fa468 header_sticky mobile_sticky elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default active_sticky" data-id="d3fa468" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-8435cee" data-id="8435cee" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-5478040 elementor-widget elementor-widget-ova_logo" data-id={5478040} data-element_type="widget" data-widget_type="ova_logo.default">
                      <div className="elementor-widget-container">
                        <div className="brand_el">
                          <a href="#">
                            <span className="text-logo">CHIBIVERSE</span>
                            {/* <img src="http://demo.ovathemes.com/cryptlight/wp-content/uploads/2021/07/logo.svg"
                                alt="The Chibi Verse" class="logo_desktop"
                                style="width:132px ; height:auto">

                            <img src="http://demo.ovathemes.com/cryptlight/wp-content/uploads/2021/07/logo.svg"
                                alt="The Chibi Verse" class="logo_mobile"
                                style="width:132px ;  height:auto">

                            <img src="http://demo.ovathemes.com/cryptlight/wp-content/uploads/2021/07/logo.svg"
                                alt="The Chibi Verse" class="logo_sticky"
                                style="width:132px ; height:auto"> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-71be774 elementor-hidden-tablet elementor-hidden-phone" data-id="71be774" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-edb0b39 elementor-view-primary-menu elementor-widget elementor-widget-cryptlight_elementor_menu_nav" data-id="edb0b39" data-element_type="widget" data-widget_type="cryptlight_elementor_menu_nav.default">
                      <div className="elementor-widget-container">
                        <nav className="main-navigation">
                          <button className="menu-toggle">
                            <span>
                              Menu </span>
                          </button>
                          <div className="primary-navigation">
                            <ul id="menu-primary-menu" className="menu">
                              <li id="menu-item-61" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-61">
                                <a onClick={() => window.location.replace("/#about")} href="#about">About </a>
                              </li>
                              <li id="menu-item-62" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-62">
                                <a onClick={() => window.location.replace("/#why-ico")} href="#why-ico">Why ICo</a>
                              </li>
                              <li id="menu-item-63" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-63">
                                <a onClick={() => window.location.replace("/#sales")} href="#sales">Sales</a>
                              </li>
                              <li id="menu-item-64" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-64">
                                <a onClick={() => window.location.replace("/#roadmap")} href="#roadmap">Roadmap</a>
                              </li>
                              <li id="menu-item-64" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-64">
                                <a onClick={() => window.location.replace("/#faq")} href="#faq">Faq</a>
                              </li>
                              {/* <li id="menu-item-66" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66">
                                <a onClick={() => window.location.replace("/#team")} href="#team">Team</a>
                              </li>
                              <li id="menu-item-67" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-67">
                                <a onClick={() => window.location.replace("/#contract")} href="#contact">Contact</a>
                              </li> */}
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-ec7fa0e elementor-hidden-desktop" data-id="ec7fa0e" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-58c9b4b elementor-view-primary-menu elementor-widget elementor-widget-cryptlight_elementor_menu_canvas" data-id="58c9b4b" data-element_type="widget" data-widget_type="cryptlight_elementor_menu_canvas.default">
                      <div className="elementor-widget-container">
                        <nav className="menu-canvas">
                          <button className="menu-toggle">
                            <span />
                          </button>
                          <nav className="container-menu dir_left">
                            <div className="close-menu">
                              <i className="ovaicon-cancel" />
                            </div>
                            <div className="primary-navigation">
                              <ul id="menu-primary-menu-1" className="menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-61">
                                  <a onClick={() => window.location.replace("/#about")} href="#about">About</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-62">
                                  <a onClick={() => window.location.replace("/#why-ico")} href="#why-ico">Why ICo</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-63">
                                  <a onClick={() => window.location.replace("/#sales")} href="#sales">Sales</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-64">
                                  <a onClick={() => window.location.replace("/#roadmap")} href="#roadmap">Roadmap</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-64">
                                  <a onClick={() => window.location.replace("/#faq")} href="#faq">Faq</a>
                                </li>
                                {/* <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66">
                                  <a onClick={() => window.location.replace("/#team")} href="#team">Team</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-67">
                                  <a onClick={() => window.location.replace("/#contact")} href="#contact">Contact</a>
                                </li> */}
                              </ul>
                            </div>
                          </nav>
                          <div className="site-overlay" />
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-878e726 elementor-hidden-phone connect-wallet" data-id="878e726" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-28cae9e elementor-widget elementor-widget-cryptlight_elementor_button" data-id="28cae9e" data-element_type="widget" data-widget_type="cryptlight_elementor_button.default">
                      <div className="elementor-widget-container">
                        <div className="ova-button ">
                          <a href="#" className="url-button">Connect Wallet</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div id="just-for-height" style={{ height: '60px' }} />
          </div>
        </div>
        <div data-elementor-type="wp-page" data-elementor-id={3325} className="elementor elementor-3325" data-elementor-settings="[]">
          <div className="elementor-section-wrap">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-b52e3d8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b52e3d8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-background-overlay" />
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7a12e01" data-id="7a12e01" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-3ac583d elementor-widget elementor-widget-text-editor" data-id="3ac583d" data-element_type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        The World’s <span style={{ color: '#5c7dff' }}>1st ICO </span>Platform That Offers
                        Rewards </div>
                    </div>
                    <div className="elementor-element elementor-element-66ae253 elementor-widget elementor-widget-heading" data-id="66ae253" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">Welcome to The Chibi
                          Verse where you can not only Play to Earn but you Play to Fun. A chibi
                          styled verse to keep you engaged </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-70b0c5a elementor-widget elementor-widget-image" data-id="70b0c5a" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img width={1005} height={561} src="https://thechibiverse.com/wp-content/uploads/2021/08/ilus-bner.png" className="attachment-full size-full" alt="" loading="lazy" srcSet="https://thechibiverse.com/wp-content/uploads/2021/08/ilus-bner.png 1005w, https://thechibiverse.com/wp-content/uploads/2021/08/ilus-bner-300x167.png 300w, https://thechibiverse.com/wp-content/uploads/2021/08/ilus-bner-768x429.png 768w" sizes="(max-width: 1005px) 100vw, 1005px" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fda0cb1" data-id="fda0cb1" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-9c67a46 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9c67a46" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-94783c7" data-id="94783c7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-bd4ca7b elementor-widget elementor-widget-cryptlight_elementor_countdown" data-id="bd4ca7b" data-element_type="widget" data-widget_type="cryptlight_elementor_countdown.default">
                              <div className="elementor-widget-container">
                                <div className="ova-warp-countdown">
                                  <div className="ova-content-countdown">
                                    <h2 className="ova-countdown-title">Pre-sale is Live Now
                                    </h2>
                                    <div className="ova-countdown is-countdown" data-time={1638583440} data-format="DHMS" data-show-lable="yes" data-message="Countdown timeout" data-url data-expire="nothing" data-redirect data-labels="{&quot;label&quot;:[&quot;Year&quot;,&quot;Month&quot;,&quot;Week&quot;,&quot;Days&quot;,&quot;Hours&quot;,&quot;Minutes&quot;,&quot;Seconds&quot;],&quot;labels&quot;:[&quot;Years&quot;,&quot;Months&quot;,&quot;Weeks&quot;,&quot;Days&quot;,&quot;Hours&quot;,&quot;Minutes&quot;,&quot;Seconds&quot;]}" data-label-align>
                                      <div className="ova-countdown-item ova-countdown-day">
                                        <span className="countdown-day ova-number">24</span><span className="countdown-label">Days</span>
                                      </div>
                                      <div className="ova-countdown-item ova-countdown-hour">
                                        <span className="countdown-hour ova-number">10</span><span className="countdown-label">Hours</span>
                                      </div>
                                      <div className="ova-countdown-item ova-countdown-minute">
                                        <span className="countdown-minute ova-number">49</span><span className="countdown-label">Minutes</span>
                                      </div>
                                      <div className="ova-countdown-item ova-countdown-second">
                                        <span className="countdown-second ova-number">26</span><span className="countdown-label">Seconds</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-def6819 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="def6819" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                              <div className="elementor-widget-container">
                                <div className="ova-progress">
                                  <p className="ctyl-progress-title">Pre Sale</p>
                                  <div className="ova-percent-view">
                                    <div className="ova-percent" data-percent={60} style={{ width: '60%' }} />
                                    <span className="percentage" data-show-percent>60%</span>
                                    <div className="ova-notes">
                                      <div className="item-note elementor-repeater-item-a240db8">
                                        <span className="note-text">Pre Sale</span>
                                      </div>
                                      <div className="item-note elementor-repeater-item-4a6d4a6">
                                        <span className="note-text">Soft Cap</span>
                                      </div>
                                      <div className="item-note elementor-repeater-item-db6f146">
                                        <span className="note-text">Bonus</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-4baaf1e elementor-widget elementor-widget-cryptlight_elementor_button" data-id="4baaf1e" data-element_type="widget" data-widget_type="cryptlight_elementor_button.default">
                              <div className="elementor-widget-container">
                                <div className="ova-button">
                                  <a href="#" className="url-button">Purchase tokens</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-c3bb64f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c3bb64f" data-element_type="section" id="about" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
              <div className="elementor-background-overlay" />
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c99988d" data-id="c99988d" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-14dba08 elementor-widget elementor-widget-cryptlight_elementor_heading" data-id="14dba08" data-element_type="widget" data-widget_type="cryptlight_elementor_heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="ova-heading ova_before">
                          <span className="ova_before" />
                        </h2>
                        <p className="ova-heading-description">Play 2 Earn Game</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-102666e elementor-widget elementor-widget-cryptlight_elementor_ico-crypto" data-id="102666e" data-element_type="widget" data-widget_type="cryptlight_elementor_ico-crypto.default">
                      <div className="elementor-widget-container">
                        <div className="ova-ico-crypto">
                          <div className="item ">
                            <i className="fas fa-users" />
                            <div className="title">
                              Team battles </div>
                            <div className="desc">
                              5 v 5 Teams to protect your stash. Bet against teams and prevent
                              each other from stealing your tokens </div>
                          </div>
                          <div className="item ">
                            <i className="fas fa-globe" />
                            <div className="title">
                              Lend your NFT </div>
                            <div className="desc">
                              Allow other players to generate winnings by lending your player in
                              return you get a percentage of the winnings </div>
                          </div>
                          <div className="item ">
                            <i className="far fa-star" />
                            <div className="title">
                              In game assets </div>
                            <div className="desc">
                              Use a range of in game assets to enhance your player protect your
                              coins </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c5a6e79" data-id="c5a6e79" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-f1c0d1f elementor-widget elementor-widget-image" data-id="f1c0d1f" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img width={649} height={626} src={s1Img} className="attachment-full size-full" alt="" loading="lazy" srcSet={s1Img} sizes="(max-width: 649px) 100vw, 649px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-073c4e0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="073c4e0" data-element_type="section" id="why-ico" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-background-overlay" />
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3011c89" data-id="3011c89" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-5f79cc0 elementor-widget elementor-widget-cryptlight_elementor_heading" data-id="5f79cc0" data-element_type="widget" data-widget_type="cryptlight_elementor_heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="ova-heading ova_before">
                          <span className="ova_before" />
                          Why choose our token
                        </h2>
                      </div>
                    </div>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-094e9e7 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="094e9e7" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0844386" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-a385a90 elementor-widget elementor-widget-cryptlight_elementor_card animated ova-move-up" data-id="a385a90" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:100}" data-widget_type="cryptlight_elementor_card.default">
                              <div className="elementor-widget-container">
                                <div className="ova-card">
                                  <div className="align-icon">
                                    <div className="icon">
                                      <i className="fas fa-mobile-alt" />
                                    </div>
                                  </div>
                                  <div className="title">
                                    Rent Your Nft </div>
                                  <div className="desc">
                                    To engage a bigger market nft holders are able to earn a
                                    income from lending out their nft. The nft represents a
                                    player that will be used to participate in the games.
                                    Anyone who does not hold a nft is able to rent the nft
                                    for free. Only one catch the owner of the nft can set
                                    terms of how much of % share they would want of your
                                    winnings. </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-16a6749" data-id="16a6749" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-2c16f35 elementor-widget elementor-widget-cryptlight_elementor_card animated ova-move-up" data-id="2c16f35" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:100}" data-widget_type="cryptlight_elementor_card.default">
                              <div className="elementor-widget-container">
                                <div className="ova-card">
                                  <div className="align-icon">
                                    <div className="icon">
                                      <i className="fas fa-wallet" />
                                    </div>
                                  </div>
                                  <div className="title">
                                    Chibi Verse Game </div>
                                  <div className="desc">
                                    You can buy token without paying any transactions fee
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-590d4cb" data-id="590d4cb" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-a24f3ee elementor-widget elementor-widget-cryptlight_elementor_card animated ova-move-up" data-id="a24f3ee" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:100}" data-widget_type="cryptlight_elementor_card.default">
                              <div className="elementor-widget-container">
                                <div className="ova-card">
                                  <div className="align-icon">
                                    <div className="icon">
                                      <i className="fas fa-shield-alt" />
                                    </div>
                                  </div>
                                  <div className="title">
                                    Team V Team battle </div>
                                  <div className="desc">
                                    Players can bet x amount of tokens and create a server
                                    where two teams battle to protect their tokens. Game
                                    ends when timer runs out or all opposition tokens are
                                    captured </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-fb35b9c" data-id="fb35b9c" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-91d323e elementor-widget elementor-widget-cryptlight_elementor_card animated ova-move-up" data-id="91d323e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:100}" data-widget_type="cryptlight_elementor_card.default">
                              <div className="elementor-widget-container">
                                <div className="ova-card">
                                  <div className="align-icon">
                                    <div className="icon">
                                      <i className="fas fa-sliders-h " />
                                    </div>
                                  </div>
                                  <div className="title">
                                    Sercurity &amp; control over money </div>
                                  <div className="desc">
                                    We provide high levels of sercurity to all users </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-cb4c6a3 ova-tabs elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cb4c6a3" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
              <div className="elementor-background-overlay" />
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e580c02" data-id="e580c02" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-ff5fcac elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="ff5fcac" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">1 CNL = 0.0013 BTC
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ad0e538 elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-cryptlight_elementor_button" data-id="ad0e538" data-element_type="widget" data-widget_type="cryptlight_elementor_button.default">
                      <div className="elementor-widget-container">
                        <div className="ova-button">
                          <a href="#" className="url-button">Buy now</a>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-369a6c3 tabs-arrow elementor-tabs-view-horizontal elementor-widget elementor-widget-tabs" data-id="369a6c3" data-element_type="widget" data-widget_type="tabs.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-tabs">
                          <div className="elementor-tabs-wrapper" role="tablist">
                            <div id="elementor-tab-title-5721" className="elementor-tab-title elementor-tab-desktop-title elementor-active" aria-selected="true" data-tab={1} role="tab" tabIndex={0} aria-controls="elementor-tab-content-5721" aria-expanded="true">
                              Funding Allocation</div>
                            <div id="elementor-tab-title-5722" className="elementor-tab-title elementor-tab-desktop-title" aria-selected="false" data-tab={2} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-5722" aria-expanded="false">
                              Token Allocation</div>
                          </div>
                          <div className="elementor-tabs-content-wrapper" role="tablist" aria-orientation="vertical">
                            <div className="elementor-tab-title elementor-tab-mobile-title elementor-active" aria-selected="true" data-tab={1} role="tab" tabIndex={0} aria-controls="elementor-tab-content-5721" aria-expanded="true">
                              Funding Allocation</div>
                            <div id="elementor-tab-content-5721" className="elementor-tab-content elementor-clearfix elementor-active" data-tab={1} role="tabpanel" aria-labelledby="elementor-tab-title-5721" tabIndex={0} style={{ display: 'block' }}>
                              <p> </p>
                              <div data-elementor-type="section" data-elementor-id={1825} className="elementor elementor-1825" data-elementor-settings="[]">
                                <div className="elementor-section-wrap">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-3259d2c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3259d2c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-9b2d35d" data-id="9b2d35d" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="sr-only elementor-element elementor-element-6ace142 elementor-widget elementor-widget-cryptlight_elementor_chart" data-id="6ace142" data-element_type="widget" data-widget_type="cryptlight_elementor_chart.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-chart" data-chart-radius={70} data-chart="{&quot;label&quot;:[&quot;Contingency&quot;,&quot;Partner\/Investor&quot;,&quot;Legal & Regulation&quot;,&quot;Business Development&quot;,&quot;Operational&quot;,&quot;Product Develoment&quot;,&quot;Marketing&quot;],&quot;percent&quot;:[5,5,10,10,10,40,20],&quot;color&quot;:[&quot;#3D88FB&quot;,&quot;#5637C8&quot;,&quot;#00D89E&quot;,&quot;#ACDF35&quot;,&quot;#9116CD&quot;,&quot;#FC3352&quot;,&quot;#FF9B5C&quot;]}" data-id="funding_allocation">
                                                <div className="chart-content">
                                                  <canvas id="funding_allocation" width={371} height={371} style={{ display: 'block', boxSizing: 'border-box', height: '371px', width: '371px' }} />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="elementor-column elementor-col-60 elementor-top-column elementor-element elementor-element-e754c29" data-id="e754c29" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-71df083 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="71df083" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Contingency: 5%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={5} style={{ width: '5%' }}>
                                                  </div>
                                                  <span className="percentage" data-show-percent>5%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-abe95ac elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="abe95ac" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Partner/Investor: 5%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={5} style={{ width: '5%' }}>
                                                  </div>
                                                  <span className="percentage" data-show-percent>5%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-cf4f459 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="cf4f459" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Legal &amp; Regulation: 10%
                                                </p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={10} style={{ width: '10%' }}>
                                                  </div>
                                                  <span className="percentage" data-show-percent>10%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-8951cca elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="8951cca" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Business Development: 10%
                                                </p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={10} style={{ width: '10%' }}>
                                                  </div>
                                                  <span className="percentage" data-show-percent>10%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-7878ec9 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="7878ec9" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Operational: 10%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={10} style={{ width: '10%' }}>
                                                  </div>
                                                  <span className="percentage" data-show-percent>10%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-b3800ea elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="b3800ea" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Product Develoment: 40%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={40} style={{ width: '40%' }}>
                                                  </div>
                                                  <span className="percentage" data-show-percent>40%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-41270ac elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="41270ac" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Marketing: 20%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={20} style={{ width: '20%' }}>
                                                  </div>
                                                  <span className="percentage" data-show-percent>20%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                              <p />
                            </div>
                            <div className="elementor-tab-title elementor-tab-mobile-title" aria-selected="false" data-tab={2} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-5722" aria-expanded="false">
                              Token Allocation</div>
                            <div id="elementor-tab-content-5722" className="elementor-tab-content elementor-clearfix" data-tab={2} role="tabpanel" aria-labelledby="elementor-tab-title-5722" tabIndex={0} hidden="hidden">
                              <p> </p>
                              <div data-elementor-type="section" data-elementor-id={1862} className="elementor elementor-1862" data-elementor-settings="[]">
                                <div className="elementor-section-wrap">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-2e568d4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2e568d4" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-1e863c6" data-id="1e863c6" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-1fa74d7 elementor-widget elementor-widget-cryptlight_elementor_chart" data-id="1fa74d7" data-element_type="widget" data-widget_type="cryptlight_elementor_chart.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-chart" data-chart-radius={70} data-chart="{&quot;label&quot;:[&quot;Contingency&quot;,&quot;Partner\/Investor&quot;,&quot;Legal & Regulation&quot;,&quot;Business Development&quot;,&quot;Operational&quot;,&quot;Product Develoment&quot;,&quot;Marketing&quot;],&quot;percent&quot;:[70,30,10,50,50,60,20],&quot;color&quot;:[&quot;#3D88FB&quot;,&quot;#5637C8&quot;,&quot;#00D89E&quot;,&quot;#ACDF35&quot;,&quot;#9116CD&quot;,&quot;#FC3352&quot;,&quot;#FF9B5C&quot;]}" data-id="token_allocation">
                                                <div className="chart-content">
                                                  <canvas id="token_allocation" height={0} style={{ display: 'block', boxSizing: 'border-box', height: '0px', width: '0px' }} width={0} />
                                                </div>
                                              </div>
                                              {/* Js Chart */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="elementor-column elementor-col-60 elementor-top-column elementor-element elementor-element-bb630ae" data-id="bb630ae" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-7845d98 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="7845d98" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Contingency: 70%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={70} />
                                                  <span className="percentage" data-show-percent>70%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-2035ef9 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="2035ef9" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Partner/Investor: 30%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={30} />
                                                  <span className="percentage" data-show-percent>30%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-6f0e4bb elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="6f0e4bb" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Legal &amp; Regulation: 10%
                                                </p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={10} />
                                                  <span className="percentage" data-show-percent>10%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-608d097 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="608d097" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Business Development: 50%
                                                </p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={50} />
                                                  <span className="percentage" data-show-percent>50%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-77fff28 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="77fff28" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Operational: 50%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={50} />
                                                  <span className="percentage" data-show-percent>50%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-02ccf35 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="02ccf35" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Product Develoment: 60%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={60} />
                                                  <span className="percentage" data-show-percent>60%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-cc66f37 elementor-widget elementor-widget-cryptlight_elementor_progress" data-id="cc66f37" data-element_type="widget" data-widget_type="cryptlight_elementor_progress.default">
                                            <div className="elementor-widget-container">
                                              <div className="ova-progress">
                                                <p className="ctyl-progress-title">
                                                  Marketing: 20%</p>
                                                <div className="ova-percent-view">
                                                  <div className="ova-percent" data-percent={20} />
                                                  <span className="percentage" data-show-percent>20%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                              <p />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-639cd91 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="639cd91" data-element_type="section" id="sales" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-background-overlay" />
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c711cc3" data-id="c711cc3" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-a68daa0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a68daa0" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e6d9c50" data-id="e6d9c50" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-cd2939d elementor-widget elementor-widget-cryptlight_elementor_heading" data-id="cd2939d" data-element_type="widget" data-widget_type="cryptlight_elementor_heading.default">
                              <div className="elementor-widget-container">
                                <h2 className="ova-heading ova_before">
                                  <span className="ova_before" />
                                  ICO Cryptlight Token
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-54aaa3b elementor-widget elementor-widget-heading" data-id="54aaa3b" data-element_type="widget" data-widget_type="heading.default">
                              <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-default">ICO
                                  Tokens Details &amp; Sale Tokens.</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fcefcf7" data-id="fcefcf7" data-element_type="column">
                          <div className="elementor-widget-wrap">
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-e5f779f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e5f779f" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-83b8273" data-id="83b8273" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-0ac13aa elementor-widget elementor-widget-cryptlight_elementor_details animated ova-move-up" data-id="0ac13aa" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:100}" data-widget_type="cryptlight_elementor_details.default">
                              <div className="elementor-widget-container">
                                <div className="ova-details linear-gradient-active">
                                  <div className="title">
                                    Start </div>
                                  <div className="desc">
                                    Aug 8, 2021 (9:00AM GMT) </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-95dab9e" data-id="95dab9e" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-90d38c0 elementor-widget elementor-widget-cryptlight_elementor_details animated ova-move-up" data-id="90d38c0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="cryptlight_elementor_details.default">
                              <div className="elementor-widget-container">
                                <div className="ova-details ova-linear-gradient">
                                  <div className="title">
                                    End </div>
                                  <div className="desc">
                                    Feb 10, 2022 (9:00AM GMT) </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ef48b09" data-id="ef48b09" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-530a4cb elementor-widget elementor-widget-cryptlight_elementor_details animated ova-move-up" data-id="530a4cb" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="cryptlight_elementor_details.default">
                              <div className="elementor-widget-container">
                                <div className="ova-details ova-linear-gradient">
                                  <div className="title">
                                    Acceptable curencies </div>
                                  <div className="desc">
                                    ETH, BTC, LTC </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-37f2fa4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="37f2fa4" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-30d4d92" data-id="30d4d92" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-8d0adb2 elementor-widget elementor-widget-cryptlight_elementor_details animated ova-move-up" data-id="8d0adb2" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:400}" data-widget_type="cryptlight_elementor_details.default">
                              <div className="elementor-widget-container">
                                <div className="ova-details ova-linear-gradient">
                                  <div className="title">
                                    Number of Tokens for Sale </div>
                                  <div className="desc">
                                    1.000.000 Tokens </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d8bf61b" data-id="d8bf61b" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-02a9262 elementor-widget elementor-widget-cryptlight_elementor_details animated ova-move-up" data-id="02a9262" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="cryptlight_elementor_details.default">
                              <div className="elementor-widget-container">
                                <div className="ova-details ova-linear-gradient">
                                  <div className="title">
                                    Tokens exchange rate </div>
                                  <div className="desc">
                                    1 ETH = 650 ICC, 1 BTC = 1940 ICC </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b3fcf47" data-id="b3fcf47" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-d64674f elementor-widget elementor-widget-cryptlight_elementor_details animated ova-move-up" data-id="d64674f" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:600}" data-widget_type="cryptlight_elementor_details.default">
                              <div className="elementor-widget-container">
                                <div className="ova-details ova-linear-gradient">
                                  <div className="title">
                                    Minimal Transaction </div>
                                  <div className="desc">
                                    10 Tokens / Transaction </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-9294fe7 elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9294fe7" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-extended">
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-01b2000" data-id="01b2000" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-c79ddea elementor-widget-divider--view-line_icon elementor-widget-divider--element-align-left elementor-view-default elementor-widget elementor-widget-divider" data-id="c79ddea" data-element_type="widget" data-widget_type="divider.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator">
                                    <div className="elementor-icon elementor-divider__element">
                                      <i aria-hidden="true" className="fas fa-circle" />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-1589cd0" data-id="1589cd0" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-16b80c5 elementor-widget-divider--view-line_icon elementor-view-default elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider" data-id="16b80c5" data-element_type="widget" data-widget_type="divider.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator">
                                    <div className="elementor-icon elementor-divider__element">
                                      <i aria-hidden="true" className="fas fa-circle" />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-68cafed" data-id="68cafed" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-85d6adf elementor-widget-divider--view-line_icon elementor-view-default elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider" data-id="85d6adf" data-element_type="widget" data-widget_type="divider.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator">
                                    <div className="elementor-icon elementor-divider__element">
                                      <i aria-hidden="true" className="fas fa-circle" />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-2901cd8" data-id="2901cd8" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-82b9c05 elementor-widget-divider--view-line_icon elementor-view-default elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider" data-id="82b9c05" data-element_type="widget" data-widget_type="divider.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator">
                                    <div className="elementor-icon elementor-divider__element">
                                      <i aria-hidden="true" className="fas fa-circle" />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-9407747" data-id={9407747} data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-c8b8ddb elementor-widget-divider--view-line_icon elementor-widget-divider--element-align-right elementor-view-default elementor-widget elementor-widget-divider" data-id="c8b8ddb" data-element_type="widget" data-widget_type="divider.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator">
                                    <div className="elementor-icon elementor-divider__element">
                                      <i aria-hidden="true" className="fas fa-circle" />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-b954174 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b954174" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-464df07" data-id="464df07" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-00c4cbf elementor-widget elementor-widget-cryptlight_elementor_sale-token animated ova-move-up" data-id="00c4cbf" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:100}" data-widget_type="cryptlight_elementor_sale-token.default">
                              <div className="elementor-widget-container">
                                <div className="ova-sale-token">
                                  <div className="date">
                                    Aug 08 - Aug 31 </div>
                                  <div className="bonus">
                                    30% Bonus </div>
                                  <div className="price">
                                    $0.2009/token </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-2ec6bad" data-id="2ec6bad" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-8ebd58b elementor-widget elementor-widget-cryptlight_elementor_sale-token animated ova-move-up" data-id="8ebd58b" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="cryptlight_elementor_sale-token.default">
                              <div className="elementor-widget-container">
                                <div className="ova-sale-token">
                                  <div className="date">
                                    Sep 01 - Sep 15 </div>
                                  <div className="bonus">
                                    20% Bonus </div>
                                  <div className="price">
                                    $0.3009/token </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-c1fc46d" data-id="c1fc46d" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-39b4589 elementor-widget elementor-widget-cryptlight_elementor_sale-token animated ova-move-up" data-id="39b4589" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="cryptlight_elementor_sale-token.default">
                              <div className="elementor-widget-container">
                                <div className="ova-sale-token">
                                  <div className="date">
                                    Sep 16 - Sep 30 </div>
                                  <div className="bonus">
                                    15% Bonus </div>
                                  <div className="price">
                                    $0.4009/token </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-f73522d" data-id="f73522d" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-0b9ffaf elementor-widget elementor-widget-cryptlight_elementor_sale-token animated ova-move-up" data-id="0b9ffaf" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:400}" data-widget_type="cryptlight_elementor_sale-token.default">
                              <div className="elementor-widget-container">
                                <div className="ova-sale-token">
                                  <div className="date">
                                    Oct 01 - Oct 15 </div>
                                  <div className="bonus">
                                    10% Bonus </div>
                                  <div className="price">
                                    $0.5009/token </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-604bbf8" data-id="604bbf8" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-115a4cc elementor-widget elementor-widget-cryptlight_elementor_sale-token animated ova-move-up" data-id="115a4cc" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;ova-move-up&quot;,&quot;_animation_tablet&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="cryptlight_elementor_sale-token.default">
                              <div className="elementor-widget-container">
                                <div className="ova-sale-token">
                                  <div className="date">
                                    Oct 16 - Oct 31 </div>
                                  <div className="bonus">
                                    5% Bonus </div>
                                  <div className="price">
                                    $0.7009/token </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-6585242 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id={6585242} data-element_type="section" id="roadmap" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
              <div className="elementor-background-overlay" />
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9293efe" data-id="9293efe" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-f185a32 elementor-widget elementor-widget-cryptlight_elementor_heading" data-id="f185a32" data-element_type="widget" data-widget_type="cryptlight_elementor_heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="ova-heading ">
                          Road map
                        </h2>
                        <p className="ova-heading-description">Our Strategy &amp; Project Plan</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-e96534c elementor-widget elementor-widget-cryptlight_elementor_road_map" data-id="e96534c" data-element_type="widget" data-widget_type="cryptlight_elementor_road_map.default">
                      <div className="elementor-widget-container">
                        <div className="ova-road-map-v2">
                          <div className="road-map-wrapper">
                            <div className="timeline-row">
                              <div className="timeline-items">
                                <div className="item">
                                  <div className="timeline-item ">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">Jan 2021</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                      <h3 className="timeline-title">NFT Chibi Warrior</h3>
                                      <ul className="timeline-content">
                                        <li>Mint Chibi Warrior</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="timeline-item ">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">Mar 2021</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:200}">
                                      <h3 className="timeline-title">App Beta Test</h3>
                                      <ul className="timeline-content">
                                        <li>Launch Token
                                          Begin Beta testing Game</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="timeline-item ">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">May 2021</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:300}">
                                      <h3 className="timeline-title">Alpha Game Launch</h3>
                                      <ul className="timeline-content">
                                        <li>Finalize game mechanisms</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{/* timeline-row */}
                            <div className="timeline-row">
                              <div className="timeline-items">
                                <div className="item">
                                  <div className="timeline-item ">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">Jul 2021</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                      <h3 className="timeline-title">Mint Character</h3>
                                      <ul className="timeline-content">
                                        <li>Add more characters to the game</li>
                                        <li>Create more worlds to meet demand</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="timeline-item timeline-not-done">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">Sep 2021</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:200}">
                                      <h3 className="timeline-title">Token sale</h3>
                                      <ul className="timeline-content">
                                        <li>Concept Generation</li>
                                        <li>Team Assemble</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{/* timeline-row */}
                            <div className="timeline-row">
                              <div className="timeline-items">
                                <div className="item">
                                  <div className="timeline-item timeline-not-done">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">Nov 2021</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                      <h3 className="timeline-title">Alpha test</h3>
                                      <ul className="timeline-content">
                                        <li>Concept Generation</li>
                                        <li>Team Assemble</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="timeline-item timeline-not-done">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">Jan 2022</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:200}">
                                      <h3 className="timeline-title">Benefits</h3>
                                      <ul className="timeline-content">
                                        <li>Concept Generation</li>
                                        <li>Team Assemble</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="timeline-item timeline-not-done">
                                    <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                      <span className="date">Mar 2022</span>
                                    </div>
                                    <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:300}">
                                      <h3 className="timeline-title">Operational</h3>
                                      <ul className="timeline-content">
                                        <li>Concept Generation</li>
                                        <li>Team Assemble</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{/* timeline-row */}
                          </div>{/* road-map-wrapper */}
                        </div>{/* ova-road-map */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* read our doc section replaced */}
            <section className="elementor-section elementor-top-section elementor-element elementor-element-a147325 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a147325" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" id="faq">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e30d783" data-id="e30d783" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-b6cf57e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b6cf57e" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b5ceb1c" data-id="b5ceb1c" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-3d4e684 elementor-widget elementor-widget-cryptlight_elementor_heading" data-id="3d4e684" data-element_type="widget" data-widget_type="cryptlight_elementor_heading.default">
                              <div className="elementor-widget-container">
                                <h2 className="ova-heading ova_before">
                                  <span className="ova_before" />
                                  FAQS
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-f45a52d elementor-widget elementor-widget-heading" data-id="f45a52d" data-element_type="widget" data-widget_type="heading.default">
                              <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-default">
                                  Frenquently Questions</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-21b996b elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="21b996b" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-22e4a57" data-id="22e4a57" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-83f21b0 tabs-arrow elementor-tabs-view-horizontal elementor-widget elementor-widget-tabs" data-id="83f21b0" data-element_type="widget" data-widget_type="tabs.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-tabs">
                                  <div className="elementor-tabs-wrapper" role="tablist">
                                    <div id="elementor-tab-title-1381" className="elementor-tab-title elementor-tab-desktop-title" aria-selected="false" data-tab={1} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1381" aria-expanded="false">NFT</div>
                                    <div id="elementor-tab-title-1382" className="elementor-tab-title elementor-tab-desktop-title" aria-selected="false" data-tab={2} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1382" aria-expanded="false">Chibiverse game</div>
                                    <div id="elementor-tab-title-1383" className="elementor-tab-title elementor-tab-desktop-title" aria-selected="false" data-tab={3} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1383" aria-expanded="false">Chibiverse Token</div>
                                    <div id="elementor-tab-title-1384" className="elementor-tab-title elementor-tab-desktop-title" aria-selected="false" data-tab={4} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1384" aria-expanded="false">Client</div>
                                    <div id="elementor-tab-title-1385" className="elementor-tab-title elementor-tab-desktop-title elementor-active" aria-selected="true" data-tab={5} role="tab" tabIndex={0} aria-controls="elementor-tab-content-1385" aria-expanded="true">Legal</div>
                                  </div>
                                  <div className="elementor-tabs-content-wrapper" role="tablist" aria-orientation="vertical">
                                    <div className="elementor-tab-title elementor-tab-mobile-title" aria-selected="false" data-tab={1} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1381" aria-expanded="false">NFT</div>
                                    <div id="elementor-tab-content-1381" className="elementor-tab-content elementor-clearfix" data-tab={1} role="tabpanel" aria-labelledby="elementor-tab-title-1381" tabIndex={0} style={{ display: 'none' }} hidden="hidden">
                                      <p> </p>
                                      <div data-elementor-type="section" data-elementor-id={2535} className="elementor elementor-2535" data-elementor-settings="[]">
                                        <div className="elementor-section-wrap">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-86cdac6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="86cdac6" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-139a332" data-id="139a332" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-616b37e elementor-widget elementor-widget-toggle" data-id="616b37e" data-element_type="widget" data-widget_type="toggle.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-toggle" role="tablist">
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1021" className="elementor-tab-title" data-tab={1} role="tab" aria-controls="elementor-tab-content-1021" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">What
                                                              is
                                                              ICO?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1021" className="elementor-tab-content elementor-clearfix" data-tab={1} role="tabpanel" aria-labelledby="elementor-tab-title-1021">
                                                            <p> is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1022" className="elementor-tab-title" data-tab={2} role="tab" aria-controls="elementor-tab-content-1022" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">What
                                                              cryptocurrencies
                                                              can
                                                              I
                                                              use
                                                              to
                                                              purchase?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1022" className="elementor-tab-content elementor-clearfix" data-tab={2} role="tabpanel" aria-labelledby="elementor-tab-title-1022">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1023" className="elementor-tab-title" data-tab={3} role="tab" aria-controls="elementor-tab-content-1023" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              can
                                                              I
                                                              participate
                                                              in
                                                              the
                                                              ICO
                                                              Token
                                                              sale?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1023" className="elementor-tab-content elementor-clearfix" data-tab={3} role="tabpanel" aria-labelledby="elementor-tab-title-1023">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1024" className="elementor-tab-title" data-tab={4} role="tab" aria-controls="elementor-tab-content-1024" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              do I
                                                              benefit
                                                              from
                                                              the
                                                              ICO
                                                              Token?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1024" className="elementor-tab-content elementor-clearfix" data-tab={4} role="tabpanel" aria-labelledby="elementor-tab-title-1024">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <p />
                                    </div>
                                    <div className="elementor-tab-title elementor-tab-mobile-title" aria-selected="false" data-tab={2} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1382" aria-expanded="false">Chibiverse game</div>
                                    <div id="elementor-tab-content-1382" className="elementor-tab-content elementor-clearfix" data-tab={2} role="tabpanel" aria-labelledby="elementor-tab-title-1382" tabIndex={0} style={{ display: 'none' }} hidden="hidden">
                                      <p> </p>
                                      <div data-elementor-type="page" data-elementor-id={3626} className="elementor elementor-3626" data-elementor-settings="[]">
                                        <div className="elementor-section-wrap">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-c74e535 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c74e535" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a82da4f" data-id="a82da4f" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-9ba33be elementor-widget elementor-widget-toggle" data-id="9ba33be" data-element_type="widget" data-widget_type="toggle.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-toggle" role="tablist">
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1631" className="elementor-tab-title" data-tab={1} role="tab" aria-controls="elementor-tab-content-1631" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">Why
                                                              choose
                                                              ICO?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1631" className="elementor-tab-content elementor-clearfix" data-tab={1} role="tabpanel" aria-labelledby="elementor-tab-title-1631">
                                                            <p> is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1632" className="elementor-tab-title" data-tab={2} role="tab" aria-controls="elementor-tab-content-1632" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">What
                                                              cryptocurrencies
                                                              can
                                                              I
                                                              use
                                                              to
                                                              purchase?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1632" className="elementor-tab-content elementor-clearfix" data-tab={2} role="tabpanel" aria-labelledby="elementor-tab-title-1632">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1633" className="elementor-tab-title" data-tab={3} role="tab" aria-controls="elementor-tab-content-1633" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              can
                                                              I
                                                              participate
                                                              in
                                                              the
                                                              ICO
                                                              Token
                                                              sale?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1633" className="elementor-tab-content elementor-clearfix" data-tab={3} role="tabpanel" aria-labelledby="elementor-tab-title-1633">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1634" className="elementor-tab-title" data-tab={4} role="tab" aria-controls="elementor-tab-content-1634" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              do I
                                                              benefit
                                                              from
                                                              the
                                                              ICO
                                                              Token?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1634" className="elementor-tab-content elementor-clearfix" data-tab={4} role="tabpanel" aria-labelledby="elementor-tab-title-1634">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <p />
                                    </div>
                                    <div className="elementor-tab-title elementor-tab-mobile-title" aria-selected="false" data-tab={3} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1383" aria-expanded="false">Chibiverse Token</div>
                                    <div id="elementor-tab-content-1383" className="elementor-tab-content elementor-clearfix" data-tab={3} role="tabpanel" aria-labelledby="elementor-tab-title-1383" tabIndex={0} style={{ display: 'none' }} hidden="hidden">
                                      <p> </p>
                                      <div data-elementor-type="page" data-elementor-id={4125} className="elementor elementor-4125" data-elementor-settings="[]">
                                        <div className="elementor-section-wrap">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-9ca8c73 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9ca8c73" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e416d5a" data-id="e416d5a" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-8dea8ec elementor-widget elementor-widget-toggle" data-id="8dea8ec" data-element_type="widget" data-widget_type="toggle.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-toggle" role="tablist">
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1481" className="elementor-tab-title" data-tab={1} role="tab" aria-controls="elementor-tab-content-1481" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              can
                                                              I
                                                              participate
                                                              in
                                                              the
                                                              ICO
                                                              Token
                                                              sale?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1481" className="elementor-tab-content elementor-clearfix" data-tab={1} role="tabpanel" aria-labelledby="elementor-tab-title-1481">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1482" className="elementor-tab-title" data-tab={2} role="tab" aria-controls="elementor-tab-content-1482" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">Why
                                                              choose
                                                              ICO?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1482" className="elementor-tab-content elementor-clearfix" data-tab={2} role="tabpanel" aria-labelledby="elementor-tab-title-1482">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1483" className="elementor-tab-title" data-tab={3} role="tab" aria-controls="elementor-tab-content-1483" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              do I
                                                              benefit
                                                              from
                                                              the
                                                              ICO
                                                              Token?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1483" className="elementor-tab-content elementor-clearfix" data-tab={3} role="tabpanel" aria-labelledby="elementor-tab-title-1483">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1484" className="elementor-tab-title" data-tab={4} role="tab" aria-controls="elementor-tab-content-1484" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">What
                                                              cryptocurrencies
                                                              can
                                                              I
                                                              use
                                                              to
                                                              purchase?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1484" className="elementor-tab-content elementor-clearfix" data-tab={4} role="tabpanel" aria-labelledby="elementor-tab-title-1484">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <p />
                                    </div>
                                    <div className="elementor-tab-title elementor-tab-mobile-title" aria-selected="false" data-tab={4} role="tab" tabIndex={-1} aria-controls="elementor-tab-content-1384" aria-expanded="false">Client</div>
                                    <div id="elementor-tab-content-1384" className="elementor-tab-content elementor-clearfix" data-tab={4} role="tabpanel" aria-labelledby="elementor-tab-title-1384" tabIndex={0} style={{ display: 'none' }} hidden="hidden">
                                      <p> </p>
                                      <div data-elementor-type="page" data-elementor-id={4132} className="elementor elementor-4132" data-elementor-settings="[]">
                                        <div className="elementor-section-wrap">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-a4be4c8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a4be4c8" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-61a5dee" data-id="61a5dee" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-8499ba8 elementor-widget elementor-widget-toggle" data-id="8499ba8" data-element_type="widget" data-widget_type="toggle.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-toggle" role="tablist">
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1391" className="elementor-tab-title" data-tab={1} role="tab" aria-controls="elementor-tab-content-1391" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">Why
                                                              choose
                                                              ICO?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1391" className="elementor-tab-content elementor-clearfix" data-tab={1} role="tabpanel" aria-labelledby="elementor-tab-title-1391">
                                                            <p> is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1392" className="elementor-tab-title" data-tab={2} role="tab" aria-controls="elementor-tab-content-1392" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              do I
                                                              benefit
                                                              from
                                                              the
                                                              ICO
                                                              Token?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1392" className="elementor-tab-content elementor-clearfix" data-tab={2} role="tabpanel" aria-labelledby="elementor-tab-title-1392">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1393" className="elementor-tab-title" data-tab={3} role="tab" aria-controls="elementor-tab-content-1393" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              can
                                                              I
                                                              participate
                                                              in
                                                              the
                                                              ICO
                                                              Token
                                                              sale?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1393" className="elementor-tab-content elementor-clearfix" data-tab={3} role="tabpanel" aria-labelledby="elementor-tab-title-1393">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-1394" className="elementor-tab-title" data-tab={4} role="tab" aria-controls="elementor-tab-content-1394" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">What
                                                              cryptocurrencies
                                                              can
                                                              I
                                                              use
                                                              to
                                                              purchase?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-1394" className="elementor-tab-content elementor-clearfix" data-tab={4} role="tabpanel" aria-labelledby="elementor-tab-title-1394">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <p />
                                    </div>
                                    <div className="elementor-tab-title elementor-tab-mobile-title elementor-active" aria-selected="true" data-tab={5} role="tab" tabIndex={0} aria-controls="elementor-tab-content-1385" aria-expanded="true">Legal</div>
                                    <div id="elementor-tab-content-1385" className="elementor-tab-content elementor-clearfix elementor-active" data-tab={5} role="tabpanel" aria-labelledby="elementor-tab-title-1385" tabIndex={0} style={{ display: 'block' }}>
                                      <p> </p>
                                      <div data-elementor-type="page" data-elementor-id={4135} className="elementor elementor-4135" data-elementor-settings="[]">
                                        <div className="elementor-section-wrap">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-95712ed elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="95712ed" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0b7698a" data-id="0b7698a" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-d1b8a09 elementor-widget elementor-widget-toggle" data-id="d1b8a09" data-element_type="widget" data-widget_type="toggle.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-toggle" role="tablist">
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-2191" className="elementor-tab-title" data-tab={1} role="tab" aria-controls="elementor-tab-content-2191" aria-expanded="false" tabIndex={-1} aria-selected="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">What
                                                              cryptocurrencies
                                                              can
                                                              I
                                                              use
                                                              to
                                                              purchase?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-2191" className="elementor-tab-content elementor-clearfix" data-tab={1} role="tabpanel" aria-labelledby="elementor-tab-title-2191" hidden="hidden" style={{ display: 'none' }}>
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-2192" className="elementor-tab-title" data-tab={2} role="tab" aria-controls="elementor-tab-content-2192" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">What
                                                              is
                                                              ICO?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-2192" className="elementor-tab-content elementor-clearfix" data-tab={2} role="tabpanel" aria-labelledby="elementor-tab-title-2192">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-2193" className="elementor-tab-title" data-tab={3} role="tab" aria-controls="elementor-tab-content-2193" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              can
                                                              I
                                                              participate
                                                              in
                                                              the
                                                              ICO
                                                              Token
                                                              sale?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-2193" className="elementor-tab-content elementor-clearfix" data-tab={3} role="tabpanel" aria-labelledby="elementor-tab-title-2193">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-toggle-item">
                                                          <div id="elementor-tab-title-2194" className="elementor-tab-title" data-tab={4} role="tab" aria-controls="elementor-tab-content-2194" aria-expanded="false">
                                                            <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                              <span className="elementor-toggle-icon-closed"><i className="fas fa-chevron-down" /></span>
                                                              <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-chevron-up" /></span>
                                                            </span>
                                                            <a href className="elementor-toggle-title">How
                                                              do I
                                                              benefit
                                                              from
                                                              the
                                                              ICO
                                                              Token?</a>
                                                          </div>
                                                          <div id="elementor-tab-content-2194" className="elementor-tab-content elementor-clearfix" data-tab={4} role="tabpanel" aria-labelledby="elementor-tab-title-2194">
                                                            <p>ICO
                                                              is
                                                              the
                                                              cryptocurrency
                                                              industry’s
                                                              equivalent
                                                              to
                                                              an
                                                              initial
                                                              public
                                                              offering
                                                              and
                                                              is
                                                              launched
                                                              to
                                                              raise
                                                              funds.
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <p />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb48a80" data-id="bb48a80" data-element_type="column">
                          <div className="elementor-widget-wrap">
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            {/* section replaced  */}
          </div>
        </div>
        {/* footer replaced  */}

        <div className="wrap_footer">
          <div data-elementor-type="wp-post" data-elementor-id={169} className="elementor elementor-169" data-elementor-settings="[]">
            <div className="elementor-section-wrap">
              <section className="elementor-section elementor-top-section elementor-element elementor-element-a0e83a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a0e83a2" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e6a05b" data-id="1e6a05b" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">

                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-2fd878c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2fd878c" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-fd34c3c" data-id="fd34c3c" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-401ac2c elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="401ac2c" data-element_type="widget" data-widget_type="social-icons.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-social-icons-wrapper elementor-grid">
                                    <span className="elementor-grid-item">
                                      <a style={{ margin: '0 3px ' }} className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-9446487" onClick={e => window.location.replace(`${twitter}`)} target="_blank" rel="nofollow">
                                        <span className="elementor-screen-only">Twitter</span>
                                        <i className=" fab fa-twitter" /> </a>
                                    </span>
                                    <span className="elementor-grid-item">
                                      <a style={{ margin: '0 3px ' }} className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-47f4947" onClick={e => window.location.replace(telegram)} target="_blank" rel="nofollow">
                                        <span className="elementor-screen-only">Telegram</span>
                                        <i className="fab fa-telegram" /> </a>
                                    </span>
                                    <span className="elementor-grid-item">
                                      <a style={{ margin: '0 3px ' }} className="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-bace20f" onClick={e => window.location.replace(discord)} target="_blank" rel="nofollow">
                                        <span className="elementor-screen-only">Discord</span>
                                        <i className=" fab fa-discord" /> </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="elementor-element elementor-element-230fe87 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="230fe87" data-element_type="widget" data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-divider">
                            <span className="elementor-divider-separator">
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-e69fad1 elementor-widget elementor-widget-heading" data-id="e69fad1" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 style={{ color: "#292A47" }} className="elementor-heading-title elementor-size-default">Copyright © 2021.
                            All rights reserved by Your Company.</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
