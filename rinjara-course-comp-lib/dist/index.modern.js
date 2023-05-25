import * as React from 'react';
import React__default, { useRef, useDebugValue, useContext, createElement, forwardRef, createContext, Fragment, useEffect, useCallback, useMemo, Suspense, useState } from 'react';
import { Box, Container as Container$1, Typography, Stack, Button, Toolbar, Pagination, AppBar, CardActions, Collapse, CardContent, List, ListItem, ListItemText } from '@mui/material';
import reactIs, { isValidElementType, typeOf, isElement } from 'react-is';
import { Notify } from 'notiflix';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

var styles = {"test":"_3ybTi"};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const Hero = _ref => {
  let {
    handleClick
  } = _ref;
  return React__default.createElement(Box, {
    sx: {
      bgcolor: 'background.paper',
      pt: 8,
      pb: 6
    }
  }, React__default.createElement(Container$1, {
    maxWidth: 'sm'
  }, React__default.createElement(Typography, {
    component: 'h1',
    variant: 'h2',
    align: 'center',
    color: 'text.primary',
    gutterBottom: true
  }, "Genesis Academy"), React__default.createElement(Typography, {
    variant: 'h5',
    align: 'center',
    color: 'text.secondary',
    paragraph: true
  }, "Explore our catalog of courses available at Genesis Academy, a tech company dedicated to providing top-quality education in the latest technologies. Browse our courses and start your learning journey today!"), React__default.createElement(Stack, {
    sx: {
      pt: 4
    },
    direction: 'row',
    spacing: 2,
    justifyContent: 'center'
  }, React__default.createElement(Button, {
    variant: 'contained',
    onClick: handleClick
  }, "Continue My Course"))));
};

var getDefaultStyle = function (visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var DEFAULT_COLOR = '#4fa94d';
var DEFAULT_WAI_ARIA_ATTRIBUTE = {
  'aria-busy': true,
  role: 'status'
};

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;
            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}
              }
              if (0 === k) break;
              l++;
            }
            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);
                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O;
                }
                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);
                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;
                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;
                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;
              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }
            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }
              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }
      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;
        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }
        default:
          z++;
          y = e.charAt(l);
          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;
                default:
                  32 !== g && (y = ' ');
              }
              break;
            case 0:
              y = '\\0';
              break;
            case 12:
              y = '\\f';
              break;
            case 11:
              y = '\\v';
              break;
            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;
            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                case 8:
                  111 === K && (E = K);
              }
              break;
            case 58:
              0 === n + b + m && (u = l);
              break;
            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;
            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;
            case 91:
              0 === n + b + v && m++;
              break;
            case 93:
              0 === n + b + v && m--;
              break;
            case 41:
              0 === n + b + m && v--;
              break;
            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                v++;
              }
              break;
            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;
                    case 220:
                      t = l, b = 42;
                  }
                  break;
                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }
          0 === b && (f += y);
      }
      K = x;
      x = g;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';
      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);
        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;
          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }
        E = 0;
      }
    }
    return G + p + F;
  }
  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
      m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b = 0;
        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }
        break;
      default:
        var v = b = 0;
        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }
    }
    return c;
  }
  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());
      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ';',
      m = 2 * c + 3 * e + 4 * h;
    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }
    if (0 === w || 2 === w && !L(a, 1)) return a;
    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4)) break;
      case 969:
      case 942:
        return '-webkit-' + a + a;
      case 978:
        return '-webkit-' + a + '-moz-' + a + a;
      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;
      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;
        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;
          case 232:
            b = a.replace(G, 'tb-rl');
            break;
          case 220:
            b = a.replace(G, 'lr');
            break;
          default:
            return a;
        }
        return '-webkit-' + a + '-ms-' + b + a;
      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;
      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;
          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;
          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }
        return a + ';';
      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;
      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }
    return a;
  }
  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
      h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }
  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          x = w;
      }
    }
    if (x !== c) return x;
  }
  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;
      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }
    return T;
  }
  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }
  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];
    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }
    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }
  var ca = /^\0+/g,
    N = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ha = /:(read-only)/g,
    G = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z = 1,
    D = 1,
    E = 0,
    w = 1,
    O = [],
    S = [],
    A = 0,
    R = null,
    Y = 0,
    V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});

var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v() {
  return (v = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var g = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
    return n;
  },
  S = function (t) {
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !typeOf(t);
  },
  w = Object.freeze([]),
  E = Object.freeze({});
function b(e) {
  return "function" == typeof e;
}
function _(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function N(e) {
  return e && "string" == typeof e.styledComponentId;
}
var A = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
  I = "undefined" != typeof window && "HTMLElement" in window,
  P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV)),
  R = "production" !== process.env.NODE_ENV ? {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
  } : {};
function D() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function (t) {
    e = e.replace(/%[a-z]/, t);
  }), e;
}
function j(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(D.apply(void 0, [R[e]].concat(n)).trim());
}
var T = function () {
    function e(e) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    var t = e.prototype;
    return t.indexOfGroup = function (e) {
      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
      return t;
    }, t.insertRules = function (e, t) {
      if (e >= this.groupSizes.length) {
        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && j(16, "" + e);
        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
      }
      for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t.clearGroup = function (e) {
      if (e < this.length) {
        var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
        this.groupSizes[e] = 0;
        for (var o = n; o < r; o++) this.tag.deleteRule(n);
      }
    }, t.getGroup = function (e) {
      var t = "";
      if (e >= this.length || 0 === this.groupSizes[e]) return t;
      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
      return t;
    }, e;
  }(),
  x = new Map(),
  k = new Map(),
  V = 1,
  B = function (e) {
    if (x.has(e)) return x.get(e);
    for (; k.has(V);) V++;
    var t = V++;
    return "production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > 1 << 30) && j(16, "" + t), x.set(e, t), k.set(t, e), t;
  },
  z = function (e) {
    return k.get(e);
  },
  M = function (e, t) {
    t >= V && (V = t + 1), x.set(e, t), k.set(t, e);
  },
  G = "style[" + A + '][data-styled-version="5.3.9"]',
  L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  F = function (e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
  },
  Y = function (e, t) {
    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
      var i = n[o].trim();
      if (i) {
        var a = i.match(L);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            u = a[2];
          0 !== c && (M(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
        } else r.push(i);
      }
    }
  },
  q = function () {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  },
  H = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
        }
      }(n),
      s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.3.9");
    var i = q();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  $ = function () {
    function e(e) {
      var t = this.element = H(e);
      t.appendChild(document.createTextNode("")), this.sheet = function (e) {
        if (e.sheet) return e.sheet;
        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          if (o.ownerNode === e) return o;
        }
        j(17);
      }(t), this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      try {
        return this.sheet.insertRule(t, e), this.length++, !0;
      } catch (e) {
        return !1;
      }
    }, t.deleteRule = function (e) {
      this.sheet.deleteRule(e), this.length--;
    }, t.getRule = function (e) {
      var t = this.sheet.cssRules[e];
      return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e;
  }(),
  W = function () {
    function e(e) {
      var t = this.element = H(e);
      this.nodes = t.childNodes, this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      if (e <= this.length && e >= 0) {
        var n = document.createTextNode(t),
          r = this.nodes[e];
        return this.element.insertBefore(n, r || null), this.length++, !0;
      }
      return !1;
    }, t.deleteRule = function (e) {
      this.element.removeChild(this.nodes[e]), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.nodes[e].textContent : "";
    }, e;
  }(),
  U = function () {
    function e(e) {
      this.rules = [], this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t.deleteRule = function (e) {
      this.rules.splice(e, 1), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.rules[e] : "";
    }, e;
  }(),
  J = I,
  X = {
    isServer: !I,
    useCSSOMInjection: !P
  },
  Z = function () {
    function e(e, t, n) {
      void 0 === e && (e = E), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && I && J && (J = !1, function (e) {
        for (var t = document.querySelectorAll(G), n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
        }
      }(this));
    }
    e.registerId = function (e) {
      return B(e);
    };
    var t = e.prototype;
    return t.reconstructWithOptions = function (t, n) {
      return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
    }, t.allocateGSInstance = function (e) {
      return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t.getTag = function () {
      return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
      var e, t, n, r, o;
    }, t.hasNameForId = function (e, t) {
      return this.names.has(e) && this.names.get(e).has(t);
    }, t.registerName = function (e, t) {
      if (B(e), this.names.has(e)) this.names.get(e).add(t);else {
        var n = new Set();
        n.add(t), this.names.set(e, n);
      }
    }, t.insertRules = function (e, t, n) {
      this.registerName(e, t), this.getTag().insertRules(B(e), n);
    }, t.clearNames = function (e) {
      this.names.has(e) && this.names.get(e).clear();
    }, t.clearRules = function (e) {
      this.getTag().clearGroup(B(e)), this.clearNames(e);
    }, t.clearTag = function () {
      this.tag = void 0;
    }, t.toString = function () {
      return function (e) {
        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
          var s = z(o);
          if (void 0 !== s) {
            var i = e.names.get(s),
              a = t.getGroup(o);
            if (i && a && i.size) {
              var c = A + ".g" + o + '[id="' + s + '"]',
                u = "";
              void 0 !== i && i.forEach(function (e) {
                e.length > 0 && (u += e + ",");
              }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
            }
          }
        }
        return r;
      }(this);
    }, e;
  }(),
  K = /(a)(d)/gi,
  Q = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function ee(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Q(t % 52) + n;
  return (Q(t % 52) + n).replace(K, "$1-$2");
}
var te = function (e, t) {
    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
    return e;
  },
  ne = function (e) {
    return te(5381, e);
  };
function re(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (b(n) && !N(n)) return !1;
  }
  return !0;
}
var oe = ne("5.3.9"),
  se = function () {
    function e(e, t, n) {
      this.rules = e, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && re(e), this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function (e, t, n) {
      var r = this.componentId,
        o = [];
      if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
          var s = Ne(this.rules, e, t, n).join(""),
            i = ee(te(this.baseHash, s) >>> 0);
          if (!t.hasNameForId(r, i)) {
            var a = n(s, "." + i, void 0, r);
            t.insertRules(r, i, a);
          }
          o.push(i), this.staticRulesId = i;
        }
      } else {
        for (var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
          var h = this.rules[d];
          if ("string" == typeof h) l += h, "production" !== process.env.NODE_ENV && (u = te(u, h + d));else if (h) {
            var p = Ne(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;
            u = te(u, f + d), l += f;
          }
        }
        if (l) {
          var m = ee(u >>> 0);
          if (!t.hasNameForId(r, m)) {
            var y = n(l, "." + m, void 0, r);
            t.insertRules(r, m, y);
          }
          o.push(m);
        }
      }
      return o.join(" ");
    }, e;
  }(),
  ie = /^\s*\/\/.*$/gm,
  ae = [":", "[", ".", "#"];
function ce(e) {
  var t,
    n,
    r,
    o,
    s = void 0 === e ? E : e,
    i = s.options,
    a = void 0 === i ? E : i,
    c = s.plugins,
    u = void 0 === c ? w : c,
    l = new stylis_min(a),
    d = [],
    h = function (e) {
      function t(t) {
        if (t) try {
          e(t + "}");
        } catch (e) {}
      }
      return function (n, r, o, s, i, a, c, u, l, d) {
        switch (n) {
          case 1:
            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
            break;
          case 2:
            if (0 === u) return r + "/*|*/";
            break;
          case 3:
            switch (u) {
              case 102:
              case 112:
                return e(o[0] + r), "";
              default:
                return r + (0 === d ? "/*|*/" : "");
            }
          case -2:
            r.split("/*|*/}").forEach(t);
        }
      };
    }(function (e) {
      d.push(e);
    }),
    f = function (e, r, s) {
      return 0 === r && -1 !== ae.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
    };
  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(ie, ""),
      u = s && i ? i + " " + s + " { " + c + " }" : c;
    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
  }
  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, h, function (e) {
    if (-2 === e) {
      var t = d;
      return d = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || j(15), te(e, t.name);
  }, 5381).toString() : "", m;
}
var ue = React__default.createContext(),
  de = React__default.createContext(),
  he = (new Z()),
  pe = ce();
function fe() {
  return useContext(ue) || he;
}
function me() {
  return useContext(de) || pe;
}
var ve = function () {
    function e(e, t) {
      var n = this;
      this.inject = function (e, t) {
        void 0 === t && (t = pe);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }, this.toString = function () {
        return j(12, String(n.name));
      }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
    }
    return e.prototype.getName = function (e) {
      return void 0 === e && (e = pe), this.name + e.hash;
    }, e;
  }(),
  ge = /([A-Z])/,
  Se = /([A-Z])/g,
  we = /^ms-/,
  Ee = function (e) {
    return "-" + e.toLowerCase();
  };
