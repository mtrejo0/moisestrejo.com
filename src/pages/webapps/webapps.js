import React from 'react'
import './webapps.scss'
import {shuffle} from '../../util'

import {Card,CardColumns} from "react-bootstrap";

class Webapp {
    constructor(name, description, img, id, component) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.id = id;
        this.component = component;
    }
}

var webapps = [
    new Webapp("Genetic Path Finding",
        "Generates lots of agents with random moves. The ones with the best fitness are used to " +
        "generate more agents to learn a path.",
        "https://lh3.googleusercontent.com/E4QNsPR-nRIXcEB9EuBoXvE0DcYEY-BXbsZOiwveZn1Yg-JCX6RrYLGeBYnBP1E-eb6aMmFQMTTg_6ov-AVJ-cBUxb9mXQM3n3X_8ZLv5I_RJgMLG9DJcttbutwu1a3GmUVWTRKo0XoTQrCpoUG35VKBSTdTX0liDTDVdoRoaENImLT5w1niViMlACAhj4gowRq6jVIz3oyuvdkWE3gG0B_E9F4Zk15L19_msvUnzzQ7W5g3IWLKgk4pHUXlbQZZDmo8miPNT5hYmeVeg-hMmOknIr0kVSb4gs7RLmxsrpPdlvPBCJNCCrWvRqlfNafawf668H9qKOAlLenHOV_ffsXB2dKGk6bTCw1oDn1cQeYW5yPZQarTHBsi3FcigpamdX8iTgHhSC-f5VQULHdarld9Cgn1MvcWHHGRV03DjllvQewrpe4WtNvUUqxfXCrmRPKyxWpOU4gYPr7NztOPPeQbMDCCenC3bAFm6nUiIYpeEjGHZZPMh86m8oelRqRUpz3DrY37n5u0Fa2pD64WPIQWMRagvB2Qd5cdWA32jZ12zUnaTG96RVJJrNCRTJ6Ewf4uQ5xONQ2x5EBcJJcvsOBUAHkv6Di9fYJo1XjmQHLzVfDm1pBCQKEvHi4i39VZ8PBURkH2lQEWYzwLr3-ILenUVeOycMSfym_xHljaOiKqbTUbpdHgsDcGV1eiVjI=w1918-h940-no?authuser=0",
        "genetic",),
    new Webapp("Angle PID",
        "Three turrets use PID to lock onto your cursor to be able to shoot at ",
        "https://lh3.googleusercontent.com/8WS-s2ogYw2EBIzVxU_rwVjXXmWlkGzHncjh0qmwQZW8e4I7w7TXGxo6rhSphDZQ1o3kH8V151SnRngV-XbtONbKPLjjkde5M45ptJ1nRvdcjb9Ohw64y2_0O3dXKOpvverG9KSdTuWnde31s6YE4wakzk0N7q5B_98ZtGwf_qCQXKZoHdptlG9KAYr0RzyEGwaN0SW1gSjbcuIef_xIsO8hCP-9wVU89MuV-XO5Zpdr7ZCiMSsDCMsWzLz3kzFEmb0fvDOkikT2IhiwVKh54uqjQDGEI3huxeSGyZf2y0H5gbUdbOLzobELxIubdE_Mi9P4_bqIl0HkgUzujEYviEs3MGiFsZcAaEs8zzYYcgOb9amyRKQ6PY2tcCGJtQVT7jyMdN8xESD9J64PqpoGrjkaoAPNap9fMH6XOxkhhwwwnSRXAXwzlZPtrMaKhj3mARmVNyON94UcKptuN4366RHNgFVKzLuKK1-H4QQ9t6i1zENvCVqa5RRPacjjaotnI1KcgDlMFh7yQ15vYQJ1atQpc5_M5pZJ2EgplZ5hRlbhqgbfgI7ixNpp_nO_BfKjOEJpMKwjGxp0KQkEBxeCAE3478wZijKV8VJA5fBbcGeLm1gXKy9BdOzOyKYWc2KbhvTvZx6iDdtucfB-rDdByajDKBG_oAxgY3Y07wCYSf6ryVFCtXQvIBIfcfSFCF0=w601-h282-no?authuser=0",
        "anglePID",),
    new Webapp("MNIST Digit Calculator",
        "Allows you to draw a digit. It will print the array representation of this digit to use in a Google Collab notebook I made so you can learn how to build a simple machine learning model",
        "https://lh3.googleusercontent.com/S8yZYENV0FAEHfk_k4B_I4BOqmG0jaSpaFBD2n2tWU3ZP6_k2W34xOXV7PVVo3RARQALf_92HKcs1VBtA71oyNwQgEeRtrhQoq8m9c-hC0sG4uDJpkp55CSdZOAz-BvfYCz1LhqdVzw0RMBQ7BdosefixFCIo9Ttn1wsCyu8D7ndWOckXChmergvTzpmmibD-330UnfB7CULw8X6CCbRx6DCI6aPnktlR5xzYoRbRxI3_AJ4jXL2Md-b2fQgrPhtaFbY7XqFkhIXnz5M4356VnwfroAp_2qE3kRiO8Q3ESNC64unK-BlEyW_-sgZPFmVtXjeVP2DvNHQ_kYxVzksOOPTL5f5nnAuOF7duYL6KcSeATHSK_KNwm0d0tOTQT8t1VW1vYqOSnZvX7KwjvheIaZMnGrlaeCmgOkDuvoW--cU6gDQZj4duBcE7llD_1q9L-ZYVlLZCp9ZetBA41riVnJyCQgakxYMSdtWXFlpLynYi1JktENF5T7ndh9_sagu1SmEDTzQe9_INVG5mcK2BdIOuiSmZL3RjakWXkoGV1cYyZnxTak2u7wOEi3RpbRuQ6Itz07MGLIngn2TbMDmmubDB4Gw5TTeBBOMHuG4nLI0RYLN0eu7QyEufj41fhRYYmvXW47MqpFogcq1GRIlFPhPywcz_BTp9BGyufumkYLQHgzPzdSFOAptstJNrqI=w2878-h1642-no?authuser=0",
        "mnist",),
    new Webapp("Maze path finder",
        "Generates random maze and uses BFS to make sure there is a path possible between them then visualizes how it searches the graph until it finds a path from the start point to the end point",
        "https://lh3.googleusercontent.com/95b2cRVqSK4sdbCNjDrZRUzVCCXuBSuRqwfSYLf3LYvRiVZ4TAcHceF7FP8lEc1U0Xl4O-tYDwC78Kacw6DGkY_6qiy79vO0D76nku3K0liwuhQW4OFrBjjs-NPtoJuOcfi0fNm67s9Hb5V1qtS_8DtjRJ5iohaZp2u8tJDK_e3Ic_FUf4gNbtWTF-K6wkEAVdrb7pLo5qO2Sivzkf1LlneeFmktto-E3o1ATRQvvXgSQjVevMEq8T7wN8O7xuU_OB4l2idVC1l5N46v0geZnhAaoWD-r1Jrh8NI4UyhdIr8W1L-u8_lqh2AIsamSKp3tmqqgHI5uUVVfpoioIPI3VGvGx9ZOwEnje2HQkE1J7nJhpLvuhjKLApIMfgDUjad0sRAlJLO4KdQ7fGIlGKNYnrattIZa3ZHEqeXZIJ1rD9wXLR1iSoNZsU1VjQQ5meIdMqXVz5DoTYSrWqBgAnxBZmH5aUb_BnehLcG3oCoUIMJ5cC7o89x7jkig1QHC6KMt28xrXx31YdshkSPxX4XCOqx7Jc3WyUqkB1ki4AqBL-bik5IqV9EwyxQPX5wEQ1QefjyrXgVlj5jh1qnuV_7gvOLCDoH_nhwWtRRxd_BgG3MVBQ6D0K7mcQhdQ_8Qer_aq0wrxQ1sTEZv8UdFHuOZMfEdyv2rYXmDLFb-JqK20aGqKrsP9n0PpXf0Kode6o=w623-h355-no?authuser=0",
        "bfs",),
    new Webapp("Langton's Ant",
        "A large matrix where we can simulate Langton's Ant that has the simple rules: if white turn left, if black turn right",
        "https://lh3.googleusercontent.com/fbzHfej7zEUVWl_ST9K3hJq907F36NSiXY2OTbcMutOg0g9dwL5lhkAv0oUQPCRF-9F529THG7MfDX-_uJp8MRwi1xXvNkvRipx6-WMtwRavMDQL31eZ-oV4-HZt_o-TpNsxirGtY5ieg6tePSs9MV4Zcm4mybaxmgHZE3aB4LB33yRuOGc3PdpEAx1xCWj4CjGT_9dcGWMXdm-mBRU6MjQ_eLE5kiS1KlkRrlwRKpBSl4_Cp2TYxjOXGkNPohFvRRpRR1bzvvBgyH17rqzk-eso8qnrWSKPfvnJOUSEORQ4IsGl6QbvYOzopTTXoima7Xdsl-qFNFpEjKFYm4WotzIcoRbN0YqwHlmThj49Z8sFmCFu70kMODtD_pXvWWAqJXS8_ylc8fwW2LkiEk8UZy447Wc82jJhBFBjtkySMWoN7QwKS0XFWGaxnLn5gVDAwwOYevTLG42AtSL7vAmNoUN8PB-kruQ6EAZyqXwqZRwhKI5PAX2azOneI6dckJH_WdMDW6g4Rc8EQv6Vyxw-ki3wtOcOGuCesO1HRtlAmCwiAZ9RBCOf6uhy2oJt2EXo7xdoQgnQZQ9xWjCp_3_0T8TEw9NSYT0nNQFy4TVYW9qcNS7AlavQpr-Rz97c11InoAqE2vB6rpfCwXqsK76li9o2TEWBFwpwN2JPNp52RF7sSmOBCG_bZpnW_uSioao=w1911-h891-no?authuser=0",
        "maze",),
    new Webapp("PID Control",
        "PID stands for proportional integral derivative which is a controller that will try to reach a state this interaction lets you change the constants and goal state",
        "https://lh3.googleusercontent.com/Lw1gAnEXwS8Ezlb5qkT57qHxA4F35ZBvro7Na9_yla2Rb217gvUZImGg-fdfp1d6_NZpI5XCcMLgp3YilXBwsC8kQHUWwpjCeMtxJ1GXfEoe3O6VCUYxzS6fj0C7TRMlyj8hbxSAfoJv49PFoLFomiwzpt9S2icPwcOK-EBbjvPhBRRgi3dTDgqIabUQVXmvXzDNmnoauXpEcms7Ox0hzZXdKtXqguzwAhabpztM_0Dn1cBJ1379To_g1XSUkDumWFchZvzg-RiwIk_oV3rGsKEGA14hPn68m0UAN-y8CahKLcLgKWpH26gtCn5xmQlJeG-gVm1kwbQwPcminTnCnUlUrGbfxbDFG9hzK_1hKMbThuWeaNbd75J79m36HkoyE9rfI-8vzP4mRd8ii-A10ORgw2_zpMOH_r0BXMJC8OzyuWgkF9DkHHeW4wVtfeu_sL7wawIwAWESJkOOfKlqw4sQWVs45AKH6DAIw1E1HYMug7RRBDC5I1voNnlMzy_gnhrxWK8-O3sVIxTVY7EOr6iqrQoMNjqikvlKNNId1LPhOGasHNFRZncvPLWQSvNeGvTjIH1dIMPAfMeNGXixCm-VUn-lejMYZc4oXEkihrpfRJlCIT-OrAw3ppHA1PnrH44dDkd_kqPhaDRFp9uYr0WwknxP7nMiZ5j6Gic0fTCtZr8f3fA2-9hQq2ygGp4=w1920-h908-no?authuser=0",
        "PID",),
    new Webapp("PID Race car",
        "Small simulation with a car that uses PID to follow a wall. Click and drag to add obstacles",
        "https://lh3.googleusercontent.com/fQQUEqtUDepvs5vbWV3FcVsZwxpeey3eEROzgXixYZYlmxYL8hPY_OhPABguxIgeDpLaV78cUf7zt9GQMCVKkzTWMBv1sdNnYGd1bBYHxKNBzBVm2z135p4Y0IcuMGd5brBepxRB9cyrImrDqICtdzwdNtZIMv-jnZPLTQYVg6BwRpFzS-bcy8YlvBfCdQ0jTekymbACUcHM9D68JX2dIn0VGFBHlKNjXKFl8cN4VWebUk74BM8BmtBz4YmpvecrbyRGiOQMo6GfIAI47PEFTYV3m28FLx_rjY4r__-ZG227bInL2u0j9z-zfIdp8pRWr7C-OqpooKMso0hcfJZQKHYRvhgJiyiSU9Kk01Tz3Irr--LzBbEWRgPfgYqbz4Ucu6f0DEquV9fxWSv74QUpLDDufPR6_4y1eQvu4Z3EW3dfCjPriZkq5BILc7gvXYoQgmFWSANyUp11wHJh9IAokizlIJfE4IfmKqDsIXhzk0Nn1XhE304mIF0jc9mgHYwzCbY1HfcIyb73Y4QiOSzvNr71gJvxtY36mOoPVve0CskAaszhHhH6RLMVHNNH5QowiXua6tTVVaenE_hJWMewoKa2ltJexjumEHXoJSZ0obAhtph4y9LnXQgFUr6Vdnehy3cg6CcAhmRt4A3IByAVUGI3LRHcyfwqkUXpiGy5fv0RUfQ1sHY8-nGLFMxitI4=w1911-h927-no?authuser=0",
        "race car",),
    new Webapp("Base Calculator",
        "Add number, its base A, and target base B this will convert the number from base A to base B",
        "https://lh3.googleusercontent.com/glhSioQOl4WpPZ6osElB_W96u4t2YFapKZC6xB8Px-Y0gfOexcddulG5_Onq1z1UnkE9asWCgGbM-b-az98UX3u5v8xK3itb9CyIkRIAvtVCrUmMJdEtk_kq9DfftCmX1cAwTCpkVGFEa0F2IwxoncJAk69MLN6vSqgUDK2xk0TrO4W5gnttSuGNcwJlq2GRifK1SQOdnbmQ1QANNQxYormklNllwOe7ByUaLMS68xvTwuMKh3lWlocgwXarbbnSWViMrQHgtBdPnQZd3YyelVWQuD9oNUNFHomwcghcBERnaxvDM3i3j9arzzOGaaUoW076_ZHDB8Do4q7yNDDuTqhFDOXdUkvPizNqGLCwc0LGJoPeQm7w38OR0hknTh2jQmoaVJyycut9xkTazY_tCJUvykZDM83ITGvuMxSRXUuckpaDJ8E3bvytctSURr-miuy70u7L61nBlukgcYcfOLNqx8NKpUzjQssS6Trz7U0Bhc3PGBQHsnuYvpXhOQiCgQka3fYemx3H1rTKrYmXs6xXSrAjHhfuwj2hM7MbhD9eTHXxa7PbQoBC_71klmeofGKNT5E4-zT2p44CKYVrVDvR0bDF0QfTkRQeOav86GgHbHsWMSg18sD2sl4QPn2A2QkQI9FE10MKlWTzNb2U9h7QsbPiXqirLFWHeqhNmPFJI6Q4Fn5_lEAN6PUik1E=w1918-h886-no?authuser=0",
        "baseConverter",),
    new Webapp("Dopler Effect Simulation",
        "Dopler effect is the effect of having waves in motion this shows different vizualizations you can use",
        "https://lh3.googleusercontent.com/oe4Oj_DwfXuYtTPhEcPrn8kyS4o_tEGwzEJPPZQTo0t0w2HTPbQvEjWVQs1uybLCJ2BRFYC5MNQAoBV4FtdUn5-fDQ1b90v1HHoKNxFhPTKWE2vHdIXG1pKXKSm0XTEiSTnZDMhPM6r544XQ4RwNWmeTsF0bislWL-fWPlvEUruH807YTpGVCvzV6mpxiATssqdVNgehD5quLv9GCjv1-DaCIjdo7cxr1clm41BFkozuyEB3Ze5f37Sx1WQhJCj-tRPK2IwSQFyYa6wvuy9HTRSaY6x1_mmDqLTUnbyiIrQpGEMVd9YGaxSIvsKV_UFDBroaWwAolvVlV5ilhs06de4lCuHlxvx4Y-uGH56BcXl7Jab8EVUb-q4A59Vfu-eL-pInpnMRUZfFp7oDPvRX_NxUnRH7mhKuD-SHNcAPkkit09iFe5E2iR-22nnk6diMjhHAzfotveq4s__4e9hLlyn25wuTJau-RAL9YpWgGw6t43YHhEPnbu_4VRRO4jqpyDYy_ZSvq8hI4FUT9BTtVQDFiM58vk7Oh2wHWx7p_T9vA1Yj6HGUh7mP_58UPXyqTXK2f3QYZspekjXt2F5z8XNC8EMbwmGfoJxp_mOleB_LNVM1ykI_9tQKbx9lmg2T8GLKgx3K255RdAa6rCzV5oPQRb5-zTHFecQ14-rvN5QAZrij-vdFE2wecwPe64w=w1912-h883-no?authuser=0",
        "dopler",),
    new Webapp("Stopwatch",
        "Colorful stopwatch",
        "https://lh3.googleusercontent.com/VWj9zeX9rhu3IqhnimgvFep9IWHyCehy8-TKU6AwmOnkO3OVou88LTCF6FNS2Hd7jPEdLZ1jVpX8HgOtHYTs2xXcRsTCgLojvKySr_HJ4Z8l6K3Rrt2M-GTcWOcZ2ESdr6LyOZzvejDr9y8HE0PcxBl8AVmpArGz2MwzFtaQ09xiaC8zVMTp8OmRi7i5_j-BBanQrLK2HYi8WaG0WMkIJTgr_Xhr3o9iVuNjzFUXogfEns88__dBQIfq4_cWg79bncboZJccb4HcM0VVZ2Zh8tm0gj1gtfnJ0WL8yckMaS3OKrBxOJ26yX7OGgwSF3euH5z0BJlB-_g-M-E2ymHVN_h3BCc3gQQqtO8_q5MBo0X0b1kQiJsGqJ2z0l5devC1Dt_rAfvDreynTVKN0fIp6U_EV52jsPyHvxz1PTsN25Dq4LwRDvOIMEfJZ60vNYUFS8S2LIl9JaiY16MlxJO-HeEx5oZNu4A5CJEuy2iYrPf4Grk6x7svdz9BapY5kjVtzVzS3wpF6KBQRjpunKnxsdzYEAllKcGoZvfIKldQp10g8fQisWklYW9JVP2gb-NEg11yGXRzzKyfXAxCVNDYlZmo_0OetljzfhUQ8EX2LHk61YckQTRtqjUqSp1Mf6qGXwTRiC8ii2Rt45_y0tuMcy64mb9c0n5ZAvAlq4m2tdE4FXINPW4sNfbB_b5eSAg=w1910-h890-no?authuser=0",
        "timer",),
    new Webapp("Selection Sort",
        "Sorting algorithm that picks the next best item to sort O(n^2), _O_(n^2)",
        "https://lh3.googleusercontent.com/kppDFUILpeJrk7JOtlC0fGuu6UGV4MLYWwlKsk70g2xogczJjFvJrUkdUBL-eiaqs2rKMRHslIkBjPHKA3_y3KdI6KIs1QH8jh_zF3Z88ASfUb4ta51flI0b5Q8CJq63DQMjVIgc8Mdmg7RaOZ0HGPb4tanAQi-Su4iLA4guSsXiWjkTuqhuQW46r69ZduM9GCQwS1Q81eEL1jSd6QUgqXhm2veMLAu3AebsXtODSKmwKjYijE9qrh69LQeY-YqQiqLlze74YN6tEHaIzKNhQ5Py1It4g1zT6p-lhMV8xN0cv97l1AuH5P-kq3nmKyIzaHy0Hn6mb73gOwRonqQKKkp42bmlCUQvGd5s3L34PbE3gFCKDfe-4kgXTYU8dQLN-7N5Yf5TBGqIoOAVZjIyVXNHWlV1iS-4zF0GTMVNTS-t723rH94JQlatXXzwltg0Jr5kyB6UFxajimS-hnJNsAGnDv5VvqDLUyoqz_LeAmzDsh1BpayJSma_Ux7auCOKqBYaIyd6_t60g0_2NMsSbJFhPM14iGWMw8sgHb4OwhBbJ3bTolDXOkkoGmLhv8bKsL6lEg-XN6AXGKps7k2nyBiPdEbHLhNDwts7DHkE3c97W6ryBq_yvzmD_0NHer6nvWQd4pGRgtrkebIghw83MBVtCmVdIgHeUBgiruYj0bTyNZraCoFYL1_RmnVlGPY=w1891-h899-no?authuser=0",
        "selection",),
    new Webapp("Insertion Sort",
        "Sorting algorithm that swaps items until they are in the right place O(n^2), _O_(n)",
        "https://lh3.googleusercontent.com/kYlGjpWfVv4BqjXxDkGHhgVn38PzS28095xiz4LHwGK3Ru-P6vFI9c6hRSObYnCT9Ct1Q4hljLDdWhLoq8UbMFr_PDCdpBOr5I53U53Zf23uDRj-8Paw_u6mGBXpTGbJr7s1JGA_XGu96g0kn42a8-lk2zPGJKwwhNRUEJu19IqWzIwr47P2Yakz25Aqzprly7yBThEqoP0SsO_Uf6I_KZDhHYjii2n5d1S1re4aYGczhDz-jka8rSYuT9yY6aqMlNpqw5w2wNmnhIPS6kvv8csucJplip24HtKea2pOPkbuFSOOxsJaJ00f5xcE5lhrH1shjWQF1ehg1RLc6OSNRVf1bOWicUAocK8b4ZAQs72lNoGUc02xeBB2qsGo4MjoRddgvr65ayy6ly7wTfHy3UqJGpQLdA5TsjIkXpap_dn5J3A7IDqXsrvYKSLDwWSOGDBjqXUB4h6-QDqUDgQKDveKvu4nIZqZiR1UTk8IaTEKsmmCfdJjQruV9qud_oMrzCie5KY29-ajpcdagcUldcQl-Uv2fqdSOpvCVOc6Zeg8RqO8JWjdwnZtEFkjDGdIeaQEWO4jqKQ05MupfgVsjipPGUzXjs9H9Vohc04TDfHxQetoKGW-82AdmttI2Wt8MGFsWalzpXPGIb6RPyS0YQZom7KtL6yC7a-plhXMAHg2jPkkwsmZj_rk10E52bI=w1895-h899-no?authuser=0",
        "insertion",),
    new Webapp("Merge Sort",
        "Sorting algorithm that sivide and conquer to sort smaller problems and combine them to sort an array O(n^2)",
        "https://lh3.googleusercontent.com/c4bk1xZEF5jyfWu42BFlLcIKBB7xPHN6mazCZxP8c76knu39AMoDgpKj7iRXnCjh1Z7Y5_8Mox9gLNOC8EqfrThxC0TWCJcSe_QWjyzxLbBiuNfI9G8dGIehN5vOuzrbmnRhCCSssi7axnQxklqb-q2VBKTuK71Ar3FEPqDZa-ZpJTeIfCDD1y1mUxNQLMgig0k7RDyXvrfZCQoWT4tFcJZ1ne2xNnC4s2iYVmVrUSdrodsZMHBHkiZGRtxVFOt3479ZuM0BfghtlNVIzY2K622bCcB5P8i0HHbip4twPlr8q_TwlcfO-X99zniWpgCxXvxcFBD_3mr_tT_jEASEQ7ZDe8AoZkhtCDzmXBvYoicy0vo-PC-VaPYUS51kf9mbaZyI6w3Yr6EvTnBfl6txaH5jCnG6c7VGyzSxEiIqpgebQD6SR_Qh9FFNu187kNXBqotHAtGOtitWF6S-rQkJm5dCY2AfdxjC_bk9kh0KzWutZUhYon1ht3p4lwuaImq1KeMXAwKTMLu0V8711Xpt7x2mbuSoOec6PXTBuGZHe8fz93Wwak6raEYp2ZemH7zQrkkNO20BgIzrLWN07nUCkCrdptrwHGW1hgNYz8L78mets0BwU1PwZvmFYHebSjHlSstCoMoH20HG00vKDg5YPHypeFZCWq8k3YHEYNYIxnFjdPK_TjQFhQpUwaNbixQ=w1897-h898-no?authuser=0",
        "mergeSort",),
    new Webapp("Lissajous Generator",
        "Lissajous created by using circles with different periods",
        "https://lh3.googleusercontent.com/fAsOrEqtA03mdsTz6OidI5WNvAZpvcxUJfIY3HWJpdY6MTIXlo4S2Xdw396wu1VdjLzYjebWF5UWONV4omy1S10XjcphssrEnWvjoyB-KL8A1eZQzEV7jiBkLIwgorXmsiqbOYuDMwSGGSDgQ_SY2iB3aQN9tkViR6miwO7DNdwk6aPq83W8OEvOVbzvcX6KVXacYE4qImapTk8GIOTGCP5_eLwBSot6ViYyiOfR2Z7b8hzKQC2M9R715GozVSro1UW4gFM2AibWSY87VLNTV2Q78me9q1MECP2I8gh5tI2ejBT8MjFYYyGtQUwHvSXtWpYqcN5unHM4r9VbLiBpbKR-yoImi8duadM4OXWBxZgm7-ZlYnZ8F949cEtrjQFlZG5l2uE-lHfJNX0axObxgbjwENkNLLZpMkUUlnutkOkRPTArMhKoyVerIV7LtFP0rC3r_lAZnPhVS--DcDR_0Wcqha5WEKwCfAizk3Z1Jb3O6TT5mOR40XVzFbejz_eroLbPXINNCI4-1I-M_Sqm3LqcZWAYHwqZJb-taIeGzGKwiW2zwC0SjEbO0KaYRqj4Y2IR2zuRjv2pxdrEMRBnAnH4x6bgSchSr3oF89Pte-L0fzOC3ge-n2L4krTycRy3PcNZLADn_7HgpM0k_5MjuLRbg8scO4rmEN_UBS6ZCpN4qYuvgD2kgt8-uQvbg8o=w1898-h872-no?authuser=0",
        "lissajous",),
    new Webapp("Flappy Bird",
        "Remake of Flappy Bird, press space to jump",
        "https://lh3.googleusercontent.com/vtv_NlbQf8EPNZRLuOiPdrE8TU-9jLF9er32YFUnoszJfYEF7fx_PxeZITkhax4bNLaUwGYLnN9DOI7FopCWGepYxaGZ3vJFHGHj-YEZnW8rCc7cEx6W0UZuCJuue2habiuCVwtHUErD36mfPW1t6b-B3MBb8ckFLxakW-ZX--pCQpqpGfa2cyiQTSnB3apVUKlLWvUJCsCxm34m6lhdxQk-dS9gIyr_esXPBddfSogIrttkjULuLcp1C1ZBtoJj7Wn8r4enfT2L9JPluQJX36ZyfipITstRxudWy3qO1zLrHle3h8y6EJOVvgFWhssF8RKNgRhpyus4lCJ0OAJ64ohSMZNovZinfs2N4rhURYUDQhzrKsKRJA9KQBEaK5Y5lZZt2E17sMgtWT-Y9EKGfdbzqLBZ6J23fM9VYkoL7ky8vxOmFoRWkELYcXW9c-Hb3JfqYIAVFVlFcZSTzPFnMXH3KIrCB26A5ZvRqAINY4emDbvPsNCIa-RGAswdo1y3TouifdEIgsWP0YYyAj_5Loef5XstDnCubAv25TF7I6_AvaV838DZ9m3bh5r1SizZrKs8u4GovX5rvTvk1iBjzi0ZPwGUIaPAzfbL0u-AMMwQTUBs14PJZa3M4Bzd8OqsIhnjjHvUtwJKcLd1EYhEn3FMVLYL_9Q92g4nBXfcpvSHVnmLOB8x65OgaE9ygfU=w1888-h876-no?authuser=0",
        "flappyBird",),
    new Webapp("Asteroids",
        "Remake of Asteroids, use arrow keys to more space to shoot",
        "https://lh3.googleusercontent.com/F8430YzxoncQ_zqDmP9KvnSLc6aIx7vLP6JVq1ojtDEixNWFXt3jikdaszFcovtL48s1lCefqEd2EqUrSYBkAGm93wWVOZ0d42C9YMU5EhaCDJqrv5p204tKb253gyuVyH1xHIKRWmJTVrqlh1Ts0kT3vKAYs_UTWDCZTcsrZCks4xBx7wlQ5ufAMIJwsJ6QO8QjTHcuoj0EZaH8krP9TKgDZ2YGHv8aoKaWHtEz_rzgpzPT13Q4_2VSaVUUjlWrjiTkyX84QrJDA_2-dNvl63OdltkaXUgTe0tQzxfoZTVFgb4UfZqpew12ZAP68gl-i13xTg2pAJeQEpFxy28BFlz44BQgTNahmjV2beeki8p7i-kjqVG3c-pjGEG6l8_0Hi2v6MRl1yXOot3IIy1hcM75Mp7uXrUhaBu2EzlBuTVfTYB_XkNyLyS2PuZCAZ6Uje9BsUPyo_L3DaX2_PQJndBXxdTD6ORj28lywv4r8GqJ3qQW7aZKH65JEZ8-3VNgEXheTybU2K5v3z-NXbP0F9MbhpWeeCQitKSbw1e1QpFiBjx9ez0RUwVpAwXA0_lsWf6XynUcwwTbRweH_vKgX1tGXqPMiC1ro9x0bQ7F5jwmZMGgqW4ApuL20788_5httZuAC_eXNutkoLf2DzOx4aON_o1mEZnX_kge1K0Y_xUOftUIa5IS8b4F6Bnrji0=w1908-h895-no?authuser=0",
        "rocket",),
    new Webapp("Drunk Walk",
        "Shows brownian motion and the path the agent takes",
        "https://lh3.googleusercontent.com/mgk_xP2KbImS4yswQ0KrP_d6JXGxrR1OzY8AyfLJMkqsMHdrPbD1EQyYkcAmh2spCFpY6XAMFHpCECafnLm2aOEzEFrql6CAxQaTclb59EmhmimZXmPC8o1rhwb_qzmaSIVPngxkX8PfaSCcb7rcr1xQliMGuxnnVBitYN4zPciJSwdnxk9GqajhS_qTMCxy7GvEjqivScAG_xSTMKXAtRP36x5SG5h00DR8IVwkhY878XviYyutw5qKlw8XNn6P8ziGTrcx_8yim5RkeGwNSCqGVfA1DcqT-yvGHsDScIls0UZo0U94ie4WkPhZbewr7UzuUExIg-f8p34Ocu50lCqU4QiPqATOIVvhIbS3YO5_FLU0Pmkfgu1bydxZY0ROjlT-fKcI69KvmSWImg7Ka7K1Td2xvEk-o9od7KBUOkJnrx0bEPAs_pu-pFUEs63KyaDPTwYwtYhah_tt11tdJkNfiuzFm0PnLgWcFcXR1Ad0c1mBOstvt2QCzjwTVwdHYkWgSKuAa4TAjvI8JfG2qOQxwNstzox7akfoxdYOMwwwB-fvNj0-JhiR6pFeuAJSfeymr8nPReUWVaE19r3Zp3lGcXxDwd8tmlmIDAhjXTGQW2dINQKhVCfxV5HqbCEWyCOBRWY1pBEQruEqBEa4W1BfUxBRcvRsCK7GnHFUY6r05xubepN8x5roWun2_40=w1875-h863-no?authuser=0",
        "drunkWalk",),
    new Webapp("Diffusion",
        "Shows brownian motion with more particles",
        "https://lh3.googleusercontent.com/qnVCuhkuzU-2UPUcIXXPtEovkDzGfkuWS1Fx2ak8xUhaS_pQhNfB07DS53OlQ8rFonRteTogV0BKGC0RQygpcLVedlmmuww7vycZzAh5o8-L5AiAL5JTCoUYuipWdjnvnL_hnKS6LjpTplf33y6k-aQHHiOmLIZ89DGMTjFgLmLFpqQWWnYRz7Zo_GNK7awLzxpgXiqJ7JWqtJllN78Ji9J0zr0AZhf-bXBkWxEu1h4UmyPsHfdWLcsOwTVMgDiMdRQcvRl8I6U7X3m3_oQjDHKuw3f1_h9gd7JPyN-ZitzRcy-WBb9wasnfwa6s38IPhdLg3EhWdB759jF2qe6ZebKSF0CqGVMK599R8wsXu5541OfAH_dGPd7RKqy1HSuaJEUjxqa6m0ce39M5RwwJjTqZcqn6Zma4LdWvoR8B5_Akw1ZajzVO2dhFovL49rz4l83vLhI4jNucxsdbjU3HeHncP9OiIsTpLupstC5FVB7CLjZ__AvqmbLwyvTvU_5RLOLr3FHnabn749baBHagvo-zLIKhJyrY366ad5sX5JrdTVgTD37yf0lUcYuXXI4tIOaSMlaTukZC233W2M0DG89bhMk2MMKswwgFA8kYnSTAdP3QwAAlLXkKiwRwYiVlky8-qSIOi3tH0arwHvMw25TW89BJcuDm-955OnDUVz822f3nCqEBtt8ck4s-UQU=w1881-h876-no?authuser=0",
        "diffusion",),
    new Webapp("Interaction",
        "Shows brownian motion with particles and allows you to see interactions",
        "https://lh3.googleusercontent.com/_PKtCGKQfuoTBLpCF5kGcY-yadpc_tYSJ9iyGZXf_W_VDXgrJh2sOXo_EILM73dZ8DF9uRcFhqw1LKaulNG8bfze7ct7cEamNYzbkcYbohBtuPtYWqlY22LNPOFokhupCTBgIXYA7FrZUi6FIME_AZm5c9NAlmEWpy_RwMoUAPLWFzubmkiUSlkjzqMA86tgyyz4BzSRHSkMJ1zDiqddUXUoea1ItzbVlXdbe4JEgEeLdVjRGhTue_heIROydHjkMWFF_IQUrrh-vmNPdned0o3aRbu8TxuyW8KFvhav_lumVUUeRt-gnclHjdo7L0-BLOW2aWplOpdW8aVolbTjRY-LhPDzvJAYE9Z_NHV9f8STTWC1uVW_yDsSQJat4MVyd1mEFRkHKutO_NbhWQRepkHb9OlLBhXsguPj7KDkk0obST-47nVVpUg3DYKmRWmJs8onKfYVv1-0rCI01XXiOXYh1L-pAsGAVxkNgF4V5DjDn2kFfhHR_6I2Nk-ho6Gfq4ijzUUh-33FLLq3J3iPznLml7W6vfUHERfXc-nWkh0WJzB3ydsVEeUg48XpSbuGRfj_moZqFMzkep2iPR61jXeynE1oddJ5JPg8S4wel3xZurHWz_591rKQbVWccd2ZPxi-ZDVtkwxB1Ji9UICX9itcrCyF2ebMqVZjlm3zznJH4cwqcviEFUAAXU2qgws=w1880-h869-no?authuser=0",
        "particleInteraction",),
    new Webapp("Wave Particles",
        "Shows particles that move in circles, your mous position changes their period and their overall image",
        "https://lh3.googleusercontent.com/PY8ke9dRHU5R_vGFwKtCEjVVcXeB_iJXATQQK-fGXUKTtJO6dpWM-ycINrgP_VkLVHN6RbGwOycoK5EZJ6pRCOt1Kp984qozxEXNJrjUEo3nd2jgGim9hfcym71IJsjGPXQKBQeH9KRCx3tNfY-Z7s3kPJVChCSJyTqplz8d8p1f7oehTqSCKqaBU5ofrDXwruSRRhx71mDs6oRQXDZFhPZ9V2K3zMLP2ZtC6UMnj02pAcGvnYLUb0ID0FUZP2PwaVT89-fSazmzjmjSR8sUOhtovWgN3lOeYygcv0tNBS0Z2GUAbWwg010Wl1T3rUJG7zGq6-GOHkXQTh38pDHxES9GnvY01vMDKyz07j3TjsomFG7V9CsFpv-RGRSb_UbQlg8z_Y3PI_hytrpmlZ71A_hLAZzTKE6yZSaSkr6OiLuBpzYeLMskM2_gJRVlAOz_udk1n7CHi5Z1yJpVs049becxKc4LtfBVL419Jmkak0vgN49eo4oFXNPzZt6MwhuG2M0GGz144xFHDTEAH8SMCAmAZH2nhXno8j8RtnGJKizjEmTMuoSIBxo2TKdLy_Tx5sDQJG-idsS--fkOv6JVTErhunucDd79JFRJw8tqjO2eN-gYqiaclj45EFYpRWrxIb3gislyLUbnfMPiE0bKlKqDTwALr_1CJa9vxP05VLxZ8N4TghEBcDMSxjDZvyg=s250-k-rw-no",
        "spinParticles",),
    new Webapp("Calculator",
        "Simple arithmetic calculator",
        "https://lh3.googleusercontent.com/QAbgeoipkdI1ledZ4jnZ1PICpPGZWbN6NH0Yr47FbJ_9vGDncitvHtGoaqKQRfB9RLVMKgWPlsaBR2CUbIE-I2U3_SJ3oYlM3ro5ifQk5fnGghG4zfWCMV686AwKdx2UvWUvvGE3BKRFhfRz2lxVODCAPuSuLPWw33DM-xquCzoFJhBPwu7j5NPc7XaQJGghzwFI0FOvAHgYvcVtOYml8Xssj63grl_Tqg0-Uf8AMP4bxa9oY_tHpGZQYKDlTsqpP5IIb5-WQ8HPFP0hafJEmBfhhW6HCshNbk5QA8nBW92AFCvfue8gn0WrIYSjHOmmC6kfrjj7zsTZmS7PrawiyCavgEcdbzD-iz8gO598WdoQOUg6y5arSpx9ih8J1hiXbNQHEUvqo-c53UaVA_-9VvPASMcSj9OaRmeEfvKN9gOdJPeizGVv02u9NFZ1tD6ZfV-5MMtIzRb-zHzwkw-gki0JVfcPBo5XZn2PlUNU0frIlazxFMWT9LI2-PGo89WpTYt8CXOP7YC5KUC3Fat3ZX7_JY1xSgwucLxqDHGuOqidD-rg-37RC3vE_9MoqYZNaFXPCF19OFXAaLtHWViotwtPylrk2tGfd52OveRJnsMX0zG1SqenDYcY6q7CoP70i2v6SmSAay-KqQJbiYWXo7mMwqtc-YgNyMqq7VT2z1KshX1B5ItPXaXO_lawwTI=w1895-h879-no?authuser=0",
        "calculator",),
]


class Webapps extends React.Component {


    constructor() {
        super();
        shuffle(webapps);
    }
    render() {
        return <div>
            <CardColumns style={{padding: 16}}>
                {webapps.map((webapp, index) =>
                    <Card key={index}>
                        <Card.Img variant="top" src={webapp.img} />
                        <Card.Body>
                            <Card.Title>{webapp.name}</Card.Title>
                            <Card.Text>
                                {webapp.description}
                                <br/>
                                <br/>
                                <a href={"https://moisesp5js.s3.us-east-2.amazonaws.com/javascriptProjects/"+webapp.id+"/index.html"}>Link</a>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                )}
            </CardColumns>

        </div>
    }
}

export default Webapps;
