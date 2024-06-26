const clothesData = {
  "tops": {
              "0":{"name":"无","material": "无", "weight": 0,"carbonFactor":0,"washingTimes":0},
              "1": {"name":"polo衫","material": "亚麻", "weight": 190,"carbonFactor":14.35,"washingTimes":48},
              "2": {"name":"polo衫","material": "纯棉", "weight": 230,"carbonFactor":4.76,"washingTimes":48 },
              "3": {"name":"T恤","material": "纯棉", "weight": 210,"carbonFactor":4.76,"washingTimes":48 },
              "4": {"name":"T恤","material": "丝光棉", "weight": 230,"carbonFactor":14.35,"washingTimes":48},
              "5": {"name":"衬衫","material": "纯棉", "weight": 125,"carbonFactor":4.76,"washingTimes": 24},
              "6": {"name":"衬衫","material": "涤棉", "weight": 140,"carbonFactor":5.47,"washingTimes":24 },
              "7": {"name":"衬衫","material": "化纤", "weight": 205,"carbonFactor":8,"washingTimes":24},
              "8": {"name":"衬衫","material": "亚麻", "weight": 125,"carbonFactor":21.63,"washingTimes":24},
              "9": {"name":"卫衣","material": "纯棉", "weight": 340,"carbonFactor":4.76,"washingTimes":36},
              "10": {"name":"卫衣","material": "丝质", "weight": 280,"carbonFactor":0.82,"washingTimes":36},
              "11": {"name":"卫衣","material": "涤棉", "weight": 300,"carbonFactor":5.47,"washingTimes":36},
              "12": {"name":"卫衣","material": "毛料", "weight": 340,"carbonFactor":13.81,"washingTimes":36},
              "13": {"name":"毛衣","material": "毛纺织", "weight": 350,"carbonFactor":13.81,"washingTimes":36}
          },
  "bottoms":{ 
              "0":{"name":"无","material": "无", "weight": 0,"carbonFactor":0,"washingTimes":0},
              "1": {"name":"西裤","material": "棉质", "weight": 600,"carbonFactor":0.45,"washingTimes":18},
              "2": {"name":"西裤","material": "羊毛", "weight": 320,"carbonFactor":13.81,"washingTimes":18},
              "3": {"name":"打底裤","material": "棉质", "weight": 120,"carbonFactor":0.45,"washingTimes":36},
              "4": {"name":"打底裤","material": "羊毛", "weight": 120,"carbonFactor":13.81,"washingTimes":36},
              "5": {"name":"打底裤","material": "涤纶", "weight": 120,"carbonFactor":25.7,"washingTimes":36},
              "6": {"name":"牛仔长裤","material": "牛仔", "weight": 750,"carbonFactor":16.42,"washingTimes":48},
              "7": {"name":"运动长裤","material": "纯棉", "weight": 280,"carbonFactor":4.76,"washingTimes":18},
              "8": {"name":"运动长裤","material": "尼龙", "weight": 275,"carbonFactor":8,"washingTimes":18},
              "9": {"name":"运动长裤","material": "涤纶", "weight": 275,"carbonFactor":25.7,"washingTimes":18},
              "10": {"name":"短裤","material": "纯棉", "weight": 350,"carbonFactor":4.76,"washingTimes":24},
              "11": {"name":"短裤","material": "涤纶", "weight": 290,"carbonFactor":25.7,"washingTimes":24},
              "12": {"name":"短裤","material": "牛仔", "weight": 450,"carbonFactor":16.42,"washingTimes":24},
              "13": {"name":"短裙","material": "棉质", "weight": 250,"carbonFactor":0.45,"washingTimes":24},
              "14": {"name":"短裙","material": "牛仔布", "weight":625,"carbonFactor":16.42,"washingTimes":24},
              "15": {"name":"短裙","material": "丝绸", "weight": 350,"carbonFactor":0.82,"washingTimes":24},
              "16": {"name":"短裙","material": "麻布", "weight": 200,"carbonFactor":21.63,"washingTimes":24},
              "17": {"name":"半身裙","material": "纯棉", "weight": 325,"carbonFactor":4.76,"washingTimes":24},
              "18": {"name":"半身裙","material": "丝绸", "weight": 350,"carbonFactor":0.82,"washingTimes":24},
              "19": {"name":"半身裙","material": "羊毛", "weight": 250,"carbonFactor":13.81,"washingTimes":24},
              "20": {"name":"半身裙","material": "涤纶", "weight": 200,"carbonFactor":25.7,"washingTimes":24},
              "21": {"name":"吊带裙","material": "丝绸", "weight": 350,"carbonFactor":0.82,"washingTimes":24},
              "22": {"name":"吊带裙","material": "棉质", "weight": 350,"carbonFactor":0.45,"washingTimes":24}
            },
  "outerwears": {
                  "0":{"name":"无","material": "无", "weight": 0,"carbonFactor":0,"washingTimes":0},
                  "1": {"name":"夹克","material": "纯棉", "weight": 190,"carbonFactor":8.17,"washingTimes":18},
                  "2": {"name":"夹克","material": "涤棉", "weight": 190,"carbonFactor":5.47,"washingTimes":18},
                  "3": {"name":"夹克","material": "毛料", "weight": 325,"carbonFactor":13.81,"washingTimes":18},
                  "4": {"name":"夹克","material": "皮革", "weight": 150,"carbonFactor":73,"washingTimes":18},
                  "5": {"name":"夹克","material": "牛仔", "weight": 375,"carbonFactor":8,"washingTimes":18},
                  "6": {"name":"西装外套","material": "羊毛", "weight": 290,"carbonFactor":13.81,"washingTimes":18},
                  "7": {"name":"西装外套","material": "亚麻", "weight": 275, "carbonFactor":21.63,"washingTimes":18},
                  "8": {"name":"西装外套","material": "纯棉", "weight": 245,"carbonFactor":4.76,"washingTimes":18},
                  "9": {"name":"西装外套","material": "涤棉", "weight": 245,"carbonFactor":5.47,"washingTimes":18},
                  "10": {"name":"标准羽绒服","material": "羽绒", "weight": 1150,"carbonFactor":3.34,"washingTimes":18},
                  "11": {"name":"轻薄羽绒服","material": "羽绒", "weight": 700,"carbonFactor":3.34,"washingTimes":18},
                  "12": {"name":"运动外套","material": "涤纶", "weight": 400,"carbonFactor":25.7,"washingTimes":18},
                  "13": {"name":"运动外套","material": "尼龙", "weight": 225,"carbonFactor":8,"washingTimes":18},
                  "14": {"name":"棉服","material": "白色棉服", "weight": 1000,"carbonFactor":30.93,"washingTimes":18},
                  "15": {"name":"棉服","material": "彩色棉服", "weight": 1000,"carbonFactor":28.63,"washingTimes":18},
                  "16": {"name":"风衣","material": "化纤", "weight": 1350,"carbonFactor":8,"washingTimes":18},
                  "17": {"name":"卫衣外套","material": "纯棉", "weight": 340,"carbonFactor":4.76,"washingTimes":18},
                  "18": {"name":"卫衣外套","material": "羊毛", "weight": 350,"carbonFactor":13.81,"washingTimes":18}
                  },
  "dresses":{ 
              "0":{"name":"无","material": "无", "weight": 0,"carbonFactor":0,"washingTimes":0},
              "1": {"name":"长裙","material": "丝绸", "weight": 500,"carbonFactor": 0.82,"washingTimes":24},
              "2": {"name":"长裙","material": "棉质", "weight": 600,"carbonFactor":0.45,"washingTimes":24},
              "3": {"name":"长裙","material": "涤纶", "weight": 160,"carbonFactor":25.7,"washingTimes":24}
            }
}