function be(e) {
  return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
}
var _e = function (e) {
  return null == e || !1 === e || "" === e;
};
function Ne(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (_e(e)) return "";
  if (N(e)) return "." + e.styledComponentId;
  if (b(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return "production" !== process.env.NODE_ENV && isElement(u) && console.warn(_(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u, n, r, o);
  }
  var l;
  return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
    var r,
      o,
      s = [];
    for (var i in t) t.hasOwnProperty(i) && !_e(t[i]) && (Array.isArray(t[i]) && t[i].isCss || b(t[i]) ? s.push(be(i) + ":", t[i], ";") : S(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(be(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys ? String(o).trim() : o + "px") + ";"));
    return n ? [n + " {"].concat(s, ["}"]) : s;
  }(e) : e.toString();
}
var Ae = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ce(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return b(e) || S(e) ? Ae(Ne(g(w, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ae(Ne(g(e, n)));
}
var Ie = /invalid hook call/i,
  Pe = new Set(),
  Oe = function (e, t) {
    if ("production" !== process.env.NODE_ENV) {
      var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
        r = console.error;
      try {
        var o = !0;
        console.error = function (e) {
          if (Ie.test(e)) o = !1, Pe.delete(n);else {
            for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) s[i - 1] = arguments[i];
            r.apply(void 0, [e].concat(s));
          }
        }, useRef(), o && !Pe.has(n) && (console.warn(n), Pe.add(n));
      } catch (e) {
        Ie.test(e.message) && Pe.delete(n);
      } finally {
        console.error = r;
      }
    }
  },
  Re = function (e, t, n) {
    return void 0 === n && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
  },
  De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  je = /(^-|-$)/g;
function Te(e) {
  return e.replace(De, "-").replace(je, "");
}
var xe = function (e) {
  return ee(ne(e) >>> 0);
};
function ke(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ve = function (e) {
    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
  },
  Be = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function ze(e, t, n) {
  var r = e[n];
  Ve(t) && Ve(r) ? Me(r, t) : e[n] = t;
}
function Me(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (Ve(i)) for (var a in i) Be(a) && ze(e, i[a], a);
  }
  return e;
}
var Ge = React__default.createContext();
var Ye = {};
function qe(e, t, n) {
  var o = N(e),
    i = !ke(e),
    a = t.attrs,
    c = void 0 === a ? w : a,
    d = t.componentId,
    h = void 0 === d ? function (e, t) {
      var n = "string" != typeof e ? "sc" : Te(e);
      Ye[n] = (Ye[n] || 0) + 1;
      var r = n + "-" + xe("5.3.9" + n + Ye[n]);
      return t ? t + "-" + r : r;
    }(t.displayName, t.parentComponentId) : d,
    p = t.displayName,
    f = void 0 === p ? function (e) {
      return ke(e) ? "styled." + e : "Styled(" + _(e) + ")";
    }(e) : p,
    g = t.displayName && t.componentId ? Te(t.displayName) + "-" + t.componentId : t.componentId || h,
    S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
    A = t.shouldForwardProp;
  o && e.shouldForwardProp && (A = t.shouldForwardProp ? function (n, r, o) {
    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
  } : e.shouldForwardProp);
  var C,
    I = new se(n, g, o ? e.componentStyle : void 0),
    P = I.isStatic && 0 === c.length,
    O = function (e, t) {
      return function (e, t, n, r) {
        var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          d = e.shouldForwardProp,
          h = e.styledComponentId,
          p = e.target;
        "production" !== process.env.NODE_ENV && useDebugValue(h);
        var f = function (e, t, n) {
            void 0 === e && (e = E);
            var r = v({}, t, {
                theme: e
              }),
              o = {};
            return n.forEach(function (e) {
              var t,
                n,
                s,
                i = e;
              for (t in b(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
            }), [r, o];
          }(Re(t, useContext(Ge), a) || E, t, o),
          y = f[0],
          g = f[1],
          S = function (e, t, n, r) {
            var o = fe(),
              s = me(),
              i = t ? e.generateAndInjectStyles(E, o, s) : e.generateAndInjectStyles(n, o, s);
            return "production" !== process.env.NODE_ENV && useDebugValue(i), "production" !== process.env.NODE_ENV && !t && r && r(i), i;
          }(i, r, y, "production" !== process.env.NODE_ENV ? e.warnTooManyClasses : void 0),
          w = n,
          _ = g.$as || t.$as || g.as || t.as || p,
          N = ke(_),
          A = g !== t ? v({}, t, {}, g) : t,
          C = {};
        for (var I in A) "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, isPropValid, _) : !N || isPropValid(I)) && (C[I] = A[I]));
        return t.style && g.style !== t.style && (C.style = v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, createElement(_, C);
      }(C, e, t, P);
    };
  return O.displayName = f, (C = React__default.forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function (e) {
    var r = t.componentId,
      o = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }(t, ["componentId"]),
      s = r && r + "-" + (ke(e) ? e : Te(_(e)));
    return qe(e, v({}, o, {
      attrs: S,
      componentId: s
    }), n);
  }, Object.defineProperty(C, "defaultProps", {
    get: function () {
      return this._foldedDefaultProps;
    },
    set: function (t) {
      this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
    }
  }), "production" !== process.env.NODE_ENV && (Oe(f, g), C.warnTooManyClasses = function (e, t) {
    var n = {},
      r = !1;
    return function (o) {
      if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
        var s = t ? ' with the id of "' + t + '"' : "";
        console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
      }
    };
  }(f, g)), Object.defineProperty(C, "toString", {
    value: function () {
      return "." + C.styledComponentId;
    }
  }), i && hoistNonReactStatics_cjs(C, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), C;
}
var He = function (e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = E), !isValidElementType(r)) return j(1, String(r));
    var s = function () {
      return t(r, o, Ce.apply(void 0, arguments));
    };
    return s.withConfig = function (n) {
      return e(t, r, v({}, o, {}, n));
    }, s.attrs = function (n) {
      return e(t, r, v({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, s;
  }(qe, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
  He[e] = He(e);
});
function Ue(e) {
  "production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = Ce.apply(void 0, [e].concat(n)).join(""),
    s = xe(o);
  return new ve(s, o);
}
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);

var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var len = 242.776657104492;
var time = 1.6;
var anim = Ue(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"], ["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"])), len * 0.14, len, len * 0.11, len * 0.35, len, len * 0.35, len * 0.01, len, len * 0.99);
var Path = He.path(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"], ["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"])), len * 0.01, len, anim, time);
var templateObject_1, templateObject_2;

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var Puff = function (_a) {
  var _b = _a.height,
    height = _b === void 0 ? 80 : _b,
    _c = _a.width,
    width = _c === void 0 ? 80 : _c,
    _d = _a.radius,
    radius = _d === void 0 ? 1 : _d,
    _e = _a.color,
    color = _e === void 0 ? DEFAULT_COLOR : _e,
    _f = _a.ariaLabel,
    ariaLabel = _f === void 0 ? 'puff-loading' : _f,
    wrapperStyle = _a.wrapperStyle,
    wrapperClass = _a.wrapperClass,
    _g = _a.visible,
    visible = _g === void 0 ? true : _g;
  return React__default.createElement("div", __assign({
    style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "puff-loading",
    "aria-label": ariaLabel
  }, DEFAULT_WAI_ARIA_ATTRIBUTE), React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    "data-testid": "puff-svg"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, React__default.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius
  }, React__default.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), React__default.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), React__default.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius
  }, React__default.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), React__default.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })))));
};

var prop = function prop(path, defaultValue) {
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (typeof props[path] !== "undefined") {
      return props[path];
    }
    if (path && path.indexOf(".") > 0) {
      var paths = path.split(".");
      var length = paths.length;
      var object = props[paths[0]];
      var index = 1;
      while (object != null && index < length) {
        object = object[paths[index]];
        index += 1;
      }
      if (typeof object !== "undefined") {
        return object;
      }
    }
    return defaultValue;
  };
};

