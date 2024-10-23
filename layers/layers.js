var wms_layers = [];

var format_Reprojiziert_0 = new ol.format.GeoJSON();
var features_Reprojiziert_0 = format_Reprojiziert_0.readFeatures(json_Reprojiziert_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojiziert_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojiziert_0.addFeatures(features_Reprojiziert_0);
var lyr_Reprojiziert_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojiziert_0, 
                style: style_Reprojiziert_0,
                popuplayertitle: "Reprojiziert",
                interactive: true,
    title: 'Reprojiziert<br />\
    <img src="styles/legend/Reprojiziert_0_0.png" /> 1850 - 1851<br />\
    <img src="styles/legend/Reprojiziert_0_1.png" /> 1851 - 1852<br />\
    <img src="styles/legend/Reprojiziert_0_2.png" /> 1852 - 1853<br />\
    <img src="styles/legend/Reprojiziert_0_3.png" /> 1853 - 1854<br />\
    <img src="styles/legend/Reprojiziert_0_4.png" /> 1854 - 1855<br />\
    <img src="styles/legend/Reprojiziert_0_5.png" /> 1855 - 1856<br />\
    <img src="styles/legend/Reprojiziert_0_6.png" /> 1856 - 1857<br />\
    <img src="styles/legend/Reprojiziert_0_7.png" /> 1857 - 1858<br />\
    <img src="styles/legend/Reprojiziert_0_8.png" /> 1858 - 1859<br />\
    <img src="styles/legend/Reprojiziert_0_9.png" /> 1859 - 1860<br />\
    <img src="styles/legend/Reprojiziert_0_10.png" /> 1860 - 1861<br />\
    <img src="styles/legend/Reprojiziert_0_11.png" /> 1861 - 1862<br />\
    <img src="styles/legend/Reprojiziert_0_12.png" /> 1862 - 1863<br />\
    <img src="styles/legend/Reprojiziert_0_13.png" /> 1863 - 1864<br />\
    <img src="styles/legend/Reprojiziert_0_14.png" /> 1864 - 1865<br />\
    <img src="styles/legend/Reprojiziert_0_15.png" /> 1865 - 1866<br />\
    <img src="styles/legend/Reprojiziert_0_16.png" /> 1866 - 1867<br />\
    <img src="styles/legend/Reprojiziert_0_17.png" /> 1867 - 1868<br />\
    <img src="styles/legend/Reprojiziert_0_18.png" /> 1868 - 1869<br />\
    <img src="styles/legend/Reprojiziert_0_19.png" /> 1869 - 1870<br />\
    <img src="styles/legend/Reprojiziert_0_20.png" /> 1870 - 1871<br />\
    <img src="styles/legend/Reprojiziert_0_21.png" /> 1871 - 1872<br />\
    <img src="styles/legend/Reprojiziert_0_22.png" /> 1872 - 1873<br />\
    <img src="styles/legend/Reprojiziert_0_23.png" /> 1873 - 1874<br />\
    <img src="styles/legend/Reprojiziert_0_24.png" /> 1874 - 1875<br />\
    <img src="styles/legend/Reprojiziert_0_25.png" /> 1875 - 1876<br />\
    <img src="styles/legend/Reprojiziert_0_26.png" /> 1876 - 1877<br />\
    <img src="styles/legend/Reprojiziert_0_27.png" /> 1877 - 1878<br />\
    <img src="styles/legend/Reprojiziert_0_28.png" /> 1878 - 1879<br />\
    <img src="styles/legend/Reprojiziert_0_29.png" /> 1879 - 1880<br />\
    <img src="styles/legend/Reprojiziert_0_30.png" /> 1880 - 1881<br />\
    <img src="styles/legend/Reprojiziert_0_31.png" /> 1881 - 1882<br />\
    <img src="styles/legend/Reprojiziert_0_32.png" /> 1882 - 1883<br />\
    <img src="styles/legend/Reprojiziert_0_33.png" /> 1883 - 1884<br />\
    <img src="styles/legend/Reprojiziert_0_34.png" /> 1884 - 1885<br />\
    <img src="styles/legend/Reprojiziert_0_35.png" /> 1885 - 1886<br />\
    <img src="styles/legend/Reprojiziert_0_36.png" /> 1886 - 1887<br />\
    <img src="styles/legend/Reprojiziert_0_37.png" /> 1887 - 1888<br />\
    <img src="styles/legend/Reprojiziert_0_38.png" /> 1888 - 1889<br />\
    <img src="styles/legend/Reprojiziert_0_39.png" /> 1889 - 1890<br />\
    <img src="styles/legend/Reprojiziert_0_40.png" /> 1890 - 1891<br />\
    <img src="styles/legend/Reprojiziert_0_41.png" /> 1891 - 1892<br />\
    <img src="styles/legend/Reprojiziert_0_42.png" /> 1892 - 1893<br />\
    <img src="styles/legend/Reprojiziert_0_43.png" /> 1893 - 1894<br />\
    <img src="styles/legend/Reprojiziert_0_44.png" /> 1894 - 1895<br />\
    <img src="styles/legend/Reprojiziert_0_45.png" /> 1895 - 1896<br />\
    <img src="styles/legend/Reprojiziert_0_46.png" /> 1896 - 1897<br />\
    <img src="styles/legend/Reprojiziert_0_47.png" /> 1897 - 1898<br />\
    <img src="styles/legend/Reprojiziert_0_48.png" /> 1898 - 1899<br />\
    <img src="styles/legend/Reprojiziert_0_49.png" /> 1899 - 1900<br />\
    <img src="styles/legend/Reprojiziert_0_50.png" /> 1900 - 1901<br />\
    <img src="styles/legend/Reprojiziert_0_51.png" /> 1901 - 1902<br />\
    <img src="styles/legend/Reprojiziert_0_52.png" /> 1902 - 1903<br />\
    <img src="styles/legend/Reprojiziert_0_53.png" /> 1903 - 1904<br />\
    <img src="styles/legend/Reprojiziert_0_54.png" /> 1904 - 1905<br />\
    <img src="styles/legend/Reprojiziert_0_55.png" /> 1905 - 1906<br />\
    <img src="styles/legend/Reprojiziert_0_56.png" /> 1906 - 1907<br />\
    <img src="styles/legend/Reprojiziert_0_57.png" /> 1907 - 1908<br />\
    <img src="styles/legend/Reprojiziert_0_58.png" /> 1908 - 1909<br />\
    <img src="styles/legend/Reprojiziert_0_59.png" /> 1909 - 1910<br />\
    <img src="styles/legend/Reprojiziert_0_60.png" /> 1910 - 1911<br />\
    <img src="styles/legend/Reprojiziert_0_61.png" /> 1911 - 1912<br />\
    <img src="styles/legend/Reprojiziert_0_62.png" /> 1912 - 1913<br />\
    <img src="styles/legend/Reprojiziert_0_63.png" /> 1913 - 1914<br />\
    <img src="styles/legend/Reprojiziert_0_64.png" /> 1914 - 1915<br />\
    <img src="styles/legend/Reprojiziert_0_65.png" /> 1915 - 1916<br />\
    <img src="styles/legend/Reprojiziert_0_66.png" /> 1916 - 1917<br />\
    <img src="styles/legend/Reprojiziert_0_67.png" /> 1917 - 1918<br />\
    <img src="styles/legend/Reprojiziert_0_68.png" /> 1918 - 1919<br />\
    <img src="styles/legend/Reprojiziert_0_69.png" /> 1919 - 1920<br />\
    <img src="styles/legend/Reprojiziert_0_70.png" /> 1920 - 1921<br />\
    <img src="styles/legend/Reprojiziert_0_71.png" /> 1921 - 1922<br />\
    <img src="styles/legend/Reprojiziert_0_72.png" /> 1922 - 1923<br />\
    <img src="styles/legend/Reprojiziert_0_73.png" /> 1923 - 1924<br />\
    <img src="styles/legend/Reprojiziert_0_74.png" /> 1924 - 1925<br />\
    <img src="styles/legend/Reprojiziert_0_75.png" /> 1925 - 1926<br />\
    <img src="styles/legend/Reprojiziert_0_76.png" /> 1926 - 1927<br />\
    <img src="styles/legend/Reprojiziert_0_77.png" /> 1927 - 1928<br />\
    <img src="styles/legend/Reprojiziert_0_78.png" /> 1928 - 1929<br />\
    <img src="styles/legend/Reprojiziert_0_79.png" /> 1929 - 1930<br />\
    <img src="styles/legend/Reprojiziert_0_80.png" /> 1930 - 1931<br />\
    <img src="styles/legend/Reprojiziert_0_81.png" /> 1931 - 1932<br />\
    <img src="styles/legend/Reprojiziert_0_82.png" /> 1932 - 1933<br />\
    <img src="styles/legend/Reprojiziert_0_83.png" /> 1933 - 1934<br />\
    <img src="styles/legend/Reprojiziert_0_84.png" /> 1934 - 1935<br />\
    <img src="styles/legend/Reprojiziert_0_85.png" /> 1935 - 1936<br />\
    <img src="styles/legend/Reprojiziert_0_86.png" /> 1936 - 1937<br />\
    <img src="styles/legend/Reprojiziert_0_87.png" /> 1937 - 1938<br />\
    <img src="styles/legend/Reprojiziert_0_88.png" /> 1938 - 1939<br />\
    <img src="styles/legend/Reprojiziert_0_89.png" /> 1939 - 1940<br />\
    <img src="styles/legend/Reprojiziert_0_90.png" /> 1940 - 1941<br />\
    <img src="styles/legend/Reprojiziert_0_91.png" /> 1941 - 1942<br />\
    <img src="styles/legend/Reprojiziert_0_92.png" /> 1942 - 1943<br />\
    <img src="styles/legend/Reprojiziert_0_93.png" /> 1943 - 1944<br />\
    <img src="styles/legend/Reprojiziert_0_94.png" /> 1944 - 1945<br />\
    <img src="styles/legend/Reprojiziert_0_95.png" /> 1945 - 1946<br />\
    <img src="styles/legend/Reprojiziert_0_96.png" /> 1946 - 1947<br />\
    <img src="styles/legend/Reprojiziert_0_97.png" /> 1947 - 1948<br />\
    <img src="styles/legend/Reprojiziert_0_98.png" /> 1948 - 1949<br />\
    <img src="styles/legend/Reprojiziert_0_99.png" /> 1949 - 1950<br />\
    <img src="styles/legend/Reprojiziert_0_100.png" /> 1950 - 1951<br />\
    <img src="styles/legend/Reprojiziert_0_101.png" /> 1951 - 1952<br />\
    <img src="styles/legend/Reprojiziert_0_102.png" /> 1952 - 1953<br />\
    <img src="styles/legend/Reprojiziert_0_103.png" /> 1953 - 1954<br />\
    <img src="styles/legend/Reprojiziert_0_104.png" /> 1954 - 1955<br />\
    <img src="styles/legend/Reprojiziert_0_105.png" /> 1955 - 1956<br />\
    <img src="styles/legend/Reprojiziert_0_106.png" /> 1956 - 1957<br />\
    <img src="styles/legend/Reprojiziert_0_107.png" /> 1957 - 1958<br />\
    <img src="styles/legend/Reprojiziert_0_108.png" /> 1958 - 1959<br />\
    <img src="styles/legend/Reprojiziert_0_109.png" /> 1959 - 1960<br />\
    <img src="styles/legend/Reprojiziert_0_110.png" /> 1960 - 1961<br />\
    <img src="styles/legend/Reprojiziert_0_111.png" /> 1961 - 1962<br />\
    <img src="styles/legend/Reprojiziert_0_112.png" /> 1962 - 1963<br />\
    <img src="styles/legend/Reprojiziert_0_113.png" /> 1963 - 1964<br />\
    <img src="styles/legend/Reprojiziert_0_114.png" /> 1964 - 1965<br />\
    <img src="styles/legend/Reprojiziert_0_115.png" /> 1965 - 1966<br />\
    <img src="styles/legend/Reprojiziert_0_116.png" /> 1966 - 1967<br />\
    <img src="styles/legend/Reprojiziert_0_117.png" /> 1967 - 1968<br />\
    <img src="styles/legend/Reprojiziert_0_118.png" /> 1968 - 1969<br />\
    <img src="styles/legend/Reprojiziert_0_119.png" /> 1969 - 1970<br />\
    <img src="styles/legend/Reprojiziert_0_120.png" /> 1970 - 1971<br />\
    <img src="styles/legend/Reprojiziert_0_121.png" /> 1971 - 1972<br />\
    <img src="styles/legend/Reprojiziert_0_122.png" /> 1972 - 1973<br />\
    <img src="styles/legend/Reprojiziert_0_123.png" /> 1973 - 1974<br />\
    <img src="styles/legend/Reprojiziert_0_124.png" /> 1974 - 1975<br />\
    <img src="styles/legend/Reprojiziert_0_125.png" /> 1975 - 1976<br />\
    <img src="styles/legend/Reprojiziert_0_126.png" /> 1976 - 1977<br />\
    <img src="styles/legend/Reprojiziert_0_127.png" /> 1977 - 1978<br />\
    <img src="styles/legend/Reprojiziert_0_128.png" /> 1978 - 1979<br />\
    <img src="styles/legend/Reprojiziert_0_129.png" /> 1979 - 1980<br />\
    <img src="styles/legend/Reprojiziert_0_130.png" /> 1980 - 1981<br />\
    <img src="styles/legend/Reprojiziert_0_131.png" /> 1981 - 1982<br />\
    <img src="styles/legend/Reprojiziert_0_132.png" /> 1982 - 1983<br />\
    <img src="styles/legend/Reprojiziert_0_133.png" /> 1983 - 1984<br />\
    <img src="styles/legend/Reprojiziert_0_134.png" /> 1984 - 1985<br />\
    <img src="styles/legend/Reprojiziert_0_135.png" /> 1985 - 1986<br />\
    <img src="styles/legend/Reprojiziert_0_136.png" /> 1986 - 1987<br />\
    <img src="styles/legend/Reprojiziert_0_137.png" /> 1987 - 1988<br />\
    <img src="styles/legend/Reprojiziert_0_138.png" /> 1988 - 1989<br />\
    <img src="styles/legend/Reprojiziert_0_139.png" /> 1989 - 1990<br />\
    <img src="styles/legend/Reprojiziert_0_140.png" /> 1990 - 1991<br />\
    <img src="styles/legend/Reprojiziert_0_141.png" /> 1991 - 1992<br />\
    <img src="styles/legend/Reprojiziert_0_142.png" /> 1992 - 1993<br />\
    <img src="styles/legend/Reprojiziert_0_143.png" /> 1993 - 1994<br />\
    <img src="styles/legend/Reprojiziert_0_144.png" /> 1994 - 1995<br />\
    <img src="styles/legend/Reprojiziert_0_145.png" /> 1995 - 1996<br />\
    <img src="styles/legend/Reprojiziert_0_146.png" /> 1996 - 1997<br />\
    <img src="styles/legend/Reprojiziert_0_147.png" /> 1997 - 1998<br />\
    <img src="styles/legend/Reprojiziert_0_148.png" /> 1998 - 1999<br />\
    <img src="styles/legend/Reprojiziert_0_149.png" /> 1999 - 2000<br />\
    <img src="styles/legend/Reprojiziert_0_150.png" /> 2000 - 2001<br />\
    <img src="styles/legend/Reprojiziert_0_151.png" /> 2001 - 2002<br />\
    <img src="styles/legend/Reprojiziert_0_152.png" /> 2002 - 2003<br />\
    <img src="styles/legend/Reprojiziert_0_153.png" /> 2003 - 2004<br />\
    <img src="styles/legend/Reprojiziert_0_154.png" /> 2004 - 2005<br />\
    <img src="styles/legend/Reprojiziert_0_155.png" /> 2005 - 2006<br />\
    <img src="styles/legend/Reprojiziert_0_156.png" /> 2006 - 2007<br />\
    <img src="styles/legend/Reprojiziert_0_157.png" /> 2007 - 2008<br />\
    <img src="styles/legend/Reprojiziert_0_158.png" /> 2008 - 2009<br />\
    <img src="styles/legend/Reprojiziert_0_159.png" /> 2009 - 2010<br />\
    <img src="styles/legend/Reprojiziert_0_160.png" /> 2010 - 2011<br />\
    <img src="styles/legend/Reprojiziert_0_161.png" /> 2011 - 2012<br />\
    <img src="styles/legend/Reprojiziert_0_162.png" /> 2012 - 2013<br />\
    <img src="styles/legend/Reprojiziert_0_163.png" /> 2013 - 2014<br />\
    <img src="styles/legend/Reprojiziert_0_164.png" /> 2014 - 2015<br />\
    <img src="styles/legend/Reprojiziert_0_165.png" /> 2015 - 2016<br />\
    <img src="styles/legend/Reprojiziert_0_166.png" /> 2016 - 2017<br />\
    <img src="styles/legend/Reprojiziert_0_167.png" /> 2017 - 2018<br />\
    <img src="styles/legend/Reprojiziert_0_168.png" /> 2018 - 2019<br />'
        });

lyr_Reprojiziert_0.setVisible(true);
var layersList = [lyr_Reprojiziert_0];
lyr_Reprojiziert_0.set('fieldAliases', {'Bouwjaar': 'Bouwjaar', });
lyr_Reprojiziert_0.set('fieldImages', {'Bouwjaar': 'TextEdit', });
lyr_Reprojiziert_0.set('fieldLabels', {'Bouwjaar': 'no label', });
lyr_Reprojiziert_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});