// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT
* Default Animation
*/

(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/* CHOCOLAT JS
 * Lightbox Plugin
 */

; (function($, window, document, undefined) {
    var calls = 0;
    var defaults = {
        container         : window, // window or jquery object or jquery selector, or element
        imageSelector     : '.chocolat-image',
        className         : '',
        imageSize         : 'default', // 'default', 'contain', 'cover' or 'native'
        initialZoomState  : null,
        fullScreen        : false,
        loop              : false,
        linkImages        : true,
        duration          : 300,
        setTitle          : '',
        separator2        : '/',
        setIndex          : 0,
        firstImage        : 0,
        lastImage         : false,
        currentImage      : false,
        initialized       : false,
        timer             : false,
        timerDebounce     : false,
        images            : [],
    };

    function Chocolat(element, settings) {
        var that = this;

        this.settings  = settings;
        this._defaults = defaults;
        this.elems     = {};
        this.element   = element;

        this._cssClasses = [
            'chocolat-open',
            'chocolat-mobile',
            'chocolat-in-container',
            'chocolat-cover',
            'chocolat-zoomable',
            'chocolat-zoomed'
        ];

        if (!this.settings.setTitle && element.data('chocolat-title')) {
            this.settings.setTitle = element.data('chocolat-title');
        }


        this.element.find(this.settings.imageSelector).each(function () {
            that.settings.images.push({
                title  : $(this).attr('title'),
                src    : $(this).attr('href'),
                height : false,
                width  : false
            });
        });

        this.element.find(this.settings.imageSelector).each(function (i) {
            $(this).off('click.chocolat').on('click.chocolat', function(e){
                that.init(i);
                e.preventDefault();
            });
        });

        return this;
    }
    $.extend(Chocolat.prototype, {

        init : function(i) {
            if (!this.settings.initialized) {
                this.setDomContainer();
                this.markup();
                this.events();
                this.settings.lastImage   = this.settings.images.length - 1;
                this.settings.initialized = true;
            }

            return this.load(i);
        },

        preload : function(i) {
            var def = $.Deferred();

            if (typeof this.settings.images[i] === 'undefined') {
                return;
            }
            var imgLoader    = new Image();
            imgLoader.onload = function() { def.resolve(imgLoader); };
            imgLoader.src    = this.settings.images[i].src;

            return def;
        },

        load : function(i) {
            var that = this;
            if (this.settings.fullScreen) {
                this.openFullScreen();
            }

            if (this.settings.currentImage === i) {
                return;
            }

            this.elems.overlay.fadeIn(800);
            this.settings.timer = setTimeout(function(){
                if (typeof that.elems != 'undefined') {
                    $.proxy(that.elems.loader.fadeIn(), that);
                }
            }, 800);

            var deferred = this.preload(i)
                .then(function (imgLoader) {
                    return that.place(i, imgLoader);
                })
                .then(function (imgLoader) {
                    return that.appear(i);
                })
                .then(function (imgLoader) {
                    that.zoomable();
                });

            var nextIndex = i + 1;
            if (typeof this.settings.images[nextIndex] != 'undefined') {
                this.preload(nextIndex);
            }

            return deferred;

        },

        place : function(i, imgLoader) {
            var that = this;
            var fitting;

            this.settings.currentImage = i;
            this.description();
            this.pagination();
            this.arrows();

            this.storeImgSize(imgLoader, i);
            fitting = this.fit(i, that.settings.container);

            return this.center(
                fitting.width,
                fitting.height,
                fitting.left,
                fitting.top,
                0
            );
        },

        center : function(width, height, left, top, duration) {

            return this.elems.content
                .css('overflow', 'visible')
                .animate({
                    'width'  :width,
                    'height' :height,
                    'left'   :left,
                    'top'    :top
                }, duration)
                .promise();
        },

        appear : function(i) {
            var that = this;
            clearTimeout(this.settings.timer);

            this.elems.loader.stop().fadeOut(300, function() {
                that.elems.img
                    .attr('src', that.settings.images[i].src);
            });
        },

        fit : function(i, container) {
            var height;
            var width;

            var imgHeight        = this.settings.images[i].height;
            var imgWidth         = this.settings.images[i].width;
            var holderHeight     = $(container).height();
            var holderWidth      = $(container).width();
            var holderOutMarginH = this.getOutMarginH();
            var holderOutMarginW = this.getOutMarginW();

            var holderGlobalWidth  = holderWidth-holderOutMarginW;
            var holderGlobalHeight = holderHeight-holderOutMarginH;
            var holderGlobalRatio  = (holderGlobalHeight / holderGlobalWidth);
            var holderRatio        = (holderHeight / holderWidth);
            var imgRatio           = (imgHeight / imgWidth);

            if (this.settings.imageSize == 'cover') {
                if (imgRatio < holderRatio) {
                    height = holderHeight;
                    width = height / imgRatio;
                }
                else {
                    width = holderWidth;
                    height = width * imgRatio;
                }
            }
            else if (this.settings.imageSize == 'native') {
                height = imgHeight;
                width = imgWidth;
            }
            else {
                if (imgRatio > holderGlobalRatio) {
                    height = holderGlobalHeight;
                    width = height / imgRatio;
                }
                else {
                    width = holderGlobalWidth;
                    height = width * imgRatio;
                }
                if (this.settings.imageSize === 'default' && (width >= imgWidth || height >= imgHeight)) {
                    width = imgWidth;
                    height = imgHeight;
                }
            }

            return {
                'height' : height,
                'width'  : width,
                'top'    : (holderHeight - height)/2,
                'left'   : (holderWidth - width)/2
            };
        },

        change : function(signe) {
            this.zoomOut(0);
            this.zoomable();

            var requestedImage = this.settings.currentImage + parseInt(signe);
            if (requestedImage > this.settings.lastImage) {
                if (this.settings.loop) {
                    return this.load(0);
                }
            }
            else if (requestedImage < 0) {
                if (this.settings.loop) {
                    return this.load(this.settings.lastImage);
                }
            }
            else {
                return this.load(requestedImage);
            }
        },

        arrows: function() {
            if (this.settings.loop) {
                $([this.elems.left[0],this.elems.right[0]])
                    .addClass('active');
            }
            else if (this.settings.linkImages) {
                // right
                if (this.settings.currentImage == this.settings.lastImage) {
                    this.elems.right.removeClass('active');
                }
                else {
                    this.elems.right.addClass('active');
                }
                // left
                if (this.settings.currentImage === 0) {
                    this.elems.left.removeClass('active');
                }
                else {
                    this.elems.left.addClass('active');
                }
            }
            else {
                $([this.elems.left[0],this.elems.right[0]])
                    .removeClass('active');
            }
        },

        description : function() {
            var that = this;
            this.elems.description
                .html(that.settings.images[that.settings.currentImage].title);
        },

        pagination : function() {
            var that      = this;
            var last      = this.settings.lastImage + 1;
            var position  = this.settings.currentImage + 1;

            this.elems.pagination
                .html(position + ' ' + that.settings.separator2 + last);
        },

        storeImgSize : function(img, i) {
            if (typeof img === 'undefined') {
                return;
            }
            if (!this.settings.images[i].height || !this.settings.images[i].width) {
                this.settings.images[i].height = img.height;
                this.settings.images[i].width  = img.width;
            }
        },

        close : function() {

            if (this.settings.fullscreenOpen) {
                this.exitFullScreen();
                return;
            }

            var els = [
                this.elems.overlay[0],
                this.elems.loader[0],
                this.elems.wrapper[0]
            ];
            var that = this;
            var def = $.when($(els).fadeOut(200)).done(function () {
                that.elems.domContainer.removeClass(that._cssClasses.join(' '));
            });
            this.settings.currentImage = false;
            this.settings.initialized = false;

            return def;
        },

        destroy : function() {
            this.element.removeData();
            this.element.find(this.settings.imageSelector).off('click.chocolat');

            if (!this.settings.initialized) {
                return;
            }
            if (this.settings.fullscreenOpen) {
                this.exitFullScreen();
            }
            this.settings.currentImage = false;
            this.settings.initialized = false;
            this.elems.domContainer.removeClass(this._cssClasses.join(' '));
            this.elems.wrapper.remove();
        },

        getOutMarginW : function() {
            var left  = this.elems.left.outerWidth(true);
            var right = this.elems.right.outerWidth(true);
            return left + right;
        },

        getOutMarginH : function() {
            return this.elems.top.outerHeight(true) + this.elems.bottom.outerHeight(true);
        },

        markup : function() {
            this.elems.domContainer.addClass('chocolat-open ' + this.settings.className);
            if (this.settings.imageSize == 'cover') {
                this.elems.domContainer.addClass('chocolat-cover');
            }
            if (this.settings.container !== window) {
                this.elems.domContainer.addClass('chocolat-in-container');
            }

            this.elems.wrapper = $('<div/>', {
                'class' : 'chocolat-wrapper',
                'id' : 'chocolat-content-' + this.settings.setIndex
            }).appendTo(this.elems.domContainer);

            this.elems.overlay = $('<div/>', {
                'class' : 'chocolat-overlay'
            }).appendTo(this.elems.wrapper);

            this.elems.loader = $('<div/>', {
                'class' : 'chocolat-loader'
            }).appendTo(this.elems.wrapper);

            this.elems.content = $('<div/>', {
                'class' : 'chocolat-content',
            }).appendTo(this.elems.wrapper);

            this.elems.img = $('<img/>', {
                'class' : 'chocolat-img',
                'src' : ''
            }).appendTo(this.elems.content);

            this.elems.top = $('<div/>', {
                'class' : 'chocolat-top'
            }).appendTo(this.elems.wrapper);

            this.elems.left = $('<div/>', {
                'class' : 'chocolat-left'
            }).appendTo(this.elems.wrapper);

            this.elems.right = $('<div/>', {
                'class' : 'chocolat-right'
            }).appendTo(this.elems.wrapper);

            this.elems.bottom = $('<div/>', {
                'class' : 'chocolat-bottom'
            }).appendTo(this.elems.wrapper);

            this.elems.fullscreen = $('<span/>', {
                'class' : 'chocolat-fullscreen'
            }).appendTo(this.elems.bottom);

            this.elems.description = $('<span/>', {
                'class' : 'chocolat-description'
            }).appendTo(this.elems.bottom);

            this.elems.pagination = $('<span/>', {
                'class' : 'chocolat-pagination'
            }).appendTo(this.elems.bottom);

            this.elems.setTitle = $('<span/>', {
                'class' : 'chocolat-set-title',
                'html' : this.settings.setTitle
            }).appendTo(this.elems.bottom);

            this.elems.close = $('<span/>', {
                'class' : 'chocolat-close'
            }).appendTo(this.elems.top);
        },

        openFullScreen : function() {
            var wrapper = this.elems.wrapper[0];

            if (wrapper.requestFullscreen) {
                this.settings.fullscreenOpen = true;
                wrapper.requestFullscreen();
            }
            else if (wrapper.mozRequestFullScreen) {
                this.settings.fullscreenOpen = true;
                wrapper.mozRequestFullScreen();
            }
            else if (wrapper.webkitRequestFullscreen) {
                this.settings.fullscreenOpen = true;
                wrapper.webkitRequestFullscreen();
            }
            else if (wrapper.msRequestFullscreen) {
                wrapper.msRequestFullscreen();
                this.settings.fullscreenOpen = true;
            }
            else {
                this.settings.fullscreenOpen = false;
            }
        },

        exitFullScreen : function() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                this.settings.fullscreenOpen = false;
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                this.settings.fullscreenOpen = false;
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
                this.settings.fullscreenOpen = false;
            }
            else {
                this.settings.fullscreenOpen = true;
            }
        },

        events : function() {
            var that = this;

            $(document).off('keydown.chocolat').on('keydown.chocolat', function(e) {
                if (that.settings.initialized) {
                    if (e.keyCode == 37) {
                        that.change(-1);
                    }
                    else if (e.keyCode == 39) {
                        that.change(1);
                    }
                    else if (e.keyCode == 27) {
                        that.close();
                    }
                }
            });
            // this.elems.wrapper.find('.chocolat-img')
            //     .off('click.chocolat')
            //     .on('click.chocolat', function(e) {
            //         var currentImage = that.settings.images[that.settings.currentImage];
            //         if(currentImage.width > $(that.elems.wrapper).width() || currentImage.height > $(that.elems.wrapper).height() ){
            //             that.toggleZoom(e);
            //         }
            // });

            this.elems.wrapper.find('.chocolat-right')
                .off('click.chocolat')
                .on('click.chocolat', function() {
                    that.change(+1);
            });

            this.elems.wrapper.find('.chocolat-left')
                .off('click.chocolat')
                .on('click.chocolat', function() {
                    return that.change(-1);
            });

            $([this.elems.overlay[0], this.elems.close[0]])
                .off('click.chocolat')
                .on('click.chocolat', function() {
                    return that.close();
            });

            this.elems.fullscreen
                .off('click.chocolat')
                .on('click.chocolat', function() {
                    if (that.settings.fullscreenOpen) {
                        that.exitFullScreen();
                        return;
                    }

                    that.openFullScreen();
            });

            if (that.settings.backgroundClose) {
                this.elems.overlay
                    .off('click.chocolat')
                    .on('click.chocolat', function() {
                        return that.close();
                });
            }
            this.elems.wrapper.find('.chocolat-img')
                .off('click.chocolat')
                .on('click.chocolat', function(e) {
                    if (that.settings.initialZoomState === null && that.elems.domContainer.hasClass('chocolat-zoomable')) {
                        return that.zoomIn(e);
                    }
                    else {
                        return that.zoomOut(e);
                    }

            });

            this.elems.wrapper.mousemove(function( e ) {
                if (that.settings.initialZoomState === null) {
                    return;
                }
                if (that.elems.img.is(':animated')) {
                    return;
                }

                var pos = $(this).offset();
                var height = $(this).height();
                var width = $(this).width();

                var currentImage = that.settings.images[that.settings.currentImage];
                var imgWidth = currentImage.width;
                var imgHeight = currentImage.height;

                var coord = [e.pageX - width/2 - pos.left, e.pageY - height/2 - pos.top];

                var mvtX = 0;
                if (imgWidth > width) {
                    mvtX = coord[0] / (width / 2);
                    mvtX = ((imgWidth - width + 0)/ 2) * mvtX;
                }

                var mvtY = 0;
                if (imgHeight > height) {
                    mvtY = coord[1] / (height / 2);
                    mvtY = ((imgHeight - height + 0) / 2) * mvtY;
                }

                var animation = {
                    'margin-left': - mvtX + 'px',
                    'margin-top': - mvtY + 'px'
                };
                if (typeof e.duration !== 'undefined') {
                    $(that.elems.img).stop(false, true).animate(animation, e.duration);
                }
                else {
                    $(that.elems.img).stop(false, true).css(animation);
                }

            });
            $(window).on('resize', function() {
                if (!that.settings.initialized) {
                    return;
                }
                that.debounce(50, function() {
                    fitting = that.fit(that.settings.currentImage, that.settings.container);
                    that.center(fitting.width, fitting.height, fitting.left, fitting.top, 0);
                    that.zoomable();
                });
            });
        },

        zoomable : function () {
            var currentImage = this.settings.images[this.settings.currentImage];
            var wrapperWidth = this.elems.wrapper.width();
            var wrapperHeight = this.elems.wrapper.height();

            var isImageZoomable = currentImage.width > wrapperWidth || currentImage.height > wrapperHeight;
            var isImageStretched = this.elems.img.width() > currentImage.width || this.elems.img.height() > currentImage.height;


            if (isImageZoomable && !isImageStretched) {
                this.elems.domContainer.addClass('chocolat-zoomable');
            }
            else {
                this.elems.domContainer.removeClass('chocolat-zoomable');
            }
        },

        zoomIn : function (e) {
            this.settings.initialZoomState = this.settings.imageSize;
            this.settings.imageSize = 'native';

            var event = $.Event('mousemove');
            event.pageX = e.pageX;
            event.pageY = e.pageY;
            event.duration = this.settings.duration;
            this.elems.wrapper.trigger(event);

            this.elems.domContainer.addClass('chocolat-zoomed');
            fitting = this.fit(this.settings.currentImage, this.settings.container);
            return this.center(fitting.width, fitting.height, fitting.left, fitting.top, this.settings.duration);
        },

        zoomOut : function (e, duration) {
            if (this.settings.initialZoomState === null) {
                return;
            }
            duration = duration || this.settings.duration;

            this.settings.imageSize = this.settings.initialZoomState;
            this.settings.initialZoomState = null;
            this.elems.img.animate({'margin': 0}, duration);

            this.elems.domContainer.removeClass('chocolat-zoomed');
            fitting = this.fit(this.settings.currentImage, this.settings.container);
            return this.center(fitting.width, fitting.height, fitting.left, fitting.top, duration);
        },

        setDomContainer : function() {
            // if container == window
            // domContainer = body
            if ( this.settings.container === window) {
                this.elems.domContainer = $('body');
            }
            else {
                this.elems.domContainer = $(this.settings.container);
            }
        },

        debounce: function(duration, callback) {
            clearTimeout(this.settings.timerDebounce);
            this.settings.timerDebounce = setTimeout(function() {
                callback();
            }, duration);
        },

        api: function() {
            var that = this;
            return {
                open : function(i){
                    i = parseInt(i) || 0;
                    return that.init(i);
                },

                close : function(){
                    return that.close();
                },

                next : function(){
                    return that.change(1);
                },

                prev : function(){
                    return that.change(-1);
                },

                goto : function(i){ // open alias
                    return that.open(i);
                },
                current : function(){
                    return that.settings.currentImage;
                },

                place : function(){
                    return that.place(that.settings.currentImage, that.settings.duration);
                },

                destroy : function(){
                    return that.destroy();
                },

                set : function(property, value){
                    that.settings[property] = value;
                    return value;
                },

                get : function(property){
                    return that.settings[property];
                },

                getElem : function(name){
                    return that.elems[name];
                },
            };
        }
    });

    $.fn.Chocolat = function (options) {
        return this.each(function() {

            calls++;

            var settings = $.extend(true, {}, defaults, options, {setIndex:calls} );

            if (!$.data(this, 'chocolat')) {
                $.data(this, 'chocolat',
                    new Chocolat($(this), settings)
                );
            }
        });
    };
})( jQuery, window, document );

// WOW JS intiialization

var wow = new WOW(
  {
    boxClass:     'animate',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

/* Set WOW Animation offset to bottom of content's height
 *

$(".animate").each(function() {
  var wowHeight = $(this).height();
  $(this).attr("data-wow-offset", wowHeight);
});
*/

/* Smooth Scroll */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});