var __makeTemplateObject$1 = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var spin = Ue(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject$1(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
var Svg = He.svg(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject$1(["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"], ["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"])), spin, prop('speed', '0.75'));
var Polyline = He.polyline(templateObject_3 || (templateObject_3 = __makeTemplateObject$1(["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"], ["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])), function (props) {
  return props.width;
});
var templateObject_1$1, templateObject_2$1, templateObject_3;

var __makeTemplateObject$2 = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var dash = Ue(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject$2(["\n to {\n    stroke-dashoffset: 136;\n  }\n"], ["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));
var Polygon = He.polygon(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject$2(["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"], ["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])), dash);
var SVG = He.svg(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject$2(["\n  transform-origin: 50% 65%;\n"], ["\n  transform-origin: 50% 65%;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$1;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _extends.apply(this, arguments);
  }
  module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(_extends_1);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet;
}();

var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var n = "comm";
var c = "rule";
var s = "decl";
var i = "@import";
var h = "@keyframes";
var $$1 = "@layer";
var g$1 = Math.abs;
var k$1 = String.fromCharCode;
var m = Object.assign;
function x$1(e, r) {
  return O(e, 0) ^ 45 ? (((r << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function y(e) {
  return e.trim();
}
function j$1(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function z$1(e, r, a) {
  return e.replace(r, a);
}
function C(e, r) {
  return e.indexOf(r);
}
function O(e, r) {
  return e.charCodeAt(r) | 0;
}
function A$1(e, r, a) {
  return e.slice(r, a);
}
function M$1(e) {
  return e.length;
}
function S$1(e) {
  return e.length;
}
function q$1(e, r) {
  return r.push(e), e;
}
function B$1(e, r) {
  return e.map(r).join("");
}
var D$1 = 1;
var E$1 = 1;
var F$1 = 0;
var G$1 = 0;
var H$1 = 0;
var I$1 = "";
function J$1(e, r, a, n, c, s, t) {
  return {
    value: e,
    root: r,
    parent: a,
    type: n,
    props: c,
    children: s,
    line: D$1,
    column: E$1,
    length: t,
    return: ""
  };
}
function K$1(e, r) {
  return m(J$1("", null, null, "", null, null, 0), e, {
    length: -e.length
  }, r);
}
function L$1() {
  return H$1;
}
function N$1() {
  H$1 = G$1 > 0 ? O(I$1, --G$1) : 0;
  if (E$1--, H$1 === 10) E$1 = 1, D$1--;
  return H$1;
}
function P$1() {
  H$1 = G$1 < F$1 ? O(I$1, G$1++) : 0;
  if (E$1++, H$1 === 10) E$1 = 1, D$1++;
  return H$1;
}
function Q$1() {
  return O(I$1, G$1);
}
function R$1() {
  return G$1;
}
function T$1(e, r) {
  return A$1(I$1, e, r);
}
function U$1(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function V$1(e) {
  return D$1 = E$1 = 1, F$1 = M$1(I$1 = e), G$1 = 0, [];
}
function W$1(e) {
  return I$1 = "", e;
}
function X$1(e) {
  return y(T$1(G$1 - 1, re$1(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Z$1(e) {
  while (H$1 = Q$1()) if (H$1 < 33) P$1();else break;
  return U$1(e) > 2 || U$1(H$1) > 3 ? "" : " ";
}
function ee$1(e, r) {
  while (--r && P$1()) if (H$1 < 48 || H$1 > 102 || H$1 > 57 && H$1 < 65 || H$1 > 70 && H$1 < 97) break;
  return T$1(e, R$1() + (r < 6 && Q$1() == 32 && P$1() == 32));
}
function re$1(e) {
  while (P$1()) switch (H$1) {
    case e:
      return G$1;
    case 34:
    case 39:
      if (e !== 34 && e !== 39) re$1(H$1);
      break;
    case 40:
      if (e === 41) re$1(e);
      break;
    case 92:
      P$1();
      break;
  }
  return G$1;
}
function ae$1(e, r) {
  while (P$1()) if (e + H$1 === 47 + 10) break;else if (e + H$1 === 42 + 42 && Q$1() === 47) break;
  return "/*" + T$1(r, G$1 - 1) + "*" + k$1(e === 47 ? e : P$1());
}
function ne$1(e) {
  while (!U$1(Q$1())) P$1();
  return T$1(e, G$1);
}
function ce$1(e) {
  return W$1(se$1("", null, null, null, [""], e = V$1(e), 0, [0], e));
}
function se$1(e, r, a, n, c, s, t, u, i) {
  var f = 0;
  var o = 0;
  var l = t;
  var v = 0;
  var p = 0;
  var h = 0;
  var b = 1;
  var w = 1;
  var d = 1;
  var $ = 0;
  var g = "";
  var m = c;
  var x = s;
  var y = n;
  var j = g;
  while (w) switch (h = $, $ = P$1()) {
    case 40:
      if (h != 108 && O(j, l - 1) == 58) {
        if (C(j += z$1(X$1($), "&", "&\f"), "&\f") != -1) d = -1;
        break;
      }
    case 34:
    case 39:
    case 91:
      j += X$1($);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      j += Z$1(h);
      break;
    case 92:
      j += ee$1(R$1() - 1, 7);
      continue;
    case 47:
      switch (Q$1()) {
        case 42:
        case 47:
          q$1(ue$1(ae$1(P$1(), R$1()), r, a), i);
          break;
        default:
          j += "/";
      }
      break;
    case 123 * b:
      u[f++] = M$1(j) * d;
    case 125 * b:
    case 59:
    case 0:
      switch ($) {
        case 0:
        case 125:
          w = 0;
        case 59 + o:
          if (d == -1) j = z$1(j, /\f/g, "");
          if (p > 0 && M$1(j) - l) q$1(p > 32 ? ie$1(j + ";", n, a, l - 1) : ie$1(z$1(j, " ", "") + ";", n, a, l - 2), i);
          break;
        case 59:
          j += ";";
        default:
          q$1(y = te$1(j, r, a, f, o, c, u, g, m = [], x = [], l), s);
          if ($ === 123) if (o === 0) se$1(j, r, y, y, m, s, l, u, x);else switch (v === 99 && O(j, 3) === 110 ? 100 : v) {
            case 100:
            case 108:
            case 109:
            case 115:
              se$1(e, y, y, n && q$1(te$1(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
              break;
            default:
              se$1(j, y, y, y, [""], x, 0, u, x);
          }
      }
      f = o = p = 0, b = d = 1, g = j = "", l = t;
      break;
    case 58:
      l = 1 + M$1(j), p = h;
    default:
      if (b < 1) if ($ == 123) --b;else if ($ == 125 && b++ == 0 && N$1() == 125) continue;
      switch (j += k$1($), $ * b) {
        case 38:
          d = o > 0 ? 1 : (j += "\f", -1);
          break;
        case 44:
          u[f++] = (M$1(j) - 1) * d, d = 1;
          break;
        case 64:
          if (Q$1() === 45) j += X$1(P$1());
          v = Q$1(), o = l = M$1(g = j += ne$1(R$1())), $++;
          break;
        case 45:
          if (h === 45 && M$1(j) == 2) b = 0;
      }
  }
  return s;
}
function te$1(e, r, a, n, s, t, u, i, f, o, l) {
  var v = s - 1;
  var p = s === 0 ? t : [""];
  var h = S$1(p);
  for (var b = 0, w = 0, d = 0; b < n; ++b) for (var $ = 0, k = A$1(e, v + 1, v = g$1(w = u[b])), m = e; $ < h; ++$) if (m = y(w > 0 ? p[$] + " " + k : z$1(k, /&\f/g, p[$]))) f[d++] = m;
  return J$1(e, r, a, s === 0 ? c : i, f, o, l);
}
function ue$1(e, r, a) {
  return J$1(e, r, a, n, k$1(L$1()), A$1(e, 2, -2), 0);
}
function ie$1(e, r, a, n) {
  return J$1(e, r, a, s, A$1(e, 0, n), A$1(e, n + 1, -1), n);
}
function oe$1(e, r) {
  var a = "";
  var n = S$1(e);
  for (var c = 0; c < n; c++) a += r(e[c], c, e, r) || "";
  return a;
}
function le(e, r, a, t) {
  switch (e.type) {
    case $$1:
      if (e.children.length) break;
    case i:
    case s:
      return e.return = e.return || e.value;
    case n:
      return "";
    case h:
      return e.return = e.value + "{" + oe$1(e.children, t) + "}";
    case c:
      e.value = e.props.join(",");
  }
  return M$1(a = oe$1(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
}
function ve$1(e) {
  var r = S$1(e);
  return function (a, n, c, s) {
    var t = "";
    for (var u = 0; u < r; u++) t += e[u](a, n, c, s) || "";
    return t;
  };
}
function pe$1(e) {
  return function (r) {
    if (!r.root) if (r = r.return) e(r);
  };
}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = Q$1();
    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (U$1(character)) {
      break;
    }
    P$1();
  }
  return T$1(begin, G$1);
};
var toRules = function toRules(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (U$1(character)) {
      case 0:
        if (character === 38 && Q$1() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(G$1 - 1, points, index);
        break;
      case 2:
        parsed[index] += X$1(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = Q$1() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += k$1(character);
    }
  } while (character = P$1());
  return parsed;
};
var getRules = function getRules(value, points) {
  return W$1(toRules(V$1(value), points));
};
var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value,
    parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = !!element.parent;
      var commentContainer = isNested ? element.parent.children : children;
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];
        if (node.line < element.line) {
          break;
        }
        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};
var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
function prefix(value, length) {
  switch (x$1(value, length)) {
    case 5103:
      return a + 'print-' + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + value + r + value + e + value + value;
    case 6828:
    case 4268:
      return a + value + e + value + value;
    case 6165:
      return a + value + e + 'flex-' + value + value;
    case 5187:
      return a + value + z$1(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + value;
    case 5443:
      return a + value + e + 'flex-item-' + z$1(value, /flex-|-self/, '') + value;
    case 4675:
      return a + value + e + 'flex-line-pack' + z$1(value, /align-content|flex-|-self/, '') + value;
    case 5548:
      return a + value + e + z$1(value, 'shrink', 'negative') + value;
    case 5292:
      return a + value + e + z$1(value, 'basis', 'preferred-size') + value;
    case 6060:
      return a + 'box-' + z$1(value, '-grow', '') + a + value + e + z$1(value, 'grow', 'positive') + value;
    case 4554:
      return a + z$1(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
    case 6187:
      return z$1(z$1(z$1(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
    case 5495:
    case 3959:
      return z$1(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
    case 4968:
      return z$1(z$1(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return z$1(value, /(.+)-inline(.+)/, a + '$1$2') + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (M$1(value) - 1 - length > 6) switch (O(value, length + 1)) {
        case 109:
          if (O(value, length + 4) !== 45) break;
        case 102:
          return z$1(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r + (O(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        case 115:
          return ~C(value, 'stretch') ? prefix(z$1(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    case 4949:
      if (O(value, length + 1) !== 115) break;
    case 6444:
      switch (O(value, M$1(value) - 3 - (~C(value, '!important') && 10))) {
        case 107:
          return z$1(value, ':', ':' + a) + value;
        case 101:
          return z$1(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (O(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e + '$2box$3') + value;
      }
      break;
    case 5936:
      switch (O(value, length + 11)) {
        case 114:
          return a + value + e + z$1(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        case 108:
          return a + value + e + z$1(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        case 45:
          return a + value + e + z$1(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return a + value + e + value + value;
  }
  return value;
}
var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case s:
      element["return"] = prefix(element.value, element.length);
      break;
    case h:
      return oe$1([K$1(element, {
        value: z$1(element.value, '@', '@' + a)
      })], callback);
    case c:
      if (element.length) return B$1(element.props, function (value) {
        switch (j$1(value, /(::plac\w+|:read-\w+)/)) {
          case ':read-only':
          case ':read-write':
            return oe$1([K$1(element, {
              props: [z$1(value, /:(read-\w+)/, ':' + r + '$1')]
            })], callback);
          case '::placeholder':
            return oe$1([K$1(element, {
              props: [z$1(value, /:(plac\w+)/, ':' + a + 'input-$1')]
            }), K$1(element, {
              props: [z$1(value, /:(plac\w+)/, ':' + r + '$1')]
            }), K$1(element, {
              props: [z$1(value, /:(plac\w+)/, e + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache(options) {
  var key = options.key;
  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function (node) {
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (process.env.NODE_ENV !== 'production') {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [le, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== n) {
          currentSheet.insert(element.value + "{}");
        }
      }
    } : pe$1(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = ve$1(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return oe$1(ce$1(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      current = current.next;
    } while (current !== undefined);
  }
};

function murmur2(str) {
  var h = 0;
  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= k >>> 24;
    h = (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys$1 = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (unitlessKeys$1[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};
  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== undefined) {
          var next = interpolation.next;
          if (next !== undefined) {
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i];
    }
  }
  var sourceMap;
  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }
  var name = murmur2(styles) + identifierName;
  if (process.env.NODE_ENV !== 'production') {
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var syncFallback = function syncFallback(create) {
  return create();
};
var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;

var hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* #__PURE__ */createContext(typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);
if (process.env.NODE_ENV !== 'production') {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}
var withEmotionCache = function withEmotionCache(func) {
  return /*#__PURE__*/forwardRef(function (props, ref) {
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* #__PURE__ */createContext({});
if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'EmotionThemeContext';
}
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, undefined, useContext(ThemeContext));
  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/createElement(WrappedComponent, newProps));
});
if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}

var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
        }
        styles.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = useContext(ThemeContext);
      }
      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion$1, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };
    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

const Container = newStyled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const Loader = () => {
  return React__default.createElement(Container, null, React__default.createElement(Puff, {
    height: '200',
    width: '200',
    radius: 1,
    color: '#002884',
    ariaLabel: 'puff-loading',
    wrapperStyle: {},
    wrapperClass: '',
    visible: true
  }));
};

const _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
const _asyncIteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Action;
(function (Action) {
  Action["Pop"] = "POP";
  Action["Push"] = "PUSH";
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$1({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

const DataRouterContext = /*#__PURE__*/createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}
const NavigationContext = /*#__PURE__*/createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/createContext({
  outlet: null,
  matches: []
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  let activeRef = useRef(false);
  useEffect(() => {
    activeRef.current = true;
  });
  let navigate = useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    process.env.NODE_ENV !== "production" ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/createContext(null);
function useOutlet(context) {
  let outlet = useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  return useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function Outlet(props) {
  return useOutlet(props.context);
}
var AwaitRenderStatus;
(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
const neverSettledPromise = new Promise(() => {});

function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;
  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);
    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form);
    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;
    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();
      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }
  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
  _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
if (process.env.NODE_ENV !== "production") ;
const isBrowser$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /*#__PURE__*/forwardRef(function LinkWithRef(_ref4, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset
    } = _ref4,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let {
    basename
  } = useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to;
    if (isBrowser$1) {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
      let path = stripBasename(targetUrl.pathname, basename);
      if (targetUrl.origin === currentUrl.origin && path != null) {
        to = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /*#__PURE__*/createElement("a", _extends$2({}, rest, {
    href: absoluteHref || href,
    onClick: isExternal || reloadDocument ? onClick : handleClick,
    ref: ref,
    target: target
  }));
});
if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
const NavLink = /*#__PURE__*/forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      children
    } = _ref5,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = useContext(DataRouterStateContext);
  let {
    navigator
  } = useContext(NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/createElement(Link, _extends$2({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});
if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
const Form = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/createElement(FormImpl, _extends$2({}, props, {
    ref: ref
  }));
});
if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}
const FormImpl = /*#__PURE__*/forwardRef((_ref6, forwardedRef) => {
  let {
      reloadDocument,
      replace,
      method = defaultMethod,
      action,
      onSubmit,
      fetcherKey,
      routeId,
      relative,
      preventScrollReset
    } = _ref6,
    props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative,
      preventScrollReset
    });
  };
  return /*#__PURE__*/createElement("form", _extends$2({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (process.env.NODE_ENV !== "production") {
  FormImpl.displayName = "FormImpl";
}
if (process.env.NODE_ENV !== "production") ;
var DataRouterHook$1;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return ctx;
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
function useSubmitImpl(fetcherKey, routeId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseSubmitImpl);
  let defaultAction = useFormAction();
  return useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }
    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };
    if (fetcherKey) {
      !(routeId != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "No routeId available for useFetcher()") : invariant(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = useContext(NavigationContext);
  let routeContext = useContext(RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? invariant(false, "useFormAction must be used inside a RouteContext") : invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  let path = _extends$2({}, useResolvedPath(action ? action : ".", {
    relative
  }));
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    path.hash = location.hash;
    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}

var Logo = "logo~VYZPUpow.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const lastCourse = load('lastCourseId');
    if (!lastCourse) {
      Notify.info('Please, choose your course in the list below!');
      return;
    }
    navigate(`/course/${lastCourse}`);
  };
  return React__default.createElement(Toolbar, {
    style: {
      gap: 10
    }
  }, React__default.createElement(Logo, null), React__default.createElement(Button, {
    variant: 'contained',
    component: NavLink,
    to: '/'
  }, "Courses"), React__default.createElement(Button, {
    onClick: handleClick,
    variant: 'contained'
  }, "My course"));
};

const StyledPagination = newStyled(Pagination)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px'
}));

const PaginationControlled = _ref => {
  let {
    totalPages,
    currentPage,
    handleChange
  } = _ref;
  return React__default.createElement(Stack, {
    spacing: 2,
    alignContent: 'center'
  }, React__default.createElement(StyledPagination, {
    count: totalPages,
    page: currentPage,
    onChange: handleChange
  }));
};

const SharedLayout = () => {
  return React__default.createElement(Fragment, null, React__default.createElement(AppBar, {
    position: 'relative'
  }, React__default.createElement(NavBar, null)), React__default.createElement("main", null, React__default.createElement(Suspense, {
    fallback: React__default.createElement(Loader, null)
  }, React__default.createElement(Outlet, null))));
};

const ExpandMore = styled(props => {
  const {
    ...other
  } = props;
  return createElement(IconButton, Object.assign({}, other));
})(_ref => {
  let {
    theme,
    expand
  } = _ref;
  return {
    transform: `rotate(${expand ? '180' : '0'}deg)`,
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  };
});

const SkillsList = _ref => {
  let {
    isExpanded,
    handleExpandClick,
    skills
  } = _ref;
  return React__default.createElement(Fragment, null, React__default.createElement(CardActions, {
    disableSpacing: true,
    style: {
      padding: 0
    }
  }, React__default.createElement(Typography, {
    variant: 'h6',
    color: 'text.secondary'
  }, "Skills"), React__default.createElement(ExpandMore, {
    expand: isExpanded ? 1 : 0,
    onClick: handleExpandClick,
    "aria-expanded": isExpanded,
    "aria-label": 'more'
  }, React__default.createElement(ExpandMoreIcon, null))), React__default.createElement(Collapse, {
    in: isExpanded,
    timeout: 'auto',
    unmountOnExit: true
  }, React__default.createElement(CardContent, null, React__default.createElement(List, null, skills === null || skills === void 0 ? void 0 : skills.map(skill => React__default.createElement(ListItem, {
    key: skill
  }, React__default.createElement(ListItemText, {
    primary: skill
  })))))));
};

var loadScript = function load(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function () {};
  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = '' + opts.text;
  }
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
  if (!script.onload) {
    stdOnEnd(script, cb);
  }
  head.appendChild(script);
};
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return;
    this.onreadystatechange = null;
    cb(null, script);
  };
}

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }
  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;

var utils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseStartTime = parseStartTime;
  exports.parseEndTime = parseEndTime;
  exports.randomString = randomString;
  exports.queryString = queryString;
  exports.getSDK = getSDK;
  exports.getConfig = getConfig;
  exports.omit = omit;
  exports.callPlayer = callPlayer;
  exports.isMediaStream = isMediaStream;
  exports.isBlobUrl = isBlobUrl;
  exports.supportsWebKitPresentationMode = supportsWebKitPresentationMode;
  var _loadScript = _interopRequireDefault(loadScript);
  var _deepmerge = _interopRequireDefault(cjs);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
  var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
  var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
  var MATCH_NUMERIC = /^\d+$/;
  function parseTimeParam(url, pattern) {
    if (url instanceof Array) {
      return undefined;
    }
    var match = url.match(pattern);
    if (match) {
      var stamp = match[1];
      if (stamp.match(MATCH_START_STAMP)) {
        return parseTimeString(stamp);
      }
      if (MATCH_NUMERIC.test(stamp)) {
        return parseInt(stamp);
      }
    }
    return undefined;
  }
  function parseTimeString(stamp) {
    var seconds = 0;
    var array = MATCH_START_STAMP.exec(stamp);
    while (array !== null) {
      var _array = array,
        _array2 = _slicedToArray(_array, 3),
        count = _array2[1],
        period = _array2[2];
      if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
      if (period === 'm') seconds += parseInt(count, 10) * 60;
      if (period === 's') seconds += parseInt(count, 10);
      array = MATCH_START_STAMP.exec(stamp);
    }
    return seconds;
  }
  function parseStartTime(url) {
    return parseTimeParam(url, MATCH_START_QUERY);
  }
  function parseEndTime(url) {
    return parseTimeParam(url, MATCH_END_QUERY);
  }
  function randomString() {
    return Math.random().toString(36).substr(2, 5);
  }
  function queryString(object) {
    return Object.keys(object).map(function (key) {
      return "".concat(key, "=").concat(object[key]);
    }).join('&');
  }
  function getGlobal(key) {
    if (window[key]) {
      return window[key];
    }
    if (window.exports && window.exports[key]) {
      return window.exports[key];
    }
    if (window.module && window.module.exports && window.module.exports[key]) {
      return window.module.exports[key];
    }
    return null;
  }
  var requests = {};
  function getSDK(url, sdkGlobal) {
    var sdkReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var isLoaded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
      return true;
    };
    var fetchScript = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _loadScript["default"];
    var existingGlobal = getGlobal(sdkGlobal);
    if (existingGlobal && isLoaded(existingGlobal)) {
      return Promise.resolve(existingGlobal);
    }
    return new Promise(function (resolve, reject) {
      if (requests[url]) {
        requests[url].push({
          resolve: resolve,
          reject: reject
        });
        return;
      }
      requests[url] = [{
        resolve: resolve,
        reject: reject
      }];
      var onLoaded = function onLoaded(sdk) {
        requests[url].forEach(function (request) {
          return request.resolve(sdk);
        });
      };
      if (sdkReady) {
        var previousOnReady = window[sdkReady];
        window[sdkReady] = function () {
          if (previousOnReady) previousOnReady();
          onLoaded(getGlobal(sdkGlobal));
        };
      }
      fetchScript(url, function (err) {
        if (err) {
          requests[url].forEach(function (request) {
            return request.reject(err);
          });
          requests[url] = null;
        } else if (!sdkReady) {
          onLoaded(getGlobal(sdkGlobal));
        }
      });
    });
  }
  function getConfig(props, defaultProps) {
    return (0, _deepmerge["default"])(defaultProps.config, props.config);
  }
  function omit(object) {
    var _ref;
    for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arrays[_key - 1] = arguments[_key];
    }
    var omitKeys = (_ref = []).concat.apply(_ref, arrays);
    var output = {};
    var keys = Object.keys(object);
    for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
      var key = _keys[_i2];
      if (omitKeys.indexOf(key) === -1) {
        output[key] = object[key];
      }
    }
    return output;
  }
  function callPlayer(method) {
    var _this$player;
    if (!this.player || !this.player[method]) {
      var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c \u2013 ");
      if (!this.player) {
        message += 'The player was not available';
      } else if (!this.player[method]) {
        message += 'The method was not available';
      }
      console.warn(message, 'font-weight: bold', '');
      return null;
    }
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return (_this$player = this.player)[method].apply(_this$player, args);
  }
  function isMediaStream(url) {
    return typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream;
  }
  function isBlobUrl(url) {
    return /^blob:/.test(url);
  }
  function supportsWebKitPresentationMode() {
    var video = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('video');
    var notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
    return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function' && notMobile;
  }
});
unwrapExports(utils);

var patterns = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.canPlay = exports.FLV_EXTENSIONS = exports.DASH_EXTENSIONS = exports.HLS_EXTENSIONS = exports.VIDEO_EXTENSIONS = exports.AUDIO_EXTENSIONS = exports.MATCH_URL_KALTURA = exports.MATCH_URL_VIDYARD = exports.MATCH_URL_MIXCLOUD = exports.MATCH_URL_DAILYMOTION = exports.MATCH_URL_TWITCH_CHANNEL = exports.MATCH_URL_TWITCH_VIDEO = exports.MATCH_URL_WISTIA = exports.MATCH_URL_STREAMABLE = exports.MATCH_URL_FACEBOOK_WATCH = exports.MATCH_URL_FACEBOOK = exports.MATCH_URL_VIMEO = exports.MATCH_URL_SOUNDCLOUD = exports.MATCH_URL_YOUTUBE = void 0;
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function F() {};
        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function s() {
        it = o[Symbol.iterator]();
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null) it["return"]();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
  exports.MATCH_URL_YOUTUBE = MATCH_URL_YOUTUBE;
  var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
  exports.MATCH_URL_SOUNDCLOUD = MATCH_URL_SOUNDCLOUD;
  var MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
  exports.MATCH_URL_VIMEO = MATCH_URL_VIMEO;
  var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
  exports.MATCH_URL_FACEBOOK = MATCH_URL_FACEBOOK;
  var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
  exports.MATCH_URL_FACEBOOK_WATCH = MATCH_URL_FACEBOOK_WATCH;
  var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
  exports.MATCH_URL_STREAMABLE = MATCH_URL_STREAMABLE;
  var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
  exports.MATCH_URL_WISTIA = MATCH_URL_WISTIA;
  var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
  exports.MATCH_URL_TWITCH_VIDEO = MATCH_URL_TWITCH_VIDEO;
  var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
  exports.MATCH_URL_TWITCH_CHANNEL = MATCH_URL_TWITCH_CHANNEL;
  var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
  exports.MATCH_URL_DAILYMOTION = MATCH_URL_DAILYMOTION;
  var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
  exports.MATCH_URL_MIXCLOUD = MATCH_URL_MIXCLOUD;
  var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
  exports.MATCH_URL_VIDYARD = MATCH_URL_VIDYARD;
  var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
  exports.MATCH_URL_KALTURA = MATCH_URL_KALTURA;
  var AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
  exports.AUDIO_EXTENSIONS = AUDIO_EXTENSIONS;
  var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
  exports.VIDEO_EXTENSIONS = VIDEO_EXTENSIONS;
  var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
  exports.HLS_EXTENSIONS = HLS_EXTENSIONS;
  var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
  exports.DASH_EXTENSIONS = DASH_EXTENSIONS;
  var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
  exports.FLV_EXTENSIONS = FLV_EXTENSIONS;
  var canPlayFile = function canPlayFile(url) {
    if (url instanceof Array) {
      var _iterator = _createForOfIteratorHelper(url),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (typeof item === 'string' && canPlayFile(item)) {
            return true;
          }
          if (canPlayFile(item.src)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
    if ((0, utils.isMediaStream)(url) || (0, utils.isBlobUrl)(url)) {
      return true;
    }
    return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
  };
  var canPlay = {
    youtube: function youtube(url) {
      if (url instanceof Array) {
        return url.every(function (item) {
          return MATCH_URL_YOUTUBE.test(item);
        });
      }
      return MATCH_URL_YOUTUBE.test(url);
    },
    soundcloud: function soundcloud(url) {
      return MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
    },
    vimeo: function vimeo(url) {
      return MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
    },
    facebook: function facebook(url) {
      return MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url);
    },
    streamable: function streamable(url) {
      return MATCH_URL_STREAMABLE.test(url);
    },
    wistia: function wistia(url) {
      return MATCH_URL_WISTIA.test(url);
    },
    twitch: function twitch(url) {
      return MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url);
    },
    dailymotion: function dailymotion(url) {
      return MATCH_URL_DAILYMOTION.test(url);
    },
    mixcloud: function mixcloud(url) {
      return MATCH_URL_MIXCLOUD.test(url);
    },
    vidyard: function vidyard(url) {
      return MATCH_URL_VIDYARD.test(url);
    },
    kaltura: function kaltura(url) {
      return MATCH_URL_KALTURA.test(url);
    },
    file: canPlayFile
  };
  exports.canPlay = canPlay;
});
unwrapExports(patterns);

var YouTube_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://www.youtube.com/iframe_api';
  var SDK_GLOBAL = 'YT';
  var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
  var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
  var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
  var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
  var NOCOOKIE_HOST = 'https://www.youtube-nocookie.com';
  var YouTube = /*#__PURE__*/function (_Component) {
    _inherits(YouTube, _Component);
    var _super = _createSuper(YouTube);
    function YouTube() {
      var _this;
      _classCallCheck(this, YouTube);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "parsePlaylist", function (url) {
        if (url instanceof Array) {
          return {
            listType: 'playlist',
            playlist: url.map(_this.getID).join(',')
          };
        }
        if (MATCH_PLAYLIST.test(url)) {
          var _url$match = url.match(MATCH_PLAYLIST),
            _url$match2 = _slicedToArray(_url$match, 2),
            playlistId = _url$match2[1];
          return {
            listType: 'playlist',
            list: playlistId.replace(/^UC/, 'UU')
          };
        }
        if (MATCH_USER_UPLOADS.test(url)) {
          var _url$match3 = url.match(MATCH_USER_UPLOADS),
            _url$match4 = _slicedToArray(_url$match3, 2),
            username = _url$match4[1];
          return {
            listType: 'user_uploads',
            list: username
          };
        }
        return {};
      });
      _defineProperty(_assertThisInitialized(_this), "onStateChange", function (event) {
        var data = event.data;
        var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onBuffer = _this$props.onBuffer,
          onBufferEnd = _this$props.onBufferEnd,
          onEnded = _this$props.onEnded,
          onReady = _this$props.onReady,
          loop = _this$props.loop,
          _this$props$config = _this$props.config,
          playerVars = _this$props$config.playerVars,
          onUnstarted = _this$props$config.onUnstarted;
        var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
          UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED,
          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
          CUED = _window$SDK_GLOBAL$Pl.CUED;
        if (data === UNSTARTED) onUnstarted();
        if (data === PLAYING) {
          onPlay();
          onBufferEnd();
        }
        if (data === PAUSED) onPause();
        if (data === BUFFERING) onBuffer();
        if (data === ENDED) {
          var isPlaylist = !!_this.callPlayer('getPlaylist');
          if (loop && !isPlaylist) {
            if (playerVars.start) {
              _this.seekTo(playerVars.start);
            } else {
              _this.play();
            }
          }
          onEnded();
        }
        if (data === CUED) onReady();
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.callPlayer('mute');
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.callPlayer('unMute');
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(YouTube, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "getID",
      value: function getID(url) {
        if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
          return null;
        }
        return url.match(patterns.MATCH_URL_YOUTUBE)[1];
      }
    }, {
      key: "load",
      value: function load(url, isReady) {
        var _this2 = this;
        var _this$props2 = this.props,
          playing = _this$props2.playing,
          muted = _this$props2.muted,
          playsinline = _this$props2.playsinline,
          controls = _this$props2.controls,
          loop = _this$props2.loop,
          config = _this$props2.config,
          _onError = _this$props2.onError;
        var playerVars = config.playerVars,
          embedOptions = config.embedOptions;
        var id = this.getID(url);
        if (isReady) {
          if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
            this.player.loadPlaylist(this.parsePlaylist(url));
            return;
          }
          this.player.cueVideoById({
            videoId: id,
            startSeconds: (0, utils.parseStartTime)(url) || playerVars.start,
            endSeconds: (0, utils.parseEndTime)(url) || playerVars.end
          });
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
          return YT.loaded;
        }).then(function (YT) {
          if (!_this2.container) return;
          _this2.player = new YT.Player(_this2.container, _objectSpread({
            width: '100%',
            height: '100%',
            videoId: id,
            playerVars: _objectSpread(_objectSpread({
              autoplay: playing ? 1 : 0,
              mute: muted ? 1 : 0,
              controls: controls ? 1 : 0,
              start: (0, utils.parseStartTime)(url),
              end: (0, utils.parseEndTime)(url),
              origin: window.location.origin,
              playsinline: playsinline ? 1 : 0
            }, _this2.parsePlaylist(url)), playerVars),
            events: {
              onReady: function onReady() {
                if (loop) {
                  _this2.player.setLoop(true);
                }
                _this2.props.onReady();
              },
              onPlaybackRateChange: function onPlaybackRateChange(event) {
                return _this2.props.onPlaybackRateChange(event.data);
              },
              onStateChange: _this2.onStateChange,
              onError: function onError(event) {
                return _onError(event.data);
              }
            },
            host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : undefined
          }, embedOptions));
        }, _onError);
        if (embedOptions.events) {
          console.warn('Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause');
        }
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('playVideo');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pauseVideo');
      }
    }, {
      key: "stop",
      value: function stop() {
        if (!document.body.contains(this.callPlayer('getIframe'))) return;
        this.callPlayer('stopVideo');
      }
    }, {
      key: "seekTo",
      value: function seekTo(amount) {
        this.callPlayer('seekTo', amount);
        if (!this.props.playing) {
          this.pause();
        }
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction * 100);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer('setPlaybackRate', rate);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer('setLoop', loop);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer('getDuration');
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer('getCurrentTime');
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
      }
    }, {
      key: "render",
      value: function render() {
        var display = this.props.display;
        var style = {
          width: '100%',
          height: '100%',
          display: display
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: style
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: this.ref
        }));
      }
    }]);
    return YouTube;
  }(_react.Component);
  exports["default"] = YouTube;
  _defineProperty(YouTube, "displayName", 'YouTube');
  _defineProperty(YouTube, "canPlay", patterns.canPlay.youtube);
});
unwrapExports(YouTube_1);

var SoundCloud_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://w.soundcloud.com/player/api.js';
  var SDK_GLOBAL = 'SC';
  var SoundCloud = /*#__PURE__*/function (_Component) {
    _inherits(SoundCloud, _Component);
    var _super = _createSuper(SoundCloud);
    function SoundCloud() {
      var _this;
      _classCallCheck(this, SoundCloud);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.setVolume(0);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        if (_this.props.volume !== null) {
          _this.setVolume(_this.props.volume);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(SoundCloud, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url, isReady) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (SC) {
          if (!_this2.iframe) return;
          var _SC$Widget$Events = SC.Widget.Events,
            PLAY = _SC$Widget$Events.PLAY,
            PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
            PAUSE = _SC$Widget$Events.PAUSE,
            FINISH = _SC$Widget$Events.FINISH,
            ERROR = _SC$Widget$Events.ERROR;
          if (!isReady) {
            _this2.player = SC.Widget(_this2.iframe);
            _this2.player.bind(PLAY, _this2.props.onPlay);
            _this2.player.bind(PAUSE, function () {
              var remaining = _this2.duration - _this2.currentTime;
              if (remaining < 0.05) {
                return;
              }
              _this2.props.onPause();
            });
            _this2.player.bind(PLAY_PROGRESS, function (e) {
              _this2.currentTime = e.currentPosition / 1000;
              _this2.fractionLoaded = e.loadedProgress;
            });
            _this2.player.bind(FINISH, function () {
              return _this2.props.onEnded();
            });
            _this2.player.bind(ERROR, function (e) {
              return _this2.props.onError(e);
            });
          }
          _this2.player.load(url, _objectSpread(_objectSpread({}, _this2.props.config.options), {}, {
            callback: function callback() {
              _this2.player.getDuration(function (duration) {
                _this2.duration = duration / 1000;
                _this2.props.onReady();
              });
            }
          }));
        });
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('seekTo', seconds * 1000);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction * 100);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.fractionLoaded * this.duration;
      }
    }, {
      key: "render",
      value: function render() {
        var display = this.props.display;
        var style = {
          width: '100%',
          height: '100%',
          display: display
        };
        return /*#__PURE__*/_react["default"].createElement("iframe", {
          ref: this.ref,
          src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
          style: style,
          frameBorder: 0,
          allow: "autoplay"
        });
      }
    }]);
    return SoundCloud;
  }(_react.Component);
  exports["default"] = SoundCloud;
  _defineProperty(SoundCloud, "displayName", 'SoundCloud');
  _defineProperty(SoundCloud, "canPlay", patterns.canPlay.soundcloud);
  _defineProperty(SoundCloud, "loopOnEnded", true);
});
unwrapExports(SoundCloud_1);

var Vimeo_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://player.vimeo.com/api/player.js';
  var SDK_GLOBAL = 'Vimeo';
  var Vimeo = /*#__PURE__*/function (_Component) {
    _inherits(Vimeo, _Component);
    var _super = _createSuper(Vimeo);
    function Vimeo() {
      var _this;
      _classCallCheck(this, Vimeo);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.setMuted(true);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.setMuted(false);
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(Vimeo, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        this.duration = null;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {
          if (!_this2.container) return;
          var _this2$props$config = _this2.props.config,
            playerOptions = _this2$props$config.playerOptions,
            title = _this2$props$config.title;
          _this2.player = new Vimeo.Player(_this2.container, _objectSpread({
            url: url,
            autoplay: _this2.props.playing,
            muted: _this2.props.muted,
            loop: _this2.props.loop,
            playsinline: _this2.props.playsinline,
            controls: _this2.props.controls
          }, playerOptions));
          _this2.player.ready().then(function () {
            var iframe = _this2.container.querySelector('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            if (title) {
              iframe.title = title;
            }
          })["catch"](_this2.props.onError);
          _this2.player.on('loaded', function () {
            _this2.props.onReady();
            _this2.refreshDuration();
          });
          _this2.player.on('play', function () {
            _this2.props.onPlay();
            _this2.refreshDuration();
          });
          _this2.player.on('pause', _this2.props.onPause);
          _this2.player.on('seeked', function (e) {
            return _this2.props.onSeek(e.seconds);
          });
          _this2.player.on('ended', _this2.props.onEnded);
          _this2.player.on('error', _this2.props.onError);
          _this2.player.on('timeupdate', function (_ref) {
            var seconds = _ref.seconds;
            _this2.currentTime = seconds;
          });
          _this2.player.on('progress', function (_ref2) {
            var seconds = _ref2.seconds;
            _this2.secondsLoaded = seconds;
          });
          _this2.player.on('bufferstart', _this2.props.onBuffer);
          _this2.player.on('bufferend', _this2.props.onBufferEnd);
          _this2.player.on('playbackratechange', function (e) {
            return _this2.props.onPlaybackRateChange(e.playbackRate);
          });
        }, this.props.onError);
      }
    }, {
      key: "refreshDuration",
      value: function refreshDuration() {
        var _this3 = this;
        this.player.getDuration().then(function (duration) {
          _this3.duration = duration;
        });
      }
    }, {
      key: "play",
      value: function play() {
        var promise = this.callPlayer('play');
        if (promise) {
          promise["catch"](this.props.onError);
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {
        this.callPlayer('unload');
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('setCurrentTime', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction);
      }
    }, {
      key: "setMuted",
      value: function setMuted(muted) {
        this.callPlayer('setMuted', muted);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer('setLoop', loop);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer('setPlaybackRate', rate);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.secondsLoaded;
      }
    }, {
      key: "render",
      value: function render() {
        var display = this.props.display;
        var style = {
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          display: display
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: this.props.url,
          ref: this.ref,
          style: style
        });
      }
    }]);
    return Vimeo;
  }(_react.Component);
  exports["default"] = Vimeo;
  _defineProperty(Vimeo, "displayName", 'Vimeo');
  _defineProperty(Vimeo, "canPlay", patterns.canPlay.vimeo);
  _defineProperty(Vimeo, "forceLoad", true);
});
unwrapExports(Vimeo_1);

var Facebook_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
  var SDK_GLOBAL = 'FB';
  var SDK_GLOBAL_READY = 'fbAsyncInit';
  var PLAYER_ID_PREFIX = 'facebook-player-';
  var Facebook = /*#__PURE__*/function (_Component) {
    _inherits(Facebook, _Component);
    var _super = _createSuper(Facebook);
    function Facebook() {
      var _this;
      _classCallCheck(this, Facebook);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.callPlayer('mute');
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.callPlayer('unmute');
      });
      return _this;
    }
    _createClass(Facebook, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url, isReady) {
        var _this2 = this;
        if (isReady) {
          (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
            return FB.XFBML.parse();
          });
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
          FB.init({
            appId: _this2.props.config.appId,
            xfbml: true,
            version: _this2.props.config.version
          });
          FB.Event.subscribe('xfbml.render', function (msg) {
            _this2.props.onLoaded();
          });
          FB.Event.subscribe('xfbml.ready', function (msg) {
            if (msg.type === 'video' && msg.id === _this2.playerID) {
              _this2.player = msg.instance;
              _this2.player.subscribe('startedPlaying', _this2.props.onPlay);
              _this2.player.subscribe('paused', _this2.props.onPause);
              _this2.player.subscribe('finishedPlaying', _this2.props.onEnded);
              _this2.player.subscribe('startedBuffering', _this2.props.onBuffer);
              _this2.player.subscribe('finishedBuffering', _this2.props.onBufferEnd);
              _this2.player.subscribe('error', _this2.props.onError);
              if (_this2.props.muted) {
                _this2.callPlayer('mute');
              } else {
                _this2.callPlayer('unmute');
              }
              _this2.props.onReady();
              document.getElementById(_this2.playerID).querySelector('iframe').style.visibility = 'visible';
            }
          });
        });
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('seek', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer('getDuration');
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer('getCurrentPosition');
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var attributes = this.props.config.attributes;
        var style = {
          width: '100%',
          height: '100%'
        };
        return /*#__PURE__*/_react["default"].createElement("div", _extends({
          style: style,
          id: this.playerID,
          className: "fb-video",
          "data-href": this.props.url,
          "data-autoplay": this.props.playing ? 'true' : 'false',
          "data-allowfullscreen": "true",
          "data-controls": this.props.controls ? 'true' : 'false'
        }, attributes));
      }
    }]);
    return Facebook;
  }(_react.Component);
  exports["default"] = Facebook;
  _defineProperty(Facebook, "displayName", 'Facebook');
  _defineProperty(Facebook, "canPlay", patterns.canPlay.facebook);
  _defineProperty(Facebook, "loopOnEnded", true);
});
unwrapExports(Facebook_1);

var Streamable_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
  var SDK_GLOBAL = 'playerjs';
  var Streamable = /*#__PURE__*/function (_Component) {
    _inherits(Streamable, _Component);
    var _super = _createSuper(Streamable);
    function Streamable() {
      var _this;
      _classCallCheck(this, Streamable);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.callPlayer('mute');
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.callPlayer('unmute');
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(Streamable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
          if (!_this2.iframe) return;
          _this2.player = new playerjs.Player(_this2.iframe);
          _this2.player.setLoop(_this2.props.loop);
          _this2.player.on('ready', _this2.props.onReady);
          _this2.player.on('play', _this2.props.onPlay);
          _this2.player.on('pause', _this2.props.onPause);
          _this2.player.on('seeked', _this2.props.onSeek);
          _this2.player.on('ended', _this2.props.onEnded);
          _this2.player.on('error', _this2.props.onError);
          _this2.player.on('timeupdate', function (_ref) {
            var duration = _ref.duration,
              seconds = _ref.seconds;
            _this2.duration = duration;
            _this2.currentTime = seconds;
          });
          _this2.player.on('buffered', function (_ref2) {
            var percent = _ref2.percent;
            if (_this2.duration) {
              _this2.secondsLoaded = _this2.duration * percent;
            }
          });
          if (_this2.props.muted) {
            _this2.player.mute();
          }
        }, this.props.onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('setCurrentTime', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction * 100);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer('setLoop', loop);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.secondsLoaded;
      }
    }, {
      key: "render",
      value: function render() {
        var id = this.props.url.match(patterns.MATCH_URL_STREAMABLE)[1];
        var style = {
          width: '100%',
          height: '100%'
        };
        return /*#__PURE__*/_react["default"].createElement("iframe", {
          ref: this.ref,
          src: "https://streamable.com/o/".concat(id),
          frameBorder: "0",
          scrolling: "no",
          style: style,
          allow: "encrypted-media; autoplay; fullscreen;"
        });
      }
    }]);
    return Streamable;
  }(_react.Component);
  exports["default"] = Streamable;
  _defineProperty(Streamable, "displayName", 'Streamable');
  _defineProperty(Streamable, "canPlay", patterns.canPlay.streamable);
});
unwrapExports(Streamable_1);

var Wistia_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
  var SDK_GLOBAL = 'Wistia';
  var PLAYER_ID_PREFIX = 'wistia-player-';
  var Wistia = /*#__PURE__*/function (_Component) {
    _inherits(Wistia, _Component);
    var _super = _createSuper(Wistia);
    function Wistia() {
      var _this;
      _classCallCheck(this, Wistia);
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(_args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));
      _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
        var _this$props;
        return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPause", function () {
        var _this$props2;
        return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onSeek", function () {
        var _this$props3;
        return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
        var _this$props4;
        return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPlaybackRateChange", function () {
        var _this$props5;
        return (_this$props5 = _this.props).onPlaybackRateChange.apply(_this$props5, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.callPlayer('mute');
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.callPlayer('unmute');
      });
      return _this;
    }
    _createClass(Wistia, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        var _this$props6 = this.props,
          playing = _this$props6.playing,
          muted = _this$props6.muted,
          controls = _this$props6.controls,
          _onReady = _this$props6.onReady,
          config = _this$props6.config,
          onError = _this$props6.onError;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Wistia) {
          if (config.customControls) {
            config.customControls.forEach(function (control) {
              return Wistia.defineControl(control);
            });
          }
          window._wq = window._wq || [];
          window._wq.push({
            id: _this2.playerID,
            options: _objectSpread({
              autoPlay: playing,
              silentAutoPlay: 'allow',
              muted: muted,
              controlsVisibleOnLoad: controls,
              fullscreenButton: controls,
              playbar: controls,
              playbackRateControl: controls,
              qualityControl: controls,
              volumeControl: controls,
              settingsControl: controls,
              smallPlayButton: controls
            }, config.options),
            onReady: function onReady(player) {
              _this2.player = player;
              _this2.unbind();
              _this2.player.bind('play', _this2.onPlay);
              _this2.player.bind('pause', _this2.onPause);
              _this2.player.bind('seek', _this2.onSeek);
              _this2.player.bind('end', _this2.onEnded);
              _this2.player.bind('playbackratechange', _this2.onPlaybackRateChange);
              _onReady();
            }
          });
        }, onError);
      }
    }, {
      key: "unbind",
      value: function unbind() {
        this.player.unbind('play', this.onPlay);
        this.player.unbind('pause', this.onPause);
        this.player.unbind('seek', this.onSeek);
        this.player.unbind('end', this.onEnded);
        this.player.unbind('playbackratechange', this.onPlaybackRateChange);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {
        this.unbind();
        this.callPlayer('remove');
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('time', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('volume', fraction);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer('playbackRate', rate);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer('duration');
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer('time');
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var url = this.props.url;
        var videoID = url && url.match(patterns.MATCH_URL_WISTIA)[1];
        var className = "wistia_embed wistia_async_".concat(videoID);
        var style = {
          width: '100%',
          height: '100%'
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          id: this.playerID,
          key: videoID,
          className: className,
          style: style
        });
      }
    }]);
    return Wistia;
  }(_react.Component);
  exports["default"] = Wistia;
  _defineProperty(Wistia, "displayName", 'Wistia');
  _defineProperty(Wistia, "canPlay", patterns.canPlay.wistia);
  _defineProperty(Wistia, "loopOnEnded", true);
});
unwrapExports(Wistia_1);