const distanceData=[
[0,110.003361,	224.418701,	406.036237,	451.53583,	621.97118,	860.203885,	1249.863325,	1074.359837,	925.494706,	1126.57574,	899.107927,	1548.08135,	1249.984806,	363.953797,	622.606321,	1055.28236,	1338.196663,	1886.419072,	2047.842972,	2287.124157,	1465.478149,	1518.495021,	1734.455919,	2087.390744,	2517.960521,	912.201579,	1191.278257,	1753.619848,	921.463073,	2405.870364],
[110.003361,0,	192.933531,	429.770471,	554.672663,	601.056023,	859.246155,	1273.454285,	966.501145,	821.429451,	1023.179758,	808.6599,	1454.711889,	1168.123306,	273.821483,	578.907696,	986.612651,	1274.150331,	1814.557769,	1998.750182,	2224.669145,	1448.854691,	1520.643825,	1703.563055,	2070.35275,	2560.279915,	912.481189,	1234.346492,	1814.097662,	971.267422,	2499.390679],
[224.418701,192.933531,	0,	259.315353,	531.685916,	792.812008,	1052.10699,	1461.829012,	940.693998,	771.702052,	966.17489,	705.595027,	1354.82518,	1040.388844,	201.930688,	398.552021,	835.381703,	1115.655861,	1666.903824,	1823.745047,	2063.62825,	1256.82638,	1328.408341,	1516.331865,	1878.601658,	2386.91388,	720.471738,	1065.647383,	1662.180194,	812.444777,	2409.254284],
[406.036237,429.770471,	259.315353,	0,	445.52285,	1023.483202,	1266.210725,	1645.460596,	1109.006074,	923.983699,	1100.410845,	795.777445,	1417.843176,	1067.799149,	416.856125,	358.921098,	825.808609,	1073.907643,	1635.924781,	1720.276887,	1995.991163,	1080.264021,	1115.370808,	1369.680853,	1699.074724,	2131.739708,	513.688522,	807.769726,	1403.380905,	553.273651,	2182.078745],
[451.53583,554.672663,	531.685916,	445.52285,	0,	969.999049,	1137.108665,	1418.245064,	1472.268744,	1302.305682,	1494.131442,	1213.890558,	1851.881442,	1509.644992,	732.914096,	802.838283,	1271.032672,	1517.213227,	2079.037183,	2134.936913,	2427.421427,	1440.830991,	1413.71297,	1755.204239,	2037.782315,	2225.67532,	872.717789,	940.08799,	1409.691985,	669.235643,	1962.309639],
[621.97118,601.056023,	792.812008,	1023.483202,	969.999049,	0,	281.716395,	741.514693,	1189.877177,	1130.092836,	1313.729294,	1230.462801,	1808.517611,	1607.430389,	791.243583,	1153.30395,	1487.92703,	1778.877363,	2276.138829,	2532.245331,	2715.221065,	2039.823919,	2121.213338,	2276.209356,	2658.702395,	3137.546486,	1513.247019,	1811.868665,	2357.726862,	1539.832426,	2899.03462],
[860.203885,859.246155,	1052.10699,	1266.210725,	1137.108665,	281.716395,	0,	464.888496,	1449.059656,	1402.501067,	1580.674718,	1510.929753,	2078.852476,	1887.459841,	1068.397337,	1425.692395,	1769.506694,	2060.54355,	2556.271154,	2813.27505,	2996.539312,	2307.120578,	2376.535165,	2551.304144,	2927.851564,	3348.192576,	1768.659434,	2030.581669,	2545.733632,	1755.030131,	2995.123857],
[1249.863325,1273.454285,	1461.829012,	1645.460596,	1418.245064,	741.514693,	464.888496,	0,	1911.300531,	1867.372744,	2045.015696,	1971.482349,	2543.61959,	2348.684092,	1507.913721,	1851.514052,	2220.968788,	2512.694998,	3017.239373,	3259.204216,	3454.08116,	2715.270833,	2759.679948,	2977.013017,	3337.235774,	3639.514265,	2158.452086,	2353.495883,	2807.832826,	2078.410185,	3095.635141],
[1074.359837,966.501145,	940.693998,	1109.006074,	1472.268744,	1189.877177,	1449.059656,	1911.300531,	0,	192.398329,	165.833526,	411.323888,	651.434367,	612.272654,	739.435986,	836.693933,	695.499167,	889.848105,	1213.650071,	1605.930258,	1673.564084,	1458.934815,	1667.184905,	1532.062712,	1964.915418,	2906.612043,	1226.22931,	1732.390207,	2358.753624,	1564.392285,	3269.0462],
[925.494706,821.429451,	771.702052,	923.983699,	1302.305682,	1130.092836,	1402.501067,	1867.372744,	192.398329,	0,	202.221367,	236.814882,	678.918958,	528.066047,	574.203642,	644.305453,	545.833785,	778.966039,	1179.249766,	1525.229182,	1634.8364,	1302.037234,	1498.901063,	1404.599866,	1835.2012,	2730.721089,	1037.563319,	1541.608991,	2168.648389,	1372.010543,	3077.43531],
[1126.57574,1023.179758,	966.17489,	1100.410845,	1494.131442,	1313.729294,	1580.674718,	2045.015696,	165.833526,	202.221367,	0,	329.567036,	501.033286,	451.909458,	771.82787,	791.839064,	566.877228,	734.656966,	1049.232929,	1441.165437,	1509.074232,	1326.67741,	1545.557257,	1380.250787,	1813.037728,	2791.850771,	1146.588805,	1658.873137,	2279.572213,	1512.698967,	3225.018406],
[899.107927,808.6599,	705.595027,	795.777445,	1213.890558,	1230.462801,	1510.929753,	1971.482349,	411.323888,	236.814882,	329.567036,	0,	650.028474,	377.485858,	535.987426,	467.20232,	317.305995,	577.990879,	1045.757201,	1338.011839,	1487.340786,	1066.04631,	1262.393779,	1181.542252,	1609.300744,	2496.885097,	821.001366,	1331.707493,	1954.883039,	1183.489096,	2896.13728],
[1548.08135,1454.711889,	1354.82518,	1417.843176,	1851.881442,	1808.517611,	2078.852476,	2543.61959,	651.434367,	678.918958,	501.033286,	650.028474,	0,	373.786123,	1184.229433,	1063.135282,	635.379008,	575.470796,	606.100595,	1072.808668,	1056.220571,	1227.249803,	1481.43851,	1155.289158,	1564.737054,	2711.567445,	1277.733479,	1771.004999,	2347.470506,	1698.700094,	3382.649741],
[1249.984806,1168.123306,	1040.388844,	1067.799149,	1509.644992,	1607.430389,	1887.459841,	2348.684092,	612.272654,	528.066047,	451.909458,	377.485858,	373.786123,	0,	894.654559,	709.055527,	261.983469,	288.223334,	668.813756,	999.880573,	1115.251886,	922.907014,	1163.711082,	934.551518,	1366.163099,	2410.941919,	904.974285,	1403.056239,	1991.129461,	1324.914856,	3012.696865],
[363.953797,	273.821483,	201.930688,	416.856125,	732.914096,	791.243583,	1068.397337,	1507.913721,	739.435986,	574.203642,	771.82787,	535.987426,	1184.229433,	894.654559,	0,	369.520022,	721.972523,	1012.482159,	1545.009452,	1751.447185,	1961.974047,	1259.649466,	1369.009499,	1485.205742,	1873.496677,	2491.344998,	776.414415,	1189.340152,	1803.95394,	955.87918,	2595.325499],
[622.606321,	578.907696,	398.552021,	358.921098,	802.838283,	1153.30395,	1425.692395,	1851.514052,	836.693933,	644.305453,	791.839064,	467.20232,	1063.135282,	709.055527,	369.520022,	0,	468.993544,	730.923741,	1290.493751,	1425.24746,	1671.852207,	890.373483,	1005.161475,	1126.693196,	1506.118259,	2164.838648,	434.148081,	909.378105,	1537.729986,	727.708802,	2435.791363],
[1055.28236,	986.612651,	835.381703,	825.808609,	1271.032672,	1487.92703,	1769.506694,	2220.968788,	695.499167,	545.833785,	566.877228,	317.305995,	635.379008,	261.983469,	721.972523,	468.993544,	0,	291.777411,	831.531874,	1047.039627,	1240.001529,	763.487481,	978.743111,	864.364442,	1292.111272,	2226.063818,	647.627511,	1152.634064,	1753.174594,	1063.813752,	2757.727097],
[1338.196663,	1274.150331,	1115.655861,	1073.907643,	1517.213227,	1778.877363,	2060.54355,	2512.694998,	889.848105,	778.966039,	734.656966,	577.990879,	575.470796,	288.223334,	1012.482159,	730.923741,	291.777411,	0,	562.020366,	761.450543,	950.530703,	654.999555,	906.615282,	646.80338,	1079.036558,	2144.015236,	774.925595,	1230.411439,	1782.255238,	1204.80332,	2839.968514],
[1886.419072,	1814.557769,	1666.903824,	1635.924781,	2079.037183,	2276.138829,	2556.271154,	3017.239373,	1213.650071,	1179.249766,	1049.232929,	1045.757201,	606.100595,	668.813756,	1545.009452,	1290.493751,	831.531874,	562.020366,	0,	504.339696,	459.914771,	980.930134,	1232.504687,	758.199563,	1085.767782,	2349.621939,	1302.622795,	1697.963811,	2172.34661,	1723.574214,	3270.176138],
[2047.842972,	1998.750182,	1823.745047,	1720.276887,	2134.936913,	2532.245331,	2813.27505,	3259.204216,	1605.930258,	1525.229182,	1441.165437,	1338.011839,	1072.808668,	999.880573,	1751.447185,	1425.24746,	1047.039627,	761.450543,	504.339696,	0,	376.282297,	772.570024,	968.693052,	446.557165,	619.300786,	1922.148911,	1273.842495,	1533.942211,	1889.754628,	1639.985082,	2999.143338],
[2287.124157,	2224.669145,	2063.62825,	1995.991163,	2427.421427,	2715.221065,	2996.539312,	3454.08116,	1673.564084,	1634.8364,	1509.074232,	1487.340786,	1056.220571,	1115.251886,	1961.974047,	1671.852207,	1240.001529,	950.530703,	459.914771,	376.282297,	0,	1132.27685,	1341.310225,	817.264714,	961.493911,	2267.966024,	1590.515984,	1894.324134,	2265.999803,	1980.17555,	3375.42385],
[1465.478149,	1448.854691,	1256.82638,	1080.264021,	1440.830991,	2039.823919,	2307.120578,	2715.270833,	1458.934815,	1302.037234,	1326.67741,	1066.04631,	1227.249803,	922.907014,	1259.649466,	890.373483,	763.487481,	654.999555,	980.930134,	772.570024,	1132.27685,	0,	259.819291,	334.60893,	622.050931,	1489.806869,	573.35417,	762.47236,	1191.633301,	878.603716,	2290.749953],
[1518.495021,	1520.643825,	1328.408341,	1115.370808,	1413.71297,	2121.213338,	2376.535165,	2759.679948,	1667.184905,	1498.901063,	1545.557257,	1262.393779,	1481.43851,	1163.711082,	1369.009499,	1005.161475,	978.743111,	906.615282,	1232.504687,	968.693052,	1341.310225,	259.819291,	0,	524.116449,	638.132203,	1249.498222,	608.224683,	597.546705,	942.492238,	782.736007,	2048.445955],
[1734.455919,	1703.563055,	1516.331865,	1369.680853,	1755.204239,	2276.209356,	2551.304144,	2977.013017,	1532.062712,	1404.599866,	1380.250787,	1181.542252,	1155.289158,	934.551518,	1485.205742,	1126.693196,	864.364442,	646.80338,	758.199563,	446.557165,	817.264714,	334.60893,	524.116449,	0,	432.912463,	1597.170685,	882.496854,	1089.960745,	1456.914874,	1212.762168,	2566.261117],
[2087.390744,	2070.35275,	1878.601658,	1699.074724,	2037.782315,	2658.702395,	2927.851564,	3337.235774,	1964.915418,	1835.2012,	1813.037728,	1609.300744,	1564.737054,	1366.163099,	1873.496677,	1506.118259,	1292.111272,	1079.036558,	1085.767782,	619.300786,	961.493911,	622.050931,	638.132203,	432.912463,	0,	1307.385941,	1187.235834,	1225.016138,	1401.464047,	1420.601852,	2488.585436],
[2517.960521,	2560.279915,	2386.91388,	2131.739708,	2225.67532,	3137.546486,	3348.192576,	3639.514265,	2906.612043,	2730.721089,	2791.850771,	2496.885097,	2711.567445,	2410.941919,	2491.344998,	2164.838648,	2226.063818,	2144.015236,	2349.621939,	1922.148911,	2267.966024,	1489.806869,	1249.498222,	1597.170685,	1307.385941,	0,	1730.690626,	1326.937641,	850.428854,	1597.742532,	1492.908486],
[912.201579,	912.481189,	720.471738,	513.688522,	872.717789,	1513.247019,	1768.659434,	2158.452086,	1226.22931,	1037.563319,	1146.588805,	821.001366,	1277.733479,	904.974285,	776.414415,	434.148081,	647.627511,	774.925595,	1302.622795,	1273.842495,	1590.515984,	573.35417,	608.224683,	882.496854,	1187.235834,	1730.690626,	0,	513.269716,	1133.883932,	430.154818,	2110.248098],
[1191.278257,	1234.346492,	1065.647383,	807.769726,	940.08799,	1811.868665,	2030.581669,	2353.495883,	1732.390207,	1541.608991,	1658.873137,	1331.707493,	1771.004999,	1403.056239,	1189.340152,	909.378105,	1152.634064,	1230.411439,	1697.963811,	1533.942211,	1894.324134,	762.47236,	597.546705,	1089.960745,	1225.016138,	1326.937641,	513.269716,	0,	628.474606,	276.290487,	1612.48504],
[1753.619848,	1814.097662,	1662.180194,	1403.380905,	1409.691985,	2357.726862,	2545.733632,	2807.832826,	2358.753624,	2168.648389,	2279.572213,	1954.883039,	2347.470506,	1991.129461,	1803.95394,	1537.729986,	1753.174594,	1782.255238,	2172.34661,	1889.754628,	2265.999803,	1191.633301,	942.492238,	1456.914874,	1401.464047,	850.428854,	1133.883932,	628.474606,	0,	850.467483,	1109.744622],
[921.463073,	971.267422,	812.444777,	553.273651,	669.235643,	1539.832426,	1755.030131,	2078.410185,	1564.392285,	1372.010543,	1512.698967,	1183.489096,	1698.700094,	1324.914856,	955.87918,	727.708802,	1063.813752,	1204.80332,	1723.574214,	1639.985082,	1980.17555,	878.603716,	782.736007,	1212.762168,	1420.601852,	1597.742532,	430.154818,	276.290487,	850.467483,	0,	1712.874933],
[2405.870364,	2499.390679,	2409.254284,	2182.078745,	1962.309639,	2899.03462,	2995.123857,	3095.635141,	3269.0462,	3077.43531,	3225.018406,	2896.13728,	3382.649741,	3012.696865,	2595.325499,	2435.791363,	2757.727097,	2839.968514,	3270.176138,	2999.143338,	3375.42385,	2290.749953,	2048.445955,	2566.261117,	2488.585436,	1492.908486,	2110.248098,	1612.48504,	1109.744622,	1712.874933,	0]

]
  var topWeight=0;
  var bottomWeight=0;
  var outerwearWeight=0;
  var dressWeight=0;
  var topCarbonFactor=0;
  var bottomCarbonFactor=0;
  var outerwearCarbonFactor=0;
  var dressCarbonFactor=0;
  var distance=0;
  var topStandardWeight=0;
  var bottomStandardWeight=0;
  var outerwearStandardWeight=0;
  var dressStandardWeight=0;
  var standardWeight=0;
  var departureCity=0;
  var destinationCity=0;
  var productionEmissions=0;
  var transitEmissions=0;
  var usageEmissions = 0;
  var disposalEmissions=0;
  var totalEmissions=0;
  var electricEmissions=0;
  var waterEmissions=0;
  var topTimes=0;
  var bottomTimes=0;
  var outerwearTimes=0;
  var dressTimes=0;
  var Times=0;
  
  const topsSelect=document.querySelector("#tops");
  const bottomsSelect=document.querySelector("#bottoms");
  const outerwearsSelect=document.querySelector("#outerwears");
  const dressesSelect=document.querySelector("#dresses");
  const submitButton=document.querySelector("#submit");
  const departureSelect=document.querySelector("#departure");
  const destinationSelect=document.querySelector("#destination");
  const disposalCarbonFactor=188.9;
  const transitCarbonFactor=0.074;


  topsSelect.addEventListener('change',function(){
    var selectedCategory = this.id;
    var selectedClothes=clothesData[selectedCategory][this.value]; 
    topWeight=selectedClothes.weight;
    topCarbonFactor=selectedClothes.carbonFactor;
    topTimes=selectedClothes.washingTimes;
})
  bottomsSelect.addEventListener('change',function(){
    var selectedCategory = this.id;
    var selectedClothes=clothesData[selectedCategory][this.value]; 
    bottomWeight=selectedClothes.weight;
    bottomCarbonFactor=selectedClothes.carbonFactor;
    bottomTimes=selectedClothes.washingTimes;
    
})
  outerwearsSelect.addEventListener('change',function(){
    var selectedCategory = this.id;
    var selectedClothes=clothesData[selectedCategory][this.value]; 
    outerwearWeight=selectedClothes.weight;
    outerwearCarbonFactor=selectedClothes.carbonFactor;
    outerwearTimes=selectedClothes.washingTimes;
  })
  dressesSelect.addEventListener('change',function(){
    var selectedCategory = this.id;
    var selectedClothes=clothesData[selectedCategory][this.value];
    dressWeight=selectedClothes.weight;
    dressCarbonFactor=selectedClothes.carbonFactor;
    dressTimes=selectedClothes.washingTimes;
})
  departureSelect.addEventListener('change',function(){
  departureCity=this.value;
  })
  destinationSelect.addEventListener('change',function(){
  destinationCity=this.value;
})

 
  function submit ()
  {
      topStandardWeight = topWeight*1e-6;
  
      bottomStandardWeight = bottomWeight*1e-6;
  
      outerwearStandardWeight = outerwearWeight*1e-6;
  
      dressStandardWeight = dressWeight*1e-6;

      distance=distanceData[departureCity][destinationCity];
  
      standardWeight=topStandardWeight+bottomStandardWeight+outerwearStandardWeight+dressStandardWeight;

      Times=topTimes+bottomTimes+outerwearTimes+dressTimes;
      
      electricEmissions=0.53*0.086*Times/7;

      waterEmissions=1e-3*(0.28*110*Times/7);

      usageEmissions=electricEmissions+waterEmissions;

      productionEmissions = 1e3*(topStandardWeight * topCarbonFactor+outerwearStandardWeight*outerwearCarbonFactor+bottomStandardWeight*bottomCarbonFactor+dressStandardWeight*dressCarbonFactor);
   
      transitEmissions = 1e3*(distance * standardWeight * transitCarbonFactor);
  
      disposalEmissions = disposalCarbonFactor * standardWeight;

  
      // 把所有的排放量加起来就得到了总碳足迹
        totalEmissions =
        productionEmissions +
        transitEmissions +
        usageEmissions +
        disposalEmissions;

  
      // 重定向到结果页面，并将计算的排放量作为URL参数传递
      window.location.href = "./result.html?" +
    "emissions=" + totalEmissions +
    "&productionEmissions=" + productionEmissions +
    "&transitEmissions=" + transitEmissions +
    "&usageEmissions=" + usageEmissions +
    "&disposalEmissions=" + disposalEmissions;

}



  


