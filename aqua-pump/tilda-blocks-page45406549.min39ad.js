window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isSafari=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){window.isSafari=!0}
window.isSafariVersion='';if(window.isSafari){var version=(navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);if(version!==null){window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
window.browserLang=(window.navigator.userLanguage||window.navigator.language).toUpperCase().slice(0,2);window.tildaBrowserLang=window.browserLang;function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t744_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;t_onFuncLoad('t_sldsInit',function(){t_sldsInit(recid)});setTimeout(function(){t_onFuncLoad('t_prod__init',function(){t_prod__init(recid)});t744__hoverZoom_init(recid)},500);var wrapperBlock=rec.querySelector('.t744');if(wrapperBlock){wrapperBlock.addEventListener('displayChanged',function(){t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)})})}
var event=document.createEvent('HTMLEvents');event.initEvent('twishlist_addbtn',!0,!1);document.body.dispatchEvent(event)}
function t744__hoverZoom_init(recid){if(window.isMobile)return;var rec=document.getElementById('rec'+recid);if(!rec)return;try{if(!rec.querySelector('[data-hover-zoom]')){return}
var hoverZoomScript='https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js';if(document.querySelector("script[src^='"+hoverZoomScript+"']")){t_onFuncLoad('t_hoverZoom_init',function(){t_hoverZoom_init(recid)})}else{var script=document.createElement('script');script.src=hoverZoomScript;script.onload=function(){t_onFuncLoad('t_hoverZoom_init',function(){t_hoverZoom_init(recid)})};script.onerror=function(error){console.log('Upload script error: '+error)};document.head.appendChild(script)}}catch(error){console.log('Zoom image init error: '+error.message)}}
function t744_updateSlider(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;t_onFuncLoad('t_slds_SliderWidth',function(){t_slds_SliderWidth(recid)});var slider=rec.querySelector('.t-slds__container');var paddingLeft=parseInt(slider.style.paddingLeft,10)||0;var paddingRight=parseInt(slider.style.paddingRight,10)||0;var sliderWidth=slider.clientWidth-(paddingLeft+paddingRight);var sliderWrapper=rec.querySelector('.t-slds__items-wrapper');var pos=parseFloat(sliderWrapper.getAttribute('data-slider-pos'),10);sliderWrapper.style.transform='translate3d(-'+sliderWidth*pos+'px, 0, 0)';t_onFuncLoad('t_slds_UpdateSliderHeight',function(){t_slds_UpdateSliderHeight(recid)});t_onFuncLoad('t_slds_UpdateSliderArrowsHeight',function(){t_slds_UpdateSliderArrowsHeight(recid)})}
function t480_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t480');if(!container)return;var isJquery=typeof jQuery!=='undefined';t480_setHeight(recId);if(window.isMobile){if(isJquery){$(window).on('orientationchange',t_throttle(function(){setTimeout(function(){t480_setHeight(recId)},200)}))}else{window.addEventListener('orientationchange',t_throttle(function(){setTimeout(function(){t480_setHeight(recId)},200)}))}}else{window.addEventListener('resize',t_throttle(function(){if(window.noAdaptive&&window.noAdaptive===!0&&window.isMobile)return;t480_setHeight(recId)}))}
if(isJquery){$(container).on('displayChanged',function(){t480_setHeight(recId)})}else{container.addEventListener('displayChanged',function(){t480_setHeight(recId)})}}
function t480_setHeight(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t480');if(!container)return;var sizer=rec.querySelector('.t480__sizer');var sizerStyle=getComputedStyle(sizer,null);var sizerPaddingTop=parseInt(sizerStyle.paddingTop);var sizerPaddingBottom=parseInt(sizerStyle.paddingBottom);var sizerPaddingLeft=parseInt(sizerStyle.paddingLeft);var sizerPaddingRight=parseInt(sizerStyle.paddingRight);var sizerHeight=sizer.clientHeight-(sizerPaddingTop+sizerPaddingBottom);var sizerWidth=sizer.clientWidth-(sizerPaddingLeft+sizerPaddingRight);var ratio=sizerWidth/sizerHeight;var imgWrapper=rec.querySelector('.t480__blockimg');var imgWidth=imgWrapper.clientWidth;var sizerAttrStyle=sizer.getAttribute('style');var windowHeight=window.innerHeight;if(window.isMobile&&sizerAttrStyle&&sizerAttrStyle.indexOf('vh')!==-1){sizerHeight=document.documentElement.clientHeight*parseFloat(windowHeight/sizerHeight);imgWrapper.style.height=(imgWidth/ratio)+'px'}else if(sizerHeight!=windowHeight){imgWrapper.style.height=(imgWidth/ratio)+'px'}}
function t688_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t688_unifyHeights(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t688');if(!container)return;var rows=rec.querySelectorAll('.t688__row');if(window.innerWidth>=960){for(var i=0;i<rows.length;i++){var row=rows[i];var maxHeight=0;var cols=row.querySelectorAll('.t-col:not(.t688__featured):not(.t688__inner-col)');var textWrappers=row.querySelectorAll('.t688__textwrapper');var featureds=row.querySelectorAll('.t688__featured');var colEl=row.querySelector('.t688__col');for(var j=0;j<cols.length;j++){var col=cols[j];var colText=col.querySelector('.t688__textwrapper_inner');var colTextHeight=colText.offsetHeight;if(colTextHeight>maxHeight)maxHeight=colTextHeight}
for(var j=0;j<textWrappers.length;j++){textWrappers[j].style.height=maxHeight+'px'}
if(colEl){for(var j=0;j<featureds.length;j++){var featured=featureds[j];var colStyle=getComputedStyle(colEl,null);var colPaddingTop=parseInt(colStyle.paddingTop)||0;var colPaddingBottom=parseInt(colStyle.paddingBottom)||0;var colHeight=col.clientHeight-(colPaddingTop+colPaddingBottom);featured.style.height=colHeight+'px'}}}}else{var textWrappers=rec.querySelectorAll('.t688__textwrapper');var featureds=rec.querySelectorAll('.t688__featured');var col=rec.querySelector('.t688__col');if(col){var colStyle=getComputedStyle(col,null);var colPaddingTop=parseInt(colStyle.paddingTop)||0;var colPaddingBottom=parseInt(colStyle.paddingBottom)||0;var colHeight=col.clientHeight-(colPaddingTop+colPaddingBottom);for(var i=0;i<featureds.length;i++){featureds[i].style.height=colHeight+'px'}}
for(var i=0;i<textWrappers.length;i++){textWrappers[i].style.height='auto'}}}
var t776_POPUP_SHOWED_EVENT_NAME='catalog:popupShowed';var t776_POPUP_CLOSED_EVENT_NAME='catalog:popupClosed';function t776__init(recid){setTimeout(function(){t_onFuncLoad('t_prod__init',function(){t_prod__init(recid)});t776_initPopup(recid);t776__hoverZoom_init(recid);t776__updateLazyLoad(recid);t776__alignButtons_init(recid);t_onFuncLoad('t_store_addProductQuantityEvents',function(){t776_initProductQuantity(recid)});var event=document.createEvent('HTMLEvents');event.initEvent('twishlist_addbtn',!0,!1);document.body.dispatchEvent(event)},500)}
function t776_initProductQuantity(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var productList=rec.querySelectorAll('.t776__col, .t776__product-full');Array.prototype.forEach.call(productList,function(product){t_store_addProductQuantityEvents(product)})}
function t776__showMore(recid){var rec=document.querySelector('#rec'+recid+' .t776');if(!rec)return;var cardsCount=parseInt(rec.getAttribute('data-show-count'),10);if(isNaN(cardsCount)||cardsCount<1)return;var showMoreButton=rec.querySelector('.t776__showmore');if(!showMoreButton)return;if(!showMoreButton.querySelector('td').textContent){showMoreButton.querySelector('td').textContent=t776__dict()}
var firstProductCard=rec.querySelector('.t776__col');if(!firstProductCard)return;var productCards=rec.querySelectorAll('.t776__col');var cardsLenght=productCards.length;if(!window.getComputedStyle)return;var originalDisplayProperty=window.getComputedStyle(firstProductCard).display;if(cardsLenght>cardsCount){showMoreButton.style.display='inline-block'}
Array.prototype.forEach.call(productCards,function(card){card.style.display='none'});t776__showSeparator(rec,cardsCount);for(var i=0;i<cardsCount;i++){if(productCards[i]){productCards[i].style.display=originalDisplayProperty}}
window.addEventListener('resize',function(){Array.prototype.forEach.call(productCards,function(card){card.style.display='none'});for(var i=0;i<cardsCount;i++){if(productCards[i]){productCards[i].style.display=originalDisplayProperty}}});var showedCardsCount=0;showMoreButton.addEventListener('click',function(){Array.prototype.forEach.call(productCards,function(product){if(product.style.display===originalDisplayProperty){showedCardsCount++}});cardsCount+=showedCardsCount;for(var i=0;i<cardsCount;i++){if(productCards[i]){productCards[i].style.display=originalDisplayProperty}}
if(cardsCount>=cardsLenght){showMoreButton.style.display='none'}
t776__showSeparator(rec,cardsCount);if(rec.querySelector('[data-buttons-v-align]')){t776__alignButtons(recid)}
if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}})}
function t776__showSeparator(rec,cardsCount){if(window.jQuery&&rec instanceof jQuery){rec=rec.get(0)}
var allSeparators=rec.querySelectorAll('.t776__separator_number');Array.prototype.forEach.call(allSeparators,function(separator){separator.classList.add('t776__separator_hide');if(separator.getAttribute('data-product-separator-number')<=cardsCount){separator.classList.remove('t776__separator_hide')}})}
function t776__dict(){var dictionary={EN:'Load more',RU:'Загрузить еще',FR:'Charger plus',DE:'Mehr laden',ES:'Carga más',PT:'Carregue mais',UK:'Завантажити ще',JA:'もっと読み込む',ZH:'裝載更多',};var language=window.browserLang;return dictionary[language]?dictionary[language]:dictionary.EN}
function t776__alignButtons_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;if(!rec.querySelector('[data-buttons-v-align]')){return}
try{t776__alignButtons(recid);if(document.querySelector('.t-records').getAttribute('data-tilda-mode')==='edit'){setInterval(function(){t776__alignButtons(recid)},200)}
window.addEventListener('resize',t_throttle(function(){if(typeof window.noAdaptive!=='undefined'&&window.noAdaptive===!0&&window.isMobile){return}
t776__alignButtons(recid)}));var wrapperBlock=rec.querySelector('.t776');if(wrapperBlock){wrapperBlock.addEventListener('displayChanged',function(){t776__alignButtons(recid)})}
if(window.isMobile){window.addEventListener('orientationchange',function(){t776__alignButtons(recid)})}}catch(error){console.log('buttons-v-align error: '+error.message)}}
function t776__alignButtons(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var maxHeight=0;var wrappers=rec.querySelectorAll('.t776__textwrapper');var container=rec.querySelector('.t776__parent');if(container){var productInRow=parseInt(container.getAttribute('data-blocks-per-row'),10)}
var mobileView=window.innerWidth<=480;var tableView=window.innerWidth<=960&&window.innerWidth>480;var mobileOneRow=window.innerWidth<=960&&rec.querySelector('.t776__container_mobile-flex');var mobileTwoItemsInRow=window.innerWidth<=480&&rec.querySelector('.t776 .mobile-two-columns');if(mobileView){productInRow=1}
if(tableView){productInRow=2}
if(mobileTwoItemsInRow){productInRow=2}
if(mobileOneRow){productInRow=999999}
var count=1;var wrappersInRow=[];Array.prototype.forEach.call(wrappers,function(wrapper){wrapper.style.height='auto';if(productInRow===1){wrapper.style.height='auto'}else{wrappersInRow.push(wrapper);if(wrapper.offsetHeight>maxHeight){maxHeight=wrapper.offsetHeight}
Array.prototype.forEach.call(wrappersInRow,function(wrapperInRow){wrapperInRow.style.height=maxHeight+'px'});if(count===productInRow){count=0;maxHeight=0;wrappersInRow=[]}
count++}})}
function t776__hoverZoom_init(recid){if(window.isMobile){return}
var rec=document.getElementById('rec'+recid);if(!rec)return;var parent=rec.querySelector('.t776__parent');try{if(parent&&parent.getAttribute('data-hover-zoom')!=='yes'){return}
var hoverScript='https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js';if(document.querySelector("script[src^='"+hoverScript+"']")){t_onFuncLoad('t_hoverZoom_init',function(){t_hoverZoom_init(recid)})}else{var script=document.createElement('script');script.type='text/javascript';script.src=hoverScript;script.onload=function(){setTimeout(function(){t_hoverZoom_init(recid)},500)};script.onerror=function(error){console.log('Upload script error: ',error)};document.head.appendChild(script)}}catch(error){console.log('Zoom image init error: '+error.message)}}
function t776__updateLazyLoad(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var scrollContainer=rec.querySelector(' .t776__container_mobile-flex');var currentMode=document.querySelector('.t-records').getAttribute('data-tilda-mode');if(scrollContainer&&currentMode!=='edit'&&currentMode!=='preview'){scrollContainer.addEventListener('scroll',t_throttle(function(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}))}}
function t776_initPopup(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var openerLink=rec.querySelectorAll('[href^="#prodpopup"]');var popup=rec.querySelector('.t-popup');Array.prototype.forEach.call(openerLink,function(link){var product=link.closest('.js-product');var productLid=product.getAttribute('data-product-lid');var productLinks=document.querySelectorAll('.r a[href$="#!/tproduct/'+recid+'-'+productLid+'"]');Array.prototype.forEach.call(productLinks,function(productLink){productLink.addEventListener('click',function(){if(rec.querySelector('[data-product-lid="'+productLid+'"]')){var linkToPopup=product.querySelector('[href^="#prodpopup"]');if(linkToPopup){var event=document.createEvent('HTMLEvents');event.initEvent('click',!0,!1);linkToPopup.dispatchEvent(event)}}})});link.addEventListener('click',clickOnceHandler,!1);function clickOnceHandler(event){event.preventDefault();var product=link.closest('.js-product');var productLid=product.getAttribute('data-product-lid');t_onFuncLoad('t_sldsInit',function(){t_sldsInit(recid+' #t776__product-'+productLid+'')});link.removeEventListener('click',clickOnceHandler,!1)}
link.addEventListener('click',showPopupHandler,!1);function showPopupHandler(event){event.preventDefault();if(event.target.classList.contains('t1002__addBtn')||event.target.parentNode.classList.contains('t1002__addBtn')){return}
t776_showPopup(recid);var product=link.closest('.js-product');var productLid=product.getAttribute('data-product-lid');var allProducts=popup.querySelectorAll('.js-product');Array.prototype.forEach.call(allProducts,function(product){product.style.display='none'});var productFull=popup.querySelector('.js-product[data-product-lid="'+productLid+'"]');if(productFull){productFull.style.display='block'}
var analitics=popup.getAttribute('data-track-popup');if(analitics&&productFull&&window.Tilda){var productName=productFull.querySelector('.js-product-name');if(productName){var virtualTitle=productName.textContent;if(!virtualTitle){virtualTitle='prod'+productLid}
Tilda.sendEventToStatistics(analitics,virtualTitle)}}
var currentUrl=window.location.href;if(currentUrl.indexOf('#!/tproduct/')===-1&&currentUrl.indexOf('%23!/tproduct/')===-1){if(typeof history.replaceState!=='undefined'){window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+productLid)}}
t776_updateSlider(recid+' #t776__product-'+productLid);if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}});if(document.querySelectorAll('#record'+recid).length===0){t776_checkUrl(recid)}
if(popup&&popup.hasAttribute('data-fixed-button')){t776_fixedPopupButton(recid)}}
function t776_checkUrl(recid){var currentUrl=window.location.href;var tprodIndex=(currentUrl.indexOf('#!/tproduct/')+1||currentUrl.indexOf('%23!/tproduct/')+1||currentUrl.indexOf('#%21%2Ftproduct%2F')+1||currentUrl.indexOf('#!%2Ftproduct%2F')+1||currentUrl.indexOf('%23%21%2Ftproduct%2F')+1)-1;if(tprodIndex!==-1){var currentUrl=currentUrl.substring(tprodIndex,currentUrl.length);var curProdLid=currentUrl.substring(currentUrl.indexOf('-')+1,currentUrl.length);if(curProdLid){var curProdLidMatch=curProdLid.match(/([0-9]+)/g);if(curProdLidMatch){curProdLid=curProdLidMatch[0]}}
if(currentUrl.indexOf(recid)===-1)return;var rec=document.getElementById('rec'+recid);if(!rec)return;if(currentUrl.indexOf(recid)!==0&&rec.querySelector('[data-product-lid="'+curProdLid+'"]')){var currentLink=rec.querySelector('[data-product-lid="'+curProdLid+'"] [href^="#prodpopup"]');var event=document.createEvent('HTMLEvents');event.initEvent('click',!0,!1);if(currentLink){currentLink.dispatchEvent(event)}}}}
function t776_updateSlider(recid){var rec=document.querySelector('#rec'+recid);if(!rec)return;t_onFuncLoad('t_slds_SliderWidth',function(){t_slds_SliderWidth(recid)});var slider=rec.querySelector('.t-slds__container');var paddingLeft=parseInt(slider.style.paddingLeft)||0;var paddingRight=parseInt(slider.style.paddingRight)||0;var sliderWrapper=rec.querySelector('.t-slds__items-wrapper');var sliderWidth=slider.clientWidth-(paddingLeft+paddingRight);var position=parseFloat(sliderWrapper.getAttribute('data-slider-pos'));sliderWrapper.style.transform='translate3d(-'+sliderWidth*position+'px, 0, 0)';t_onFuncLoad('t_slds_UpdateSliderHeight',function(){t_slds_UpdateSliderHeight(recid)});t_onFuncLoad('t_slds_UpdateSliderArrowsHeight',function(){t_slds_UpdateSliderArrowsHeight(recid)})}
function t776_showPopup(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var popup=rec.querySelector('.t-popup');popup.style.display='block';setTimeout(function(){popup.querySelector('.t-popup__container').classList.add('t-popup__container-animated');popup.classList.add('t-popup_show');t_triggerEvent(popup,t776_POPUP_SHOWED_EVENT_NAME)},50);setTimeout(function(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}},300);var body=document.body;if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');body.classList.add('t-body_popupshowed');var event=document.createEvent('HTMLEvents');event.initEvent('twishlist_addbtn',!0,!1);body.dispatchEvent(event);popup.addEventListener('mousedown',function(event){var windowWidth=window.innerWidth;var maxScrollBarWidth=17;var windowWithoutScrollBar=windowWidth-maxScrollBarWidth;if(event.clientX>windowWithoutScrollBar){return}
if(event.target===this){t776_closePopup(body,popup)}});var closeButtons=rec.querySelectorAll('.t-popup__close, .t776__close-text');Array.prototype.forEach.call(closeButtons,function(button){button.addEventListener('click',function(){t776_closePopup(body,popup)})});document.addEventListener('keydown',function(event){var isGalleryShowedOldLib=document.body.classList.contains('t-zoomer__show');if(isGalleryShowedOldLib)return;var isGalleryShowedNewLib=document.body.classList.contains('t-zoomer__active');if(isGalleryShowedNewLib)return;var isPopupShowed=document.body.classList.contains('t-body_popupshowed');if(!isPopupShowed)return;if(popup&&popup.classList.contains('t-popup_show')){if(event.keyCode===27){t776_closePopup(body,popup)}}});if(window.isSafari){setTimeout(function(){popup.scrollTop=1})}}
function t776_closePopup(body,popup){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');body.classList.remove('t-body_popupshowed');popup.classList.remove('t-popup_show');var event=document.createEvent('HTMLEvents');event.initEvent('twishlist_addbtn',!0,!1);body.dispatchEvent(event);var currentUrl=window.location.href;var indexToRemove=currentUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&indexToRemove<0){indexToRemove=currentUrl.indexOf('%23!/tproduct/')}
currentUrl=currentUrl.substring(0,indexToRemove);setTimeout(function(){popup.scrollTop=0;popup.style.display='none';if(typeof history.replaceState!=='undefined'){window.history.replaceState('','',currentUrl)}},300);t_triggerEvent(popup,t776_POPUP_CLOSED_EVENT_NAME)}
function t776_fixedPopupButton(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var MOBILE_MAX_WIDTH=560;var popup=rec.querySelector('.t-popup');var popupContainer=popup.querySelector('.t-popup__container');var btnWrappers=rec.querySelectorAll('.t776__btn-wrapper');Array.prototype.forEach.call(btnWrappers,function(el){el.classList.add('t776__btn-wrapper-fixed')});function addStyle(){popupContainer.style.paddingBottom='90px';popupContainer.style.cssText+=';transform:none !important;'}
function resetStyle(){popupContainer.style.paddingBottom='';popupContainer.style.transform=''}
function handleResize(){if(window.innerWidth>MOBILE_MAX_WIDTH){resetStyle();return}
addStyle()}
if(window.isMobile){window.addEventListener('orientationchange',handleResize)}
popup.addEventListener(t776_POPUP_SHOWED_EVENT_NAME,function(){setTimeout(function(){handleResize()})});popup.addEventListener(t776_POPUP_CLOSED_EVENT_NAME,function(){resetStyle()});window.addEventListener('resize',handleResize)}
function t347_setHeight(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var table=rec?rec.querySelector('.t347__table'):null;var tableWidth=table?table.offsetWidth:0;var tableHeight=tableWidth*0.5625;if(table)table.style.height=tableHeight+'px'}
function t347showvideo(recid){if(document.readyState!=='loading'){t347_createVideo(recid)}else{document.addEventListener('DOMContentLoaded',function(){t347_createVideo(recid)})}}
function t347_createVideo(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var videoContainer=rec.querySelector('.t347__video-container');var videoCarrier=rec.querySelector('.t347__video-carier');if(videoContainer.querySelector('.t347__video'))return;if(videoContainer)videoContainer.classList.remove('t347__hidden');if(!videoContainer.classList.contains('t347__html5video')&&!videoContainer.classList.contains('t347__vimeovideo')){var youTubeURL=videoContainer?videoContainer.getAttribute('data-content-popup-video-url-youtube'):'';var videoURL=youTubeURL?'https://www.youtube.com/embed/'+youTubeURL:'';videoCarrier.insertAdjacentHTML('beforeend','<iframe id="youtubeiframe'+recid+'" class="t347__iframe t347__video" width="100%" height="100%" src="'+videoURL+(videoURL.indexOf('?')!==-1?'&':'?')+'autoplay=1&rel=0" frameborder="0" allowfullscreen allow="autoplay"></iframe>')}
var videoWrapper=rec.querySelector('.t347__table');var computedHeight=window.getComputedStyle(videoWrapper).height;if(videoContainer.classList.contains('t347__html5video')){var videoSource=videoContainer.getAttribute('data-videomp4-url');if(!videoSource)return;videoCarrier.insertAdjacentHTML('beforeend','<video width="100%" autoplay controls class="t347__video">'+'<source src="'+videoSource+'" type="video/mp4">'+'Your browser does not support the video tag'+'</video>');var HTMLVideoHeight=videoCarrier.getAttribute('data-height');videoCarrier.height=HTMLVideoHeight?parseInt(HTMLVideoHeight,10):parseInt(computedHeight,10);var createdVideo=videoContainer.querySelector('.t347__video');createdVideo.focus()}
if(videoContainer.classList.contains('t347__vimeovideo')){var videoSource=videoContainer.getAttribute('data-vimeo-url');var vimeoSourceHash=videoContainer.getAttribute('data-vimeo-hash');if(!videoSource)return;var vimeoCurrentSourse=vimeoSourceHash?videoSource+'?h='+vimeoSourceHash+'&autoplay=1':videoSource+'?autoplay=1';videoCarrier.insertAdjacentHTML('beforeend','<iframe '+'src="https://player.vimeo.com/video/'+vimeoCurrentSourse.trim()+'" '+'frameborder="0" '+'allow="autoplay; fullscreen; picture-in-picture" '+'allowfullscreen '+'class="t347__video" '+'style="width: 100%; height: 100%;"> '+'</iframe>');var vimeoVideoHeight=videoCarrier.getAttribute('data-height');videoCarrier.style.height=vimeoVideoHeight?vimeoVideoHeight:computedHeight;var createdVideo=videoContainer.querySelector('.t347__video');createdVideo.focus()}}
function t1032_init(recId){var rec=document.querySelector('#rec'+recId);if(!rec)return;t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)});var orderLinks=rec.querySelectorAll('a[href^="#order"]');if(orderLinks.length!==0){Array.prototype.forEach.call(orderLinks,function(orderLink){orderLink.addEventListener('click',function(){var linkElement=this;var payBoxElement=document.querySelector('.js-payment-systembox');t1032_setCoordinateToPaymentBox(linkElement,payBoxElement);payBoxElement.style.marginTop='0';payBoxElement.style.marginLeft='0';window.addEventListener('resize',function(){if(getComputedStyle(payBoxElement,null).display==='block'&&linkElement){t1032_setCoordinateToPaymentBox(linkElement,payBoxElement)}})})})}}
function t1032_setCoordinateToPaymentBox(linkElement,payBoxElement){var oldTopCoord=0;var newTopCoord=0;var linkTopOffset=linkElement.getBoundingClientRect().top+window.pageYOffset;var linkLeftOffset=linkElement.getBoundingClientRect().left+window.pageXOffset;var offsetParent=linkElement.closest('.t1032__col');var offsetParentDimensions=t1032_getElementDimension(offsetParent);var payBoxDimensions=t1032_getElementDimension(payBoxElement);var paddingParent=offsetParentDimensions.paddingLeft+offsetParentDimensions.paddingRight;var top=linkTopOffset+offsetParentDimensions.height-payBoxDimensions.height;var left=linkLeftOffset+(offsetParentDimensions.width-paddingParent)/2-payBoxDimensions.width/2;oldTopCoord=payBoxElement.style.top;payBoxElement.style.top=top+'px';payBoxElement.style.left=left+'px';newTopCoord=payBoxElement.style.top;var difference=21;if(parseInt(oldTopCoord,10)-parseInt(newTopCoord,10)===difference){payBoxElement.style.top=top+difference+'px'}
if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector}
if(!Element.prototype.closest){Element.prototype.closest=function(s){var el=this;while(el&&el.nodeType===1){if(Element.prototype.matches.call(el,s)){return el}
el=el.parentElement||el.parentNode}
return null}}}
function t1032_unifyHeights(recId){var rec=document.querySelector('#rec'+recId);if(!rec)return;var container=rec.querySelector(' .t1032 .t-container');if(!container)return;var allRows=container.querySelectorAll('.t1032__row');for(var i=0;i<allRows.length;i++){var allTitles=allRows[i].querySelectorAll('.t-card__title');var allDescriptions=allRows[i].querySelectorAll('.t-card__descr');var allWrappers=allRows[i].querySelectorAll('.t1032__wrapper');var highestTitle=0;var highestDescription=0;var highestWrapper=0;Array.prototype.forEach.call(allTitles,function(title){title.style.height='auto';var titleDimension=t1032_getElementDimension(title);if(titleDimension.height>highestTitle){highestTitle=titleDimension.height}});if(window.innerWidth>=960&&t1032_isVisible(container)){Array.prototype.forEach.call(allTitles,function(title){title.style.height=highestTitle+'px'})}else{Array.prototype.forEach.call(allTitles,function(title){title.style.height='auto'})}
Array.prototype.forEach.call(allDescriptions,function(description){description.style.height='auto';var descriptionDimension=t1032_getElementDimension(description);if(descriptionDimension.height>highestDescription){highestDescription=descriptionDimension.height}});if(window.innerWidth>=960&&t1032_isVisible(container)){Array.prototype.forEach.call(allDescriptions,function(description){description.style.height=highestDescription+'px'})}else{Array.prototype.forEach.call(allDescriptions,function(description){description.style.height='auto'})}
Array.prototype.forEach.call(allWrappers,function(wrapper){wrapper.style.height='auto';var wrapperDimension=t1032_getElementDimension(wrapper);if(wrapperDimension.height>highestWrapper){highestWrapper=wrapperDimension.height}});if(window.innerWidth>=960&&t1032_isVisible(container)){Array.prototype.forEach.call(allWrappers,function(wrapper){wrapper.style.height=highestWrapper+'px'})}else{Array.prototype.forEach.call(allWrappers,function(wrapper){wrapper.style.height='auto'})}}}
function t1032_getElementDimension(element){var zeroes={height:0,width:0,paddingLeft:0,paddingRight:0,}
if(!element)return zeroes;var elStyle=getComputedStyle(element);if(!elStyle)return zeroes;return{height:parseFloat(elStyle.height.replace('px',''),10),width:parseFloat(elStyle.width.replace('px',''),10),paddingLeft:parseFloat(elStyle.paddingLeft.replace('px',''),10),paddingRight:parseFloat(elStyle.paddingRight.replace('px',''),10),}}
function t1032_isVisible(element){return!!(element.offsetWidth||element.offsetHeight||element.getClientRects().length)}
window.requestAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}})();function t270_scroll(hash,offset){if(!hash)return;t270_checkLoad(hash,offset);if(hash.indexOf('#!/tproduct/')!==-1||hash.indexOf('#!/tab/')!==-1){return!0}
var isHistoryChangeAllowed=window.location.hash!==hash;var wrapperBlock=document.querySelector('.t270');var dontChangeHistory=wrapperBlock?Boolean(wrapperBlock.getAttribute('data-history-disabled')):!1;t270_scrollToEl(hash,offset);if(!dontChangeHistory&&isHistoryChangeAllowed){if(history.pushState){history.pushState(null,null,hash)}else{window.location.hash=hash}
isHistoryChangeAllowed=!1}
return!0}
function t270_checkLoad(hash,offset){if(window.t270_loadChecked)return;var sliderWrappers=document.body.querySelectorAll('.t-slds__items-wrapper');if(!sliderWrappers.length)return;var lastWrapper=sliderWrappers[sliderWrappers.length-1];var sliderImgs=lastWrapper?lastWrapper.querySelectorAll('.t-slds__bgimg'):[];var lastImg=sliderImgs[sliderImgs.length-1];var imageUrl=lastImg?window.getComputedStyle(lastImg).backgroundImage:'';imageUrl=imageUrl.substring(5,imageUrl.length-2);var preloaderImg=document.createElement('img');preloaderImg.src=imageUrl?imageUrl:'';preloaderImg.addEventListener('load',function(){t270_scroll(hash,offset);window.t270_loadChecked=!0})}
function t270_scrollToEl(hash,offset){if(document.body.getAttribute('data-scroll'))return;var scrollTargetY=t270_getTarget(hash,offset);if(isNaN(scrollTargetY))return;var body=document.body;var canSmoothScroll=window.CSS&&window.CSS.supports('scroll-behavior','smooth');if(window.isMobile&&canSmoothScroll&&'scrollBehavior' in document.documentElement.style){body.setAttribute('data-scroll','true');window.scrollTo({left:0,top:scrollTargetY,behavior:'smooth'});setTimeout(function(){body.removeAttribute('data-scroll')},500)}else{var html=document.querySelector('html');var documentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);var scrollY=window.scrollY||document.documentElement.scrollTop;var speed=2000;var time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8));var currentTime=0;function t270_easeInQuad(pos){return Math.pow(pos,2)}
function t270_animationScroll(){currentTime+=1/60;var newDocumentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);if(documentHeight<newDocumentHeight){documentHeight=newDocumentHeight;scrollTargetY=t270_getTarget(hash,offset);scrollY=window.scrollY||document.documentElement.scrollTop;time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8))}
var difference=currentTime/time;var animation=t270_easeInQuad(difference);if(difference<1){requestAnimationFrame(t270_animationScroll);window.scrollTo(0,scrollY+((scrollTargetY-scrollY)*animation))}else{body.removeAttribute('data-scroll');body.removeAttribute('data-scrollable');window.scrollTo(0,scrollTargetY)}}
body.setAttribute('data-scroll','true');body.setAttribute('data-scrollable','true');t270_animationScroll()}}
function t270_getTarget(hash,offset){var target;try{if(hash.substring(0,1)==='#'){target=document.getElementById(hash.substring(1))}else{target=document.querySelector(hash)}}catch(event){console.log('Exception t270: '+event.message);return}
if(!target){target=document.querySelector('a[name="'+hash.substr(1)+'"]');if(!target)return}
target=parseInt((target.getBoundingClientRect().top+window.pageYOffset)-offset,10);target=Math.max(target,0);return target}
function t706_onSuccessCallback(){var products=document.querySelector('.t706__cartwin-products');var cartBottom=document.querySelector('.t706__cartwin-bottom');var cartForm=document.querySelector('.t706 .t-form__inputsbox');if(products)t706_slideUp(products,10);if(cartBottom)t706_slideUp(cartBottom,10);if(cartForm)t706_slideUp(cartForm,700);try{tcart__unlockScroll()}catch(error){}}
function t706_slideUp(target,duration){if(!target)return;if(!duration&&duration!==0)duration=500;target.style.transitionProperty='height, margin, padding';target.style.transitionDuration=duration+'ms';target.style.boxSizing='border-box';target.style.height=target.offsetHeight+'px';target.style.overflow='hidden';target.style.height='0';target.style.paddingTop='0';target.style.paddingBottom='0';target.style.marginTop='0';target.style.marginBottom='0';setTimeout(function(){target.style.display='none';target.style.height='';target.style.paddingTop='';target.style.paddingBottom='';target.style.marginTop='';target.style.marginBottom='';target.style.overflow='';target.style.transitionDuration='';target.style.transitionProperty=''},duration)}