var Twitch_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';
  var SDK_GLOBAL = 'Twitch';
  var PLAYER_ID_PREFIX = 'twitch-player-';
  var Twitch = /*#__PURE__*/function (_Component) {
    _inherits(Twitch, _Component);
    var _super = _createSuper(Twitch);
    function Twitch() {
      var _this;
      _classCallCheck(this, Twitch);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.callPlayer('setMuted', true);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.callPlayer('setMuted', false);
      });
      return _this;
    }
    _createClass(Twitch, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url, isReady) {
        var _this2 = this;
        var _this$props = this.props,
          playsinline = _this$props.playsinline,
          onError = _this$props.onError,
          config = _this$props.config,
          controls = _this$props.controls;
        var isChannel = patterns.MATCH_URL_TWITCH_CHANNEL.test(url);
        var id = isChannel ? url.match(patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(patterns.MATCH_URL_TWITCH_VIDEO)[1];
        if (isReady) {
          if (isChannel) {
            this.player.setChannel(id);
          } else {
            this.player.setVideo('v' + id);
          }
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {
          _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({
            video: isChannel ? '' : id,
            channel: isChannel ? id : '',
            height: '100%',
            width: '100%',
            playsinline: playsinline,
            autoplay: _this2.props.playing,
            muted: _this2.props.muted,
            controls: isChannel ? true : controls,
            time: (0, utils.parseStartTime)(url)
          }, config.options));
          var _Twitch$Player = Twitch.Player,
            READY = _Twitch$Player.READY,
            PLAYING = _Twitch$Player.PLAYING,
            PAUSE = _Twitch$Player.PAUSE,
            ENDED = _Twitch$Player.ENDED,
            ONLINE = _Twitch$Player.ONLINE,
            OFFLINE = _Twitch$Player.OFFLINE,
            SEEK = _Twitch$Player.SEEK;
          _this2.player.addEventListener(READY, _this2.props.onReady);
          _this2.player.addEventListener(PLAYING, _this2.props.onPlay);
          _this2.player.addEventListener(PAUSE, _this2.props.onPause);
          _this2.player.addEventListener(ENDED, _this2.props.onEnded);
          _this2.player.addEventListener(SEEK, _this2.props.onSeek);
          _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);
          _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
        }, onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {
        this.callPlayer('pause');
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('seek', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer('getDuration');
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer('getCurrentTime');
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var style = {
          width: '100%',
          height: '100%'
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: style,
          id: this.playerID
        });
      }
    }]);
    return Twitch;
  }(_react.Component);
  exports["default"] = Twitch;
  _defineProperty(Twitch, "displayName", 'Twitch');
  _defineProperty(Twitch, "canPlay", patterns.canPlay.twitch);
  _defineProperty(Twitch, "loopOnEnded", true);
});
unwrapExports(Twitch_1);

