
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"35",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.country"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"consumer.currencyType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.marketingClientDataLayer\u0026\u0026window.marketingClientDataLayer.filter(function(a){return a.hasOwnProperty(\"application\")}).slice(-1)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"id\")\u0026\u0026b.id\u0026\u0026a.push(b.id)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=0;c\u0026\u0026c.forEach(function(b){b.hasOwnProperty(\"currentPrice\")\u0026\u0026b.currentPrice\u0026\u0026(a=Number(b.currentPrice)+a)});return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.subtotal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"sku\")\u0026\u0026b.sku\u0026\u0026a.push(b.sku)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"brand\")\u0026\u0026b.brand\u0026\u0026a.push(b.brand)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"genders\")\u0026\u0026b.genders\u0026\u0026a.push(b.genders)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"color\")\u0026\u0026b.color\u0026\u0026a.push(b.color)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"category\")\u0026\u0026b.category\u0026\u0026a.push(b.category)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"name\")\u0026\u0026b.name\u0026\u0026a.push(b.name)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"subCategory\")\u0026\u0026b.subCategory\u0026\u0026a.push(b.subCategory)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"quantity\")\u0026\u0026b.quantity\u0026\u0026a.push(b.quantity)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"isOnSale\")\u0026\u0026b.isOnSale\u0026\u0026a.push(b.isOnSale)});return 0\u003Ca.length?a.join(\"|\"):!1})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","au","value","UA-167630499-4"],["map","key","ar","value","UA-167630499-4"],["map","key","br","value","UA-167630499-4"],["map","key","cl","value","UA-167630499-4"],["map","key","in","value","UA-167630499-4"],["map","key","id","value","UA-167630499-4"],["map","key","jp","value","UA-167630499-4"],["map","key","kr","value","UA-167630499-4"],["map","key","my","value","UA-167630499-4"],["map","key","mx","value","UA-167630499-4"],["map","key","nz","value","UA-167630499-4"],["map","key","ph","value","UA-167630499-4"],["map","key","pr","value","UA-167630499-4"],["map","key","sg","value","UA-167630499-4"],["map","key","th","value","UA-167630499-4"],["map","key","uy","value","UA-167630499-4"],["map","key","vn","value","UA-167630499-4"],["map","key","ae","value","UA-167630499-3"],["map","key","at","value","UA-167630499-3"],["map","key","be","value","UA-167630499-3"],["map","key","bg","value","UA-167630499-3"],["map","key","ch","value","UA-167630499-3"],["map","key","cz","value","UA-167630499-3"],["map","key","de","value","UA-167630499-3"],["map","key","dk","value","UA-167630499-3"],["map","key","eg","value","UA-167630499-3"],["map","key","es","value","UA-167630499-3"],["map","key","fi","value","UA-167630499-3"],["map","key","fr","value","UA-167630499-3"],["map","key","gb","value","UA-167630499-3"],["map","key","gr","value","UA-167630499-3"],["map","key","hr","value","UA-167630499-3"],["map","key","hu","value","UA-167630499-3"],["map","key","ie","value","UA-167630499-3"],["map","key","il","value","UA-167630499-3"],["map","key","it","value","UA-167630499-3"],["map","key","lu","value","UA-167630499-3"],["map","key","ma","value","UA-167630499-3"],["map","key","nl","value","UA-167630499-3"],["map","key","no","value","UA-167630499-3"],["map","key","pl","value","UA-167630499-3"],["map","key","pt","value","UA-167630499-3"],["map","key","ro","value","UA-167630499-3"],["map","key","ru","value","UA-167630499-3"],["map","key","sa","value","UA-167630499-3"],["map","key","se","value","UA-167630499-3"],["map","key","sk","value","UA-167630499-3"],["map","key","sl","value","UA-167630499-3"],["map","key","tr","value","UA-167630499-3"],["map","key","za","value","UA-167630499-3"],["map","key","cn","value","UA-167630499-5"],["map","key","hk","value","UA-167630499-5"],["map","key","tw","value","UA-167630499-5"],["map","key","ca","value","UA-167630499-2"],["map","key","us","value","UA-167630499-2"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",8]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["macro",10]],["map","index","4","dimension",["macro",11]],["map","index","6","dimension",["macro",12]],["map","index","10","dimension",["macro",13]],["map","index","11","dimension",["macro",14]],["map","index","12","dimension",["macro",15]],["map","index","14","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.shipping"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","au","value","UA-171421696-1"],["map","key","ar","value","UA-171421696-1"],["map","key","br","value","UA-171421696-1"],["map","key","cl","value","UA-171421696-1"],["map","key","in","value","UA-171421696-1"],["map","key","id","value","UA-171421696-1"],["map","key","jp","value","UA-171421696-1"],["map","key","kr","value","UA-171421696-1"],["map","key","my","value","UA-171421696-1"],["map","key","mx","value","UA-171421696-1"],["map","key","nz","value","UA-171421696-1"],["map","key","ph","value","UA-171421696-1"],["map","key","pr","value","UA-171421696-1"],["map","key","sg","value","UA-171421696-1"],["map","key","th","value","UA-171421696-1"],["map","key","uy","value","UA-171421696-1"],["map","key","vn","value","UA-171421696-1"],["map","key","ae","value","UA-171421696-1"],["map","key","at","value","UA-171421696-1"],["map","key","be","value","UA-171421696-1"],["map","key","bg","value","UA-171421696-1"],["map","key","ch","value","UA-171421696-1"],["map","key","cz","value","UA-171421696-1"],["map","key","de","value","UA-171421696-1"],["map","key","dk","value","UA-171421696-1"],["map","key","eg","value","UA-171421696-1"],["map","key","es","value","UA-171421696-1"],["map","key","fi","value","UA-171421696-1"],["map","key","fr","value","UA-171421696-1"],["map","key","gb","value","UA-171421696-1"],["map","key","gr","value","UA-171421696-1"],["map","key","hr","value","UA-171421696-1"],["map","key","hu","value","UA-171421696-1"],["map","key","ie","value","UA-171421696-1"],["map","key","il","value","UA-171421696-1"],["map","key","it","value","UA-171421696-1"],["map","key","lu","value","UA-171421696-1"],["map","key","ma","value","UA-171421696-1"],["map","key","nl","value","UA-171421696-1"],["map","key","no","value","UA-171421696-1"],["map","key","pl","value","UA-171421696-1"],["map","key","pt","value","UA-171421696-1"],["map","key","ro","value","UA-171421696-1"],["map","key","ru","value","UA-171421696-1"],["map","key","sa","value","UA-171421696-1"],["map","key","se","value","UA-171421696-1"],["map","key","sk","value","UA-171421696-1"],["map","key","sl","value","UA-171421696-1"],["map","key","tr","value","UA-171421696-1"],["map","key","za","value","UA-171421696-1"],["map","key","cn","value","UA-171421696-1"],["map","key","hk","value","UA-171421696-1"],["map","key","tw","value","UA-171421696-1"],["map","key","ca","value","UA-171421696-1"],["map","key","mx","value","UA-171421696-1"],["map","key","us","value","UA-171421696-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",8]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["macro",10]],["map","index","4","dimension",["macro",11]],["map","index","6","dimension",["macro",12]],["map","index","10","dimension",["macro",13]],["map","index","11","dimension",["macro",14]],["map","index","12","dimension",["macro",15]],["map","index","14","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.device"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.view"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"currentPrice\")\u0026\u0026b.currentPrice\u0026\u0026a.push(b.currentPrice)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=window.dataLayer\u0026\u0026window.dataLayer[0].productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"currentPriceTotal\")\u0026\u0026b.currentPriceTotal\u0026\u0026a.push(b.currentPriceTotal)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"fullPrice\")\u0026\u0026b.fullPrice\u0026\u0026a.push(b.fullPrice)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"isNikeByYou\")\u0026\u0026b.isNikeByYou\u0026\u0026a.push(b.isNikeByYou)});return 0\u003Ca.length?a.join(\"|\"):!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.orderId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.total"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],".order.promoCodeList;a=Object.keys(a);return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","gb","value","16327"],["map","key","fr","value","16328"],["map","key","lu","value","16328"],["map","key","de","value","16329"],["map","key","au","value","16330"],["map","key","ca","value","16331"],["map","key","nl","value","16332"],["map","key","be","value","16333"],["map","key","pl","value","16334"],["map","key","re","value","16335"],["map","key","es","value","16336"],["map","key","it","value","16336"],["map","key","dk","value","16338"],["map","key","se","value","16339"],["map","key","at","value","16340"],["map","key","gr","value","16341"],["map","key","hu","value","16341"],["map","key","cz","value","16341"],["map","key","si","value","16341"],["map","key","sk","value","16341"],["map","key","hr","value","16341"],["map","key","ro","value","16341"],["map","key","bg","value","16341"],["map","key","fi","value","16342"],["map","key","ie","value","16343"],["map","key","mx","value","16344"],["map","key","no","value","16345"],["map","key","pt","value","16346"],["map","key","ch","value","16347"],["map","key","tr","value","16348"],["map","key","za","value","16349"],["map","key","cl","value","16349"],["map","key","ma","value","16349"],["map","key","eg","value","16349"],["map","key","pr","value","16349"],["map","key","nz","value","16349"],["map","key","sa","value","16349"],["map","key","ae","value","16349"],["map","key","il","value","16349"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",22],
      "vtp_map":["list",["map","key","onLandingPageViewed","value","homepage"],["map","key","onProductListViewed","value","impressions"],["map","key","onProductViewed","value","details"],["map","key","onProductAdded","value","addToCart"],["map","key","onCartViewed","value","cart"],["map","key","onCheckoutViewed","value","checkout"],["map","key","onOrderCompleted","value","purchase"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C",["escape",["macro",34],8,16],".length?\"Y\":\"N\"})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__cvt_31367757_43",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_disablePushState":true,
      "vtp_pixelId":"351341038378023",
      "vtp_objectPropertyList":["list",["map","name","currency","value",["macro",2]],["map","name","content_ids","value",["macro",4]],["map","name","content_type","value","product"],["map","name","value","value",["macro",5]],["map","name","source","value","marketingClient"]],
      "vtp_endPoint":"https:\/\/dhjcidlp39.execute-api.us-east-2.amazonaws.com\/default\/GTM-monitoring-forwarder",
      "vtp_standardEventName":"ViewContent",
      "vtp_disableAutoConfig":true,
      "vtp_enhancedEcommerce":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":42
    },{
      "function":"__cvt_31367757_43",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_disablePushState":true,
      "vtp_pixelId":"351341038378023",
      "vtp_objectPropertyList":["list",["map","name","content_ids","value",["macro",4]],["map","name","content_type","value","product"],["map","name","value","value",["macro",6]],["map","name","currency","value",["macro",2]],["map","name","order_product_sku","value",["macro",7]],["map","name","source","value","marketingClient"]],
      "vtp_endPoint":"https:\/\/dhjcidlp39.execute-api.us-east-2.amazonaws.com\/default\/GTM-monitoring-forwarder",
      "vtp_standardEventName":"Purchase",
      "vtp_disableAutoConfig":true,
      "vtp_enhancedEcommerce":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",18],
      "vtp_eventAction":"Order Completed",
      "vtp_eventLabel":"GA360 - OrderCompleted",
      "vtp_dimension":["list",["map","index","18","dimension",["macro",19]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":174
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",21],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":"GA Tracker - GA360 - OrderCompleted",
      "vtp_dimension":["list",["map","index","18","dimension",["macro",19]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":179
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":187
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",21],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":"GA Tracker - GA360 Ecommerce - EveryPageViewed",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":242
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",18],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":"GA360 Ecommerce  - EveryPageViewed",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":243
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",23],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":"GA360 Ecommerce  - Cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":252
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",21],
      "vtp_eventAction":"Member Joined",
      "vtp_eventLabel":"GA Tracker - GA360 Ecommerce - EveryPageViewed",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":254
    },{
      "function":"__html",
      "metadata":["map","name","GTM Event Data Log"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar eventData=",["escape",["macro",3],8,16],",isDCMDebug=\"true\"===localStorage.getItem(\"dcm_debug\");isDCMDebug\u0026\u0026console.log(\"\\ud83c\\udff7 GTM Event Data\\n\",eventData);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ie"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onOrderCompleted"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onCartViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onLandingPageViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onProductListViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onProductViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onProductAdded"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onCheckoutViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onMemberJoined"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",0,2],["add",1]],
    [["if",2],["add",2,3,9]],
    [["if",1],["add",4]],
    [["if",3],["add",5,7,9]],
    [["if",4],["add",5,6,9]],
    [["if",5],["add",5,6,9]],
    [["if",6],["add",5,6,9]],
    [["if",7],["add",5,6,9]],
    [["if",8],["add",5,6,9]],
    [["if",9],["add",8,9]]]
},
"runtime":[[50,"__cvt_31367757_43",[46,"a"],[50,"bm",[46],["bj",[15,"bk"],[45],[45]],[2,[15,"a"],"gtmOnSuccess",[7]]],[52,"b",["require","createQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","aliasInWindow"]],[52,"e",["require","copyFromWindow"]],[52,"f",["require","setInWindow"]],[52,"g",["require","injectScript"]],[52,"h",["require","makeTableMap"]],[52,"i",["require","makeNumber"]],[52,"j",["require","getType"]],[52,"k",["require","copyFromDataLayer"]],[52,"l",["require","Math"]],[52,"m",["require","logToConsole"]],[52,"n",[30,["e","_fbq_gtm_ids"],[7]]],[52,"o",[17,[15,"a"],"pixelId"]],[52,"p",[7,"AddPaymentInfo","AddToCart","AddToWishlist","CompleteRegistration","Contact","CustomizeProduct","Donate","FindLocation","InitiateCheckout","Lead","PageView","Purchase","Schedule","Search","StartTrial","SubmitApplication","Subscribe","ViewContent"]],[52,"q",["k","ecommerce",1]],[52,"r",[51,"",[7,"bn"],["m",[15,"bn"]],[2,[15,"a"],"gtmOnFailure",[7]]]],[52,"s",[51,"",[7,"bn","bo"],[55,"bp",[15,"bo"],[46,[22,[2,[15,"bo"],"hasOwnProperty",[7,[15,"bp"]]],[46,[43,[15,"bn"],[15,"bp"],[16,[15,"bo"],[15,"bp"]]]]]]],[36,[15,"bn"]]]],[52,"t",[51,"",[7,"bn"],[36,[8,"id",[17,[15,"bn"],"id"],"quantity",[17,[15,"bn"],"quantity"]]]]],[41,"u","v","w"],[22,[17,[15,"a"],"enhancedEcommerce"],[46,[22,[28,[15,"q"]],[46,[36,["r","Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]],[22,[17,[15,"q"],"detail"],[46,[3,"u","ViewContent"],[3,"v","detail"]],[46,[22,[17,[15,"q"],"add"],[46,[3,"u","AddToCart"],[3,"v","add"]],[46,[22,[17,[15,"q"],"checkout"],[46,[3,"u","InitiateCheckout"],[3,"v","checkout"]],[46,[22,[17,[15,"q"],"purchase"],[46,[3,"u","Purchase"],[3,"v","purchase"]],[46,[36,["r","Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]]]]]]]],[22,[30,[28,[17,[16,[15,"q"],[15,"v"]],"products"]],[21,["j",[17,[16,[15,"q"],[15,"v"]],"products"]],"array"]],[46,[36,["r","Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]],[3,"w",[8,"content_type","product","contents",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"map",[7,[15,"t"]]],"value",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"reduce",[7,[51,"",[7,"bn","bo"],[52,"bp",[10,[2,[15,"l"],"round",[7,[26,[26,["i",[30,[17,[15,"bo"],"price"],0]],[30,[17,[15,"bo"],"quantity"],1]],100]]],100]],[36,[0,[15,"bn"],[15,"bp"]]]],0]],"currency",[30,[17,[15,"q"],"currencyCode"],"USD"]]],[22,[18,[2,[7,"InitiateCheckout","Purchase"],"indexOf",[7,[15,"u"]]],[27,1]],[46,[43,[15,"w"],"num_items",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"reduce",[7,[51,"",[7,"bn","bo"],[36,[0,[15,"bn"],["i",[30,[17,[15,"bo"],"quantity"],1]]]]],0]]]]]]],[52,"x",[39,[1,[17,[15,"a"],"userProperties"],[17,[17,[15,"a"],"userPropertyList"],"length"]],["h",[17,[15,"a"],"userPropertyList"],"name","value"],[8]]],[52,"y",[39,[1,[17,[15,"a"],"advancedMatching"],[17,[17,[15,"a"],"advancedMatchingList"],"length"]],["h",[17,[15,"a"],"advancedMatchingList"],"name","value"],[8]]],[52,"z",[39,[1,[17,[15,"a"],"objectPropertyList"],[17,[17,[15,"a"],"objectPropertyList"],"length"]],["h",[17,[15,"a"],"objectPropertyList"],"name","value"],[8]]],[52,"ba",[39,[20,["j",[17,[15,"a"],"objectPropertiesFromVariable"]],"object"],[17,[15,"a"],"objectPropertiesFromVariable"],[8]]],[52,"bb",["s",[15,"ba"],[15,"z"]]],[52,"bc",["s",[30,[15,"w"],[8]],[15,"bb"]]],[3,"u",[30,[15,"u"],[39,[20,[17,[15,"a"],"eventName"],"custom"],[17,[15,"a"],"customEventName"],[39,[20,[17,[15,"a"],"eventName"],"variable"],[17,[15,"a"],"variableEventName"],[17,[15,"a"],"standardEventName"]]]]],[52,"bd",[39,[20,[2,[15,"p"],"indexOf",[7,[15,"u"]]],[27,1]],"trackSingleCustom","trackSingle"]],[52,"be",[39,[17,[15,"a"],"userId"],[8,"uid",[17,[15,"a"],"userId"]],[8]]],[52,"bf",["s",[15,"be"],[15,"y"]]],[52,"bg",[39,[20,[17,[15,"a"],"consent"],false],"revoke","grant"]],[52,"bh",[51,"",[7],[41,"bn"],[3,"bn",["e","fbq"]],[22,[15,"bn"],[46,[36,[15,"bn"]]]],["f","fbq",[51,"",[7],[52,"bo",["e","fbq.callMethod.apply"]],[22,[15,"bo"],[46,["c","fbq.callMethod.apply",[45],[15,"arguments"]]],[46,["c","fbq.queue.push",[15,"arguments"]]]]]],["d","_fbq","fbq"],["b","fbq.queue"],[36,["e","fbq"]]]],[52,"bi",["bh"]],["bi","consent",[15,"bg"]],[2,[2,[15,"o"],"split",[7,","]],"forEach",[7,[51,"",[7,"bn"],[22,[20,[2,[15,"n"],"indexOf",[7,[15,"bn"]]],[27,1]],[46,[22,[17,[15,"a"],"disableAutoConfig"],[46,["bi","set","autoConfig",false,[15,"bn"]]]],[22,[17,[15,"a"],"disablePushState"],[46,["f","fbq.disablePushState",true]]],["bi","init",[15,"bn"],[15,"bf"]],[2,[15,"n"],"push",[7,[15,"bn"]]],["f","_fbq_gtm_ids",[15,"n"],true],[22,[17,[15,"a"],"userProperties"],[46,["bi","setUserProperties",[15,"bn"],[15,"x"]]]]]],["bi",[15,"bd"],[15,"bn"],[15,"u"],[15,"bc"]]]]],[52,"bj",["require","sendPixel"]],[52,"bk",[17,[15,"a"],"endPoint"]],[52,"bl","{tagId:\"GTM monitoring tag,source:\"facebook-gtm\"}"],["g","https://connect.facebook.net/en_US/fbevents.js",[15,"bm"],[17,[15,"a"],"gtmOnFailure"],"fbPixel"]]]
,"permissions":{"__cvt_31367757_43":{"access_globals":{"keys":[{"key":"fbq","read":true,"write":true,"execute":false},{"key":"_fbq_gtm","read":true,"write":true,"execute":false},{"key":"_fbq","read":false,"write":true,"execute":false},{"key":"_fbq_gtm_ids","read":true,"write":true,"execute":false},{"key":"fbq.callMethod.apply","read":true,"write":false,"execute":true},{"key":"fbq.queue.push","read":false,"write":false,"execute":true},{"key":"fbq.queue","read":true,"write":true,"execute":false},{"key":"fbq.disablePushState","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]},"logging":{"environments":"debug"},"read_data_layer":{"keyPatterns":["ecommerce"]},"send_pixel":{}}}
,"sandboxed_scripts":["__cvt_31367757_43"]


};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Vf:!0},ja={};try{ja.__proto__=fa;ea=ja.Vf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=da,la=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.s={};this.m=!1;this.D={}};sa.prototype.get=function(a){return this.s["dust."+a]};sa.prototype.set=function(a,b){this.m||(a="dust."+a,this.D.hasOwnProperty(a)||(this.s[a]=b))};sa.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=h.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.cc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.D.hasOwnProperty(d)||delete c.s[d]}};ba=h.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,g){if(b[f]){if(b[f].Wb+g>b[f].max)throw Error("Quota exceeded");b[f].Wb+=g}}var b={},c=void 0,d=void 0,e={lh:function(f){c=f},xe:function(){c&&a(c,1)},nh:function(f){d=f},Ca:function(f){d&&a(d,f)},Jh:function(f,g){b[f]=b[f]||{Wb:0};b[f].max=g},Mg:function(f){return b[f]&&b[f].Wb||0},reset:function(){b={}},ug:a};e.onFnConsume=e.lh;e.consumeFn=e.xe;e.onStorageConsume=e.nh;e.consumeStorage=e.Ca;e.setMax=e.Jh;e.getConsumed=e.Mg;e.reset=e.reset;e.consume=e.ug;return e};var xa=function(a,b){this.D=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.s=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.D.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.D["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.D.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new xa(a.D,a);a.s&&(b.s=a.s);b.M=a.M;b.a=a.a;return b};var Aa=function(){},Ba=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ca=function(a){return"number"==typeof a&&!isNaN(a)},Ea=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Fa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Ea(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ca(a)||
!Ca(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ja=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ka=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},La=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ma=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Ea(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Wa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Xa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ya=function(a){for(var b=B,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Za=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ab=function(a){var b=[];Ka(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var bb=function(a,b){sa.call(this);this.a=a;this.M=b};la(bb,sa);bb.prototype.toString=function(){return this.a};bb.prototype.cc=function(){return new h(ta(this))};bb.prototype.i=function(a,b){a.D.xe();return this.M.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ea(d)?db(e,d):d};c.prototype.D=function(d){return eb(this.m,d)};c.prototype.s=function(){return b.D};return new c(a,b)};
bb.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var eb=function(a,b){for(var c,d=0;d<b.length&&!(c=db(a,b[d]),c instanceof qa);d++);return c},db=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof bb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var fb=function(){sa.call(this)};la(fb,sa);fb.prototype.cc=function(){return new h(ta(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},D=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Fa(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.cc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof fb){var q={};c.push(g);d.push(q);e(g,q);return q}if(g instanceof bb){var t=function(){for(var r=Array.prototype.slice.call(arguments,0),u=0;u<r.length;u++)r[u]=kb(r[u],b);var v=b?b.D:wa(),w=new xa(v);b&&
(w.a=b.a);return f(g.i.apply(g,[w].concat(r)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Fa(c,g);if(-1<k)return d[k];if(Ea(g)||La(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new fb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var q=new bb("",function(r){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(this.a(u[v]),b);return f((0,this.m.M)(g,g,u))});c.push(g);d.push(q);e(g,q);return q}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var mb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ca(a.length+f.length);return new bb(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?k.add(e.get(q),l[q]):k.add(e.get(q),void 0);k.add("arguments",new h(l));var t=eb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new fb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};var nb=function(){this.m=wa();this.a=new xa(this.m)},qb=function(a,b,c){var d=new bb(b,c);d.m=!0;a.a.set(b,d)};nb.prototype.ac=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};nb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=db(this.a,arguments[c]);return b};nb.prototype.s=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=db(c,arguments[e]);return d};var rb=function(a){if(a instanceof rb)return a;this.Bb=a};rb.prototype.toString=function(){return String(this.Bb)};var sb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var tb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=sb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=sb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),vb=new qa("break"),wb=new qa("continue"),xb=function(a,b){return this.a(a)+this.a(b)},yb=function(a,b){return this.a(a)&&this.a(b)},Ab=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Fa(ub,b)){var d=a[b].apply(a,sb(c)),e=kb(d,this.m);return void 0===e&&void 0!==d?new rb(d):e}throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var f=a.get(b);if(f instanceof bb){var g=sb(c);g.unshift(this.m);return f.i.apply(f,g)}throw Error("TypeError: "+b+" is not a function");}if(0<=
Fa(tb.supportedMethods,b)){var k=sb(c);k.unshift(this.m);return tb[b].apply(a,k)}}if(a instanceof bb||a instanceof fb){if(a.has(b)){var l=a.get(b);if(l instanceof bb){var m=sb(c);m.unshift(this.m);return l.i.apply(l,m)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof bb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,sb(c))}if(a instanceof rb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Bb=function(a,
b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Cb=function(a){var b=za(this.m),c=eb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Db=function(){return vb},Eb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Fb=function(a){for(var b=this.m,c=0;c<arguments.length-
1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Gb=function(){return wb},Hb=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Ib=function(a,b){return this.a(a)/this.a(b)},Jb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof rb,d=b instanceof rb;return c||d?c&&d?a.Bb==b.Bb:!1:a==b},Kb=function(a){for(var b,c=
0;c<arguments.length;c++)b=this.a(arguments[c]);return b};function Lb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=eb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof fb||b instanceof h||b instanceof bb)for(var g=b.cc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=eb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Mb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){d.set(a,e);return d},b,c)},Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=za(d);f.add(a,e);return f},b,c)},Pb=function(a){return this.m.get(this.a(a))},Qb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");if(a instanceof fb||a instanceof h||a instanceof bb)c=a.get(b);else if("string"==typeof a)"length"==b?c=a.length:ra(b)&&(c=a[b]);else if(a instanceof rb)return;return c},Rb=function(a,b){return this.a(a)>this.a(b)},Tb=function(a,b){return this.a(a)>=this.a(b)},Ub=function(a,b){a=this.a(a);b=this.a(b);a instanceof rb&&(a=a.Bb);b instanceof rb&&(b=b.Bb);return a===b},Vb=function(a,b){return!Ub.call(this,a,b)},Wb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.D(d);
if(e instanceof qa)return e},Xb=function(a,b){return this.a(a)<this.a(b)},Yb=function(a,b){return this.a(a)<=this.a(b)},Zb=function(a,b){return this.a(a)%this.a(b)},$b=function(a,b){return this.a(a)*this.a(b)},ac=function(a){return-this.a(a)},cc=function(a){return!this.a(a)},dc=function(a,b){return!Jb.call(this,a,b)},ec=function(){return null},fc=function(a,b){return this.a(a)||this.a(b)},gc=function(a,b){var c=this.a(a);this.a(b);return c},hc=function(a){return this.a(a)},ic=function(a){return Array.prototype.slice.apply(arguments)},
jc=function(a){return new qa("return",this.a(a))},kc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof bb||a instanceof h||a instanceof fb)&&a.set(b,c);return c},lc=function(a,b){return this.a(a)-this.a(b)},mc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ea(d)||!Ea(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),
f instanceof qa){var l=f.a;if("break"==l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},nc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},oc=function(a){a=this.a(a);return a instanceof bb?"function":typeof a},pc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},qc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&
(e=this.D(f),e instanceof qa)){if("break"==e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.D(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},rc=function(a){return~Number(this.a(a))},sc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},tc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))&Number(this.a(b))},wc=function(a,b){return Number(this.a(a))^
Number(this.a(b))},xc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var zc=function(){this.a=new nb;yc(this)};zc.prototype.ac=function(a){return Ac(this.a.i(a))};
var Cc=function(a,b){return Ac(Bc.a.s(a,b))},yc=function(a){var b=function(d,e){var f=a.a,g=String(e);mb.hasOwnProperty(d)&&qb(f,g||d,mb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){qb(a.a,String(d),e)};c(0,xb);c(1,yb);c(2,Ab);c(3,Bb);c(53,Cb);c(4,Db);c(5,Eb);c(52,Fb);c(6,Gb);c(9,Eb);c(50,Hb);c(10,Ib);c(12,Jb);c(13,Kb);c(47,Mb);c(54,Nb);c(55,Ob);c(15,Pb);c(16,Qb);c(17,Qb);c(18,Rb);c(19,Tb);c(20,Ub);c(21,Vb);c(22,Wb);c(23,Xb);c(24,Yb);c(25,Zb);c(26,$b);
c(27,ac);c(28,cc);c(29,dc);c(45,ec);c(30,fc);c(32,gc);c(33,gc);c(34,hc);c(35,hc);c(46,ic);c(36,jc);c(43,kc);c(37,lc);c(38,mc);c(39,nc);c(40,oc);c(41,pc);c(42,qc);c(58,rc);c(57,sc);c(60,tc);c(61,uc);c(56,vc);c(62,wc);c(59,xc)},Ec=function(){var a=Bc,b=Dc();qb(a.a,"require",b)},Fc=function(a,b){a.a.a.M=b};function Ac(a){if(a instanceof qa||a instanceof bb||a instanceof h||a instanceof fb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Pc=function(a){return Oc[a]};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Pc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Ea(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=cd[f];if(!g||b.gd(g))return;c[f]=!0;try{var k=od(g,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.wg(d,k))}catch(y){b.Qe&&b.Qe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=nd(a[n],b,c);jd&&(m=m||q===jd.Pb);d.push(q)}return jd&&m?jd.zg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Ea(a[1])&&"macro"===a[1][0]&&jd.Yg(a))return jd.sh(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var r=a[1];if(!fd[r])throw Error("Unable to resolve tag reference "+r+".");return d={Ce:a[2],
index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Md:a("convert_case_to"),Nd:a("convert_false_to"),Od:a("convert_null_to"),Pd:a("convert_true_to"),Qd:a("convert_undefined_to"),bi:a("debug_mode_metadata"),Ka:a("function"),vf:a("instance_name"),zf:a("live_only"),Bf:a("malware_disabled"),Cf:a("metadata"),ci:a("original_vendor_template_id"),Gf:a("once_per_event"),Vd:a("once_per_load"),ce:a("setup_tags"),ee:a("tag_id"),fe:a("teardown_tags")}}();var sd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(sd,Error);function td(a,b){if(Ea(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ca(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],g=Ad(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=yd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd={wg:function(a,b){b[rd.Md]&&"string"===typeof a&&(a=1==b[rd.Md]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Od)&&null===a&&(a=b[rd.Od]);b.hasOwnProperty(rd.Qd)&&void 0===a&&(a=b[rd.Qd]);b.hasOwnProperty(rd.Pd)&&!0===a&&(a=b[rd.Pd]);b.hasOwnProperty(rd.Nd)&&!1===a&&(a=b[rd.Nd]);return a}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new sd(c,d,g);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,g);Ed(f,b,d,g)}}}};var Jd=function(a){var b=Gd.B,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ka(a,function(f,g){var k={};Ka(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},Md=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Nd=!1;var Od={};Od.Sh=Oa('');Od.Fg=Oa('');var Pd=Nd,Qd=Od.Fg,Rd=Od.Sh;var ce=/^[a-z$_][\w$]*$/i,de=/^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
var ee=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},fe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ee(b,"/*")&&(b=b.slice(0,-2));ee(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ge=/^[a-z0-9-]+$/i,he=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ie=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ge.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!he.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:r.length===u.length?!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=fe(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var le=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,me={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=le.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof bb?n="Fn":l instanceof h?n="List":l instanceof fb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(me[k]||k)+".");}}};function ne(a){return""+a}
function oe(a,b){var c=[];return c};var pe=function(a,b){var c=new bb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},qe=function(a,b){var c=new fb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ba(e)?c.set(d,pe(a+"_"+d,e)):(Ca(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var re=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new fb;return d=qe("AssertApiSubject",c)};var se=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new fb;return d=qe("AssertThatSubject",c)};function te(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var ve=function(){for(var a=Math,b=ue,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=te(a[e].bind(a)))}return c};var we=function(a){var b;return b};var xe=function(a){var b;return b};var ye=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ze=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Ae=function(a){F(this.i.a,["message:?string"],arguments);};var Be=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ha(a,b)};var Ce=function(){return(new Date).getTime()};var De=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.hg.apply(null,Array.prototype.slice.call(arguments,1))};var Ee=function(){De(this,"read_container_data");var a=new fb;a.set("containerId",'GTM-NTF2X45');a.set("version",'35');a.set("environmentName",'');a.set("debugMode",Pd);a.set("previewMode",Rd);a.set("environmentMode",Qd);a.m=!0;return a};var Fe=function(a){return null===a?"null":a instanceof h?"array":a instanceof bb?"function":typeof a};var Ge=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Pd||Rd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var He=function(a){return Ma(lb(a,this.m))};var Ie=function(a){return Number(lb(a,this.m))};var Je=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ke=function(a,b,c){var d=null,e=!1;F(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new fb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof fb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var ue="floor ceil round max min abs pow sqrt".split(" ");var Le=function(){var a={};return{Ng:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Kh:function(b,c){a[b]=c},reset:function(){a={}}}},Me=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ne=function(){this.a={};this.i={}};Ne.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ne.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ba(b)?pe(a,b):qe(a,b)};
var Pe=function(a){var b=Oe;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ba(b)?pe("getUserAgent",b):qe("getUserAgent",b)};function Qe(){var a={};return a};var H={fb:"_ee",Tc:"_syn",fi:"_uei",di:"_pci",Hc:"event_callback",Ob:"event_timeout",ia:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",cb:"allow_google_signals",ka:"cookie_expires",Nb:"cookie_update",eb:"session_duration",ma:"user_properties",ya:"transport_url",O:"ads_data_redaction"};
H.Oe=[H.ja,H.cb,H.Nb];H.Re=[H.ka,H.Ob,H.eb];H.o="ad_storage",H.J="analytics_storage",H.Fh="region",H.Oh="wait_for_update";var Re={},Se=function(a,b){Re[a]=Re[a]||[];Re[a][b]=!0},Te=function(a){for(var b=[],c=Re[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){Se("GTM",a)};var B=window,K=document,Ue=navigator,Ve=K.currentScript&&K.currentScript.src,We=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Xe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ye=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Xe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},Ze=function(){if(Ve){var a=Ve.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},$e=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);Xe(c,b);void 0!==a&&(c.src=a);return c},af=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},bf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},cf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},df=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},ef=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ff=function(a){var b=K.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},gf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},hf=function(a){Ue.sendBeacon&&Ue.sendBeacon(a)||af(a)},jf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var kf={},lf=function(a){return void 0==kf[a]?!1:kf[a]};var mf=[];function nf(){var a=We("google_tag_data",{});a.ics||(a.ics={entries:{},set:of,update:pf,addListener:qf,notifyListeners:rf,active:!1});return a.ics}
function of(a,b,c,d,e,f){var g=nf();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};k[a]=t;q&&B.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,sf(a),rf(),Se("TAGGING",2))},f)}}}
function pf(a,b){var c=nf();c.active=!0;if(void 0!=b){var d=tf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=tf(a);f.quiet?(f.quiet=!1,sf(a)):g!==d&&sf(a)}}function qf(a,b){mf.push({we:a,Ig:b})}function sf(a){for(var b=0;b<mf.length;++b){var c=mf[b];Ea(c.we)&&-1!==c.we.indexOf(a)&&(c.Ye=!0)}}function rf(){for(var a=0;a<mf.length;++a){var b=mf[a];if(b.Ye){b.Ye=!1;try{b.Ig.call()}catch(c){}}}}
var tf=function(a){var b=nf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},uf=function(a){return!(nf().entries[a]||{}).quiet},vf=function(){return lf("gtag_cs_api")?nf().active:!1},wf=function(a,b){nf().addListener(a,b)},xf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!uf(b[e]))return!0;return!1}if(c()){var d=!1;wf(b,function(){d||c()||(d=!0,a())})}else a()},yf=function(a,b){if(!1===tf(b)){var c=!1;wf([b],function(){!c&&tf(b)&&(a(),c=!0)})}};var zf=[H.o,H.J],Af=function(a){var b=a[H.Fh];b&&I(40);var c=a[H.Oh];c&&I(41);for(var d=Ea(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<zf.length;f++){var g=zf[f],k=a[zf[f]],l=d[e];nf().set(g,k,l,"US","US-CA",c)}},Bf=function(a){for(var b=0;b<zf.length;b++){var c=zf[b],d=a[zf[b]];nf().update(c,d)}nf().notifyListeners()},Cf=function(a){var b=tf(a);return void 0!=b?b:!0},Df=function(){for(var a=[],b=0;b<zf.length;b++){var c=tf(zf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
Ef=function(a,b){xf(a,b)};var Gf=function(a){return Ff?K.querySelectorAll(a):null},Hf=function(a,b){if(!Ff)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},If=!1;if(K.querySelectorAll)try{var Jf=K.querySelectorAll(":root");Jf&&1==Jf.length&&Jf[0]==K.documentElement&&(If=!0)}catch(a){}var Ff=If;var Gd={},Q=null,Xf=Math.random();Gd.B="GTM-NTF2X45";Gd.Tb="7m1";Gd.Ud="";var Yf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zf="www.googletagmanager.com/gtm.js";
var $f=Zf,ag=null,bg=null,cg="//www.googletagmanager.com/a?id="+Gd.B+"&cv=35",dg={},eg={},fg=function(){var a=Q.sequence||1;Q.sequence=a+1;return a};
var gg=function(){return"&tc="+fd.filter(function(a){return a}).length},jg=function(){hg||(hg=B.setTimeout(ig,500))},ig=function(){hg&&(B.clearTimeout(hg),hg=void 0);void 0===kg||lg[kg]&&!mg&&!ng||(og[kg]||pg.$g()||0>=qg--?(I(1),og[kg]=!0):(pg.zh(),af(rg()),lg[kg]=!0,sg=tg=ng=mg=""))},rg=function(){var a=kg;if(void 0===a)return"";var b=Te("GTM"),c=Te("TAGGING");return[ug,lg[a]?"":"&es=1",vg[a],b?"&u="+b:"",c?"&ut="+c:"",gg(),mg,ng,tg,sg,"&z=0"].join("")},wg=function(){return[cg,"&v=3&t=t","&pid="+
Ha(),"&rv="+Gd.Tb].join("")},xg="0.005000">Math.random(),ug=wg(),yg=function(){ug=wg()},lg={},mg="",ng="",sg="",tg="",kg=void 0,vg={},og={},hg=void 0,pg=function(a,b){var c=0,d=0;return{$g:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},zh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),qg=1E3,zg=function(a,b){if(xg&&!og[a]&&kg!==a){ig();kg=a;sg=mg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";vg[a]="&e="+c+"&eid="+a;jg()}},Ag=function(a,b,c){if(xg&&!og[a]&&
b){a!==kg&&(ig(),kg=a);var d,e=String(b[rd.Ka]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;mg=mg?mg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(hd[g]?"1":"2")+d;sg=sg?sg+"."+k:"&ti="+k;jg();2022<=rg().length&&ig()}},Bg=function(a,b,c){if(xg&&!og[a]){a!==kg&&(ig(),kg=a);var d=c+b;ng=ng?ng+
"."+d:"&epr="+d;jg();2022<=rg().length&&ig()}};var Cg={},Dg=new Ia,Eg={},Fg={},Ig={name:"marketingClientDataLayer",set:function(a,b){D(Za(a,b),Eg);Gg()},get:function(a){return Hg(a,2)},reset:function(){Dg=new Ia;Eg={};Gg()}},Hg=function(a,b){if(2!=b){var c=Dg.get(a);xg&&c!==Jg(a.split("."))&&I(5);return c}return Jg(a.split("."))},Jg=function(a){for(var b=Eg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Kg=function(a,b){Fg.hasOwnProperty(a)||(Dg.set(a,b),D(Za(a,b),Eg),Gg())},Gg=function(a){Ka(Fg,function(b,c){Dg.set(b,c);
D(Za(b,void 0),Eg);D(Za(b,c),Eg);a&&delete Fg[b]})},Lg=function(a,b,c){Cg[a]=Cg[a]||{};var d=1!==c?Jg(b.split(".")):Dg.get(b);"array"===hb(d)||"object"===hb(d)?Cg[a][b]=D(d):Cg[a][b]=d},Mg=function(a,b){if(Cg[a])return Cg[a][b]},Ng=function(a,b){Cg[a]&&delete Cg[a][b]};var Qg=/:[0-9]+$/,Rg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ug=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Sg(a.protocol)||Sg(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(Qg,"").toLowerCase());return Tg(a,b,c,d,e)},Tg=function(a,b,c,d,e){var f,g=Sg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Vg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Qg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Se("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Fa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Rg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Sg=function(a){return a?a.replace(":",
"").toLowerCase():""},Vg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Wg=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Se("TAGGING",1),c="/"+c);var d=b.hostname.replace(Qg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Xg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Wg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Yg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var $g=function(a,b,c,d){return Zg(d)?Yg(a,String(b||document.cookie),c):[]},ch=function(a,b,c,d,e){if(Zg(e)){var f=ah(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=bh(f,function(g){return g.Zb},b);if(1===f.length)return f[0].id;f=bh(f,function(g){return g.Db},c);return f[0]?f[0].id:void 0}}};function eh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=$g(b,f,!1,d).indexOf(c)}
var ih=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Zg(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ih);g=e(g,"samesite",
c.Dh);c.Hh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=gh(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,k)}catch(w){q=w;continue}t=!0;if(!hh(u,c.path)&&eh(v,a,b,c.Ea))return 0}if(q&&!t)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,k);return hh(m,c.path)?1:eh(g,a,b,c.Ea)?0:1},jh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ih(a,b,c)};
function bh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ah(a,b,c){for(var d=[],e=$g(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Zb:1*l[0]||1,Db:1*l[1]||1}))}}return d}
var fh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},kh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,lh=/(^|\.)doubleclick\.net$/i,hh=function(a,b){return lh.test(document.location.hostname)||"/"===b&&kh.test(a)},gh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;lh.test(e)||kh.test(e)||a.push("none");
return a},Zg=function(a){if(!lf("gtag_cs_api")||!a||!vf())return!0;if(!uf(a))return!1;var b=tf(a);return null==b?!0:!!b};var mh=function(){for(var a=Ue.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},ph=function(a,b,c,d,e){var f=nh(b);return ch(a,f,oh(c),d,e)},qh=function(a,b,c,d){var e=""+nh(c),f=oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function rh(a,b,c){var d,e=a.Ab;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ra())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var sh=["1"],th={},xh=function(a){var b=uh(a.prefix);th[b]||vh(b,a.path,a.domain)||(wh(b,mh(),a),vh(b,a.path,a.domain))};function wh(a,b,c){var d=qh(b,"1",c.domain,c.path),e=rh(c);e.Ea="ad_storage";jh(a,d,e)}function vh(a,b,c){var d=ph(a,b,c,sh,"ad_storage");d&&(th[a]=d);return d}function uh(a){return(a||"_gcl")+"_au"};var yh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function zh(){for(var a=Ah,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ah,Ch;function Dh(a){Ah=Ah||Bh();Ch=Ch||zh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Ah[l],Ah[m],Ah[n],Ah[q])}return b.join("")}
function Eh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ch[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ah=Ah||Bh();Ch=Ch||zh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Fh;var Jh=function(){var a=Gh,b=Hh,c=Ih(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){bf(K,"mousedown",d);bf(K,"keyup",d);bf(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Kh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ih().decorators.push(f)},Lh=function(a,b,c){for(var d=Ih().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Ua(e,g.callback())}}return e},Ih=function(){var a=We("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mh=/(.*?)\*(.*?)\*(.*)/,Nh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Oh=/^(?:www\.|m\.|amp\.)+/,Ph=/([^?#]+)(\?[^#]*)?(#.*)?/;function Qh(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Sh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Dh(String(d))))}var e=b.join("*");return["1",Rh(e),e].join("*")},Rh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Fh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Fh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Fh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Uh=function(){return function(a){var b=Wg(B.location.href),c=b.search.replace("?",""),d=Rg(c,"_gl",!1,!0)||"";a.query=Th(d)||{};var e=Ug(b,"fragment").match(Qh("_gl"));a.fragment=Th(e&&e[3]||"")||{}}},Vh=function(a){var b=Uh(),c=Ih();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ua(d,e.query),a&&Ua(d,e.fragment));return d},
Th=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Mh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Rh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Eh(t[r+1]);return q}}}}catch(u){}};
function Wh(a,b,c,d){function e(n){var q=n,t=Qh(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ph.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Xh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Lh(b,1,c),e=Lh(b,2,c),f=Lh(b,3,c);if(Wa(d)){var g=Sh(d);c?Yh("_gl",g,a):Zh("_gl",g,a,!1)}if(!c&&Wa(e)){var k=Sh(e);Zh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Zh(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Yh(m,n,q);break a}}"string"==typeof q&&Wh(m,n,q,void 0)}}
function Zh(a,b,c,d){if(c.href){var e=Wh(a,b,c.href,void 0===d?!1:d);yh.test(e)&&(c.href=e)}}
function Yh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Wh(a,b,c.action);yh.test(m)&&(c.action=m)}}}
var Gh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Xh(e,e.hostname)}}catch(g){}},Hh=function(a){try{if(a.action){var b=Ug(Wg(a.action),"host");Xh(a,b)}}catch(c){}},$h=function(a,b,c,d){Jh();Kh(a,b,"fragment"===c?2:1,!!d,!1)},ai=function(a,b){Jh();Kh(a,[Tg(B.location,"host",!0)],b,!0,!0)},bi=function(){var a=K.location.hostname,b=Nh.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Oh,""),l=e.replace(Oh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ci=function(a,b){return!1===a?!1:a||b||bi()};var di=/^\w+$/,ei=/^[\w-]+$/,fi=/^~?[\w-]+$/,gi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},hi=function(){if(!lf("gtag_cs_api")||!vf())return!0;var a=tf("ad_storage");return null==a?!0:!!a},ii=function(a,b){uf("ad_storage")?hi()?a():yf(a,"ad_storage"):b?Se("TAGGING",3):xf(function(){ii(a,!0)},["ad_storage"])},li=function(a){var b=[];if(!K.cookie)return b;var c=$g(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ji(c[d]);e&&-1===Fa(b,e)&&b.push(e)}return ki(b)};
function mi(a){return a&&"string"==typeof a&&a.match(di)?a:"_gcl"}
var oi=function(){var a=Wg(B.location.href),b=Ug(a,"query",!1,void 0,"gclid"),c=Ug(a,"query",!1,void 0,"gclsrc"),d=Ug(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Rg(e,"gclid",!1,void 0);c=c||Rg(e,"gclsrc",!1,void 0)}return ni(b,c,d)},ni=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(ei))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":lf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},qi=function(a){var b=oi();ii(function(){return pi(b,a)})};
function pi(a,b,c){function d(m,n){var q=ri(m,e);q&&(jh(q,n,f),g=!0)}b=b||{};var e=mi(b.prefix);c=c||Ra();var f=rh(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.zi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var ti=function(a,b){var c=Vh(!0);ii(function(){for(var d=mi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==gi[f]){var g=ri(f,d),k=c[g];if(k){var l=Math.min(si(k),Ra()),m;b:{for(var n=l,q=$g(g,K.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(si(q[t])>n){m=!0;break b}m=!1}if(!m){var r=rh(b,l,!0);r.Ea="ad_storage";jh(g,k,r)}}}}pi(ni(c.gclid,c.gclsrc),b)})},ri=function(a,b){var c=gi[a];if(void 0!==c)return b+c},si=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ji(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ui=function(a,b,c,d,e){if(Ea(b)){var f=mi(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=ri(a[l],f);if(m){var n=$g(m,K.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};ii(function(){$h(g,b,c,d)})}},ki=function(a){return a.filter(function(b){return fi.test(b)})},vi=function(a,b){for(var c=mi(b.prefix),d={},e=0;e<a.length;e++)gi[a[e]]&&(d[a[e]]=gi[a[e]]);ii(function(){Ka(d,function(f,g){var k=$g(c+g,K.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=si(l),
n={};n[f]=[ji(l)];pi(n,b,m)}})})};function wi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var xi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(vf()){var c=oi();if(wi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ai(function(){return d},3);ai(function(){var e={};return e._up="1",e},1)}}},yi=function(){var a;if(hi()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Bd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].Bd]||(g[b[k].Bd]=[]),g[b[k].Bd].push({timestamp:l[1],Kg:l[2]}))}a=g}else a={};return a};var zi=/^\d+\.fls\.doubleclick\.net$/;function Ai(a,b){uf(H.o)?Cf(H.o)?a():yf(a,H.o):b?I(42):Ef(function(){Ai(a,!0)},[H.o])}function Bi(a){var b=Wg(B.location.href),c=Ug(b,"host",!1);if(c&&c.match(zi)){var d=Ug(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ci(a,b,c){if("aw"==a||"dc"==a){var d=Bi("gcl"+a);if(d)return d.split(".")}var e=mi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Cf(H.o)&&c,g;g=oi()[a]||[];if(0<g.length)return f?["0"]:g}var k=ri(a,e);return k?li(k):[]}
var Di=function(a){var b=Bi("gac");if(b)return!Cf(H.o)&&a?"0":decodeURIComponent(b);var c=yi(),d=[];Ka(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Kg);g=ki(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Ei=function(a,b){var c=oi().dc||[];Ai(function(){xh(b);var d=th[uh(b.prefix)],e=!1;if(d&&0<c.length){var f=Q.joined_au=Q.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;hf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=uh(b.prefix),n=th[m];n&&wh(m,n,b)}})};var Fi=/[A-Z]+/,Gi=/\s/,Hi=function(a){if(p(a)&&(a=Qa(a),!Gi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Fi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Ji=function(a){for(var b={},c=0;c<a.length;++c){var d=Hi(a[c]);d&&(b[d.id]=d)}Ii(b);var e=[];Ka(b,function(f,g){e.push(g)});return e};
function Ii(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ki=function(){var a=!1;return a};var Mi=function(a,b,c,d){return(2===Li()||d||"http:"!=B.location.protocol?a:b)+c},Li=function(){var a=Ze(),b;if(1===a)a:{var c=$f;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var $i=function(a){return Cf(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Xg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var aj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),bj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},cj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},dj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fj=function(a){var b;b||(b=Hg("gtm.whitelist"));b&&I(9);
var c=b&&Xa(Pa(b),bj),d;d||(d=Hg("gtm.blacklist"));d||(d=Hg("tagTypeBlacklist"))&&I(3);d?I(8):d=[];ej()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Fa(Pa(d),"google")&&I(2);var e=d&&Xa(Pa(d),cj),f={};return function(g){var k=
g&&g[rd.Ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=eg[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Fa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Fa(c,l[q])){I(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var r=0<=Fa(e,k);if(r)t=r;else{var u=Ja(e,l||[]);u&&I(10);t=u}}var v=!m||t;v||!(0<=Fa(l,"sandboxedScripts"))||c&&-1!==Fa(c,"sandboxedScripts")||(v=Ja(e,dj));return f[k]=v}},ej=function(){return aj.test(B.location&&B.location.hostname)};var gj={active:!0,isAllowed:function(){return!0},isWhitelisted:function(){return!0}},hj=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)N(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{K.documentElement.doScroll("left"),mj()}catch(a){B.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Yf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=D(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Gd.B,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Ba(b)&&uj(a,b);c&&B.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Ta(function(){return N(function(){b(Gd.B,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&tj(a)})},gg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ca(d)||0>d?0:d}if(!Q._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ca(Ig.get("gtm.start"))?Ig.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(bg-b)}}};var Bj={},Cj=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}xj();return B[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return B.GoogleAnalyticsObject||"ga"};
var Ij=function(a,b){return function(){var c=Cj(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),k=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=fd[a],f=Qj(a,b,c,d);if(!f)return null;var g=nd(e[rd.ce],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{H:f,F:1===k.Ce?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[rd.Bf])k();else{var w=od(f,c,[]),y=rj(c.id,String(f[rd.Ka]),Number(f[rd.ee]),w[rd.Cf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ra()-C;Ag(c.id,fd[a],"5");sj(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ra()-C;Ag(c.id,fd[a],"6");sj(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Ag(c.id,f,"1");var A=function(){var z=Ra()-C;Ag(c.id,f,"7");sj(c.id,y,"exception",z);x||(x=!0,k())};var C=Ra();try{md(w,c)}catch(z){A(z)}}}var f=fd[a],g=b.H,k=b.F,l=b.terminate;if(c.gd(f))return null;var m=nd(f[rd.fe],c,[]);if(m&&m.length){var n=m[0],q=Pj(n.index,{H:g,F:k,terminate:l},c,d);if(!q)return null;g=q;k=2===n.Ce?l:q}if(f[rd.Vd]||f[rd.Gf]){var t=f[rd.Vd]?gd:c.Mh,r=g,u=k;if(!t[a]){e=Ta(e);var v=Rj(a,t,e);g=v.H;k=v.F}return function(){t[a](r,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{H:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},F:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.Cb[d]){var e=fd[d];var f=b.add();try{var g=Pj(d,{H:f,F:f,terminate:f},a,d);g?c.push({ff:d,Ze:pd(e),ac:g}):(Vj(d,a),f())}catch(l){f()}}b.gg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].ac();return 0<c.length};function Wj(a,b){var c,d=b.Ze,e=a.Ze;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.ff,k=b.ff;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!xg)return;var c=function(d){var e=b.gd(fd[d])?"3":"4",f=nd(fd[d][rd.ce],b,[]);f&&f.length&&c(f[0].index);Ag(b.id,fd[d],e);var g=nd(fd[d][rd.fe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}zg(a,b);var f=wj(a,d,e);Lg(a,"event",1);Lg(a,"ecommerce",1);Lg(a,"gtm");var g={id:a,name:b,gd:fj(c),Cb:[],Mh:[],Qe:function(){I(6)}};g.Cb=Bd(g);
var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Gd.B);if(!k)return k;for(var l=0;l<g.Cb.length;l++)if(g.Cb[l]){var m=fd[l];if(m&&!Yf[String(m[rd.Ka])])return!0}return!1};function ak(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Wg(""+c+b).href}}function bk(a,b){return ck()?ak(a,b):void 0}
function ck(){var a=!1;return a};var dk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.H=function(){};this.F=function(){};this.eventId=void 0},ek=function(a){var b=new dk;b.eventModel=a;return b},fk=function(a,b){a.targetConfig=b;return a},gk=function(a,b){a.containerConfig=b;return a},hk=function(a,b){a.a=b;return a},ik=function(a,b){a.globalConfig=b;return a},jk=function(a,b){a.H=b;return a},kk=function(a,b){a.F=b;return a};
dk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var lk=function(a){function b(e){Ka(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ka(c,function(e){d.push(e)});return d};var mk;if(3===Gd.Tb.length)mk="g";else{var nk="G";mk=nk}
var ok={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:mk,OPT:"o"},pk=function(a){var b=Gd.B.split("-"),c=b[0].toUpperCase(),d=ok[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Tb.length){var g="w";f="2"+g}else f="";return f+d+Gd.Tb+e};function qk(a,b,c){function d(q){var t;Q.reported_gclid||(Q.reported_gclid={});t=Q.reported_gclid;var r=f+(q?"gcu":"gcs");if(!t[r]){t[r]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if(vf()){var y=Cf(H.o);v("gcs",Df());q&&v("gcu","1");v("rnd",n);if((!f||g&&"aw.ds"!==g)&&Cf(H.o)){var x=li("_gcl_aw");v("gclaw",x.join("."))}v("url",String(B.location).split(/[?#]/)[0]);v("dclid",rk(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}"1"===Vh(!1)._up&&
v("gtm_up","1");v("gclid",rk(b,f));v("gclsrc",g);v("gtm",pk(!c));var A=w+"/pagead/landing?"+u.join("&");hf(A)}}var e=oi(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=vf();if(l||m){var n=""+mh();m?Ef(function(){d();Cf(H.o)||yf(function(){return d(!0)},H.o)},[H.o]):d()}}function rk(a,b){var c=a&&!Cf(H.o);return b&&c?"0":b}var sk=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var tk=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var uk;a:{var vk=ma.navigator;if(vk){var wk=vk.userAgent;if(wk){uk=wk;break a}}uk=""}var xk=function(a){return-1!=uk.indexOf(a)};var yk=function(){return xk("iPhone")&&!xk("iPod")&&!xk("iPad")};xk("Opera");xk("Trident")||xk("MSIE");xk("Edge");!xk("Gecko")||-1!=uk.toLowerCase().indexOf("webkit")&&!xk("Edge")||xk("Trident")||xk("MSIE")||xk("Edge");-1!=uk.toLowerCase().indexOf("webkit")&&!xk("Edge")&&xk("Mobile");xk("Macintosh");xk("Windows");xk("Linux")||xk("CrOS");var zk=ma.navigator||null;zk&&(zk.appVersion||"").indexOf("X11");xk("Android");yk();xk("iPad");xk("iPod");yk()||xk("iPad")||xk("iPod");uk.toLowerCase().indexOf("kaios");var Ak=function(){};var Bk=function(a,b){this.i=a;this.a=null;this.s={};this.D=0;this.M=void 0===b?500:b;this.m=null};la(Bk,Ak);
var Dk=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable"})},a.M);Ck(a,"addEventListener",function(d){if(d&&(!1===d.gdprApplies||"error"===d.cmpStatus||"loaded"===d.cmpStatus&&("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus))){if(void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent||!d.cmpStatus||
"error"===d.cmpStatus)d.tcString="tcunavailable";Ck(a,"removeEventListener",null,d.listenerId);c&&(clearTimeout(c),c=0,b(d))}})},Ck=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Ek(a)){Fk(a);var f=++a.D;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Ek=function(a){if(a.a)return a.a;var b;a:{for(var c=a.i,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(k){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(k){}f=null}if(!(c=f))break}b=null}a.a=b;return a.a},Fk=function(a){a.m||(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},tk(a.i,a.m))};function Gk(){var a=Q.tcf||{};return Q.tcf=a}var Hk=function(){var a=Gk();if(!a.active){a.active=!0;var b=new Bk(B,3E3),c;"function"===typeof B.__tcfapi?c="s":("function"===typeof b.i.__tcfapi||null!=Ek(b))&&(c="i");a.Pe=Ra();try{var d=!1;Dk(b,function(){d=!0;a.ld=Ra()});d&&(a.ld=a.Pe)}catch(e){c="e"}a.type=c}},Ik=function(){var a=Gk();if(a.active&&void 0!==a.ld)return Number(a.ld-a.Pe)};function Nl(){var a=Q;return a.gcq=a.gcq||new Ol}
var Pl=function(a,b,c){Nl().register(a,b,c)},Ql=function(a,b,c,d){Nl().push("event",[b,a],c,d)},Rl=function(a,b){Nl().push("config",[a],b)},Sl={},Tl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Ul=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},Ol=function(){this.m={};this.i={};this.a=[]},Vl=function(a,b){var c=Hi(b);return a.m[c.containerId]=a.m[c.containerId]||new Tl},Wl=function(a,b,c){if(b){var d=Hi(b);if(d&&1===
Vl(a,b).status){Vl(a,b).status=2;var e={};xg&&(e.timeoutId=B.setTimeout(function(){I(38);jg()},3E3));a.push("require",[e],d.containerId);Sl[d.containerId]=Ra();if(Ki()){
}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=marketingClientDataLayer&cx=c",k=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=bk(c,g)||k;Ye(l)}}}},Xl=function(a,b,c,d){if(d.ca){var e=Vl(a,d.ca),f=e.m;if(f){var g=D(c),k=D(e.targetConfig[d.ca]),l=D(e.containerConfig),m=D(e.i),n=D(a.i),q=Hg("gtm.uniqueEventId"),t=Hi(d.ca).prefix,r=kk(jk(ik(hk(gk(fk(ek(g),k),l),m),n),function(){
Bg(q,t,"2");}),function(){Bg(q,t,"3");});try{Bg(q,t,"1");f(d.ca,b,d.m,r)}catch(u){Bg(q,t,"4");}}}};
Ol.prototype.register=function(a,b,c){if(3!==Vl(this,a).status){Vl(this,a).m=b;Vl(this,a).status=3;c&&(Vl(this,a).i=c);var d=Hi(a),e=Sl[d.containerId];if(void 0!==e){var f=Q[d.containerId].bootstrap,g=d.prefix.toUpperCase();Q[d.containerId]._spx&&(g=g.toLowerCase());var k=Hg("gtm.uniqueEventId"),l=g,m=Ra()-f;if(xg&&!og[k]){k!==kg&&(ig(),kg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);tg=tg?tg+","+n:"&cl="+n}delete Sl[d.containerId]}this.flush()}};
Ol.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);Wl(this,c,b[0][H.ya]||this.i[H.ya]);this.a.push(new Ul(a,e,c,b,d));d||this.flush()};
Ol.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Vl(this,c.ca).status&&!a)return;xg&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Ka(c.a[0],function(l,m){D(Za(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[H.uc];delete d[H.uc];var f=Vl(this,c.ca),g=Hi(c.ca),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||Xl(this,H.ia,d,c);f.a=!0;delete d[H.fb];k?D(d,f.containerConfig):
D(d,f.targetConfig[c.ca]);break;case "event":Xl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Yl=function(a){};var Zl=function(a,b){F(this.i.a,["toPath:!string","fromPath:!string"],arguments);De(this,"access_globals","write",a);De(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=Ya(c),f=Ya(d);if(void 0===e||void 0===f)return!1;e[c[c.length-1]]=f[d[d.length-1]];return!0};var $l=function(a,b){var c;F(this.i.a,["path:!string"],[a]);De(this,"access_globals","execute",a);for(var d=a.split("."),e=B,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(lb(arguments[l],this.m));var m=(0,this.m.M)(f,e,k);c=kb(m,this.m);void 0===c&&void 0!==m&&I(45);return c};var am=function(a){};var bm=function(a,b){var c;F(this.i.a,["key:!string","dataLayerVersion:?number"],arguments),De(this,"read_data_layer",a),c=Hg(a,b||2);var d=kb(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var cm=function(a){var b;F(this.i.a,["path:!string"],arguments);De(this,"access_globals","read",a);var c=a.split("."),d=B,e;for(e=0;e<c.length-1;e++){var f=c[e];d===B&&d[f]&&!d.hasOwnProperty(f)&&I(47);d=d[c[e]];if(null==d)return}var g=c[e];d===B&&d[g]&&!d.hasOwnProperty(g)&&I(47);b=d[c[e]];var k=kb(b,this.m);void 0===k&&void 0!==b&&I(45);return k};var dm=function(a,b){var c=null;return kb(c,this.m)};var em=function(a){var b;F(this.i.a,["path:!string"],arguments);De(this,"access_globals","readwrite",a);var c=a.split("."),d=Ya(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ba(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return kb(b,this.m)};var fm=function(a){var b;return b};var gm=function(a,b){b=void 0===b?!0:b;var c;return c};var hm=function(a,b){var c;return c};var im=function(a,b){var c;return c};var jm=function(a){var b="";return b};var km=function(a){var b="";return b};var Oe=function(){De(this,"get_user_agent");return B.navigator.userAgent};var lm=function(a,b){};var mm={},nm=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);De(this,"inject_script",a);var e=this.m,f=function(){b instanceof bb&&b.Fa(e)},g=function(){c instanceof bb&&c.Fa(e)};if(!d){Ye(a,f,g);return}var k=d;mm[k]?(mm[k].onSuccess.push(f),mm[k].onFailure.push(g)):(mm[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=mm[k].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=mm[k].onFailure,m=0;m<l.length;m++)N(l[m]);mm[k]=null},Ye(a,f,g));};var om=function(){return!1},pm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var qm=function(){try{De(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=lb(a[b],this.m);console.log.apply(console,a);};var rm=function(a,b){var c=!1;return c};var sm=function(){var a="";return a};var tm=function(){var a="";return a};var um=function(a,b,c){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);De(this,"send_pixel",a);var d=this.m;af(a,function(){b instanceof bb&&b.Fa(d)},function(){c instanceof bb&&c.Fa(d)});};var vm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var wm=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);De(this,"access_globals","readwrite",a);var d=a.split("."),e=B,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=lb(b,this.m),!0;return!1};var xm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var ym=function(a,b,c){var d=this;};var zm={},Am={};zm.getItem=function(a){var b=null;return b};
zm.setItem=function(a,b){};
zm.removeItem=function(a){};zm.clear=function(){};var Bm=function(a){var b;return b};var Dc=function(){var a=new Ne;Ki()?(a.add("injectHiddenIframe",Aa),a.add("injectScript",Aa)):(a.add("injectHiddenIframe",lm),a.add("injectScript",nm));var b=um;a.add("Math",ve());a.add("TestHelper",Qe());a.add("addEventCallback",Yl);a.add("aliasInWindow",Zl);a.add("assertApi",re);a.add("assertThat",se);a.add("callInWindow",
$l);a.add("callLater",am);a.add("copyFromDataLayer",bm);a.add("copyFromWindow",cm);a.add("createArgumentsQueue",dm);a.add("createQueue",em);a.add("decodeUri",we);a.add("decodeUriComponent",xe);a.add("encodeUri",ye);a.add("encodeUriComponent",ze);a.add("fail",Ae);a.add("fromBase64",fm,!("atob"in B));a.add("generateRandom",Be);a.add("getContainerVersion",Ee);a.add("getCookieValues",gm);a.add("getQueryParameters",hm);a.add("getReferrerQueryParameters",im);a.add("getReferrerUrl",jm);a.add("getTimestamp",
Ce);a.add("getType",Fe);a.add("getUrl",km);a.add("localStorage",pm,!om());a.add("logToConsole",qm);a.add("makeInteger",He);a.add("makeNumber",Ie);a.add("makeString",Je);a.add("makeTableMap",Ke);a.add("mock",Me);a.add("queryPermission",rm);a.add("readCharacterSet",sm);a.add("readTitle",tm);a.add("sendPixel",b);a.add("setCookie",vm);a.add("setInWindow",wm);a.add("sha256",ym);a.add("templateStorage",zm);a.add("toBase64",Bm,!("btoa"in B));a.add("JSON",Ge(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.wb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");
}return d}};var Bc,Kd;
function Cm(){var a=data.runtime||[],b=data.runtime_lines;Bc=new zc;Dm();bd=function(e,f,g){Em(f);var k=new fb;Ka(f,function(r,u){var v=kb(u);void 0===v&&void 0!==u&&I(44);k.set(r,v)});Bc.a.a.s=xd();var l={hg:Md(e),eventId:void 0!==g?g.id:void 0,wb:function(){return e},log:function(){}};if(Nj()){var m=Oj(),n=void 0,q=void 0;l.da={i:{},a:function(r,u,v){1===u&&(n=r);7===u&&(q=v);m(r,u,v)},m:Le()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var t=
Cc(l,[e,k]);Bc.a.a.s=void 0;t instanceof qa&&"return"===t.a&&(t=t.i);return lb(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Ea(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.ac(d)}}function Em(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ba(b)&&(a.gtmOnSuccess=function(){N(b)});Ba(c)&&(a.gtmOnFailure=function(){N(c)})}
function Dm(){var a=Bc;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}function Fm(a){void 0!==a&&Ka(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");eg[e]=eg[e]||[];eg[e].push(b)}})};var Gm="HA GF GP G UA AW DC".split(" "),Hm=!1,Im={},Jm=!1;function Km(a,b){var c={event:a};b&&(c.eventModel=D(b),b[H.Hc]&&(c.eventCallback=b[H.Hc]),b[H.Ob]&&(c.eventTimeout=b[H.Ob]));return c}var Mm=function(){return Hm};
var Om={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=Km(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Jm=!0,Mm(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=D(a[1]):3==a.length&&p(a[1])&&(b={},jb(a[2])||Ea(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};Om.consent=function(a){if(3===a.length){var b=function(){Mm()&&D(a[2],{subcommand:a[1]})};I(39);var c=a[1];if("default"===c){b();Af(a[2]);return}if("update"===c){b();Bf(a[2]);return}}};
var Pm={policy:!0};var Qm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Sm=function(a){var b=Rm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Tm=!1,Um=[];function Vm(){if(!Tm){Tm=!0;for(var a=0;a<Um.length;a++)N(Um[a])}}var Wm=function(a){Tm?N(a):Um.push(a)};var nn=function(a){if(mn(a))return a;this.a=a};nn.prototype.Qg=function(){return this.a};var mn=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};nn.prototype.getUntrustedUpdateValue=nn.prototype.Qg;var on=[],pn=!1,qn=function(a){return B["marketingClientDataLayer"].push(a)},rn=function(a){var b=Q["marketingClientDataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function sn(a){var b=a._clear;Ka(a,function(f,g){"_clear"!==f&&(b&&Kg(f,void 0),Kg(f,g))});ag||(ag=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=fg(),a["gtm.uniqueEventId"]=d,Kg("gtm.uniqueEventId",d));var e=tn(a);switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function tn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Q.zones;d=e?e.checkState(Gd.B,c):gj;return d.active?Zj(c,b,d.isAllowed||d.isWhitelist,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function un(){for(var a=!1;!pn&&0<on.length;){pn=!0;delete Eg.eventModel;Gg();var b=on.shift();if(null!=b){var c=mn(b);if(c){var d=b;b=mn(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Hg(g,1);if(Ea(k)||jb(k))k=D(k);Fg[g]=k}}try{if(Ba(b))try{b.call(Ig)}catch(v){}else if(Ea(b)){var l=
b;if(p(l[0])){var m=l[0].split("."),n=m.pop(),q=l.slice(1),t=Hg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{if(La(b)){a:{var r=b;if(r.length&&p(r[0])){var u=Om[r[0]];if(u&&(!c||!Pm[r[0]])){b=u(r);break a}}b=void 0}if(!b){pn=!1;continue}}a=sn(b)||a}}finally{c&&Gg(!0)}}pn=!1}return!a}
function vn(){var a=un();try{Qm(B["marketingClientDataLayer"],Gd.B)}catch(b){}return a}
var xn=function(){var a=We("marketingClientDataLayer",[]),b=We("google_tag_manager",{});b=b["marketingClientDataLayer"]=b["marketingClientDataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Wm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Q.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new nn(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);on.push.apply(on,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var k="boolean"!==typeof g||g;return un()&&k};var d=a.slice(0);on.push.apply(on,d);wn()&&N(vn)},wn=function(){var a=!0;return a};var yn={};yn.Pb=new String("undefined");
var zn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===yn.Pb?b:a[d]);return c.join("")}};zn.prototype.toString=function(){return this.a("undefined")};zn.prototype.valueOf=zn.prototype.toString;yn.Pf=zn;yn.Sc={};yn.zg=function(a){return new zn(a)};var An={};yn.Ah=function(a,b){var c=fg();An[c]=[a,b];return c};yn.ye=function(a){var b=a?0:1;return function(c){var d=An[c];if(d&&"function"===typeof d[b])d[b]();An[c]=void 0}};yn.Yg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};yn.sh=function(a){if(a===yn.Pb)return a;var b=fg();yn.Sc[b]=a;return'google_tag_manager["'+Gd.B+'"].macro('+b+")"};yn.jh=function(a,b,c){a instanceof yn.Pf&&(a=a.a(yn.Ah(b,c)),b=Aa);return{ed:a,H:b}};var Bn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||df(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Cn=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Dn=function(a,b,c){Cn(a)[b]=c},En=function(a,b,c,d){var e=Cn(a),f=Sa(e,b,d);e[b]=c(f)},Fn=function(a,b,c){var d=Cn(a);return Sa(d,b,c)};var Gn=["input","select","textarea"],Hn=["button","hidden","image","reset","submit"],In=function(a){var b=a.tagName.toLowerCase();return!Ga(Gn,function(c){return c===b})||"input"===b&&Ga(Hn,function(c){return c===a.type.toLowerCase()})?!1:!0},Jn=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):gf(a,["form"],100)},Kn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(In(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Ln=!!B.MutationObserver,Mn=void 0,Nn=function(a){if(!Mn){var b=function(){var c=K.body;if(c)if(Ln)(new MutationObserver(function(){for(var e=0;e<Mn.length;e++)N(Mn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;bf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Mn.length;e++)N(Mn[e])}))})}};Mn=[];K.body?b():N(b)}Mn.push(a)};var io=B.clearTimeout,jo=B.setTimeout,T=function(a,b,c){if(Ki()){b&&N(b)}else return Ye(a,b,c)},ko=function(){return B.location.href},lo=function(a){return Ug(Wg(a),"fragment")},mo=function(a){return Vg(Wg(a))},no=function(a,b){return Hg(a,b||2)},oo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=qn(a)):d=qn(a);return d},po=function(a,b){B[a]=b},V=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=
b);return B[a]},qo=function(a,b,c){return $g(a,b,void 0===c?!0:!!c)},ro=function(a,b){if(Ki()){b&&N(b)}else $e(a,b)},so=function(a){return!!Fn(a,"init",!1)},to=function(a){Dn(a,"init",!0)},uo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$f;c+="?id="+encodeURIComponent(a)+"&l=marketingClientDataLayer";T(Mi("https://","http://",c))},vo=function(a,b){var c=a[b];return c};
var wo=yn.jh;function To(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Uo=new Ia;function Vo(a,b){function c(g){var k=Wg(g),l=Ug(k,"protocol"),m=Ug(k,"host",!0),n=Ug(k,"port"),q=Ug(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Wo(a){return Xo(a)?1:0}
function Xo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ea(c)){for(var d=0;d<c.length;d++)if(Wo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return To(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=Fa(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,q=Uo.get(n);q||(q=new RegExp(c,m),Uo.set(n,q));l=q.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Vo(b,c)}return!1};var Yo={},Zo=encodeURI,W=encodeURIComponent,$o=af;var ap=function(a,b){if(!a)return!1;var c=Ug(Wg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var bp=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Yo.Zg=function(){var a=!1;return a};function uq(){return B.gaGlobal=B.gaGlobal||{}}var vq=function(){var a=uq();a.hid=a.hid||Ha();return a.hid},wq=function(a,b){var c=uq();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Fq=window,Gq=document,Hq=function(a){var b=Fq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fq["ga-disable-"+a])return!0;try{var c=Fq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Yg("AMP_TOKEN",String(Gq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gq.getElementById("__gaOptOutExtension")?!0:!1};function Kq(a){delete a.eventModel[H.fb];Mq(a.eventModel)}var Mq=function(a){Ka(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ma]||{};Ka(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Pq=function(a,b,c){Ql(b,c,a)},Qq=function(a,b,c){Ql(b,c,a,!0)},Sq=function(a,b){};
function Rq(a,b){}var Y={b:{}};
Y.b.send_pixel=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__send_pixel=b;Y.__send_pixel.g="send_pixel";Y.__send_pixel.h=!0;Y.__send_pixel.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"URL must be a string.");try{if(ie(Wg(f),c))return}catch(g){throw d(e,{},"Invalid URL filter.");}throw d(e,{},"Prohibited URL: "+f+".");},K:a}})}();

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(Mg(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=no("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ug(Wg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):mo(String(b)):String(b)})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Fa(e,t))return}else if("write"===q){if(-1<Fa(f,t))return}else if("readwrite"===q){if(-1<Fa(f,t)&&-1<Fa(e,t))return}else if("execute"===q){if(-1<Fa(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},K:a}})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=no("gtm.url",1);c=c||ko();var d=b[a("vtp_component")];if(!d||"URL"==d)return mo(String(c));var e=Wg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ea(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ug(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ug(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=no(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.b.ua=["google"],function(){var a,b={},c=function(e){Ef(function(){d(e)},[H.J,H.o])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;D(bp(n.vtp_fieldsToSet,"fieldName","value"),g);D(bp(n.vtp_contentGroup,"index","group"),k);D(bp(n.vtp_dimension,"index","dimension"),l);D(bp(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=D(n);e=D(e,q)}D(bp(e.vtp_fieldsToSet,
"fieldName","value"),g);D(bp(e.vtp_contentGroup,"index","group"),k);D(bp(e.vtp_dimension,"index","dimension"),l);D(bp(e.vtp_metric,"index","metric"),m);Cf(H.J)||(g.storage="none");Cf(H.o)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Ba(t)){var r="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,r=u+"."):(u="gtm"+fg(),r=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(P){var R=[].slice.call(arguments,
0);R[0]=r+R[0];t.apply(window,R)},x=function(P,R){return void 0===R?R:P(R)},A=function(P,R){if(R)for(var Va in R)R.hasOwnProperty(Va)&&y("set",P+Va,R[Va])},C=function(){var P=function(Wq,Vk,Xq){if(!jb(Vk))return!1;for(var Ld=Sa(Object(Vk),Xq,[]),dh=0;Ld&&dh<Ld.length;dh++)y(Wq,Ld[dh]);return!!Ld&&0<Ld.length},R;if(e.vtp_useEcommerceDataLayer){var Va=!1;Va||(R=no("ecommerce",1))}else e.vtp_ecommerceMacroData&&(R=e.vtp_ecommerceMacroData.ecommerce);if(!jb(R))return;R=Object(R);var bc=Sa(g,"currencyCode",R.currencyCode);void 0!==bc&&y("set","&cu",bc);P("ec:addImpression",R,"impressions");if(P("ec:addPromo",R[R.promoClick?"promoClick":"promoView"],"promotions")&&R.promoClick){y("ec:setAction","promo_click",R.promoClick.actionField);return}for(var Na="detail checkout checkout_option click add remove purchase refund".split(" "),
ob="refund purchase remove checkout checkout_option add click detail".split(" "),pb=0;pb<Na.length;pb++){var zb=R[Na[pb]];if(zb){P("ec:addProduct",zb,"products");y("ec:setAction",Na[pb],zb.actionField);if(xg)for(var Sb=0;Sb<ob.length;Sb++){var Vc=R[ob[Sb]];if(Vc){Vc!==zb&&I(13);break}}break}}},z=function(P,R,Va){var bc=0;if(P)for(var Na in P)if(P.hasOwnProperty(Na)&&(Va&&v[Na]||!Va&&void 0===v[Na])){var ob=w[Na]?Oa(P[Na]):P[Na];"anonymizeIp"!=
Na||ob||(ob=void 0);R[Na]=ob;bc++}return bc},E={name:u};e.vtp_transportUrl&&(g._x_19=e.vtp_transportUrl);z(g,E,!0);t("create",e.vtp_trackingId||f.trackingId,E);y("set","&gtm",pk(!0));vf()&&y("set","&gcs",Df());g._x_19&&(null==Ve&&delete g._x_19,
g._x_20&&!b[u]&&(b[u]=!0,t(Ij(u,g._x_20))));e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,R){void 0!==e[R]&&y("set",P,e[R])})("nonInteraction","vtp_nonInteraction");A("contentGroup",k);A("dimension",l);A("metric",m);var G={};z(g,G,!1)&&y("set",G);var L;e.vtp_enableLinkId&&
y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=g&&g.hitCallback;Ba(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var S={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Ma,e.vtp_eventValue||f.value)};z(L,
S,!1);y("send",S);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==
e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var aa=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var Da="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:Da})}L?y("send","pageview",L):y("send","pageview");}if(!a){var va=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(va="internal/"+va);a=!0;var $a=bk(g._x_19,"/analytics.js"),pa=Mi("https:","http:","//www.google-analytics.com/"+va,g&&g.forceSSL);T("analytics.js"===va&&$a?$a:pa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else N(e.vtp_gtmOnFailure)};
Y.__ua=c;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0}();

Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ie(Wg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();





Y.b.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.priorityOverride=0})(function(a){var b=D(a),c=b;c[rd.Ka]=null;c[rd.vf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.b.read_data_layer=["google"],function(){function a(b,c){return{key:c}}(function(b){Y.__read_data_layer=b;Y.__read_data_layer.g="read_data_layer";Y.__read_data_layer.h=!0;Y.__read_data_layer.priorityOverride=0})(function(b){var c=b.vtp_keyPatterns||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Keys must be strings.");try{var g;a:{for(var k=0;k<c.length;k++){var l=f,m=c[k];if(!de.exec(m))throw Error("Invalid key wildcard");var n=m.indexOf(".*"),q=-1!==n&&n===
m.length-2,t=q?m.slice(0,m.length-2):m,r;b:if(0===l.length)r=!1;else{for(var u=l.split("."),v=0;v<u.length;v++)if(!ce.exec(u[v])){r=!1;break b}r=!0}if(!r||t.length>l.length||!q&&l.length!=m.length?0:q?0===l.indexOf(t)&&(l===t||"."==l.charAt(t.length)):l===t){g=!0;break a}}g=!1}if(g)return}catch(w){throw d(e,{},"Invalid key filter.");}throw d(e,{},"Prohibited read from data layer variable: "+f+".");},K:a}})}();Y.b.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.g="logging";Y.__logging.h=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!Yo.Zg())throw d(e,{},"Logging is not enabled in all environments");},K:a}})}();Y.b.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=bp(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Y.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Xe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=wo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.ed,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(K.body,ff(g),k,e)()}else jo(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();








var Tq={};Tq.macro=function(a){if(yn.Sc.hasOwnProperty(a))return yn.Sc[a]},Tq.onHtmlSuccess=yn.ye(!0),Tq.onHtmlFailure=yn.ye(!1);Tq.dataLayer=Ig;Tq.callback=function(a){dg.hasOwnProperty(a)&&Ba(dg[a])&&dg[a]();delete dg[a]};function Uq(){Q[Gd.B]=Tq;Ua(eg,Y.b);jd=jd||yn;kd=Cd}
function Vq(){kf.gtm_3pds=!0;kf.gtag_cs_api=!0;Q=B.google_tag_manager=B.google_tag_manager||{};if(Q[Gd.B]){var a=Q.zones;a&&a.unregisterChild(Gd.B);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)ed.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(q)}hd=Y;id=Wo;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Cm();Kd=new Jd(r);if(void 0!==
u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");eg[x]=w}Fm(v);Uq();xn();jj=!1;kj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)mj();else{bf(K,"DOMContentLoaded",mj);bf(K,"readystatechange",mj);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!B.frameElement}catch(G){}A&&nj()}bf(B,"load",mj)}Tm=!1;"complete"===K.readyState?Vm():bf(B,"load",Vm);a:{if(!xg)break a;B.setInterval(yg,864E5);}
bg=(new Date).getTime();}}
(function(a){a()})(Vq);

})()
