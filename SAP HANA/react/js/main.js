/*

********************************
Author: Alexander Adu-Sarkodie
********************************

*/

var FormGroup = ReactBootstrap.FormGroup;
var Label = ReactBootstrap.ControlLabel;
var Input = ReactBootstrap.FormControl;
var Static = ReactBootstrap.FormControl.Static;
var Button = ReactBootstrap.Button;


//Mock data
var testData = [
  {
    CountryID: 0,
    CountryCity: "Tokyo",
    CountryName: "Japan",
    Population: "39,800,000",
    URL:"https://en.wikipedia.org/wiki/Greater_Tokyo_Area",
    Description: "The Greater Tokyo Area is the most populous metropolitan area in the world, consisting of the Kantō region of Japan, including the Tokyo Metropolis, as well as the prefecture of Yamanashi of the neighboring Chūbu region. In Japanese, it is referred to by various terms, one of the most common being National Capital Region (首都圏, Shuto-ken)."
  },
  {
    CountryID: 1,
    CountryCity: "Jakarta",
    CountryName: "Indonesia",
    Population: "28,900,000",
    URL:"https://en.wikipedia.org/wiki/Jakarta#/media/File:Jakarta_Pictures-4.jpg",
    Description:"Jakarta, officially the Special Capital Region of Jakarta, is the capital and largest city of Indonesia. Located on the northwest coast of the world's most populous island Java, it is the centre of economics, culture and politics of Indonesia, with a population of 10,075,310 as of 2014. The Greater Jakarta metropolitan area has an area of 6,392 square kilometers, which is known as Jabodetabek, is the second largest urban agglomeration after Tokyo with a population of 30,214,303 as of 2010 census. Jakarta's business opportunities, as well as its potential to offer a higher standard of living, attract migrants from all over the Indonesian archipelago, making it a melting pot of many communities and cultures. Jakarta is officially a province with special capital region status, but is commonly referred to as a city. The Jakarta provincial government consists of five administrative cities and one administrative regency."
  },
  {
    CountryID: 2,
    CountryCity: "Delhi",
    CountryName: "India",
    Population: "27,200,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Vijay_Chowk_,_New_delhi.jpg",
    Description:"The National Capital Region (NCR) is a coordinated planning region centred upon the National Capital Territory of Delhi (NCT) in India. It encompasses the entire NCT of Delhi and several districts surrounding it from the states of Haryana, Uttar Pradesh and Rajasthan. The NCR and the associated National Capital Region Planning Board were created in 1985 to plan the development of the region and to evolve harmonized policies for the control of land-uses and development of infrastructure in the region. Prominent cities of NCR include Delhi, Ghaziabad, Faridabad, Gurgaon, Noida and Meerut."
  },
  {
    CountryID: 3,
    CountryCity: "Karachi",
    CountryName: "Pakistan",
    Population: "25,100,000",
    URL:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Karachimontage.jpg/600px-Karachimontage.jpg",
    Description:"Karachi is the capital of the Pakistani province of Sindh. It is the most populous city in Pakistan, and sixth-most-populous city proper in the world. Ranked as a beta world city, the city is Pakistan's premier industrial and financial centre. Karachi is also Pakistan's most cosmopolitan city. Situated on the Arabian Sea, Karachi serves as a transport hub, and is home to Pakistan's two largest seaports, the Port of Karachi and Port Bin Qasim, as well as the busiest airport in Pakistan."
  },
  {
    CountryID: 4,
    CountryCity: "Seoul",
    CountryName: "South Korea",
    Population: "24,800,000",
    URL:"uhttps://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Seoul-Cheonggyecheon-01.jpg/500px-Seoul-Cheonggyecheon-01.jpg",
    Description:"The Seoul Capital Area (SCA), Sudogwon or Gyeonggi region is the metropolitan area of Seoul, Incheon, and Gyeonggi-do located in north-west South Korea. It has a population of 25 million and is ranked as the fifth largest metropolitan area in the world. Its area is about 11,704 km2 (4,519 sq mi). It forms the cultural, commercial, financial, industrial, and residential center of South Korea. The largest city is Seoul, with a population of approximately 10 million people, followed by Incheon, with 3 million inhabitants."
  },
  {
    CountryID: 5,
    CountryCity: "Shanghai",
    CountryName: "China",
    Population: "31,100,000",
    URL:"uhttps://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Shanghai_Skyline,_Dec2014.jpg",
    Description:"Shanghai is one of the four municipalities under the direct administration of the central government of China, the largest city in China by population, and the second most populous city proper in the world, with a population of more than 24 million as of 2017. It is a global financial centre and transport hub, with the world's busiest container port. Located in the Yangtze River Delta, it sits on the south edge of the estuary of the Yangtze in the middle portion of the East China coast. The municipality borders the provinces of Jiangsu and Zhejiang to the north, south and west, and is bounded to the east by the East China Sea."
  },
  {
    CountryID: 6,
    CountryCity: "Manila",
    CountryName: "Philippines",
    Population: "24,100,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Ortigas_Tonight.jpg",
    Description:"Metropolitan Manila is the seat of government and one of the three defined metropolitan areas of the Philippines. It is officially known as the National Capital Region (NCR), and is commonly known as Metro Manila or simply Manila. It is made up of 16 cities namely: the City of Manila, Quezon City, Caloocan, Las Piñas, Makati, Malabon, Mandaluyong, Marikina, Muntinlupa, Navotas, Parañaque, Pasay, Pasig, San Juan, Taguig, and Valenzuela, as well as the municipality of Pateros."
  },
  {
    CountryID: 7,
    CountryCity: "Mumbai",
    CountryName: "India",
    Population: "23,600,000",
    URL:"uhttps://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Mumbai_skyline_BWSL.jpg",
    Description:"Mumbai Metropolitan Region (MMR) is a metropolitan area in Maharashtra state, consisting of the state capital Mumbai and its satellite towns. Developing over a period of about 20 years, it consists of nine municipal corporations and fifteen smaller municipal councils. The entire area is overseen by the Mumbai Metropolitan Region Development Authority (MMRDA), a Maharashtra State Government organisation in charge of town planning, development, transportation and housing in the region."
  },
  {
    CountryID: 8,
    CountryCity: "Beijing",
    CountryName: "China",
    Population: "20,700,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Beijing_Financial_Street_(overlook).jpg",
    Description:"Beijing, formerly romanized as Peking, is the capital of the People's Republic of China, the world's third most populous city proper, and most populous capital city. The city, located in northern China, is governed as a municipality under the direct administration of central government with 16 urban, suburban, and rural districts. Beijing Municipality is surrounded by Hebei Province with the exception of neighboring Tianjin Municipality to the southeast; together the three divisions form the Jingjinji metropolitan region and the national capital region of China."
  },
  {
    CountryID: 9,
    CountryCity: "Guanzhou-Foshan",
    CountryName: "China",
    Population: "17,800,000",
    URL:"uhttps://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Guangzhou_dusk_11-5-2008.png",
    Description:"Foshan, formerly romanized as Fatshan, is a prefecture-level city in central Guangdong Province in southeastern China. The entire prefecture covers 3,848.49 km2 (1,485.91 sq mi) and has an urban population around 7.2 million in 2012. It forms part of the western side of the Pearl River Delta Economic Zone, which includes Guangzhou to the north and Shenzhen to the east."
  },
  {
    CountryID: 10,
    CountryCity: "Osaka-Kobe-Kyoto",
    CountryName: "Japan",
    Population: "20,700,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Nakanoshima,_Osaka_in_201504.JPG",
    Description:"Kyoto , officially Kyoto City , is the capital city of Kyoto Prefecture, located in the Kansai region of Japan. It is most well known in Japanese history for being the former Imperial capital of Japan for more than one thousand years, as well as a major part of the Kyoto-Osaka-Kobe metropolitan area."
  },
  {
    CountryID: 11,
    CountryCity: "Dhaka",
    CountryName: "Bangladesh",
    Population: "17,190,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Dhaka-Bangladesh.jpg",
    Description:"N/A"
  },
  {
    CountryID: 12,
    CountryCity: "Bangkok",
    CountryName: "Thailand",
    Population: "17,400,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:All_Seasons_Plaza_Bangkok.jpg",
    Description:"Not to be confused with Bangkok Metropolis, which is a reference to Bangkok's city limits."
  },
  {
    CountryID: 13,
    CountryCity: "Kolkata",
    CountryName: "India",
    Population: "16,200,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Kolkata_City_skyline_from_Hoogly_bridge.jpg",
    Description:"The Kolkata Metropolitan Area, also known as the Calcutta Metropolitan Area and Greater Kolkata is the urban agglomeration of the city of Kolkata in the Indian state of West Bengal. It is the third most populous metropolitan area in India after Delhi and Mumbai."
  },
  {
    CountryID: 14,
    CountryCity: "Tehran",
    CountryName: "Iran",
    Population: "214,000,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Tehran_from_Qeytariyeh.jpg",
    Description:"Tehran is the capital of Iran and Tehran Province. With a population of around 8.4 million in the city and 15 million in the larger metropolitan area of Greater Tehran, Tehran is the most populous city in Iran and Western Asia, and has the second-largest metropolitan area in the Middle East. It is ranked 29th in the world by the population of its metropolitan area."
  },
  {
    CountryID: 15,
    CountryCity: "Chongqing",
    CountryName: "China",
    Population: "7,200,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Chongqing_Night_Yuzhong.jpg",
    Description:"Chongqing, formerly romanized as Chungking, is a major city in southwest China. Administratively, it is one of China's four municipalities under the direct administration of central government, and the only such municipality in China located far away from the coast."
  },
  {
    CountryID: 16,
    CountryCity: "Tianjin",
    CountryName: "China",
    Population: "11,800,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Tianjin_Skyline_2009_Sep_11_by_Nangua_2.jpg",
    Description:"Tianjin, formerly romanized as Tientsin, is a coastal metropolis in northern China and one of the nine national central cities of the People's Republic of China (PRC), with a total population of 15,469,500, and is also the world's 11th-most populous city proper. It is governed as one of the four municipality under the direct administration of central government of the PRC and is thus under direct administration of the central government. Tianjin borders Hebei Province and Beijing Municipality, bounded to the east by the Bohai Gulf portion of the Yellow Sea. Part of the Bohai Economic Rim, it is the largest coastal city in northern China."
  },
  {
    CountryID: 17,
    CountryCity: "Shenzhen",
    CountryName: "China",
    Population: "included in Guangzhou",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Shenzhen_CBD_and_River.jpg",
    Description:"Shenzhen, is a major city in Guangdong Province, China, which forms part of the Pearl River Delta megalopolis north of Hong Kong. It holds sub-provincial administrative status, with powers slightly less than a province."
  },
  {
    CountryID: 18,
    CountryCity: "Chengdu",
    CountryName: "China",
    "Population": "9,750,000",
    "URL":"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Scuhuaxi.jpg",
    Description:"Chengdu, formerly romanized as Chengtu, is a sub-provincial city which serves as the capital of China's Sichuan province. It is one of the three most populous cities in Western China, the other two being Chongqing and Xi'an. As of 2014, the administrative area houses 14,427,500 inhabitants, with an urban population of 10,152,632. At the time of the 2010 census, Chengdu was the 5th-most populous agglomeration in China, with 10,484,996 inhabitants in the built-up area including Xinjin County and Deyang's Guanghan City."
  },
  {
    CountryID: 19,
    CountryCity: "Bangalore",
    "CountryName": "India",
    "Population": "10,800,000",
    "URL":"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:UB_City.jpg",
    Description:"Bangalore, officially known as Bengaluru, is the capital of the Indian state of Karnataka. It has a population of over ten million, making it a megacity and the third most populous city and fifth most populous urban agglomeration in India. It is located in southern India on the Deccan Plateau. Its elevation is over 900 m (3,000 ft) above sea level, the highest of India's major cities."
  },
  {
    CountryID: 20,
    CountryCity: "Lahore",
    CountryName: "Pakistan",
    Population: "10,500,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Kalma_Underpass1.jpg",
    Description:"Lahore is the capital city of the Pakistani province of Punjab, and is the country’s second-most populous city after Karachi. The city is located in the north-eastern end of Pakistan's Punjab province. Lahore is one of Pakistan's wealthiest cities with an estimated GDP of $127 billion (PPP) as of 2017. Lahore is the historic cultural centre of the Punjab region, and is one of Pakistan's most socially liberal, progressive, and cosmopolitan cities."
  },
  {
    CountryID: 21,
    CountryCity: "Nagoya",
    CountryName: "Japan",
    Population: "10,500,000",
    "URL":"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Meieki_from_Heiwa_Park_Aqua_Tower.jpg",
    Description:"Chūkyō , or the Chūkyō region , is a major metropolitan area in Japan that is centered on the city of Nagoya in Aichi Prefecture. The area makes up the most-urban part of the Tōkai region. The population of 9,107,414 over an area of 7,072 square kilometers. Nevertheless, like most of Japan's major metro areas, the core of it lies on a fertile alluvial plain, in this case the Nōbi Plain."
  },
  {
    CountryID: 22,
    CountryCity: "Ho Chi Minh City ",
    CountryName: "Vietnam",
    Population: "10,500,000",
    "URL":"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Vista_de_Ciudad_Ho_Chi_Minh_desde_Bitexco_Financial_Tower,_Vietnam,_2013-08-14,_DD_13.JPG",
    Description:"Ho Chi Minh City, also known by its former name of Saigon (Vietnamese: Sài Gòn; [sàj ɣɔ̀n] or [ʂàj ɣɔ̀ŋ]), is the largest city in Vietnam by population. It was known as Prey Nokor prior to annexation by the Vietnamese in the 17th century. Under the name Saigon, it was the capital of the French colony of Cochinchina and later of the independent republic of South Vietnam 1955–75. On 2 July 1976, Saigon merged with the surrounding Gia Định Province and was officially renamed Ho Chi Minh City after revolutionary leader Hồ Chí Minh."
  },
  {
    CountryID: 23,
    CountryCity: "Chennai",
    CountryName: "India",
    Population: "10,300,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Chennai_skyline.JPG",
    Description:"Metropolitan area includes a city and it's suburbs. For the city, visit Chennai"
  },
  {
    CountryID: 24,
    CountryCity: "Hyderabad",
    CountryName: "India",
    Population: "9,200,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Hyderabad_Financial_district,India.jpg",
    Description:"Hyderabad is the capital of the Indian state of Telangana and de jure capital of Andhra Pradesh. Occupying 650 square kilometres (250 sq mi) along the banks of the Musi River, it has a population of about 6.7 million and a metropolitan population of about 7.75 million, making it the fourth most populous city and sixth most populous urban agglomeration in India. At an average altitude of 542 metres (1,778 ft), much of Hyderabad is situated on hilly terrain around artificial lakes, including Hussain Sagar—predating the city's founding—north of the city centre."
  },
  {
    CountryID: 25,
    CountryCity: "Taipei",
    CountryName: "Taiwan",
    Population: "9,050,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Taipei_Taiwan_Taipei-101-Tower-01.jpg",
    Description:"The Taipei–Keelung metropolitan area also commonly known as Greater Taipei Area is the largest metropolitan area in Taiwan. It was recognized officially until 2010, and included Taipei, Taipei County, and Keelung."
  },
  {
    CountryID: 26,
    CountryCity: "Hangzhou",
    CountryName: "China",
    Population: "8,450,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:杭州湾跨海大桥海中平台（早晨）.jpg",
    Description:"Hangzhou (Chinese: 杭州) formerly romanized as Hangchow, is the capital and most populous city of Zhejiang Province in East China. It sits at the head of Hangzhou Bay, which separates Shanghai and Ningbo. Hangzhou grew to prominence as the southern terminus of the Grand Canal and has been one of the most renowned and prosperous cities in China for much of the last millennium. The city's West Lake, a UNESCO World Heritage Site, immediately west of the city, is amongst its best-known attractions."
  },
  {
    CountryID: 27,
    CountryCity: "Dongguan",
    CountryName: "China",
    Population: "Included in Guangzhou",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Dongguan_-04.jpg",
    Description:"Dongguan is a prefecture-level city in central Guangdong Province of South China. An important industrial city in the Pearl River Delta, Dongguan borders the provincial capital of Guangzhou to the north, Huizhou to the northeast, Shenzhen to the south, and the Pearl River to the west. It is part of the Pearl River Delta megacity with more than 44.78 million inhabitants at the 2010 census spread over nine municipalities across an area of 17,573 square kilometres (6,785 sq mi). Dongguan's city administration is considered especially progressive in seeking foreign direct investment. Dongguan ranks behind only Shenzhen, Shanghai and Suzhou in exports among Chinese cities, with $65.54 billion in shipments. It is also home to one of the world's largest, though largely empty, shopping malls, the New South China Mall. Although the city is geographically and thus culturally Cantonese in the Weitou form and as well as culturally Hakka in the prefectures of Fenggang and Qingxi, the majority of the modern-day population speaks Mandarin due to the large influx of economic migrants from other parts of China."
  },
  {
    CountryID: 28,
    CountryCity: "Wuhan",
    CountryName: "China",
    Population: "8,100,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:WuhanSkyline.jpg",
    Description:"Wuhan is the capital of Hubei province, People's Republic of China. It's the most populous city in Central China, and one of the nine National Central Cities of China. It lies in the eastern Jianghan Plain on the middle reaches of the Yangtze River's intersection with the Han river. Arising out of the conglomeration of three cities, Wuchang, Hankou, and Hanyang, Wuhan is known as 'China's Thoroughfare'; it is a major transportation hub, with dozens of railways, roads and expressways passing through the city and connecting to other major cities. Because of its key role in domestic transportation, Wuhan is sometimes referred to as "the Chicago of China" by foreign sources."
  },
  {
    CountryID: 29,
    CountryCity: "Shenyang",
    CountryName: "China",
    Population: "7,800,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Shenyang_ocra_(cropped).jpg",
    Description:"Shenyang, formerly known by its Manchu name Mukden or Fengtian, is the provincial capital and the largest city of Liaoning Province, People's Republic of China, as well as the largest city in Northeast China by urban population. According to the 2010 census, the city's urban area has 6.3 million inhabitants, while the total population of the Shenyang municipality, which holds the administrative status of a sub-provincial city, is up to 8.1 million. Shenyang's city region includes the ten metropolitan districts of Shenyang proper, the county-level city of Xinmin, and two counties of Kangping and Faku."
  },
  {
    CountryID: 30,
    CountryCity: "Hanoi",
    CountryName: "Vietnam",
    Population: "3,450,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:West_Hanoi.jpg",
    Description:"Hanoi is the capital of Vietnam and the country's second largest city by population. The population in 2015 was estimated at 7.7 million people. The city lies on the right bank of the Red River. Hanoi is 1,760 km (1,090 mi) north of Ho Chi Minh City and 120 km (75 mi) west of Haiphong."
  },
  {
    CountryID: 31,
    CountryCity: "Kualar Lumpur",
    CountryName: "Malaysia",
    Population: "6,800,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:KL-Skyline_Night_HDR.JPG",
    Description:"Klang Valley is an area in Malaysia which is centered in Kuala Lumpur, and includes its adjoining cities and towns in the state of Selangor. A more recent alternative reference to this would be Greater Kuala Lumpur."
  },
  {
    CountryID: 32,
    CountryCity: "Hong Kong",
    CountryName: "China",
    Population: "7,300,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Skyline_-_Hong_Kong,_China.jpg",
    Description:"Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a specially administered territory on the eastern side of the Pearl River estuary in southern China. With over 7.4 million people of various nationalities in a territory of 1,104 square kilometres (426 sq mi), Hong Kong is the fourth-most densely populated region in the world."
  },
  {
    CountryID: 33,
    CountryCity: "Nanjing",
    CountryName: "China",
    Population: "7,050,000",
    URL:"uhttps://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Nanjing_Xinjiekou_Skyline.jpg",
    Description:"Nanjing, formerly romanized as Nanking and Nankin, is the capital of Jiangsu province of the People's Republic of China and the second largest city in the East China region, with an administrative area of 6,600 km2 (2,500 sq mi) and a total population of 8,270,500 as of 2016. The inner area of Nanjing enclosed by the city wall is Nanjing City (南京城), with an area of 55 km2 (21 sq mi), while the Nanjing Metropolitan Region includes surrounding cities and areas, covering over 60,000 km2 (23,000 sq mi), with a population of over 30 million."
  },
  {
    CountryID: 34,
    CountryCity: "Zhengzhou-Xingyang",
    CountryName: "China",
    Population: "4,800,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Zhengzhou_East_Railway_Area.jpg",
    Description:"Xingyang, is a county-level city under the jurisdiction of Zhengzhou, the capital of Henan Province, China. It is situated 15 kilometers to the west of Zhengzhou city proper. The population of Xingyang is around 590,000 and the area of Xingyang is about 908 km2 (351 sq mi)."
  },
  {
    CountryID: 35,
    CountryCity: "Baghdad",
    CountryName: "Iraq",
    Population: "7,000,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Baghdad_Red_zone.jpg",
    Description:"Baghdad is the capital of Iraq. The population of Baghdad, as of 2016, is approximately 8,765,000, making it the largest city in Iraq, the second largest city in the Arab world, and the second largest city in Western Asia."
  },
  {
    CountryID: 36,
    CountryCity: "Singapore",
    CountryName: "Singapore",
    Population: "6,950,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:1_Singapore_city_skyline_2010_day_panorama.jpg",
    Description:"Singapore, officially the Republic of Singapore, is a sovereign city-state and island country in Southeast Asia. It lies one degree north of the equator, at the southern tip of the Malay Peninsula, with Indonesia's Riau Islands to the south and Peninsular Malaysia to the north. Singapore's territory consists of one main island along with 62 other islets. Since independence, extensive land reclamation has increased its total size by 23%. The country is known for its transition from third world to first world in a single generation, under the leadership of its founding father, Lee Kuan Yew."
  },
  {
    CountryID: 37,
    CountryCity: "Riyadh",
    CountryName: "Saudi Arabia",
    Population: "6,900,000",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Riyadh_Skyline_showing_the_King_Abdullah_Financial_District_(KAFD)_and_the_famous_Kingdom_Tower_.jpg",
    Description:"Riyadh is the capital and most populous city of Saudi Arabia, approximately 790km (491mi) North-east of Mecca. It is also the capital of Riyadh Province and belongs to the historical regions of Najd and Al-Yamama. It is situated in the centre of the Arabian Peninsula on a large plateau and home to more than six million people."
  },
  {
    CountryID: 38,
    CountryCity: "Quanzhou-Shishi-Jinjiang",
    CountryName: "China",
    Population: " Included in Xiamen",
    URL:"https://en.wikipedia.org/wiki/List_of_metropolitan_areas_in_Asia#/media/File:Lingshan_Islamic_Cemetery_-_city_view_-_DSCF8486.JPG",
    Description:"Shishi is a County-level city in the municipal region of Quanzhou, in southern Fujian province, eastern People's Republic of China."
  }
];