var DailyMotion_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://api.dmcdn.net/all.js';
  var SDK_GLOBAL = 'DM';
  var SDK_GLOBAL_READY = 'dmAsyncInit';
  var DailyMotion = /*#__PURE__*/function (_Component) {
    _inherits(DailyMotion, _Component);
    var _super = _createSuper(DailyMotion);
    function DailyMotion() {
      var _this;
      _classCallCheck(this, DailyMotion);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "onDurationChange", function () {
        var duration = _this.getDuration();
        _this.props.onDuration(duration);
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.callPlayer('setMuted', true);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.callPlayer('setMuted', false);
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(DailyMotion, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        var _this$props = this.props,
          controls = _this$props.controls,
          config = _this$props.config,
          onError = _this$props.onError,
          playing = _this$props.playing;
        var _url$match = url.match(patterns.MATCH_URL_DAILYMOTION),
          _url$match2 = _slicedToArray(_url$match, 2),
          id = _url$match2[1];
        if (this.player) {
          this.player.load(id, {
            start: (0, utils.parseStartTime)(url),
            autoplay: playing
          });
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (DM) {
          return DM.player;
        }).then(function (DM) {
          if (!_this2.container) return;
          var Player = DM.player;
          _this2.player = new Player(_this2.container, {
            width: '100%',
            height: '100%',
            video: id,
            params: _objectSpread({
              controls: controls,
              autoplay: _this2.props.playing,
              mute: _this2.props.muted,
              start: (0, utils.parseStartTime)(url),
              origin: window.location.origin
            }, config.params),
            events: {
              apiready: _this2.props.onReady,
              seeked: function seeked() {
                return _this2.props.onSeek(_this2.player.currentTime);
              },
              video_end: _this2.props.onEnded,
              durationchange: _this2.onDurationChange,
              pause: _this2.props.onPause,
              playing: _this2.props.onPlay,
              waiting: _this2.props.onBuffer,
              error: function error(event) {
                return onError(event);
              }
            }
          });
        }, onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('seek', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.player.duration || null;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.player.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.player.bufferedTime;
      }
    }, {
      key: "render",
      value: function render() {
        var display = this.props.display;
        var style = {
          width: '100%',
          height: '100%',
          display: display
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: style
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: this.ref
        }));
      }
    }]);
    return DailyMotion;
  }(_react.Component);
  exports["default"] = DailyMotion;
  _defineProperty(DailyMotion, "displayName", 'DailyMotion');
  _defineProperty(DailyMotion, "canPlay", patterns.canPlay.dailymotion);
  _defineProperty(DailyMotion, "loopOnEnded", true);
});
unwrapExports(DailyMotion_1);

