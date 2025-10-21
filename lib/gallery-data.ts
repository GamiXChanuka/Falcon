export interface GalleryImage {
  id: number;
  category: string;
  url: string;
  title: string;
  description: string;
}

export const categories = [
  "All",
  "Car",
  "DriveX",
  "Technology",
  "People",
  "Chassis",
  "Techno"
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    category: "Car",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/499464192_1152882836850026_939165315723871357_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUi_jGegFl6VrwjRLEWECmCJD8UPZ4YlcIkPxQ9nhiV-DMbvZO5FofhAdRPZ4N1ZQAjQnJuDARZLN_Sf0fqBwL&_nc_ohc=JdCESIcsufcQ7kNvwH_VqrW&_nc_oc=Adk1o4C2EXFwUSlM9DquhUyFfCt43-vf_WZtx-SAFt42cj3vx57lhoiwPkmfqmSgJkbFERX9hC5IvzCcvHpwMwPv&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=-ZmV7a4HuSrf4d8uZFAcow&oh=00_AfeF6cVZamD5gyuD9Gif-0CZFy0QZ8rvQyhcM19zZfiYRQ&oe=68FD97FD",
    title: "Mountain Dawn",
    description: "Majestic mountain peaks illuminated by the golden light of dawn"
  },
  {
    id: 2,
    category: "Car",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/498679056_1152882916850018_1891866845837637735_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHuWmUc_YeEm2uiE6tnKhf2Dp0RreRefnYOnRGt5F5-UO6B2HVrKdfJ_cIK7ZqJoLPRmSjXhb_H2nFbPf1ogdG&_nc_ohc=YmvoAN-kGjoQ7kNvwHBzKyK&_nc_oc=AdnMUHvqGpisUFDD4wTk2Xm-CdSCrgv3J51qGF918m1ZI3Uy8o1Etr8yk4yzzMe7l_BsBOwKPjuZUCWw4nsWMgFa&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=6RxMPPz-y0FQKOU43ZVyhQ&oh=00_Afc3-jR8Vf2M1W2t-p8f4fLNnd_pLodb58wMbZoxZ3kKDA&oe=68FDC621",
    title: "Northern Lights",
    description: "Aurora borealis dancing across the night sky over a frozen lake"
  },
  {
    id: 3,
    category: "Technology",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/499143862_1152882870183356_735277276427481516_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHD5ZrVWZBdpDLQdtZdVeWdrujKGVTkel-u6MoZVOR6Xxa_NruZ7Qpw8Wuv1Ap7xKWRARjC_fUfHcXCvxPV0Vw7&_nc_ohc=wdx48sWx_9YQ7kNvwHr7Vvk&_nc_oc=AdkkYdVwcup26TWKRDX6lE7SHog2xiRCqYVRrwKL3RcfaobX3B2OFzRvbdpr4JQKNjNkfdHykZo_6UoyQihZk1Yz&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=_MsWv_o1nppMKC4nPMzNww&oh=00_AferkUq9slXxoaYIFH0M6f9VLw_Rzqjzr8skkQgro4xDgw&oe=68FDC7F6",
    title: "Tropical Paradise",
    description: "Crystal clear waters and pristine sandy beach under blue skies"
  },
  {
    id: 4,
    category: "People",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/499691157_1152882873516689_7085253974729487849_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGmNeS1pZLukS_fx_aztzAWSEcpmu7u21dIRyma7u7bV7DjCteZL8u8dqm64Cl5jlJcBsb6bGGj261ylP7_jhcv&_nc_ohc=gZHsCIN-O2YQ7kNvwGkdcam&_nc_oc=AdlqMwc0tWAk9rI5qB-KwNc_WyGKwRvmdJv49PQWKjGFABXAUE8K5ouCustDfvc9Ic5UMdWFTeDv6PgnIjUOvu2a&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ziv-ndvjcfgb77oYX8ja9g&oh=00_AfeOl91XHuNJ3HGAh9EjeovNfkH9joASLuQgSLA5Lx0FEw&oe=68FDA6D3",
    title: "Modern Skyscraper",
    description: "Contemporary glass and steel architecture reaching for the sky"
  },
  {
    id: 5,
    category: "Car",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/499960363_1152882940183349_8001878488155131598_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF8EY4eHiDVyuCZaTjOR1NxkoxeIbYkcFiSjF4htiRwWIgEdABzECusue1WRstEbQ_dRvo6xlG2xvckBE858WhC&_nc_ohc=zE2K7YN_R8cQ7kNvwESNSs3&_nc_oc=AdmJ_2q9jk4CxOAO_2FOLMrfz0FLV93ZJqT11y2zNEb_OXFR5z9jp8PM5p9IQPpPt7W1VI5UihsOmD1T7fArPj0N&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=1AApaHVywCewtaDMzvPG_Q&oh=00_AfdjjnTgmzIDcZnQXmoR55nHBanJt2I_37prg1M5jxlzLg&oe=68FDC6E6",
    title: "Historic Cathedral",
    description: "Gothic architecture showcasing centuries of craftsmanship"
  },
  {
    id: 6,
    category: "People",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/499224744_1152882920183351_4323288909664508536_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFHbNJfwunf3imBq0Yi8hszMgbrquFVWOMyBuuq4VVY43VZgkUS9cq8Q6QWEC3clQ3yl_T779SvvzTXBbJsH4U8&_nc_ohc=7nZ5p50ICB0Q7kNvwGA1M4I&_nc_oc=AdlHqgcH15fx-1-ilRs4b--y_fC_pABvhYuZkY3HaXwOOHuafzHnsheIDupKVfpng-rrRz_bNgAcNhXCLgFx14me&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=qK0EmtI-KRUY3t8VbynWhg&oh=00_Aff1-tndK_oVJbnnArhLfemNAKbJwGSYVOE4Vgga78FT0w&oe=68FDA016",
    title: "Minimalist Design",
    description: "Clean lines and geometric patterns in modern architectural design"
  },
  {
    id: 7,
    category: "Technology",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/494524380_1138951238243186_9216277410424508345_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfp74LqfdPp4DaFdz5_PvyuWNZz6IQsU25Y1nPohCxTeQarlobYEnKH_xoO5SweJlY7HAj5FNA8WCUH56Qu3F-&_nc_ohc=O10kUdnkSuwQ7kNvwHZUYHG&_nc_oc=AdmsLHAREfO-pUnIM9692B4RX2Rl-cuG51kGjVq3uTWSMlDgZUmPrOiVbUfm_YfFzjNP_YB9oZwpjoSAb4XGrQGZ&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=5pQnVLzMj1828wGv1zVBCw&oh=00_AfejEJhafPTfJ1ueLZkFeiEJcRkiaMh0Q4-_omQYf8Ycpg&oe=68FDC287",
    title: "Circuit Board",
    description: "Intricate electronic pathways on a modern circuit board"
  },
  {
    id: 8,
    category: "Chassis",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/494202475_1138951101576533_4093609888043582712_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG-HWFBlU69_x-_Tzms9-PSJemepsL2c3Yl6Z6mwvZzdh-Y_JLKuBSi7VxtXWjWqyn_i6GnrboESH2JPkDut31M&_nc_ohc=tWdc2wtxoKwQ7kNvwEKNLFx&_nc_oc=AdkYcvqaqx5zEM8K2qDvbiYSeLkCFmsKmy3GIxOmJWoztW2o2Xe3lpgRRu-yR7lH1EMJJ2Xbma85ecj49RH7j-dW&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ryd4k0dMINXcrda-_DgaFg&oh=00_AfcI_nxgF7qD4T5cte8ECx0ETaqd0zzOd7MI8Kf-gVZeww&oe=68FD9B1F",
    title: "Data Center",
    description: "Rows of servers powering the digital infrastructure"
  },
  {
    id: 9,
    category: "Chassis",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/494273065_1138951168243193_8942088986595396153_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFlTgAir6sr83VLUh1SHgGVM7EVtaZRIs4zsRW1plEizhlWEEr2Ju0OIVLiUClArS-Nn4CxO_mEoj6Epg4eCcSe&_nc_ohc=k75Tq2kUnp4Q7kNvwFmGA4-&_nc_oc=AdkN3lk07CrebmxG90TYeGSXP9MzNjDMoLJMXzKzFzwmLtyRez908cglqz1DfhofAAqGQolYPEEu8smprxFHMJOp&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=cueJvzFyRT19OSjAQ63seA&oh=00_AfdEcLGfRkAVbsGpkuP3HDTabk6pQWVjxFDrbi2mF1yH4A&oe=68FDAFBD",
    title: "Smart Workspace",
    description: "Modern technology setup for productivity and innovation"
  },
  {
    id: 10,
    category: "Chassis",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/492193329_1133426958795614_7666288266898298629_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYv6C1ar1XIGNEfRD0AN-5EtFlfENlAAwS0WV8Q2UADNetmTl3DLzK5ha6I7b--OIfHgrO2OYo8m0OpaJVg5Im&_nc_ohc=KvAwfcz8Fo4Q7kNvwGMylAp&_nc_oc=AdnaUKQYs7id13D6WeLM-_r6Mpdqe-zaaeLPBWBhSNEdu7NEe7LIfhGjNl1mWITO2KSCT-Wg2TsadQJJ8qUOjJM3&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=-LU-G6lXSg_-yXq_UhuOGA&oh=00_Afd0q95h5qqFLlU__DpPbpU0ZirYvSASpwDsT9fYX8pZTQ&oe=68FDA949",
    title: "Street Performer",
    description: "Artist captivating audience with live performance"
  },
  {
    id: 11,
    category: "Techno",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/489853293_1123200346484942_3725484821199480364_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFdhyIpAGua3VCmt51GkaGEw5Qn4MrOZGzDlCfgys5kbA_IWy_1I10HyJqXafugjyNtXEb_6a_2O5Ma_bXMQXTc&_nc_ohc=3mW8dmtQUuYQ7kNvwHn74Ij&_nc_oc=Adlo75IA9Xf5XTEsC_WzGmJwQW23wCOisjC-vOZeXwD4gJtpcp7I_AKdbrIaucdpIsGwsJ4AwzL26fH_MEQeO9yv&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=6e7CDLMo8WLXtiy8mPQyww&oh=00_Afev9dQQDDLyhRNNyIrgDLJ-m7Qb8dUQhTd7TIFqsyyUyA&oe=68FDAFB4",
    title: "Cultural Festival",
    description: "Community celebration with vibrant traditional costumes"
  },
  {
    id: 12,
    category: "Techno",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/490020969_1123199479818362_5691561853262027139_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGCy7lJlAlw5id4xwZa-cu5xVO79kPJ3I_FU7v2Q8ncj9EeET0uO5Lx2U9BBhp13HwtOOn-LplCNZ7DawqcmqAS&_nc_ohc=4rhL_RT_UZcQ7kNvwGk4VWl&_nc_oc=Adkao3gehWm9wa6dSPx7Xqew0exLX7oaw9GzR314X5ACR0AzdVQ-jUe5fUuAQvbtd86R9hi7I69JTslzVACD-P3r&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=tuPZSF4uiAQK-wTXrCzYsA&oh=00_AfcdMbT0VmiNo_MYft3UY_3YBjqnwrxZxM1ExC3_Q8pTCQ&oe=68FD99F7",
    title: "Urban Portrait",
    description: "Candid moment captured in the heart of the city"
  },
  {
    id: 13,
    category: "Techno",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/490235740_1123199403151703_8851969597812218468_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHp5pUJEXqRyIQxshsZcAMEWsTxsLcr0g1axPGwtyvSDTcn4YKAFauV54FJy76VhmcuoM3zKEaF4eNe4OnT1O2e&_nc_ohc=UTRexTfsxPkQ7kNvwFQgVxU&_nc_oc=AdmPYwpJyGzsQS13ZX9NXoeXcDf--VGKzjf7Pu7z8gF-d_COELq57_JIREzffssYx62MwCn23oRYNCMFZfDlRuq-&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Nj9kAFpzVdu_ERPDbv0ihw&oh=00_AfcUeumYHNiETkr-FR9K3tdbZ59ktnEH5VKYdPOoPbCzsg&oe=68FDCE01",
    title: "Color Explosion",
    description: "Vibrant abstract composition of flowing colors"
  },
  {
    id: 14,
    category: "DriveX",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/490274855_1122937203177923_810672840632255718_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGgsvr9-9a6Vm6ZW8RW5u32rPw2QKEg9-us_DZAoSD363uSilzJSrWzklMEca1vdR43dc_UmiKF2IANx60cpZ5x&_nc_ohc=EI2MXeAaohwQ7kNvwFbhNJb&_nc_oc=AdlGaP3FElov1ElMke2PwjL9-Xh3HCSXWcK4BzL8UgHuMaSXXlN1q_pZyCy5QFs9JvdccC2TzJGqZO7LIwRXU8_4&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=y9jDKshMrf--ImufbUpvrg&oh=00_Affe6pFM9vsj9GgAMkthZ3-JencnnG6YOyt_ZBSy_2P7Dw&oe=68FDC845",
    title: "Geometric Patterns",
    description: "Mathematical beauty expressed through shapes and forms"
  },
  {
    id: 15,
    category: "DriveX",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/490091227_1122937223177921_2101062309609611690_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHu4RiQ-k6albRWIXKzpG4ONsJsvEVZFF82wmy8RVkUX9hDZIcmJFbJw6p2aXVLJHf0yfbBLGsXpiWYmDiQMZvJ&_nc_ohc=9jxx4foCIMIQ7kNvwFiUWoi&_nc_oc=AdnnL4p-QPgJhM5vFrEa41fawckoQlCS6t6PtEQq9KtToCAwdZc6fhIV74VhOE_dTJ8M79avMxp1LRIs4MTrCHWF&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=bvdYe2aL8PYFpTLdGiSw-Q&oh=00_Afc0Ugc-x9rLZl3uyfPKEPz5yCr6DMk55Ynn6GIttoZb-g&oe=68FDB489",
    title: "Light and Shadow",
    description: "Interplay of illumination creating abstract compositions"
  },
  {
    id: 16,
    category: "DriveX",
    url: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/490183088_1122937303177913_4304719133985410448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFqqTqZlQ8LvCOATymM1ErbYOghL1_e_wVg6CEvX97_Bc36skztMsdcrDz5aaU4RyiwAvuj-Y7LtA-q9paA8jo0&_nc_ohc=CjWH3G1z8-EQ7kNvwEYnbhi&_nc_oc=AdnICj31BJGtkqax0eTUFVMg6fVQhLq-G2Xhb4dB-9j13GtiFfUppucJhcnM1a1NOHP5LmMbqeGWg5yqTDbhZccR&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=qXW3byJGqSOI7DH5Yw9XSQ&oh=00_AfeKk4C9pSBJ24as5qpA3oHuQn7TxgCNtqs3ceJLS0KAsg&oe=68FDAB90",
    title: "City Lights",
    description: "Metropolitan skyline glowing against the evening sky"
  },

];