//Country Summary
var ModalCountryDetail = React.createClass({
    getInitialState: function() {
        return {
            CountryName: ""
        }

    },


render: function() {
    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="product-detail">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">City Details - {this.props.row.CountryName}</h4>
                    </div>
                    <div className="modal-body">
                        
                        <form className="form-horizontal">
                            <FormGroup>
                                <Label className="col-sm-3">City Name</Label>
                                <Static className="col-sm-9">{this.props.row.Description}</Static>
                            </FormGroup>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
    }
});


//Country component
var City= React.createClass({
    render: function() {
        return (
      <button type="button" className="list-group-item" id="product-list">
        <div className="row vertical-align">
          <div className="col-sm-8 top">

              <p> {testData.CountryCity}</p>
                        <p>{this.props.row.CountryName}</p>
                        <p>{this.props.row.Population}</p>
                        <p>{this.props.row.URL}</p>
          </div>

          <div className="col-sm-1 center">
            <span className="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span>
          </div>
        </div>
      </button>
    );
    }
});



var Countries = React.createClass({

    getInitialState: function() {
      return {
        testData: [],
        selectedRow: null,
      };
    },

    onListBoxClick: function( row ) {
        this.setState({selectedRow: row});

        setTimeout( function() {
            $('#ountry-list').modal("show");
        });
    },

  render: function() {
        var cityList = this.state.testData.map( function(row) {
                return(
                    <City row={row} key={row.CountryCity}
                        clickEvent={this.onListBoxClick.bind(this, row)}/>      
                );
        }.bind(this) )

        return (
                <div>

                    <div className="list-group">
                        {cityList}
                    </div>
                    {this.state.selectedRow == null ? null :
                        <ModalProductDetail row={this.state.selectedRow} /> }
                </div>
        )
    }
});


ReactDOM.render(
    <Countries />,
    document.getElementById('country-list')
);