var Mixcloud_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://widget.mixcloud.com/media/js/widgetApi.js';
  var SDK_GLOBAL = 'Mixcloud';
  var Mixcloud = /*#__PURE__*/function (_Component) {
    _inherits(Mixcloud, _Component);
    var _super = _createSuper(Mixcloud);
    function Mixcloud() {
      var _this;
      _classCallCheck(this, Mixcloud);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function () {});
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {});
      _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(Mixcloud, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Mixcloud) {
          _this2.player = Mixcloud.PlayerWidget(_this2.iframe);
          _this2.player.ready.then(function () {
            _this2.player.events.play.on(_this2.props.onPlay);
            _this2.player.events.pause.on(_this2.props.onPause);
            _this2.player.events.ended.on(_this2.props.onEnded);
            _this2.player.events.error.on(_this2.props.error);
            _this2.player.events.progress.on(function (seconds, duration) {
              _this2.currentTime = seconds;
              _this2.duration = duration;
            });
            _this2.props.onReady();
          });
        }, this.props.onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('seek', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {}
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          url = _this$props.url,
          config = _this$props.config;
        var id = url.match(patterns.MATCH_URL_MIXCLOUD)[1];
        var style = {
          width: '100%',
          height: '100%'
        };
        var query = (0, utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
          feed: "/".concat(id, "/")
        }));
        return /*#__PURE__*/_react["default"].createElement("iframe", {
          key: id,
          ref: this.ref,
          style: style,
          src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
          frameBorder: "0",
          allow: "autoplay"
        });
      }
    }]);
    return Mixcloud;
  }(_react.Component);
  exports["default"] = Mixcloud;
  _defineProperty(Mixcloud, "displayName", 'Mixcloud');
  _defineProperty(Mixcloud, "canPlay", patterns.canPlay.mixcloud);
  _defineProperty(Mixcloud, "loopOnEnded", true);
});
unwrapExports(Mixcloud_1);

var Vidyard_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://play.vidyard.com/embed/v4.js';
  var SDK_GLOBAL = 'VidyardV4';
  var SDK_GLOBAL_READY = 'onVidyardAPI';
  var Vidyard = /*#__PURE__*/function (_Component) {
    _inherits(Vidyard, _Component);
    var _super = _createSuper(Vidyard);
    function Vidyard() {
      var _this;
      _classCallCheck(this, Vidyard);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.setVolume(0);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        if (_this.props.volume !== null) {
          _this.setVolume(_this.props.volume);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(Vidyard, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        var _this$props = this.props,
          playing = _this$props.playing,
          config = _this$props.config,
          onError = _this$props.onError,
          onDuration = _this$props.onDuration;
        var id = url && url.match(patterns.MATCH_URL_VIDYARD)[1];
        if (this.player) {
          this.stop();
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (Vidyard) {
          if (!_this2.container) return;
          Vidyard.api.addReadyListener(function (data, player) {
            if (_this2.player) {
              return;
            }
            _this2.player = player;
            _this2.player.on('ready', _this2.props.onReady);
            _this2.player.on('play', _this2.props.onPlay);
            _this2.player.on('pause', _this2.props.onPause);
            _this2.player.on('seek', _this2.props.onSeek);
            _this2.player.on('playerComplete', _this2.props.onEnded);
          }, id);
          Vidyard.api.renderPlayer(_objectSpread({
            uuid: id,
            container: _this2.container,
            autoplay: playing ? 1 : 0
          }, config.options));
          Vidyard.api.getPlayerMetadata(id).then(function (meta) {
            _this2.duration = meta.length_in_seconds;
            onDuration(meta.length_in_seconds);
          });
        }, onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {
        window.VidyardV4.api.destroyPlayer(this.player);
      }
    }, {
      key: "seekTo",
      value: function seekTo(amount) {
        this.callPlayer('seek', amount);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer('setPlaybackSpeed', rate);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer('currentTime');
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var display = this.props.display;
        var style = {
          width: '100%',
          height: '100%',
          display: display
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: style
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: this.ref
        }));
      }
    }]);
    return Vidyard;
  }(_react.Component);
  exports["default"] = Vidyard;
  _defineProperty(Vidyard, "displayName", 'Vidyard');
  _defineProperty(Vidyard, "canPlay", patterns.canPlay.vidyard);
});
unwrapExports(Vidyard_1);

var Kaltura_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
  var SDK_GLOBAL = 'playerjs';
  var Kaltura = /*#__PURE__*/function (_Component) {
    _inherits(Kaltura, _Component);
    var _super = _createSuper(Kaltura);
    function Kaltura() {
      var _this;
      _classCallCheck(this, Kaltura);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.callPlayer('mute');
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.callPlayer('unmute');
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(Kaltura, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
          if (!_this2.iframe) return;
          _this2.player = new playerjs.Player(_this2.iframe);
          _this2.player.on('ready', function () {
            setTimeout(function () {
              _this2.player.isReady = true;
              _this2.player.setLoop(_this2.props.loop);
              if (_this2.props.muted) {
                _this2.player.mute();
              }
              _this2.addListeners(_this2.player, _this2.props);
              _this2.props.onReady();
            }, 500);
          });
        }, this.props.onError);
      }
    }, {
      key: "addListeners",
      value: function addListeners(player, props) {
        var _this3 = this;
        player.on('play', props.onPlay);
        player.on('pause', props.onPause);
        player.on('ended', props.onEnded);
        player.on('error', props.onError);
        player.on('timeupdate', function (_ref) {
          var duration = _ref.duration,
            seconds = _ref.seconds;
          _this3.duration = duration;
          _this3.currentTime = seconds;
        });
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer('play');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer('pause');
      }
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer('setCurrentTime', seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer('setVolume', fraction);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer('setLoop', loop);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.secondsLoaded;
      }
    }, {
      key: "render",
      value: function render() {
        var style = {
          width: '100%',
          height: '100%'
        };
        return /*#__PURE__*/_react["default"].createElement("iframe", {
          ref: this.ref,
          src: this.props.url,
          frameBorder: "0",
          scrolling: "no",
          style: style,
          allow: "encrypted-media; autoplay; fullscreen;",
          referrerPolicy: "no-referrer-when-downgrade"
        });
      }
    }]);
    return Kaltura;
  }(_react.Component);
  exports["default"] = Kaltura;
  _defineProperty(Kaltura, "displayName", 'Kaltura');
  _defineProperty(Kaltura, "canPlay", patterns.canPlay.kaltura);
});
unwrapExports(Kaltura_1);

var FilePlayer_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var HAS_NAVIGATOR = typeof navigator !== 'undefined';
  var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
  var IS_SAFARI = HAS_NAVIGATOR && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream;
  var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
  var HLS_GLOBAL = 'Hls';
  var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
  var DASH_GLOBAL = 'dashjs';
  var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
  var FLV_GLOBAL = 'flvjs';
  var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
  var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
  var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';
  var FilePlayer = /*#__PURE__*/function (_Component) {
    _inherits(FilePlayer, _Component);
    var _super = _createSuper(FilePlayer);
    function FilePlayer() {
      var _this;
      _classCallCheck(this, FilePlayer);
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(_args));
      _defineProperty(_assertThisInitialized(_this), "onReady", function () {
        var _this$props;
        return (_this$props = _this.props).onReady.apply(_this$props, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
        var _this$props2;
        return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
        var _this$props3;
        return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
        var _this$props4;
        return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPause", function () {
        var _this$props5;
        return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
        var _this$props6;
        return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onError", function () {
        var _this$props7;
        return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPlayBackRateChange", function (event) {
        return _this.props.onPlaybackRateChange(event.target.playbackRate);
      });
      _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
        var _this$props8;
        return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
        var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
        onDisablePIP(e);
        if (playing) {
          _this.play();
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
        if (_this.player && (0, utils.supportsWebKitPresentationMode)(_this.player)) {
          var webkitPresentationMode = _this.player.webkitPresentationMode;
          if (webkitPresentationMode === 'picture-in-picture') {
            _this.onEnablePIP(e);
          } else if (webkitPresentationMode === 'inline') {
            _this.onDisablePIP(e);
          }
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
        _this.props.onSeek(e.target.currentTime);
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function () {
        _this.player.muted = true;
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function () {
        _this.player.muted = false;
      });
      _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
        if (typeof source === 'string') {
          return /*#__PURE__*/_react["default"].createElement("source", {
            key: index,
            src: source
          });
        }
        return /*#__PURE__*/_react["default"].createElement("source", _extends({
          key: index
        }, source));
      });
      _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
        return /*#__PURE__*/_react["default"].createElement("track", _extends({
          key: index
        }, track));
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
        if (_this.player) {
          _this.prevPlayer = _this.player;
        }
        _this.player = player;
      });
      return _this;
    }
    _createClass(FilePlayer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
        this.addListeners(this.player);
        this.player.src = this.getSource(this.props.url);
        if (IS_IOS) {
          this.player.load();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
          this.removeListeners(this.prevPlayer, prevProps.url);
          this.addListeners(this.player);
        }
        if (this.props.url !== prevProps.url && !(0, utils.isMediaStream)(this.props.url)) {
          this.player.srcObject = null;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.player.src = '';
        this.removeListeners(this.player);
        if (this.hls) {
          this.hls.destroy();
        }
      }
    }, {
      key: "addListeners",
      value: function addListeners(player) {
        var _this$props10 = this.props,
          url = _this$props10.url,
          playsinline = _this$props10.playsinline;
        player.addEventListener('play', this.onPlay);
        player.addEventListener('waiting', this.onBuffer);
        player.addEventListener('playing', this.onBufferEnd);
        player.addEventListener('pause', this.onPause);
        player.addEventListener('seeked', this.onSeek);
        player.addEventListener('ended', this.onEnded);
        player.addEventListener('error', this.onError);
        player.addEventListener('ratechange', this.onPlayBackRateChange);
        player.addEventListener('enterpictureinpicture', this.onEnablePIP);
        player.addEventListener('leavepictureinpicture', this.onDisablePIP);
        player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);
        if (!this.shouldUseHLS(url)) {
          player.addEventListener('canplay', this.onReady);
        }
        if (playsinline) {
          player.setAttribute('playsinline', '');
          player.setAttribute('webkit-playsinline', '');
          player.setAttribute('x5-playsinline', '');
        }
      }
    }, {
      key: "removeListeners",
      value: function removeListeners(player, url) {
        player.removeEventListener('canplay', this.onReady);
        player.removeEventListener('play', this.onPlay);
        player.removeEventListener('waiting', this.onBuffer);
        player.removeEventListener('playing', this.onBufferEnd);
        player.removeEventListener('pause', this.onPause);
        player.removeEventListener('seeked', this.onSeek);
        player.removeEventListener('ended', this.onEnded);
        player.removeEventListener('error', this.onError);
        player.removeEventListener('ratechange', this.onPlayBackRateChange);
        player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
        player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
        player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);
        if (!this.shouldUseHLS(url)) {
          player.removeEventListener('canplay', this.onReady);
        }
      }
    }, {
      key: "shouldUseAudio",
      value: function shouldUseAudio(props) {
        if (props.config.forceVideo) {
          return false;
        }
        if (props.config.attributes.poster) {
          return false;
        }
        return patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
      }
    }, {
      key: "shouldUseHLS",
      value: function shouldUseHLS(url) {
        if (this.props.config.forceHLS) {
          return true;
        }
        if (IS_SAFARI && this.props.config.forceSafariHLS) {
          return true;
        }
        if (IS_IOS) {
          return false;
        }
        return patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
      }
    }, {
      key: "shouldUseDASH",
      value: function shouldUseDASH(url) {
        return patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
      }
    }, {
      key: "shouldUseFLV",
      value: function shouldUseFLV(url) {
        return patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this2 = this;
        var _this$props$config = this.props.config,
          hlsVersion = _this$props$config.hlsVersion,
          hlsOptions = _this$props$config.hlsOptions,
          dashVersion = _this$props$config.dashVersion,
          flvVersion = _this$props$config.flvVersion;
        if (this.hls) {
          this.hls.destroy();
        }
        if (this.dash) {
          this.dash.reset();
        }
        if (this.shouldUseHLS(url)) {
          (0, utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
            _this2.hls = new Hls(hlsOptions);
            _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
              _this2.props.onReady();
            });
            _this2.hls.on(Hls.Events.ERROR, function (e, data) {
              _this2.props.onError(e, data, _this2.hls, Hls);
            });
            if (MATCH_CLOUDFLARE_STREAM.test(url)) {
              var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];
              _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
            } else {
              _this2.hls.loadSource(url);
            }
            _this2.hls.attachMedia(_this2.player);
            _this2.props.onLoaded();
          });
        }
        if (this.shouldUseDASH(url)) {
          (0, utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
            _this2.dash = dashjs.MediaPlayer().create();
            _this2.dash.initialize(_this2.player, url, _this2.props.playing);
            _this2.dash.on('error', _this2.props.onError);
            if (parseInt(dashVersion) < 3) {
              _this2.dash.getDebug().setLogToBrowserConsole(false);
            } else {
              _this2.dash.updateSettings({
                debug: {
                  logLevel: dashjs.Debug.LOG_LEVEL_NONE
                }
              });
            }
            _this2.props.onLoaded();
          });
        }
        if (this.shouldUseFLV(url)) {
          (0, utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
            _this2.flv = flvjs.createPlayer({
              type: 'flv',
              url: url
            });
            _this2.flv.attachMediaElement(_this2.player);
            _this2.flv.on(flvjs.Events.ERROR, function (e, data) {
              _this2.props.onError(e, data, _this2.flv, flvjs);
            });
            _this2.flv.load();
            _this2.props.onLoaded();
          });
        }
        if (url instanceof Array) {
          this.player.load();
        } else if ((0, utils.isMediaStream)(url)) {
          try {
            this.player.srcObject = url;
          } catch (e) {
            this.player.src = window.URL.createObjectURL(url);
          }
        }
      }
    }, {
      key: "play",
      value: function play() {
        var promise = this.player.play();
        if (promise) {
          promise["catch"](this.props.onError);
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        this.player.pause();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.player.removeAttribute('src');
        if (this.dash) {
          this.dash.reset();
        }
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.player.currentTime = seconds;
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.player.volume = fraction;
      }
    }, {
      key: "enablePIP",
      value: function enablePIP() {
        if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
          this.player.requestPictureInPicture();
        } else if ((0, utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
          this.player.webkitSetPresentationMode('picture-in-picture');
        }
      }
    }, {
      key: "disablePIP",
      value: function disablePIP() {
        if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
          document.exitPictureInPicture();
        } else if ((0, utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
          this.player.webkitSetPresentationMode('inline');
        }
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        try {
          this.player.playbackRate = rate;
        } catch (error) {
          this.props.onError(error);
        }
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        if (!this.player) return null;
        var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable;
        if (duration === Infinity && seekable.length > 0) {
          return seekable.end(seekable.length - 1);
        }
        return duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (!this.player) return null;
        return this.player.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        if (!this.player) return null;
        var buffered = this.player.buffered;
        if (buffered.length === 0) {
          return 0;
        }
        var end = buffered.end(buffered.length - 1);
        var duration = this.getDuration();
        if (end > duration) {
          return duration;
        }
        return end;
      }
    }, {
      key: "getSource",
      value: function getSource(url) {
        var useHLS = this.shouldUseHLS(url);
        var useDASH = this.shouldUseDASH(url);
        var useFLV = this.shouldUseFLV(url);
        if (url instanceof Array || (0, utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
          return undefined;
        }
        if (MATCH_DROPBOX_URL.test(url)) {
          return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
        }
        return url;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props11 = this.props,
          url = _this$props11.url,
          playing = _this$props11.playing,
          loop = _this$props11.loop,
          controls = _this$props11.controls,
          muted = _this$props11.muted,
          config = _this$props11.config,
          width = _this$props11.width,
          height = _this$props11.height;
        var useAudio = this.shouldUseAudio(this.props);
        var Element = useAudio ? 'audio' : 'video';
        var style = {
          width: width === 'auto' ? width : '100%',
          height: height === 'auto' ? height : '100%'
        };
        return /*#__PURE__*/_react["default"].createElement(Element, _extends({
          ref: this.ref,
          src: this.getSource(url),
          style: style,
          preload: "auto",
          autoPlay: playing || undefined,
          controls: controls,
          muted: muted,
          loop: loop
        }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
      }
    }]);
    return FilePlayer;
  }(_react.Component);
  exports["default"] = FilePlayer;
  _defineProperty(FilePlayer, "displayName", 'FilePlayer');
  _defineProperty(FilePlayer, "canPlay", patterns.canPlay.file);
});
unwrapExports(FilePlayer_1);

