(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"gap":10,"definitions": [{"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_64CBE515_7617_BDAD_41D2_697A483C215B_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"height":3072,"width":36864,"rowCount":6,"url":"media/panorama_64CBE515_7617_BDAD_41D2_697A483C215B_0/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":72},{"height":1536,"width":18432,"rowCount":3,"url":"media/panorama_64CBE515_7617_BDAD_41D2_697A483C215B_0/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"height":1024,"width":12288,"rowCount":2,"url":"media/panorama_64CBE515_7617_BDAD_41D2_697A483C215B_0/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"height":2048,"width":24576,"rowCount":1,"url":"media/panorama_64CBE515_7617_BDAD_41D2_697A483C215B_0/vr2gen/{column}.jpg","tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":12}]}}],"class":"Panorama","thumbnailUrl":"media/panorama_64CBE515_7617_BDAD_41D2_697A483C215B_t.jpg","partial":false,"id":"panorama_64CBE515_7617_BDAD_41D2_697A483C215B","vfov":180,"overlays":["this.overlay_629E609E_7630_94DF_41D7_CF1A093E2CCD","this.overlay_62BD956C_7631_7C63_41CB_CBCE5C84DB66"],"label":trans('panorama_64CBE515_7617_BDAD_41D2_697A483C215B.label'),"hfovMax":130,"data":{"label":"Espace B 3"},"pitch":0,"adjacentPanoramas":[{"distance":16.04,"yaw":-45.28,"select":"this.overlay_629E609E_7630_94DF_41D7_CF1A093E2CCD.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_629E609E_7630_94DF_41D7_CF1A093E2CCD"},"class":"AdjacentPanorama","panorama":"this.panorama_6290002D_7617_B3FD_41A8_E086861605D3"},{"distance":7.34,"yaw":24.25,"select":"this.overlay_62BD956C_7631_7C63_41CB_CBCE5C84DB66.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_62BD956C_7631_7C63_41CB_CBCE5C84DB66"},"class":"AdjacentPanorama","panorama":"this.panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF"}],"hfov":360},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_6290002D_7617_B3FD_41A8_E086861605D3_camera"},{"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"height":3072,"width":36864,"rowCount":6,"url":"media/panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_0/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":72},{"height":1536,"width":18432,"rowCount":3,"url":"media/panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_0/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"height":1024,"width":12288,"rowCount":2,"url":"media/panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_0/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"height":2048,"width":24576,"rowCount":1,"url":"media/panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_0/vr2gen/{column}.jpg","tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":12}]}}],"class":"Panorama","thumbnailUrl":"media/panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_t.jpg","partial":false,"id":"panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF","vfov":180,"overlays":["this.overlay_624A6F37_7610_8DED_41AD_985FB91218CD","this.overlay_626CB8B5_760F_94ED_41AD_6D0F6344C3FC"],"label":trans('panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF.label'),"hfovMax":130,"data":{"label":"Espace B 2"},"pitch":0,"adjacentPanoramas":[{"distance":15.66,"yaw":19.49,"select":"this.overlay_624A6F37_7610_8DED_41AD_985FB91218CD.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_624A6F37_7610_8DED_41AD_985FB91218CD"},"panorama":"this.panorama_6290002D_7617_B3FD_41A8_E086861605D3","class":"AdjacentPanorama","backwardYaw":-8.75},{"distance":9.16,"yaw":-59.36,"select":"this.overlay_626CB8B5_760F_94ED_41AD_6D0F6344C3FC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_626CB8B5_760F_94ED_41AD_6D0F6344C3FC"},"class":"AdjacentPanorama","panorama":"this.panorama_64CBE515_7617_BDAD_41D2_697A483C215B"}],"hfov":360},{"class":"PlayList","items":["this.PanoramaPlayListItem_6ED7738C_7617_74A3_41C3_0B125431C33C","this.PanoramaPlayListItem_6ED7A38C_7617_74A3_41AC_ACFDABA09E1E","this.PanoramaPlayListItem_6ED7538B_7617_74A5_41CB_78563285D6F8"],"id":"mainPlayList"},{"minWidth":20,"gap":10,"itemMode":"normal","borderRadius":5,"itemThumbnailShadowBlurRadius":8,"rollOverItemLabelFontWeight":"normal","itemLabelFontFamily":"Arial","itemPaddingBottom":3,"itemThumbnailShadowVerticalLength":3,"itemLabelHorizontalAlign":"center","paddingTop":10,"propagateClick":false,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","itemVerticalAlign":"middle","paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"horizontalAlign":"left","itemPaddingRight":3,"itemThumbnailBorderRadius":50,"paddingLeft":20,"itemPaddingLeft":3,"itemOpacity":1,"itemLabelFontWeight":"normal","paddingRight":20,"verticalAlign":"top","bottom":"0.02%","itemHorizontalAlign":"center","itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"itemThumbnailWidth":75,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemLabelFontSize":14,"toolTipHorizontalAlign":"center","height":135.02,"itemBackgroundColorDirection":"vertical","itemThumbnailShadow":true,"itemBackgroundOpacity":0,"itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","scrollBarWidth":10,"layout":"horizontal","itemThumbnailShadowColor":"#000000","class":"ThumbnailList","scrollBarColor":"#FFFFFF","itemThumbnailShadowHorizontalLength":3,"itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"itemThumbnailShadowSpread":1,"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemLabelPosition":"bottom","left":"0.01%","itemLabelGap":9,"itemLabelFontStyle":"normal","minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailHeight":75,"shadow":false,"itemThumbnailShadowOpacity":0.54,"borderSize":0,"right":"0.12%","itemLabelTextDecoration":"none"},{"shadow":false,"borderRadius":0,"width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"class":"Image","maxHeight":80,"left":26.3,"maxWidth":80,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_64CBE515_7617_BDAD_41D2_697A483C215B_camera"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_camera"},{"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"id":"MainViewerPanoramaPlayer"},{"shadow":false,"borderRadius":0,"textDecoration":"none","width":400,"paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"top":17,"verticalAlign":"middle","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"class":"Label","maxHeight":50,"fontSize":30,"maxWidth":350,"fontStyle":"normal","minHeight":50,"right":"1.45%","minWidth":350,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadHeight":30,"progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":1,"subtitlesBorderColor":"#FFFFFF","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"borderSize":0,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowHorizontalLength":0,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"class":"ViewerArea","toolTipPaddingTop":4,"subtitlesShadow":false,"toolTipDisplayTime":600,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"subtitlesEnabled":true,"displayTooltipInSurfaceSelection":true,"left":0,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"shadow":false,"borderRadius":0,"width":49,"cursor":"hand","paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD","paddingRight":0,"paddingLeft":0,"top":"6.37%","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":36,"iconURL":"skin/IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD.png","class":"IconButton","maxHeight":50,"mode":"push","transparencyActive":false,"maxWidth":50,"minHeight":50,"right":"4.95%","minWidth":50,"borderSize":0,"data":{"name":"IconButton11832"}},{"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_6290002D_7617_B3FD_41A8_E086861605D3_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"height":3072,"width":36864,"rowCount":6,"url":"media/panorama_6290002D_7617_B3FD_41A8_E086861605D3_0/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":72},{"height":1536,"width":18432,"rowCount":3,"url":"media/panorama_6290002D_7617_B3FD_41A8_E086861605D3_0/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"height":1024,"width":12288,"rowCount":2,"url":"media/panorama_6290002D_7617_B3FD_41A8_E086861605D3_0/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"height":2048,"width":24576,"rowCount":1,"url":"media/panorama_6290002D_7617_B3FD_41A8_E086861605D3_0/vr2gen/{column}.jpg","tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":12}]}}],"class":"Panorama","thumbnailUrl":"media/panorama_6290002D_7617_B3FD_41A8_E086861605D3_t.jpg","partial":false,"id":"panorama_6290002D_7617_B3FD_41A8_E086861605D3","vfov":180,"overlays":["this.overlay_65C5380C_7611_93A3_41D8_7F5B11ABFBE8","this.overlay_625D1EF5_7611_8C6D_41C4_2701FC994092"],"label":trans('panorama_6290002D_7617_B3FD_41A8_E086861605D3.label'),"hfovMax":130,"data":{"label":"Espace B 1"},"pitch":0,"adjacentPanoramas":[{"distance":15.41,"yaw":-8.75,"select":"this.overlay_65C5380C_7611_93A3_41D8_7F5B11ABFBE8.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_65C5380C_7611_93A3_41D8_7F5B11ABFBE8"},"panorama":"this.panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF","class":"AdjacentPanorama","backwardYaw":19.49},{"distance":15.02,"yaw":29.85,"select":"this.overlay_625D1EF5_7611_8C6D_41C4_2701FC994092.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_625D1EF5_7611_8C6D_41C4_2701FC994092"},"class":"AdjacentPanorama","panorama":"this.panorama_64CBE515_7617_BDAD_41D2_697A483C215B"}],"hfov":360},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_6290002D_7617_B3FD_41A8_E086861605D3_camera","media":"this.panorama_6290002D_7617_B3FD_41A8_E086861605D3"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_camera","media":"this.panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_64CBE515_7617_BDAD_41D2_697A483C215B_camera","media":"this.panorama_64CBE515_7617_BDAD_41D2_697A483C215B"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"areas":["this.HotspotPanoramaOverlayArea_628330A5_7630_94ED_41C2_326A6F80872C"],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484","distance":50,"yaw":-45.28,"vfov":6,"horizontalAlign":"center","data":{"label":"link"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","hfov":6,"pitch":-6.04,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_629E609E_7630_94DF_41D7_CF1A093E2CCD"},{"areas":["this.HotspotPanoramaOverlayArea_62BE856F_7631_7C7D_41D0_647D94BEF6F7"],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484","distance":50,"yaw":24.25,"vfov":6,"horizontalAlign":"center","data":{"label":"link"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","hfov":6,"pitch":-13.02,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_62BD956C_7631_7C63_41CB_CBCE5C84DB66"},{"areas":["this.HotspotPanoramaOverlayArea_657CFFFC_7610_8C63_41D5_BEC96409FB9D"],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484","distance":50,"yaw":19.49,"vfov":6,"horizontalAlign":"center","data":{"label":"link"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","hfov":6,"pitch":-6.19,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_624A6F37_7610_8DED_41AD_985FB91218CD"},{"areas":["this.HotspotPanoramaOverlayArea_626FB8BA_760F_94E7_41D7_615F45194028"],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484","distance":50,"yaw":-59.36,"vfov":6,"horizontalAlign":"center","data":{"label":"link"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","hfov":6,"pitch":-10.5,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_626CB8B5_760F_94ED_41AD_6D0F6344C3FC"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_6290002D_7617_B3FD_41A8_E086861605D3_camera","media":"this.panorama_6290002D_7617_B3FD_41A8_E086861605D3","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_6ED7738C_7617_74A3_41C3_0B125431C33C"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF_camera","media":"this.panorama_64C425A2_7617_FCE6_41C6_63E2CD1EC3CF","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","id":"PanoramaPlayListItem_6ED7A38C_7617_74A3_41AC_ACFDABA09E1E"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_64CBE515_7617_BDAD_41D2_697A483C215B_camera","media":"this.panorama_64CBE515_7617_BDAD_41D2_697A483C215B","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_6ED7538B_7617_74A5_41CB_78563285D6F8"},{"areas":["this.HotspotPanoramaOverlayArea_655918CF_7611_94BD_41A7_B6E05BD9D8FE"],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484","distance":50,"yaw":-8.75,"vfov":6,"horizontalAlign":"center","data":{"label":"link"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","hfov":6,"pitch":-6.29,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_65C5380C_7611_93A3_41D8_7F5B11ABFBE8"},{"areas":["this.HotspotPanoramaOverlayArea_62594EF9_7611_8C65_41AE_8E292FC572EC"],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484","distance":50,"yaw":29.85,"vfov":6,"horizontalAlign":"center","data":{"label":"link"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","hfov":6,"pitch":-6.45,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_625D1EF5_7611_8C6D_41C4_2701FC994092"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_6ED7738C_7617_74A3_41C3_0B125431C33C, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_628330A5_7630_94ED_41C2_326A6F80872C"},{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":193,"height":193,"url":"media/res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484_0.png"}],"id":"res_62D9758A_7630_FCA7_41D7_FB1EAAD7C484"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_6ED7A38C_7617_74A3_41AC_ACFDABA09E1E, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_62BE856F_7631_7C7D_41D0_647D94BEF6F7"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_657CFFFC_7610_8C63_41D5_BEC96409FB9D"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_6ED7538B_7617_74A5_41CB_78563285D6F8, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_626FB8BA_760F_94E7_41D7_615F45194028"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_655918CF_7611_94BD_41A7_B6E05BD9D8FE"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_62594EF9_7611_8C65_41AE_8E292FC572EC"}],"width":"100%","borderRadius":0,"mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"translate":TDV.Tour.Script.translate,"showWindow":TDV.Tour.Script.showWindow,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"registerKey":TDV.Tour.Script.registerKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initQuiz":TDV.Tour.Script.initQuiz,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getKey":TDV.Tour.Script.getKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"init":TDV.Tour.Script.init,"playAudioList":TDV.Tour.Script.playAudioList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizStart":TDV.Tour.Script.quizStart,"cloneCamera":TDV.Tour.Script.cloneCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getPixels":TDV.Tour.Script.getPixels,"existsKey":TDV.Tour.Script.existsKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getComponentByName":TDV.Tour.Script.getComponentByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setLocale":TDV.Tour.Script.setLocale,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setValue":TDV.Tour.Script.setValue,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByName":TDV.Tour.Script.getMediaByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":1,"verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"defaultVRPointer":"gaze","children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD"],"toolTipHorizontalAlign":"center","height":"100%","desktopMipmappingEnabled":false,"backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"class":"Player","scrollBarColor":"#000000","downloadEnabled":false,"creationPolicy":"inAdvance","backgroundPreloadEnabled":true,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist])","minHeight":20,"data":{"defaultLocale":"fr","name":"Player28156","initialScale":0.65,"locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Tue May 14 2024