var players = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var _default = [{
    key: 'youtube',
    name: 'YouTube',
    canPlay: patterns.canPlay.youtube,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(YouTube_1);
      });
    })
  }, {
    key: 'soundcloud',
    name: 'SoundCloud',
    canPlay: patterns.canPlay.soundcloud,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(SoundCloud_1);
      });
    })
  }, {
    key: 'vimeo',
    name: 'Vimeo',
    canPlay: patterns.canPlay.vimeo,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Vimeo_1);
      });
    })
  }, {
    key: 'facebook',
    name: 'Facebook',
    canPlay: patterns.canPlay.facebook,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Facebook_1);
      });
    })
  }, {
    key: 'streamable',
    name: 'Streamable',
    canPlay: patterns.canPlay.streamable,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Streamable_1);
      });
    })
  }, {
    key: 'wistia',
    name: 'Wistia',
    canPlay: patterns.canPlay.wistia,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Wistia_1);
      });
    })
  }, {
    key: 'twitch',
    name: 'Twitch',
    canPlay: patterns.canPlay.twitch,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Twitch_1);
      });
    })
  }, {
    key: 'dailymotion',
    name: 'DailyMotion',
    canPlay: patterns.canPlay.dailymotion,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(DailyMotion_1);
      });
    })
  }, {
    key: 'mixcloud',
    name: 'Mixcloud',
    canPlay: patterns.canPlay.mixcloud,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Mixcloud_1);
      });
    })
  }, {
    key: 'vidyard',
    name: 'Vidyard',
    canPlay: patterns.canPlay.vidyard,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Vidyard_1);
      });
    })
  }, {
    key: 'kaltura',
    name: 'Kaltura',
    canPlay: patterns.canPlay.kaltura,
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(Kaltura_1);
      });
    })
  }, {
    key: 'file',
    name: 'FilePlayer',
    canPlay: patterns.canPlay.file,
    canEnablePIP: function canEnablePIP(url) {
      return patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, utils.supportsWebKitPresentationMode)()) && !patterns.AUDIO_EXTENSIONS.test(url);
    },
    lazyPlayer: /*#__PURE__*/(0, React__default.lazy)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(FilePlayer_1);
      });
    })
  }];
  exports["default"] = _default;
});
unwrapExports(players);

var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}

var memoizeOne_esm = {
  __proto__: null,
  'default': memoizeOne
};

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    if (hasElementType && a instanceof Element) return false;
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    throw error;
  }
};

var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String('abc');
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols$1) {
      symbols = getOwnPropertySymbols$1(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () {};
if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has;
  printWarning = function (text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {}
  };
}
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        try {
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};
var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function () {};
if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function (text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {}
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data : {};
    this.stack = '';
  }
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    if (propType === 'symbol') {
      return true;
    }
    if (!propValue) {
      return false;
    }
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = reactIs;
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    module.exports = factoryWithThrowingShims();
  }
});

var props = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultProps = exports.propTypes = void 0;
  var _propTypes = _interopRequireDefault(propTypes);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    number = _propTypes["default"].number,
    array = _propTypes["default"].array,
    oneOfType = _propTypes["default"].oneOfType,
    shape = _propTypes["default"].shape,
    object = _propTypes["default"].object,
    func = _propTypes["default"].func,
    node = _propTypes["default"].node;
  var propTypes$1 = {
    url: oneOfType([string, array, object]),
    playing: bool,
    loop: bool,
    controls: bool,
    volume: number,
    muted: bool,
    playbackRate: number,
    width: oneOfType([string, number]),
    height: oneOfType([string, number]),
    style: object,
    progressInterval: number,
    playsinline: bool,
    pip: bool,
    stopOnUnmount: bool,
    light: oneOfType([bool, string, object]),
    playIcon: node,
    previewTabIndex: number,
    fallback: node,
    oEmbedUrl: string,
    wrapper: oneOfType([string, func, shape({
      render: func.isRequired
    })]),
    config: shape({
      soundcloud: shape({
        options: object
      }),
      youtube: shape({
        playerVars: object,
        embedOptions: object,
        onUnstarted: func
      }),
      facebook: shape({
        appId: string,
        version: string,
        playerId: string,
        attributes: object
      }),
      dailymotion: shape({
        params: object
      }),
      vimeo: shape({
        playerOptions: object,
        title: string
      }),
      file: shape({
        attributes: object,
        tracks: array,
        forceVideo: bool,
        forceAudio: bool,
        forceHLS: bool,
        forceSafariHLS: bool,
        forceDASH: bool,
        forceFLV: bool,
        hlsOptions: object,
        hlsVersion: string,
        dashVersion: string,
        flvVersion: string
      }),
      wistia: shape({
        options: object,
        playerId: string,
        customControls: array
      }),
      mixcloud: shape({
        options: object
      }),
      twitch: shape({
        options: object,
        playerId: string
      }),
      vidyard: shape({
        options: object
      })
    }),
    onReady: func,
    onStart: func,
    onPlay: func,
    onPause: func,
    onBuffer: func,
    onBufferEnd: func,
    onEnded: func,
    onError: func,
    onDuration: func,
    onSeek: func,
    onPlaybackRateChange: func,
    onProgress: func,
    onClickPreview: func,
    onEnablePIP: func,
    onDisablePIP: func
  };
  exports.propTypes = propTypes$1;
  var noop = function noop() {};
  var defaultProps = {
    playing: false,
    loop: false,
    controls: false,
    volume: null,
    muted: false,
    playbackRate: 1,
    width: '640px',
    height: '360px',
    style: {},
    progressInterval: 1000,
    playsinline: false,
    pip: false,
    stopOnUnmount: true,
    light: false,
    fallback: null,
    wrapper: 'div',
    previewTabIndex: 0,
    oEmbedUrl: 'https://noembed.com/embed?url={url}',
    config: {
      soundcloud: {
        options: {
          visual: true,
          buying: false,
          liking: false,
          download: false,
          sharing: false,
          show_comments: false,
          show_playcount: false
        }
      },
      youtube: {
        playerVars: {
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1
        },
        embedOptions: {},
        onUnstarted: noop
      },
      facebook: {
        appId: '1309697205772819',
        version: 'v3.3',
        playerId: null,
        attributes: {}
      },
      dailymotion: {
        params: {
          api: 1,
          'endscreen-enable': false
        }
      },
      vimeo: {
        playerOptions: {
          autopause: false,
          byline: false,
          portrait: false,
          title: false
        },
        title: null
      },
      file: {
        attributes: {},
        tracks: [],
        forceVideo: false,
        forceAudio: false,
        forceHLS: false,
        forceDASH: false,
        forceFLV: false,
        hlsOptions: {},
        hlsVersion: '1.1.4',
        dashVersion: '3.1.3',
        flvVersion: '1.5.0'
      },
      wistia: {
        options: {},
        playerId: null,
        customControls: null
      },
      mixcloud: {
        options: {
          hide_cover: 1
        }
      },
      twitch: {
        options: {},
        playerId: null
      },
      vidyard: {
        options: {}
      }
    },
    onReady: noop,
    onStart: noop,
    onPlay: noop,
    onPause: noop,
    onBuffer: noop,
    onBufferEnd: noop,
    onEnded: noop,
    onError: noop,
    onDuration: noop,
    onSeek: noop,
    onPlaybackRateChange: noop,
    onProgress: noop,
    onClickPreview: noop,
    onEnablePIP: noop,
    onDisablePIP: noop
  };
  exports.defaultProps = defaultProps;
});
unwrapExports(props);

var Player_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  var _reactFastCompare = _interopRequireDefault(reactFastCompare);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SEEK_ON_PLAY_EXPIRY = 5000;
  var Player = /*#__PURE__*/function (_Component) {
    _inherits(Player, _Component);
    var _super = _createSuper(Player);
    function Player() {
      var _this;
      _classCallCheck(this, Player);
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(_args));
      _defineProperty(_assertThisInitialized(_this), "mounted", false);
      _defineProperty(_assertThisInitialized(_this), "isReady", false);
      _defineProperty(_assertThisInitialized(_this), "isPlaying", false);
      _defineProperty(_assertThisInitialized(_this), "isLoading", true);
      _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);
      _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);
      _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);
      _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);
      _defineProperty(_assertThisInitialized(_this), "handlePlayerMount", function (player) {
        if (_this.player) {
          _this.progress();
          return;
        }
        _this.player = player;
        _this.player.load(_this.props.url);
        _this.progress();
      });
      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
        if (!_this.player) return null;
        return _this.player[key];
      });
      _defineProperty(_assertThisInitialized(_this), "progress", function () {
        if (_this.props.url && _this.player && _this.isReady) {
          var playedSeconds = _this.getCurrentTime() || 0;
          var loadedSeconds = _this.getSecondsLoaded();
          var duration = _this.getDuration();
          if (duration) {
            var progress = {
              playedSeconds: playedSeconds,
              played: playedSeconds / duration
            };
            if (loadedSeconds !== null) {
              progress.loadedSeconds = loadedSeconds;
              progress.loaded = loadedSeconds / duration;
            }
            if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
              _this.props.onProgress(progress);
            }
            _this.prevPlayed = progress.playedSeconds;
            _this.prevLoaded = progress.loadedSeconds;
          }
        }
        _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
      });
      _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
        if (!_this.mounted) return;
        _this.isReady = true;
        _this.isLoading = false;
        var _this$props = _this.props,
          onReady = _this$props.onReady,
          playing = _this$props.playing,
          volume = _this$props.volume,
          muted = _this$props.muted;
        onReady();
        if (!muted && volume !== null) {
          _this.player.setVolume(volume);
        }
        if (_this.loadOnReady) {
          _this.player.load(_this.loadOnReady, true);
          _this.loadOnReady = null;
        } else if (playing) {
          _this.player.play();
        }
        _this.handleDurationCheck();
      });
      _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
        _this.isPlaying = true;
        _this.isLoading = false;
        var _this$props2 = _this.props,
          onStart = _this$props2.onStart,
          onPlay = _this$props2.onPlay,
          playbackRate = _this$props2.playbackRate;
        if (_this.startOnPlay) {
          if (_this.player.setPlaybackRate && playbackRate !== 1) {
            _this.player.setPlaybackRate(playbackRate);
          }
          onStart();
          _this.startOnPlay = false;
        }
        onPlay();
        if (_this.seekOnPlay) {
          _this.seekTo(_this.seekOnPlay);
          _this.seekOnPlay = null;
        }
        _this.handleDurationCheck();
      });
      _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
        _this.isPlaying = false;
        if (!_this.isLoading) {
          _this.props.onPause(e);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
        var _this$props3 = _this.props,
          activePlayer = _this$props3.activePlayer,
          loop = _this$props3.loop,
          onEnded = _this$props3.onEnded;
        if (activePlayer.loopOnEnded && loop) {
          _this.seekTo(0);
        }
        if (!loop) {
          _this.isPlaying = false;
          onEnded();
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleError", function () {
        var _this$props4;
        _this.isLoading = false;
        (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
        clearTimeout(_this.durationCheckTimeout);
        var duration = _this.getDuration();
        if (duration) {
          if (!_this.onDurationCalled) {
            _this.props.onDuration(duration);
            _this.onDurationCalled = true;
          }
        } else {
          _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
        _this.isLoading = false;
      });
      return _this;
    }
    _createClass(Player, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.progressTimeout);
        clearTimeout(this.durationCheckTimeout);
        if (this.isReady && this.props.stopOnUnmount) {
          this.player.stop();
          if (this.player.disablePIP) {
            this.player.disablePIP();
          }
        }
        this.mounted = false;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;
        if (!this.player) {
          return;
        }
        var _this$props5 = this.props,
          url = _this$props5.url,
          playing = _this$props5.playing,
          volume = _this$props5.volume,
          muted = _this$props5.muted,
          playbackRate = _this$props5.playbackRate,
          pip = _this$props5.pip,
          loop = _this$props5.loop,
          activePlayer = _this$props5.activePlayer,
          disableDeferredLoading = _this$props5.disableDeferredLoading;
        if (!(0, _reactFastCompare["default"])(prevProps.url, url)) {
          if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, utils.isMediaStream)(url)) {
            console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
            this.loadOnReady = url;
            return;
          }
          this.isLoading = true;
          this.startOnPlay = true;
          this.onDurationCalled = false;
          this.player.load(url, this.isReady);
        }
        if (!prevProps.playing && playing && !this.isPlaying) {
          this.player.play();
        }
        if (prevProps.playing && !playing && this.isPlaying) {
          this.player.pause();
        }
        if (!prevProps.pip && pip && this.player.enablePIP) {
          this.player.enablePIP();
        }
        if (prevProps.pip && !pip && this.player.disablePIP) {
          this.player.disablePIP();
        }
        if (prevProps.volume !== volume && volume !== null) {
          this.player.setVolume(volume);
        }
        if (prevProps.muted !== muted) {
          if (muted) {
            this.player.mute();
          } else {
            this.player.unmute();
            if (volume !== null) {
              setTimeout(function () {
                return _this2.player.setVolume(volume);
              });
            }
          }
        }
        if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
          this.player.setPlaybackRate(playbackRate);
        }
        if (prevProps.loop !== loop && this.player.setLoop) {
          this.player.setLoop(loop);
        }
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        if (!this.isReady) return null;
        return this.player.getDuration();
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (!this.isReady) return null;
        return this.player.getCurrentTime();
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        if (!this.isReady) return null;
        return this.player.getSecondsLoaded();
      }
    }, {
      key: "seekTo",
      value: function seekTo(amount, type) {
        var _this3 = this;
        if (!this.isReady) {
          if (amount !== 0) {
            this.seekOnPlay = amount;
            setTimeout(function () {
              _this3.seekOnPlay = null;
            }, SEEK_ON_PLAY_EXPIRY);
          }
          return;
        }
        var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';
        if (isFraction) {
          var duration = this.player.getDuration();
          if (!duration) {
            console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
            return;
          }
          this.player.seekTo(duration * amount);
          return;
        }
        this.player.seekTo(amount);
      }
    }, {
      key: "render",
      value: function render() {
        var Player = this.props.activePlayer;
        if (!Player) {
          return null;
        }
        return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError
        }));
      }
    }]);
    return Player;
  }(_react.Component);
  exports["default"] = Player;
  _defineProperty(Player, "displayName", 'Player');
  _defineProperty(Player, "propTypes", props.propTypes);
  _defineProperty(Player, "defaultProps", props.defaultProps);
});
unwrapExports(Player_1);

var Preview_1 = createCommonjsModule(function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(React__default);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var ICON_SIZE = '64px';
  var cache = {};
  var Preview = /*#__PURE__*/function (_Component) {
    _inherits(Preview, _Component);
    var _super = _createSuper(Preview);
    function Preview() {
      var _this;
      _classCallCheck(this, Preview);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "mounted", false);
      _defineProperty(_assertThisInitialized(_this), "state", {
        image: null
      });
      _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          _this.props.onClick();
        }
      });
      return _this;
    }
    _createClass(Preview, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        this.fetchImage(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props = this.props,
          url = _this$props.url,
          light = _this$props.light;
        if (prevProps.url !== url || prevProps.light !== light) {
          this.fetchImage(this.props);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "fetchImage",
      value: function fetchImage(_ref) {
        var _this2 = this;
        var url = _ref.url,
          light = _ref.light,
          oEmbedUrl = _ref.oEmbedUrl;
        if ( /*#__PURE__*/_react["default"].isValidElement(light)) {
          return;
        }
        if (typeof light === 'string') {
          this.setState({
            image: light
          });
          return;
        }
        if (cache[url]) {
          this.setState({
            image: cache[url]
          });
          return;
        }
        this.setState({
          image: null
        });
        return window.fetch(oEmbedUrl.replace('{url}', url)).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.thumbnail_url && _this2.mounted) {
            var image = data.thumbnail_url.replace('height=100', 'height=480').replace('-d_295x166', '-d_640');
            _this2.setState({
              image: image
            });
            cache[url] = image;
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          light = _this$props2.light,
          onClick = _this$props2.onClick,
          playIcon = _this$props2.playIcon,
          previewTabIndex = _this$props2.previewTabIndex;
        var image = this.state.image;
        var isElement = /*#__PURE__*/_react["default"].isValidElement(light);
        var flexCenter = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        };
        var styles = {
          preview: _objectSpread({
            width: '100%',
            height: '100%',
            backgroundImage: image && !isElement ? "url(".concat(image, ")") : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer'
          }, flexCenter),
          shadow: _objectSpread({
            background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
            borderRadius: ICON_SIZE,
            width: ICON_SIZE,
            height: ICON_SIZE,
            position: isElement ? 'absolute' : undefined
          }, flexCenter),
          playIcon: {
            borderStyle: 'solid',
            borderWidth: '16px 0 16px 26px',
            borderColor: 'transparent transparent transparent white',
            marginLeft: '7px'
          }
        };
        var defaultPlayIcon = /*#__PURE__*/_react["default"].createElement("div", {
          style: styles.shadow,
          className: "react-player__shadow"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: styles.playIcon,
          className: "react-player__play-icon"
        }));
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: styles.preview,
          className: "react-player__preview",
          onClick: onClick,
          tabIndex: previewTabIndex,
          onKeyPress: this.handleKeyPress
        }, isElement ? light : null, playIcon || defaultPlayIcon);
      }
    }]);
    return Preview;
  }(_react.Component);
  exports["default"] = Preview;
});
unwrapExports(Preview_1);

var require$$2 = getCjsExportFromNamespace(memoizeOne_esm);

var ReactPlayer = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createReactPlayer = void 0;
  var _react = _interopRequireWildcard(React__default);
  var _deepmerge = _interopRequireDefault(cjs);
  var _memoizeOne = _interopRequireDefault(require$$2);
  var _reactFastCompare = _interopRequireDefault(reactFastCompare);
  var _Player3 = _interopRequireDefault(Player_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var Preview = /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(Preview_1);
    });
  });
  var IS_BROWSER = typeof window !== 'undefined' && window.document;
  var IS_GLOBAL = typeof commonjsGlobal !== 'undefined' && commonjsGlobal.window && commonjsGlobal.window.document;
  var SUPPORTED_PROPS = Object.keys(props.propTypes);
  var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function () {
    return null;
  };
  var customPlayers = [];
  var createReactPlayer = function createReactPlayer(players, fallback) {
    var _class, _temp;
    return _temp = _class = /*#__PURE__*/function (_Component) {
      _inherits(ReactPlayer, _Component);
      var _super = _createSuper(ReactPlayer);
      function ReactPlayer() {
        var _this;
        _classCallCheck(this, ReactPlayer);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          showPreview: !!_this.props.light
        });
        _defineProperty(_assertThisInitialized(_this), "references", {
          wrapper: function wrapper(_wrapper) {
            _this.wrapper = _wrapper;
          },
          player: function player(_player) {
            _this.player = _player;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function (e) {
          _this.setState({
            showPreview: false
          });
          _this.props.onClickPreview(e);
        });
        _defineProperty(_assertThisInitialized(_this), "showPreview", function () {
          _this.setState({
            showPreview: true
          });
        });
        _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
          if (!_this.player) return null;
          return _this.player.getDuration();
        });
        _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
          if (!_this.player) return null;
          return _this.player.getCurrentTime();
        });
        _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
          if (!_this.player) return null;
          return _this.player.getSecondsLoaded();
        });
        _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
          var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
          if (!_this.player) return null;
          return _this.player.getInternalPlayer(key);
        });
        _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
          if (!_this.player) return null;
          _this.player.seekTo(fraction, type);
        });
        _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
          _this.props.onReady(_assertThisInitialized(_this));
        });
        _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function (url) {
          for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players)); _i < _arr.length; _i++) {
            var player = _arr[_i];
            if (player.canPlay(url)) {
              return player;
            }
          }
          if (fallback) {
            return fallback;
          }
          return null;
        }));
        _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function (url, key) {
          var config = _this.props.config;
          return _deepmerge["default"].all([props.defaultProps.config, props.defaultProps.config[key] || {}, config, config[key] || {}]);
        }));
        _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function (url) {
          return (0, utils.omit)(_this.props, SUPPORTED_PROPS);
        }));
        _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function (url) {
          if (!url) return null;
          var player = _this.getActivePlayer(url);
          if (!player) return null;
          var config = _this.getConfig(url, player.key);
          return /*#__PURE__*/_react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
            key: player.key,
            ref: _this.references.player,
            config: config,
            activePlayer: player.lazyPlayer || player,
            onReady: _this.handleReady
          }));
        });
        return _this;
      }
      _createClass(ReactPlayer, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var light = this.props.light;
          if (!prevProps.light && light) {
            this.setState({
              showPreview: true
            });
          }
          if (prevProps.light && !light) {
            this.setState({
              showPreview: false
            });
          }
        }
      }, {
        key: "renderPreview",
        value: function renderPreview(url) {
          if (!url) return null;
          var _this$props = this.props,
            light = _this$props.light,
            playIcon = _this$props.playIcon,
            previewTabIndex = _this$props.previewTabIndex,
            oEmbedUrl = _this$props.oEmbedUrl;
          return /*#__PURE__*/_react["default"].createElement(Preview, {
            url: url,
            light: light,
            playIcon: playIcon,
            previewTabIndex: previewTabIndex,
            oEmbedUrl: oEmbedUrl,
            onClick: this.handleClickPreview
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            url = _this$props2.url,
            style = _this$props2.style,
            width = _this$props2.width,
            height = _this$props2.height,
            fallback = _this$props2.fallback,
            Wrapper = _this$props2.wrapper;
          var showPreview = this.state.showPreview;
          var attributes = this.getAttributes(url);
          var wrapperRef = typeof Wrapper === 'string' ? this.references.wrapper : undefined;
          return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
            ref: wrapperRef,
            style: _objectSpread(_objectSpread({}, style), {}, {
              width: width,
              height: height
            })
          }, attributes), /*#__PURE__*/_react["default"].createElement(UniversalSuspense, {
            fallback: fallback
          }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
        }
      }]);
      return ReactPlayer;
    }(_react.Component), _defineProperty(_class, "displayName", 'ReactPlayer'), _defineProperty(_class, "propTypes", props.propTypes), _defineProperty(_class, "defaultProps", props.defaultProps), _defineProperty(_class, "addCustomPlayer", function (player) {
      customPlayers.push(player);
    }), _defineProperty(_class, "removeCustomPlayers", function () {
      customPlayers.length = 0;
    }), _defineProperty(_class, "canPlay", function (url) {
      for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players)); _i2 < _arr2.length; _i2++) {
        var _Player = _arr2[_i2];
        if (_Player.canPlay(url)) {
          return true;
        }
      }
      return false;
    }), _defineProperty(_class, "canEnablePIP", function (url) {
      for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players)); _i3 < _arr3.length; _i3++) {
        var _Player2 = _arr3[_i3];
        if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
          return true;
        }
      }
      return false;
    }), _temp;
  };
  exports.createReactPlayer = createReactPlayer;
});
unwrapExports(ReactPlayer);

var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _players = _interopRequireDefault(players);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var fallback = _players["default"][_players["default"].length - 1];
  var _default = (0, ReactPlayer.createReactPlayer)(_players["default"], fallback);
  exports["default"] = _default;
});
var ReactPlayer$1 = unwrapExports(lib);

const VideoPlayer = _ref => {
  let {
    URL,
    muted
  } = _ref;
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const playerRef = useRef({});
  useEffect(() => {
    const handleKeyDown = function (event) {
      if (event.ctrlKey && event.code === 'KeyS') {
        if (event.shiftKey) {
          setPlaybackRate(Math.min(playbackRate + 0.25, 4));
        } else {
          setPlaybackRate(Math.max(playbackRate - 0.25, 0.5));
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  const getVideoProgress = () => {
    const videoProgress = load('videoProgress');
    if (!videoProgress) return 0;
    if (Object.keys(videoProgress).indexOf(URL) === -1) {
      return 0;
    }
    return parseFloat(videoProgress[URL]);
  };
  const handleProgress = state => {
    const videoProgress = load('videoProgress') || {};
    videoProgress[URL] = state.playedSeconds;
    save('videoProgress', videoProgress);
  };
  const handleVideoEnd = () => {
    save('videoProgress', {
      [URL]: 0
    });
  };
  const handlePlayerError = e => {
    var _e$target, _e$target$error;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$error = _e$target.error) !== null && _e$target$error !== void 0 && _e$target$error.code) {
      switch (e.target.error.code) {
        case 1:
          Notify.warning('The video is not found or has been removed');
          break;
        case 2:
          Notify.warning('The video is not playable in the current browser');
          break;
        case 3:
          Notify.warning('The video has an invalid source');
          break;
        case 4:
          Notify.info('To continue your lesson, please click play button');
          break;
        case 5:
          Notify.warning('The video is too long');
          break;
        case 6:
          Notify.warning('The video is not supported');
          break;
        default:
          Notify.warning('An unknown error occurred while playing the video');
      }
    } else {
      Notify.warning('An unknown error occurred while playing the video. Please, reload the page if needed');
    }
  };
  const setVideoProgress = () => {
    if (!playerRef) return;
    if (!playerRef.current) return;
    playerRef.current.seekTo(getVideoProgress());
    setIsVideoLoading(false);
  };
  return React__default.createElement(Fragment, null, isVideoLoading && React__default.createElement(Loader, null), React__default.createElement(ReactPlayer$1, {
    url: URL,
    width: '100%',
    height: '100%',
    playing: true,
    loop: true,
    muted: muted,
    controls: true,
    onProgress: handleProgress,
    onReady: setVideoProgress,
    onEnded: handleVideoEnd,
    onError: handlePlayerError,
    ref: playerRef,
    playbackRate: playbackRate
  }), React__default.createElement("div", null, React__default.createElement(Typography, {
    variant: 'subtitle2',
    component: 'p'
  }, "If you want to Increase playback speed - use combination \"Ctrl + Shift + S \""), React__default.createElement(Typography, {
    variant: 'subtitle2',
    component: 'p'
  }, "If you want to Decrease playback speed - use combination \"Ctrl + S\"")));
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleComponent, Hero, Loader, NavBar, PaginationControlled, SharedLayout, SkillsList, VideoPlayer, load, save };
//# sourceMappingURL=index.modern.js.map
