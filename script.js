"use strict"

const COM_CODE_COL = 0;
const COURSE_NO_COL = 1;
const COURSE_TITLE_COL = 2;
const CREDIT_L_COL = 3;
const CREDIT_P_COL = 4;
const CREDIT_U_COL = 5;
const SECTION_NO_COL = 6;
const INSTRUCTOR_NAME_COL = 7;
const ROOM_NO_COL = 8;
const DAYS_COL = 9;
const HOURS_COL = 10;
const CH_COL = 11;
const COMPRE_COL = 12;
const TOTAL_COL = 13;

// ------------- TT Boklet ------------

let booklet = `1001.0,BIO F110,BIOLOGY LABORATORY,0,2,1.0,1.0,SUDESHNA M CHOUDHURY,3219.0,M,1 2,,30/04 FN
,,,,,,,Neelam Mahala (RS),,,,,
,,,,,,2.0,Ankita Sharma,3219.0,M,6 7,,
,,,,,,,Divya Malik (RS),,,,,
,,,,,,3.0,Bhagavatula Vani,3219.0,T,1 2,,
,,,,,,,Harshita Sharma (RS),,,,,
,,,,,,4.0,Sumukh Thakar (RS),3219.0,T,3 4,,
,,,,,,,Mahima Choudhary (RS),,,,,
,,,,,,5.0,Ankita Daiya (RS),3219.0,T,7 8,,
,,,,,,,Shobham (RS),,,,,
,,,,,,6.0,Uma S Dubey,3219.0,W,1 2,,
,,,,,,,Mahima Choudhary (RS),,,,,
,,,,,,7.0,Divya Malik (RS),3219.0,W,6 7,,
,,,,,,,Shobham (RS),,,,,
,,,,,,8.0,Ashima Sakhuja,3219.0,Th,1 2,,
,,,,,,,Sumukh Thakar (RS),,,,,
,,,,,,9.0,Tripti Mishra (RS),3219.0,Th,3 4,,
,,,,,,,Ankita Sharma,,,,,
,,,,,,10.0,Harshita Sharma (RS),3219.0,F,1 2,,
,,,,,,,Ankita Daiya (RS),,,,,
,,,,,,11.0,Neelam Mahala (RS),3219.0,S,1 2,,
,,,,,,,Ashima Sakhuja,,,,,
1002.0,BIO F111,GENERAL BIOLOGY,3,-,3.0,1.0,SHILPIGARG,5101.0,M W F,3,,05/05 AN
,,,,,,,Pankaj Kumar Sharma,,,,,
,,,,,,,Rajdeep Chow dhury,,,,,
,,,,,,2.0,Pankaj Kumar Sharma,5105.0,M W F,9,,
,,,,,,,Rajdeep Chow dhury,,,,,
,,,,,,,Shilpi Garg,,,,,
,,Tutorial,,,,1.0,Vishalakshi (RS),1202.0,F,7,,
,,,,,,2.0,Syamantak Majumder,1201.0,F,7,,
,,,,,,3.0,Shilpi Garg,6158.0,F,7,,
,,,,,,4.0,Rajdeep Chow dhury,6104.0,F,7,,
,,,,,,5.0,Uma S Dubey,1203.0,F,7,,
,,,,,,6.0,Meghana Tare,6109.0,F,7,,
,,,,,,7.0,Syamantak Majumder,6154.0,S,4,,
,,,,,,8.0,Uma S Dubey,1226.0,S,4,,
,,,,,,9.0,Sudeshna M Choudhury,6107.0,S,4,,
,,,,,,10.0,Prabhat Nath Jha,1231.0,S,4,,
,,,,,,11.0,Vishalakshi (RS),1232.0,S,4,,
,,,,,,12.0,Pankaj Kumar Sharma,1204.0,S,4,,
1423.0,BIO F215,BIOPHYSICS,3,-,3.0,1.0,SHIBASISH CHOWDHURY,2203.0,M W F,3,,06/05 FN
,,,,,,,Navin Singh,,,,,
,,Tutorial,,,,,Shibasish Chow dhury,2203.0,W,1,,
,,,,,,,Navin Singh,,,,,
1779.0,BIO F231,BIOLOGY PROJECT LAB,-,-,3.0,1.0,SHILPIGARG,2203.0,S,3,,14/05 FN
,,Practical,,,,,Shilpi Garg,3215.0,T Th,1 2,,
,,,,,,,Anirudh Sahu (RS),,,,,
,,,,,,,Palak Sangal (RS),,,,,
1424.0,BIO F241,ECOLOGY & ENVIRON SCI,3,-,3.0,1.0,BHAGAVATULA VANI,2203.0,M W F,4,,02/05 AN
,,Tutorial,,,,,Bhagavatula Vani,2203.0,M,1,,
1430.0,BIO F242,INTRO TO BIOINFORMATICS,3,-,3.0,1.0,SHIBASISH CHOWDHURY,2203.0,T Th S,5,,09/05 FN
,,Tutorial,,,,,Ashish Katyal,2203.0,Th,4,,
1425.0,BIO F243,GENETICS,3,-,3.0,1.0,MANOJ KANNAN,2206.0,T Th S,5,,09/05 FN
,,,,,,,SK Verma,,,,,
,,Tutorial,,,,,SK Verma,2206.0,F,1,,
,,,,,,,Manoj Kannan,,,,,
1426.0,BIO F244,INSTRU METHODS OF ANAL,1,3,4.0,1.0,PANKAJ KUMAR SHARMA,2203.0,S,2,,08/05 FN
,,,,,,,P R Deepa,,,,,
,,Practical,,,,1.0,Pankaj Kumar Sharma,3155.0,T Th,1 2 3,,
,,,,,,,Heena Saini (RS),,,,,
,,,,,,,Monika Paul (RS),,,,,
,,,,,,,P R Deepa,,,,,
,,,,,,,Sumit Mandal (RS),,,,,
,,,,,,2.0,P R Deepa,3155.0,T Th,7 8 9,,
,,,,,,,Nandita Sharma (RS),,,,,
,,,,,,,Pankaj Kumar Sharma,,,,,
,,,,,,,Raghav Goyal,,,,,
,,,,,,,Vikas Kumar (RS),,,,,
,,,,,,3.0,TBA (Biosc),,,,,
,,,,,,,Vikas Kumar (RS),,,,,
1651.0,BIO F266,STUDY PROJECT,-,-,3.0,1.0,PRABHAT NATH JHA,,,,,
1454.0,BIO F314,CONSERVATION BIOLOGY,2,1,3.0,1.0,SANDHYA MARATHE,1219.0,M W,8,,02/05 FN
,,Practical,,,,,Sandhya Marathe,1219.0,W,1 2,,
2287.0,BIO F315,APPLIED NUTRITION & NUTRACEUTICALS,2,-,2,1,P R DEEPA,1220,M F,2,,01/05 FN
1431.0,BIO F341,DEVELOPMENTAL BIOLOGY,3,-,3.0,1.0,MEGHANA TARE,2206.0,M W F,4,,04/05 FN
,,,,,,,AK Das,,,,,
,,Tutorial,,,,,AK Das,2206.0,S,4,,
,,,,,,,Meghana Tare,,,,,
1432.0,BIO F342,IMMUNOLOGY,3,-,3.0,1.0,UMA S DUBEY,2206.0,M W F,5,,13/05 FN
,,Tutorial,,,,,Uma S Dubey,2206.0,T,4,,
1650.0,BIO F366,LABORATORY PROJECT,-,-,3.0,1.0,PRABHAT NATH JHA,,,,,
1736.0,BIO F367,LABORATORY PROJECT,-,-,3.0,1.0,PRABHAT NATH JHA,,,,,
1685.0,BIO F376,DESIGN PROJECT,-,-,3.0,1.0,PRABHAT NATH JHA,,,,,
1752.0,BIO F377,DESIGN PROJECT,-,-,3.0,1.0,PRABHAT NATH JHA,,,,,
1618.0,BIO F411,LABORATORY,-,3,3.0,1.0,MEGHANA TARE,3215.0,T Th,7 8 9,,
,,,,,,,Jitendra Panw ar,,,,,
,,,,,,,Shahid Khan (RS),,,,,
,,,,,,,Soniya (RS),,,,,
1434.0,BIO F418,GENETIC ENGINEERING TECH,1,3,4.0,1.0,PRABHAT NATH JHA,2206.0,S,3,,14/05 FN
,,Practical,,,,1.0,Prabhat Nath Jha,3173.0,T Th,1 2 3,,
,,,,,,,Nidhi Bub (RS),,,,,
,,,,,,2.0,Sandhya Marathe,3173.0,T Th,7 8 9,,
,,,,,,,Simran Kushw aha(RS),,,,,
1710.0,BIO F491,SPECIAL PROJECT,-,-,3.0,1.0,PRABHAT NATH JHA,,,,,
388.0,BIO G513,MICROBIAL FERMENT TECHNO,3,2,5.0,1.0,SURESH GUPTA,6160.0,M W F,3,,06/05 AN
,,,,,,,SK Verma,,,,,
111.0,BIO G515,STEM CELL & REGENER BIO,3,1,4.0,1.0,RAJDEEPCHOWDHURY,2215.0,T Th S,3,,14/05 AN
2124.0,BIO G545,MOL PARASIT & VECTOR BIO,-,-,5.0,1.0,VISHAL SAXENA,2215.0,M W F,2,,01/05 AN
2168.0,BIO G561,ADV RECOMBINANT DNA TECH,3,2,5.0,1.0,AK DAS,6160.0,T Th S,5,,09/05 AN
203.0,BIO G642,EXPERIMENTAL TECHNIQUES,-,-,5.0,1.0,SYAMANTAK MAJUMDER,1219.0,W,4,,04/05 AN
,,Practical,,,,,Syamantak Majumder,3173.0,M W,7 8 9 10,,
,,,,,,,Astha Mittal (RS),,,,,
,,,,,,,Saumya Arora (RS),,,,,
956.0,BIO G643,PLANT BIOTECHNOLOGY,3,2,5.0,1.0,JITENDRAPANWAR,6104.0,T Th S,4,,11/05 AN
,,,,,,,Mukul Joshi,,,,,
,,Practical,,,,,Mukul Joshi,3176.0,F,4 5,,
,,,,,,,Sw arnima,,,,,
1374.0,BIOT F416,INTRO TO PHARMA BIOTECH,3,-,3.0,1.0,VISHAL SAXENA,2203.0,M W F,9,,12/05 FN
,,,,,,,P R Deepa,,,,,
596.0,BITS C791T,TEACHING PRACTICE I,-,-,1.0,1.0,JITENDRAPANWAR,,,,,
520.0,BITS C797T,PHD SEMINAR,-,-,2.0,1.0,JITENDRAPANWAR,,,,,
857.0,BITS E793T,PRACTICE LECT SERIES I,-,-,1.0,1.0,JITENDRAPANWAR,,,,,
1003.0,BITS F110,ENGINEERING GRAPHICS,1,2,2.0,1.0,GAURAV WATTS,5105.0,T,7,,13/05 AN
,,,,,,,Shuvendu N Patel,,,,,
,,Practical,,,,1.0,Danish Fyaz (RS),6118.0,M W,1 2,,
,,,,,,,Anuj Dixit (RS),,,,,
,,,,,,2.0,Shailendra Singh (RS),6117.0,M W,1 2,,
,,,,,,,Gaurav Tyagi,,,,,
,,,,,,3.0,V Sudhir (RS),6117.0,M W,6 7,,
,,,,,,,Pingale Ajay Dadabhau (RS),,,,,
,,,,,,4.0,Jaya K Bhaskar (RS),6118.0,M W,6 7,,
,,,,,,,Shital Patil (RS),,,,,
,,,,,,5.0,Kamlesh Kumar,6114.0,T Th,1 2,,
,,,,,,,Anuj Dixit (RS),,,,,
,,,,,,6.0,Harish Kumar Mulchandani (RS,6118.0,T Th,1 2,,
,,,,,,,Kiran Raj (RS),,,,,
,,,,,,7.0,Aniruddha Tangirala,6118.0,T Th,3 4,,
,,,,,,,Shital Patil (RS),,,,,
,,,,,,8.0,Vishal Singh (RS),6114.0,F S,1 2,,
,,,,,,,Pingale Ajay Dadabhau (RS),,,,,
,,,,,,9.0,Vasanth Keshav (RS),6118.0,F S,1 2,,
,,,,,,,Kiran Raj (RS),,,,,
1005.0,BITS F112,TECH REPORT WRITING,2,-,2.0,1.0,Sangeeta Sharma,6103.0,M W,4,,15/05 AN
,,,,,,2.0,Muhammed Puthusseri,6105.0,M W,4,,
,,,,,,3.0,Virendra Singh Nirban,6105.0,M W,8,,
,,,,,,4.0,Vijaya Kr. Chintapalli,6156.0,M W,8,,
,,,,,,5.0,GAJENDRA S CHAUHAN,6101.0,T Th,5,,
,,,,,,6.0,Sushila Shekhaw at,6152.0,T Th,5,,
1860.0,BITS F114,GENERAL MATHEMATICS II,3,-,3.0,1.0,RAJIV KUMAR,6157.0,T Th S,5,,09/05 AN
,,Tutorial,,,,,Rajiv Kumar,2203.0,F,7,,
1892.0,BITS F214,SCIENCE TECH & MODERNITY,3,-,3.0,1.0,SUNITA RAINA,6156.0,M W F,7,,05/05 FN
1632.0,BITS F225,ENVIRONMENTAL STUDIES,3,-,3.0,1.0,SMITA RAGHUVANSHI,5102.0,M W F,10,,09/05 AN
,,,,,,,Abhishek S Dhoble,,,,,
,,,,,,,Bhagavatula Vani,,,,,
,,,,,,,G Muthukumar,,,,,
,,,,,,,Madhurima Das,,,,,
1332.0,BITS F311,IMAGE PROCESSING,3,-,3.0,1.0,RAJ KUMAR GUPTA,6164.0,T Th S,3,,14/05 FN
1334.0,BITS F312,NEURAL NET & FUZZY LOGIC,3,-,3.0,1.0,BIJOY K MUKHARJEE,6151.0,M W F,8,,02/05 FN
,,,,,,,Surekha Bhanot,,,,,
1511.0,BITS F316,NONLINEAR DYNA & CHAOS,3,-,3.0,1.0,TAPOMOY G SARKAR,6153.0,M W F,7,,05/05 FN
1512.0,BITS F385,INTRO TO GENDER STUDIES,3,-,3.0,1.0,MADHURIMADAS,6101.0,M W F,4,,04/05 FN
1337.0,BITS F386,QUANTUM INFO & COMPUTING,3,-,3.0,1.0,RR MISHRA,2206.0,M W F,8,,02/05 FN
1592.0,BITS F412,PRACTICE SCHOOL II,-,-,20.0,1.0,S GURUNARAYANAN,,,,,
1615.0,BITS F413,PRACTICE SCHOOL II,-,-,20.0,1.0,S GURUNARAYANAN,,,,,
1593.0,BITS F421T,THESIS,-,-,16.0,1.0,SURESH GUPTA,,,,,
1616.0,BITS F422T,THESIS,-,-,16.0,1.0,SURESH GUPTA,,,,,
1617.0,BITS F423T,THESIS,-,-,9.0,1.0,SURESH GUPTA,,,,,
1619.0,BITS F424T,THESIS,-,-,9.0,1.0,SURESH GUPTA,,,,,
1811.0,BITS F441,ROBOTICS,3,-,3.0,1.0,BIJOY KUMAR RAUT,2206.0,M W F,3,,06/05 FN
1817.0,BITS F447,MULTIMEDIA COMPUTING,3,-,3.0,1.0,MUKESHKR ROHIL,6160.0,M W F,7,,05/05 FN
1820.0,BITS F449,FINANCIAL ENGINEERING,3,-,3.0,1.0,ARUN KUMAR VAISH,6164.0,T Th S,2,,08/05 FN
1338.0,BITS F463,CRYPTOGRAPHY,3,-,3.0,1.0,ABHISHEK MISHRA,6162.0,M W F,7,,05/05 FN
1339.0,BITS F464,MACHINE LEARNING,3,-,3.0,1.0,NAVNEET GOYAL,6151.0,M W F,9,,12/05 FN
,,Practical,,,,1.0,Stuti Chug (RS),6116.0,M,1,,
,,,,,,2.0,Stuti Chug (RS),6116.0,F,10,,
1379.0,BITS F467,BIOETHICS & BIOSAFETY,3,-,3.0,1.0,RICHA SRIVASTAVA,1231.0,M W F,2,,01/05 FN
1641.0,BITS F482,CREAT & LEAD ENTREP ORGN,3,-,3.0,1.0,JYOTI,6154.0,M W F,7,,05/05 FN
1852.0,BITS F490,PROJECT MANAGEMENT,-,-,4.0,1.0,RAJESH MATAI,6154.0,M W F,3,,04/05 AN
499.0,BITS G511,ADVANCED PROJECTS,-,-,5.0,1.0,JITENDRAPANWAR,,,,,
547.0,BITS G513,STUDY IN ADVANCED TOPICS,-,-,5.0,1.0,JITENDRAPANWAR,,,,,
754.0,BITS G529,RESEARCH PROJECT I,-,-,6.0,1.0,JITENDRAPANWAR,,,,,
2003.0,BITS G540,RESEARCH PRACTICE,-,-,4.0,1.0,JITENDRAPANWAR,,,,,
559.0,BITS G560,PRACTICE SCHOOL,-,-,20.0,1.0,S GURUNARAYANAN,,,,,
575.0,BITS G561T,DISSERTATION,-,-,16.0,1.0,JITENDRAPANWAR,,,,,
2165.0,BITS G563T,DISSERTATION,-,-,16.0,1.0,JITENDRAPANWAR,,,,,
756.0,BITS G629T,DISSERTATION,-,-,25.0,1.0,JITENDRAPANWAR,,,,,
809.0,BITS G639,PRACTICE SCHOOL,-,-,20.0,1.0,S GURUNARAYANAN,,,,,
757.0,BITS G649,READING COURSE,-,-,5.0,1.0,JITENDRAPANWAR,,,,,
2167.0,BITS G661,RESEARCH METHODOLOGY I,-,-,5.0,1.0,JITENDRAPANWAR,1220.0,T Th S,4,,
1191.0,CE F241,ANALYSIS OF STRUCTURES,3,-,3.0,1.0,MANOJ KUMAR,1233.0,T Th S,3,,14/05 FN
,,,,,,,Anshuman,,,,,
,,Tutorial,,,,1.0,Manoj Kumar,1233.0,M,1,,
,,,,,,2.0,Anshuman,1234.0,M,1,,
,,,,,,,Rishab Bajpai (RS),,,,,
1192.0,CE F242,CONSTRUCTION PLAN & TECH,3,-,3.0,1.0,G MUTHUKUMAR,1233.0,T Th S,2,,08/05 FN
,,,,,,,Mukund Lahoti,,,,,
,,Tutorial,,,,1.0,G Muthukumar,1233.0,W,1,,
,,,,,,2.0,Mukund Lahoti,1234.0,W,1,,
1193.0,CE F243,SOIL MECHANICS,3,1,4.0,1.0,KAMLESH KUMAR,1233.0,M W F,3,,06/05 FN
,,Practical,,,,1.0,Kamlesh Kumar,1131.0,T,7 8,,
,,,,,,,Manigandan (RS),,,,,
,,,,,,2.0,Rajesh Kumar (CE),1131.0,T,9 10,,
,,,,,,,Somya Agarwal (RS),,,,,
,,,,,,3.0,Anuj Adhikary,1131.0,Th,7 8,,
,,,,,,,R Raghavendra Kumar (RS),,,,,
,,Tutorial,,,,1.0,Shibani K Jha,1233.0,T,1,,
,,,,,,2.0,Nishant Roy,1234.0,T,1,,
1194.0,CE F244,HIGHWAY ENGINEERING,3,1,4.0,1.0,PRIYANSH SINGH,1233.0,M W F,2,,01/05 FN
,,,,,,,Gourab Sil,,,,,
,,Practical,,,,1.0,Gourab Sil,1129.0,T,7 8,,
,,,,,,,Durgesh Vikram,,,,,
,,,,,,2.0,Anuj Adhikary,1129.0,T,9 10,,
,,,,,,,Farhran Mohammad Khan(RS),,,,,
,,,,,,3.0,Durgesh Vikram,1129.0,Th,7 8,,
,,,,,,,Rishab Bajpai (RS),,,,,
,,Tutorial,,,,1.0,Priyansh Singh,1231.0,Th,1,,
,,,,,,2.0,Gourab Sil,1232.0,Th,1,,
1652.0,CE F266,STUDY PROJECT,-,-,3.0,1.0,ANSHUMAN,,,,,
2282.0,CE F321,ENGINEERING HYDROLOGY,3,-,3.0,1.0,SHIBANI K JHA,1233.0,T Th S,5,,09/05 FN
,,Tutorial,,,,1.0,Shibani K Jha,1233.0,F,1,,
,,,,,,2.0,Soumya Kar (RS),1234.0,F,1,,
1217.0,CE F324,NUMERICAL ANALYSIS,3,-,3.0,1.0,SHIBANI K JHA,1231.0,M W F,9,,12/05 FN
1198.0,CE F341,HYDRO & WATER RES ENGG,3,-,3.0,1.0,SHIBANI K JHA,1233.0,T Th S,5,,09/05 FN
,,Tutorial,,,,,Shibani K Jha,1233.0,F,1,,
1199.0,CE F342,WATER & WASTEWATER TREAT,3,1,4.0,1.0,ANUPAM SINGHAL,1233.0,M W F,4,,04/05 FN
,,Practical,,,,1.0,Anupam Singhal,1111.0,T,7 8,,
,,,,,,,R Raghavendra Kumar (RS),,,,,
,,,,,,,Srishti Khare,,,,,
,,,,,,2.0,Soumya Kar (RS),1111.0,Th,7 8,,
,,,,,,,Anupam Singhal,,,,,
,,,,,,,Farhran Mohammad Khan(RS),,,,,
,,Tutorial,,,,1.0,Anupam Singhal,1233.0,S,1,,
,,,,,,2.0,Srishti Khare,1234.0,S,1,,
1200.0,CE F343,DES OF STEEL STRUCTURES,3,-,3.0,1.0,SHAMSHER B SINGH,1233.0,T Th S,4,,11/05 FN
,,,,,,,Dipendu Bhunia,,,,,
,,Tutorial,,,,1.0,Dipendu Bhunia,1202.0,W,1,,
,,,,,,2.0,Manigandan (RS),1203.0,W,1,,
1667.0,CE F366,LABORATORY PROJECT,-,-,3.0,1.0,ANSHUMAN,,,,,
1737.0,CE F367,LABORATORY PROJECT,-,-,3.0,1.0,ANSHUMAN,,,,,
1686.0,CE F376,DESIGN PROJECT,-,-,3.0,1.0,ANSHUMAN,,,,,
1753.0,CE F377,DESIGN PROJECT,-,-,3.0,1.0,ANSHUMAN,,,,,
1230.0,CE F416,COMP APPL IN CIVIL ENGG,3,1,4.0,1.0,NISHANT ROY,1225.0,M W F,2,,01/05 FN
1232.0,CE F419,GEOTECH EQ ENG & MC FOUN,3,-,3.0,1.0,RAVI KANT MITTAL,1220.0,M W F,9,,12/05 FN
1233.0,CE F420,INTRO TO BRIDGE ENGG,3,-,3.0,1.0,MANOJ KUMAR,1226.0,M W F,3,,06/05 FN
1219.0,CE F432,STRUCTURAL DYNAMICS,3,-,3.0,1.0,DIPENDUBHUNIA,1231.0,M W F,8,,02/05 FN
1234.0,CE F435,INTRODUCTION TO FEM,3,-,3.0,1.0,RAJESH KUMAR (CE),6108.0,M W F,7,,05/05 FN
1711.0,CE F491,SPECIAL PROJECT,-,-,3.0,1.0,ANSHUMAN,,,,,
804.0,CE G516,MULTI CRITER ANAL IN ENGG,3,1,4.0,1.0,AJIT PRATAP SINGH,6108.0,M W F,3,,06/05 AN
256.0,CE G518,PAVEMENT ANALYSIS & DES,3,1,4.0,1.0,PRIYANSH SINGH,6160.0,T Th S,4,,11/05 AN
347.0,CE G520,INFRA STRUC PLAN & MANAG,3,1,4.0,1.0,R GUPTA,1231.0,T Th S,5,,09/05 AN
309.0,CE G524,URBAN MASS TRAN PLAN OP,3,1,4.0,1.0,DURGESHVIKRAM,6154.0,T Th S,3,,14/05 AN
103.0,CE G543,TRAFFIC FLOW THEORY,3,1,4.0,1.0,GOURAB SIL,1225.0,M W F,7,,05/05 AN
532.0,CE G553,THEORY OF PLATES & SHELL,3,1,4.0,1.0,SHUVENDUN PATEL,1220.0,M W F,8,,02/05 AN
2199.0,CE G562,ADVANCED CONCRETE TECHNOLOGY,3,-,4,1,MUKUND LAHOTI,1225,M W F,5,,13/05 AN
345.0,CE G612,ADVANCED STEEL STRUCTURE,3,1,4.0,1.0,SHAMSHER B SINGH,1220.0,M W F,3,,06/05 AN
108.0,CE G615,EARTHQUAKE ENGINEERING,3,1,4.0,1.0,RAVI KANT MITTAL,1231.0,T Th S,2,,08/05 AN
621.0,CE G618,DESIGN OF MULTI- STOR STR,3,1,4.0,1.0,ANSHUMAN,6103.0,M W F,9,,12/05 AN
1180.0,CHE F241,HEAT TRANSFER,3,-,3.0,1.0,BANASRI ROY,1223.0,T Th S,3,,14/05 FN
,,Tutorial,,,,1.0,Banasri Roy,1223.0,M,1,,
,,,,,,2.0,Arghya Banerjee,1226.0,M,1,,
1181.0,CHE F242,NUM METHOD FOR CHEM ENGG,3,-,3.0,1.0,PRATIK N SHETH,1223.0,M W F,2,,01/05 FN
,,Tutorial,,,,1.0,Pratik N Sheth,1233.0,Th,1,,
,,,,,,2.0,Somak Chatterjee,1234.0,Th,1,,
1182.0,CHE F243,MATERIAL SCIENCE & ENGG,3,-,3.0,1.0,KRISHNA CHAITANYA ETIKA,1223.0,M W F,3,,06/05 FN
,,Tutorial,,,,1.0,Krishna Chaitanya Etika,1223.0,T,1,,
,,,,,,2.0,Priya C Sande,1226.0,T,1,,
1183.0,CHE F244,SEPARATION PROCESSES I,3,-,3.0,1.0,SURESH GUPTA,1223.0,T Th S,2,,08/05 FN
,,Tutorial,,,,1.0,Abhishek S Dhoble,1223.0,W,1,,
,,,,,,2.0,Shelaka Gupta,1226.0,W,1,,
1653.0,CHE F266,STUDY PROJECT,-,-,3.0,1.0,HK MOHANTA,,,,,
1188.0,CHE F341,CHEMICAL ENGG LAB II,-,3,3.0,1.0,SRINIVAS APPARI,1120.0,T Th,6 7,,
,,,,,,,Abhishek Anand (RS),,,,,
,,,,,,,Ajay Kumar Pani,,,,,
,,,,,,,R Arun Karthik (RS),,,,,
,,,,,,,Rama Krishna Chava (RS),,,,,
,,,,,,,Seriyala Anil Kumar (RS),,,,,
,,,,,,,Shailee Gaur (RS),,,,,
,,,,,,,Venkata Vijayan S (RS),,,,,
,,,,,,2.0,Bhanu Vardhan Reddy,1120.0,T Th,9 10,,
,,,,,,,Ajita Neogi (RS),,,,,
,,,,,,,Anil Kumar K (RS),,,,,
,,,,,,,Arghya Banerjee,,,,,
,,,,,,,Bheema Rajesh Kumar (RS),,,,,
,,,,,,,Linisha Bisw al (RS),,,,,
,,,,,,,Sampada Mahajan (RS),,,,,
,,,,,,,T Priya Shreedatta (RS),,,,,
1189.0,CHE F342,PROCESS DYN & CONTROL,3,-,3.0,1.0,HK MOHANTA,1223.0,T Th S,4,,11/05 FN
,,Tutorial,,,,1.0,Amit Jain,6109.0,W,1,,
,,,,,,2.0,Arghya Banerjee,6101.0,W,1,,
1190.0,CHE F343,PROCESS DES PRINCIPLE II,3,-,3.0,1.0,P CHATTOPADHYAY,1223.0,M W F,4,,04/05 FN
,,Tutorial,,,,1.0,P Chattopadhyay,1223.0,F,1,,
,,,,,,2.0,Krishna Chaitanya Etika,1205.0,F,1,,
1668.0,CHE F366,LABORATORY PROJECT,-,-,3.0,1.0,HK MOHANTA,,,,,
1738.0,CHE F367,LABORATORY PROJECT,-,-,3.0,1.0,HK MOHANTA,,,,,
1687.0,CHE F376,DESIGN PROJECT,-,-,3.0,1.0,HK MOHANTA,,,,,
1754.0,CHE F377,DESIGN PROJECT,-,-,3.0,1.0,HK MOHANTA,,,,,
1207.0,CHE F412,PROCESS EQUIPMENT DESIGN,3,-,3.0,1.0,SOMAK CHATTERJEE,2221.0,T Th S,3,,14/05 FN
1204.0,CHE F413,PROCESS PLANT SAFETY,3,-,3.0,1.0,AMIT JAIN,6157.0,T Th S,2,,08/05 FN
1201.0,CHE F414,TRANSPORT PHENOMENA,3,-,3.0,1.0,BHANU VARDHAN REDDY,1219.0,T Th S,2,,08/05 FN
1213.0,CHE F418,MODEL & SIMU IN CHE ENGG,3,-,3.0,1.0,SHELAKA GUPTA,1234.0,M W F,9,,12/05 FN
1203.0,CHE F419,CHEMICAL PROCESS TECH,3,-,3.0,1.0,SMITA RAGHUVANSHI,6160.0,M W F,8,,02/05 FN
,,,,,,,Rachel Jovita Barla (RS),,,,,
1205.0,CHE F421,BIOCHEMICAL ENGINEERING,3,-,3.0,1.0,ABHISHEK S DHOBLE,6161.0,M W F,7,,05/05 FN
1208.0,CHE F471,ADVANCE PROCESS CONTROL,3,-,3.0,1.0,HK MOHANTA,1231.0,M W F,3,,06/05 FN
1209.0,CHE F491,SPECIAL PROJECT,-,-,3.0,1.0,HK MOHANTA,,,,,
279.0,CHE G513,ENVIR MANAGEMENT SYSTEMS,-,-,5.0,1.0,SMITA RAGHUVANSHI,1225.0,T Th S,5,,09/05 AN
2146.0,CHE G552,ADV TRANSPORT PHENOMENA,-,-,5.0,1.0,ARVIND KUMAR SHARMA,6108.0,M W F,2,,01/05 AN
2148.0,CHE G554,COMPUT FLUID DYNAMICS,-,-,4.0,1.0,PRIYA C SANDE,1231.0,M W F,5,,13/05 AN
729.0,CHE G641,REACTION ENGINEERING,3,2,5.0,1.0,SRINIVAS APPARI,1234.0,T Th S,3,,14/05 AN
1007.0,CHEM F111,GENERAL CHEMISTRY,3,-,3.0,1.0,RAMKINKAR ROY,5105.0,M W F,3,,15/05 AN
,,,,,,,Indresh Kumar,,,,,
,,,,,,2.0,Inamur R Laskar,5102.0,M W F,9,,
,,,,,,,Ramkinkar Roy,,,,,
,,Tutorial,,,,1.0,Ajay Kumar Sah,1226.0,T,8,,
,,,,,,2.0,Bibhas Ranjan Sarkar,1205.0,T,8,,
,,,,,,3.0,Inamur R Laskar,1223.0,T,8,,
,,,,,,4.0,Paritosh Shukla,1231.0,T,8,,
,,,,,,5.0,Prashant U Manohar,1204.0,T,8,,
,,,,,,6.0,RAMKINKAR ROY,1202.0,T,8,,
,,,,,,7.0,S C Sivasubramanian,1203.0,T,8,,
,,,,,,8.0,Indresh Kumar,1202.0,Th,8,,
,,,,,,9.0,Ajay Kumar Sah,1205.0,Th,8,,
,,,,,,10.0,Madhushree Sarkar,1231.0,Th,8,,
,,,,,,11.0,S C Sivasubramanian,1204.0,Th,8,,
,,,,,,12.0,Paritosh Shukla,1201.0,Th,8,,
1554.0,CHEM F241,INORGANIC CHEMISTRY II,3,-,3.0,1.0,BHARTI KHUNGAR,6102.0,M W F,2,,01/05 FN
,,Tutorial,,,,,Bharti Khungar,6105.0,S,3,,
1555.0,CHEM F242,CHEMICAL EXPER I,-,3,3.0,1.0,AJAY KUMAR SAH,3147.0,T Th,1 2 3,,
,,,,,,,Indresh Kumar,,,,,
,,,,,,,Paritosh Shukla,,,,,
,,,,,,,Pidiyara Karishma (RS),,,,,
,,,,,,,Pragya (RS),,,,,
,,,,,,,Prakriti Saraf (RS),,,,,
,,,,,,,Rohitash Kumar (RS),,,,,
,,,,,,,Taur Prakash Pandurang (RS),,,,,
,,,,,,2.0,Anil Kumar,3147.0,T F,7 8 9,,
,,,,,,,Bharti Khungar,,,,,
,,,,,,,Dalip Kumar,,,,,
,,,,,,,Dhananjay Shrinivas Nipate,,,,,
,,,,,,,Gurpreet Gaur (RS),,,,,
,,,,,,,Monika Malik (RS),,,,,
,,,,,,,Narsimha (RS),,,,,
,,,,,,,Neha Meena (RS),,,,,
,,,,,,,Rajeev Sakhuja,,,,,
1556.0,CHEM F243,ORGANIC CHEMISTRY II,3,-,3.0,1.0,ANIL KUMAR,6101.0,M W F,3,,06/05 FN
,,Tutorial,,,,,Anil Kumar,6101.0,M,1,,
1557.0,CHEM F244,PHYSICAL CHEMISTRY III,3,-,3.0,1.0,PRASHANT U MANOHAR,6107.0,T Th S,5,,14/05 FN
,,Tutorial,,,,,Prashant U Manohar,6107.0,S,2,,
1654.0,CHEM F266,STUDY PROJECT,-,-,3.0,1.0,SAUMI RAY,,,,,
2283.0,CHEM F320,INTRODUCTORY COMPUTATIONAL CHEM LABO,-,4,2,1,PRASHANT U MANOHAR,6116,M W,2 3,,
1586.0,CHEM F336,NANOCHEMISTRY,3,1,4.0,1.0,SUROJITPANDE,2216.0,M W F,7,,05/05 FN
1561.0,CHEM F341,CHEMICAL EXPER II,-,4,4.0,1.0,SHAMIK CHAKRABORTY,3103.0,M F,8 9 10,,
,,,,,,,Aishwarya Ramesh (RS),,,,,
,,,,,,,Bibhas Ranjan Sarkar,,,,,
,,,,,,,Chavi Mahala (RS),,,,,
,,,,,,,Dhitabrata Pal (RS),,,,,
,,,,,,,Divya Rathore,,,,,
,,,,,,,Jagrity Choudhary (RS),,,,,
,,,,,,,Madhushree Sarkar,,,,,
,,,,,,2.0,Inamur R Laskar,3147.0,Th S,7 8 9,,
,,,,,,,Mamta Devi Sharma (RS),,,,,
,,,,,,,Mrinmoyee Basu,,,,,
,,,,,,,Raichure Pramod Chandrakant,,,,,
,,,,,,,Ramkinkar Roy,,,,,
,,,,,,,Soumana Joarder (RS),,,,,
,,,,,,,Sumit Kumar Agrawal (RS),,,,,
,,,,,,,Surojit Pande,,,,,
1562.0,CHEM F342,ORGANIC CHEMISTRY IV,3,-,3.0,1.0,RAJEEV SAKHUJA,6108.0,T Th S,4,,11/05 FN
,,Tutorial,,,,,Rajeev Sakhuja,6108.0,M,4,,
1563.0,CHEM F343,INORGANIC CHEMISTRY III,3,-,3.0,1.0,SAUMI RAY,6103.0,T Th S,5,,09/05 FN
,,Tutorial,,,,,Saumi Ray,6101.0,F,1,,
1669.0,CHEM F366,LABORATORY PROJECT,-,-,3.0,1.0,SAUMI RAY,,,,,
1739.0,CHEM F367,LABORATORY PROJECT,-,-,3.0,1.0,SAUMI RAY,,,,,
1688.0,CHEM F376,DESIGN PROJECT,-,-,3.0,1.0,SAUMI RAY,,,,,
1581.0,CHEM F415,FRONTIERS IN ORGANIC SYN,3,-,3.0,1.0,DALIP KUMAR,6103.0,T Th S,3,,14/05 FN
2284.0,CHEM F430,ATMOSPHERIC CHEMISTRY,3,-,3.0,1.0,SHAMIK CHAKRABORTY,6103.0,M W F,5,,13/05 FN
2285.0,CHEM F431,SUSTAINABLE CHEMISTRY USING RENEWABLES,3,-,3,1,BIBHAS RANJAN SARKAR,6154,T Th S,2,,08/05 FN
1713.0,CHEM F491,SPECIAL PROJECT,-,-,3.0,1.0,SAUMI RAY,,,,,
7.0,CHEM G552,ADV INORGANIC CHEMISTRY,-,-,5.0,1.0,MADHUSHREESARKAR,2222.0,M W F,3,,06/05 AN
242.0,CHEM G554,PHY METHODS IN CHEMISTRY,-,-,5.0,1.0,S C SIVASUBRAMANIAN,6158.0,T Th S,3,,14/05 AN
1008.0,CS F111,COMPUTER PROGRAMMING,3,1,4.0,1.0,Rajesh Kumar (CSIS),5106.0,M W F,3,,11/05 AN
,,,,,,,Lavika Goel,,,,,
,,,,,,2.0,PRATIK NARANG,5106.0,M W F,9,,
,,,,,,,Sadhana Jha,,,,,
,,Practical,,,,1.0,Sadhana Jha,6114.0,M,1 2,,
,,,,,,,Pratik Narang,,,,,
,,,,,,2.0,Lavika Goel,6016.0,M,6 7,,
,,,,,,,Rajesh Kumar (CSIS),,,,,
,,,,,,3.0,Sakshi,6016.0,T,1 2,,
,,,,,,4.0,Ankit Soni (RS),6114.0,T,3 4,,
,,,,,,5.0,Divya Bhardw aj (RS),6016.0,T,7 8,,
,,,,,,6.0,Sadhana Jha,6114.0,W,1 2,,
,,,,,,,Pratik Narang,,,,,
,,,,,,7.0,Vijay Kumari (RS),6114.0,W,6 7,,
,,,,,,8.0,Ankit Soni (RS),6016.0,Th,1 2,,
,,,,,,9.0,Divya Bhardw aj (RS),6018.0,Th,3 4,,
,,,,,,10.0,Lavika Goel,6114.0,Th,7 8,,
,,,,,,,Rajesh Kumar (CSIS),,,,,
,,,,,,11.0,Vijay Kumari (RS),6116.0,F,1 2,,
,,,,,,12.0,Sakshi,6018.0,S,1 2,,
1094.0,CS F211,DATA STRUCTURES & ALGO,3,1,4.0,1.0,VISHAL GUPTA,5102.0,M W F,2,,01/05 FN
,,,,,,,Vaibhav Soni,,,,,
,,Practical,,,,1.0,Vaibhav Soni,6019.0,T,8 9 10,,
,,,,,,,Vishal Gupta,,,,,
,,,,,,2.0,Sandhya (RS),6013.0,T,8 9 10,,
,,,,,,3.0,Rajesh Kumar (CSIS),6119.0,T,8 9 10,,
,,,,,,4.0,Ankit Agrawal (RS),6114.0,T,8 9 10,,
,,,,,,5.0,Sandhya (RS),6019.0,Th,8 9 10,,
,,,,,,6.0,Ankit Agrawal (RS),6117.0,Th,8 9 10,,
1095.0,CS F212,DATABASE SYSTEMS,3,1,4.0,1.0,YASHVARDHAN SHARMA,5106.0,T Th S,2,,08/05 FN
,,,,,,,Sadhana Jha,,,,,
,,Practical,,,,1.0,Sadhana Jha,6018.0,T,7 8,,
,,,,,,,Yashvardhan Sharma,,,,,
,,,,,,2.0,Abhishek Vyas,6018.0,T,9 10,,
,,,,,,3.0,Sadhana Jha,6018.0,Th,7 8,,
,,,,,,,Yashvardhan Sharma,,,,,
,,,,,,4.0,Abhishek Vyas,6018.0,Th,9 10,,
1092.0,CS F213,OBJECT ORIENTED PROG,3,1,4.0,1.0,AMIT DUA,6109.0,M W F,3,,06/05 FN
,,,,,,,Jennifer Ranjani J.,,,,,
,,Practical,,,,1.0,Jennifer Ranjani J.,6017.0,M,9 10,,
,,,,,,,Amit Dua,,,,,
,,,,,,2.0,Jennifer Ranjani J.,6116.0,T,9 10,,
,,,,,,,Amit Dua,,,,,
,,,,,,3.0,Shail Saharan (RS),6013.0,Th,9 10,,
,,,,,,4.0,Shail Saharan (RS),6013.0,W,9 10,,
1313.0,CS F241,MICROPROC & INTERFACING,3,1,4.0,1.0,NITINCHATURVEDI,5102.0,T Th S,3,,14/05 FN
,,,,,,2.0,JP Misra,5101.0,T Th S,3,,
,,Practical,,,,1.0,Punit Khari (RS),6117.0,T,7 8,,
,,,,,,,Radha Bhardw aj,,,,,
,,,,,,2.0,Rahul Sharma (RS),6117.0,T,9 10,,
,,,,,,,Suraj Baloda (RS),,,,,
,,,,,,3.0,Krishna Veer Singh (RS),6116.0,T,7 8,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,4.0,Tejasvi Alladi (RS),6116.0,Th,9 10,,
,,,,,,,Poonam Poonia (RS),,,,,
,,,,,,5.0,Ziyaur Rahman (RS),6114.0,Th,9 10,,
,,,,,,,Anukaran Khanna (RS),,,,,
,,,,,,6.0,TBA (Eee/Ins),6018.0,M,4 5,,
,,,,,,,Poonam Poonia (RS),,,,,
,,,,,,7.0,Poonam Poonia (RS),6018.0,W,4 5,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,8.0,Anukaran Khanna (RS),6018.0,F,4 5,,
,,,,,,,Ziyaur Rahman (RS),,,,,
,,,,,,9.0,Poonam Poonia (RS),6017.0,Th,7 8,,
,,,,,,,Tejasvi Alladi (RS),,,,,
,,,,,,10.0,TBA (Eee/Ins),6117.0,F,8 9,,
,,,,,,,Krishna Veer Singh (RS),,,,,
,,,,,,11.0,Suraj Baloda (RS),6017.0,F,8 9,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,12.0,Radha Bhardw aj,6116.0,F,8 9,,
,,,,,,,Punit Khari (RS),,,,,
,,Tutorial,,,,1.0,Devesh Samaiya,2207.0,M,1,,
,,,,,,2.0,Nitin Chaturvedi,1201.0,M,1,,
,,,,,,3.0,Vinay Chamola,2204.0,M,1,,
,,,,,,4.0,G S Sesha Chalapathi,2206.0,M,1,,
,,,,,,5.0,Aditya Raw  Gautam,2222.0,M,1,,
,,,,,,6.0,Satyandra Kumar Mourya,2207.0,T,1,,
,,,,,,7.0,G S Sesha Chalapathi,2235.0,T,1,,
,,,,,,8.0,Vinay Chamola,2214.0,T,1,,
1655.0,CS F266,STUDY PROJECT,-,-,3.0,1.0,POONAM GOYAL,,,,,
1320.0,CS F303,COMPUTER NETWORKS,3,1,4.0,1.0,ASHUTOSH BHATIA,5101.0,T Th S,5,,09/05 FN
,,,,,,,Vishal Gupta,,,,,
,,Practical,,,,1.0,Pratik Narang,6018.0,T,1 2,,
,,,,,,2.0,Pratik Narang,6017.0,T,7 8,,
,,,,,,3.0,Vishal Gupta,6018.0,Th,1 2,,
,,,,,,,Ashutosh Bhatia,,,,,
,,,,,,4.0,Vishal Gupta,6019.0,S,1 2,,
,,,,,,,Ashutosh Bhatia,,,,,
2266.0,CS F320,FOUNDATIONS OF DATA SCIENCE,3,-,3.0,1.0,NAVNEET GOYAL,6155.0,T Th S,3,,14/05 FN
1317.0,CS F342,COMPUTER ARCHITECTURE,3,1,4.0,1.0,S GURUNARAYANAN,5103.0,M W F,3,,06/05 FN
,,Practical,,,,,Abheek Gupta (RS),6016.0,Th,7 8,,
,,,,,,,Kanika (RS),,,,,
1318.0,CS F363,COMPILER CONSTRUCTION,2,1,3.0,1.0,VANDANA AGARWAL,5101.0,M W F,4,,04/05 FN
,,,,,,,Shashank Gupta,,,,,
1319.0,CS F364,DESIGN & ANAL OF ALGO,3,-,3.0,1.0,ABHISHEK MISHRA,5101.0,T Th S,4,,11/05 FN
,,,,,,,Kamlesh Tiw ari,,,,,
,,Tutorial,,,,1.0,Kamlesh Tiw ari,1205.0,M,5,,
,,,,,,2.0,Ravi Kant (RS),6107.0,M,5,,
,,,,,,3.0,Abhishek Mishra,6107.0,W,5,,
,,,,,,4.0,Ravi Kant (RS),6108.0,W,5,,
1670.0,CS F366,LABORATORY PROJECT,-,-,3.0,1.0,POONAM GOYAL,,,,,
1740.0,CS F367,LABORATORY PROJECT,-,-,3.0,1.0,POONAM GOYAL,,,,,
1315.0,CS F372,OPERATING SYSTEMS,3,-,3.0,1.0,JP MISRA,6163.0,M W F,7,,05/05 FN
,,Tutorial,,,,,Upendra Singh (RS),6163.0,F,10,,
1689.0,CS F376,DESIGN PROJECT,-,-,3.0,1.0,POONAM GOYAL,,,,,
1756.0,CS F377,DESIGN PROJECT,-,-,3.0,1.0,POONAM GOYAL,,,,,
1327.0,CS F401,MULTIMEDIA COMPUTING,3,-,3.0,1.0,MUKESHKR ROHIL,6160.0,M W F,7,,05/05 FN
1322.0,CS F415,DATA MINING,3,-,3.0,1.0,YASHVARDHAN SHARMA,2215.0,M W F,3,,06/05 FN
,,Practical,,,,1.0,Arshveer Kaur (RS),6017.0,T,9 10,,
,,,,,,2.0,Arshveer Kaur (RS),6017.0,Th,9 10,,
1323.0,CS F422,PARALLEL COMPUTING,3,-,3.0,1.0,K HARI BABU,6108.0,M W F,8,,02/05 FN
1325.0,CS F441,SEL TOPICS FROM COMP SC,-,-,3.0,1.0,POONAM GOYAL,6160.0,T Th S,3,,14/05 FN
1326.0,CS F446,DATA STORAGE TECH & NETW,3,-,3.0,1.0,JP MISRA,6161.0,M W F,3,,06/05 FN
1857.0,CS F469,INFORMATION RETRIEVAL,3,-,3.0,1.0,LAVIKA GOEL,6151.0,M W F,2,,01/05 FN
1714.0,CS F491,SPECIAL PROJECT,-,-,3.0,1.0,POONAM GOYAL,,,,,
507.0,CS G513,NETWORK SECURITY,3,1,4.0,1.0,ASHUTOSH BHATIA,6160.0,M W F,5,,13/05 AN
2106.0,CS G520,ADVANCED DATA MINING,3,1,4.0,1.0,POONAM GOYAL,6162.0,M W F,8,,02/05 AN
2052.0,CS G523,SOFT FOR EMBED SYS,3,2,5.0,1.0,MEETHA V SHENOY,6157.0,M W F,7,,05/05 AN
2006.0,CS G524,ADV COMPUTER ARCHITECTUR,3,-,5.0,1.0,VIRENDRA S SHEKHAWAT,6107.0,M W F,4,,04/05 AN
436.0,DE G514,FRACTURE MECHANICS,-,-,5.0,1.0,SHARAD SRIVASTAVA,2204.0,M W F,8,,02/05 AN
144.0,DE G522,DESIGN PROJECTS,-,-,5.0,1.0,SRIKANTA ROUTROY,,,,,
1023.0,ECON F211,PRINCIPLES OF ECONOMICS,3,-,3.0,1.0,RAJAN PANDEY,5105.0,M W F,7,,04/05 AN
,,,,,,,Geetilaxmi Mohapatra,,,,,
,,,,,,,Monika Gupta,,,,,
,,,,,,,Rahul Arora,,,,,
,,,,,,2.0,Rajan Pandey,5102.0,T Th S,4,,
,,,,,,,Geetilaxmi Mohapatra,,,,,
,,,,,,,Monika Gupta,,,,,
,,,,,,,Rahul Arora,,,,,
,,Tutorial,,,,1.0,Aman Takiyar,6101.0,S,1,,
,,,,,,2.0,Anuradha Singh (RS),6161.0,S,1,,
,,,,,,3.0,Jyoti Tanw ar (RS),6107.0,S,1,,
,,,,,,4.0,Manu Sharma (RS),6154.0,S,1,,
,,,,,,5.0,Megha (RS),6162.0,S,1,,
,,,,,,6.0,Neha Gupta (RS),6151.0,S,1,,
,,,,,,7.0,Pratibha Saini (RS),6158.0,S,1,,
,,,,,,8.0,Taru Saigal (RS),6152.0,S,1,,
,,,,,,9.0,Vaibhav Shastri (RS),6103.0,S,1,,
,,,,,,10.0,Zeeshan (RS),6104.0,S,1,,
,,,,,,11.0,Poonam Mulchandani,6157.0,S,1,,
,,,,,,12.0,Suchitra Pandey(RS),6108.0,S,1,,
,,,,,,13.0,Anushka Verma (RS),6109.0,S,1,,
1442.0,ECON F241,ECONOMETRIC METHODS,3,-,3.0,1.0,NV MURALIDHAR RAO,6156.0,T Th S,3,,14/05 FN
,,Tutorial,,,,,NV Muralidhar Rao,6156.0,M,1,,
1443.0,ECON F242,MICROECONOMICS,3,-,3.0,1.0,GEETILAXMIMOHAPATRA,6156.0,M W F,2,,01/05 FN
,,Tutorial,,,,,Geetilaxmi Mohapatra,6156.0,Th,8,,
1444.0,ECON F243,MACROECONOMICS,3,-,3.0,1.0,A K GIRI,6156.0,T Th S,2,,08/05 FN
,,Tutorial,,,,,A K Giri,6156.0,T,8,,
1445.0,ECON F244,ECONOMIC OF GROWTH & DEV,3,-,3.0,1.0,RAHUL ARORA,6156.0,M W F,3,,06/05 FN
,,Tutorial,,,,,Rahul Arora,6156.0,T,1,,
1656.0,ECON F266,STUDY PROJECT,-,-,3.0,1.0,A K GIRI,,,,,
1923.0,ECON F315,FINANCIAL MANAGEMENT,3,-,3.0,1.0,RAJAN PANDEY,6164.0,M W F,9,,12/05 FN
1449.0,ECON F341,PUBLIC FIN THEO & POLICY,3,-,3.0,1.0,MONIKA GUPTA,6156.0,M W F,4,,04/05 FN
,,Tutorial,,,,,Monika Gupta,6156.0,F,1,,
1450.0,ECON F342,APPLIED ECONOMETRICS,3,-,3.0,1.0,NV MURALIDHAR RAO,6156.0,M W F,5,,13/05 FN
,,Tutorial,,,,,NV Muralidhar Rao,6156.0,T,5,,
1451.0,ECON F343,ECONOMIC ANAL OF PUB POL,3,-,3.0,1.0,KRISHNA MUNIYOOR,6156.0,T Th S,4,,11/05 FN
,,Tutorial,,,,,Krishna Muniyoor,6156.0,S,1,,
1565.0,ECON F354,DERIVATIVES & RISK MGMT,3,-,3.0,1.0,ARUN KUMAR VAISH,6163.0,M W F,8,,02/05 FN
1684.0,ECON F366,LABORATORY PROJECT,-,-,3.0,1.0,A K GIRI,,,,,
1690.0,ECON F376,DESIGN PROJECT,-,-,3.0,1.0,A K GIRI,,,,,
1566.0,ECON F412,SECUR ANAL & PORTFOL MGT,3,-,3.0,1.0,ARYA KUMAR,6109.0,M W F,2,,01/05 FN
1551.0,ECON F413,FINANCIAL ENGINEERING,3,-,3.0,1.0,ARUN KUMAR VAISH,6164.0,T Th S,2,,08/05 FN
1552.0,ECON F414,CREAT & LEAD ENTREP ORGN,3,-,3.0,1.0,JYOTI,6154.0,M W F,7,,05/05 FN
1925.0,ECON F417,RISK MANAGEMENT AND INSURA,3,-,3.0,1.0,ANIL K BHATT,6107.0,M W F,3,,04/05 AN
1875.0,ECON F435,MARKETING RESEARCH,3,-,3.0,1.0,ANIL K BHATT,6151.0,T Th S,3,,08/05 AN
1726.0,ECON F491,SPECIAL PROJECT,-,-,3.0,1.0,A K GIRI,,,,,
1009.0,EEE F111,ELECTRICAL SCIENCES,3,-,3.0,1.0,ARNAB HAZRA,5106.0,M W F,4,,11/05 AN
,,,,,,2.0,Navneet Gupta,5101.0,M W F,8,,
,,,,,,3.0,K K Gupta,5106.0,T Th S,5,,
,,Tutorial,,,,1.0,Harshavardhan S,2235.0,T,9,,
,,,,,,2.0,Bijoy K Mukharjee,2207.0,T,9,,
,,,,,,3.0,Rajneesh Kumar,2222.0,T,9,,
,,,,,,4.0,Praveen Kumar A V,2206.0,Th,9,,
,,,,,,5.0,Paw an K Ajmera,2235.0,Th,9,,
,,,,,,6.0,K K Gupta,2222.0,Th,9,,
,,,,,,7.0,Anantha Krishna Chintanpalli,2235.0,S,3,,
,,,,,,8.0,Praveen Kumar A V,2216.0,S,3,,
,,,,,,9.0,Shishir Maheshw ari,1203.0,S,3,,
,,,,,,10.0,G S Sesha Chalapathi,1233.0,T,9,,
,,,,,,11.0,Satyandra Kumar Mourya,1227.0,Th,9,,
1238.0,EEE F241,MICROPROC & INTERFACING,3,1,4.0,1.0,NITINCHATURVEDI,5102.0,T Th S,3,,14/05 FN
,,,,,,2.0,JP Misra,5101.0,T Th S,3,,
,,Practical,,,,1.0,Punit Khari (RS),6117.0,T,7 8,,
,,,,,,,Radha Bhardw aj,,,,,
,,,,,,2.0,Rahul Sharma (RS),6117.0,T,9 10,,
,,,,,,,Suraj Baloda (RS),,,,,
,,,,,,3.0,Krishna Veer Singh (RS),6116.0,T,7 8,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,4.0,Tejasvi Alladi (RS),6116.0,Th,9 10,,
,,,,,,,Poonam Poonia (RS),,,,,
,,,,,,5.0,Ziyaur Rahman (RS),6114.0,Th,9 10,,
,,,,,,,Anukaran Khanna (RS),,,,,
,,,,,,6.0,TBA (Eee/Ins),6018.0,M,4 5,,
,,,,,,,Poonam Poonia (RS),,,,,
,,,,,,7.0,Poonam Poonia (RS),6018.0,W,4 5,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,8.0,Anukaran Khanna (RS),6018.0,F,4 5,,
,,,,,,,Ziyaur Rahman (RS),,,,,
,,,,,,9.0,Poonam Poonia (RS),6017.0,Th,7 8,,
,,,,,,,Tejasvi Alladi (RS),,,,,
,,,,,,10.0,TBA (Eee/Ins),6117.0,F,8 9,,
,,,,,,,Krishna Veer Singh (RS),,,,,
,,,,,,11.0,Suraj Baloda (RS),6017.0,F,8 9,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,12.0,Radha Bhardw aj,6116.0,F,8 9,,
,,,,,,,Punit Khari (RS),,,,,
,,Tutorial,,,,1.0,Devesh Samaiya,2207.0,M,1,,
,,,,,,2.0,Nitin Chaturvedi,1201.0,M,1,,
,,,,,,3.0,Vinay Chamola,2204.0,M,1,,
,,,,,,4.0,G S Sesha Chalapathi,2206.0,M,1,,
,,,,,,5.0,Aditya Raw  Gautam,2222.0,M,1,,
,,,,,,6.0,Satyandra Kumar Mourya,2207.0,T,1,,
,,,,,,7.0,G S Sesha Chalapathi,2235.0,T,1,,
,,,,,,8.0,Vinay Chamola,2214.0,T,1,,
1239.0,EEE F242,CONTROL SYSTEMS,3,-,3.0,1.0,HARI OM BANSAL,5101.0,M W F,2,,01/05 FN
,,Tutorial,,,,1.0,Hari Om Bansal,2206.0,T,1,,
,,,,,,2.0,Bijoy K Mukharjee,1203.0,T,1,,
,,,,,,3.0,Puneet Mishra,2204.0,T,1,,
,,,,,,4.0,K K Gupta,2221.0,T,1,,
,,,,,,5.0,Dheerendra Singh,2222.0,T,1,,
1240.0,EEE F243,SIGNALS & SYSTEMS,3,-,3.0,1.0,ANANTHA KRISHNA CHINTAN,1227.0,M W F,3,,06/05 FN
,,,,,,2.0,Paw an K Ajmera,1234.0,M W F,3,,
,,Tutorial,,,,1.0,Anantha Krishna Chintanpalli,2222.0,Th,1,,
,,,,,,2.0,S M Zafaruddin,2204.0,Th,1,,
,,,,,,3.0,Paw an K Ajmera,2214.0,Th,1,,
,,,,,,4.0,Jahagirdar Ankush Chandrakant,2207.0,Th,1,,
,,,,,,5.0,Shishir Maheshw ari,2206.0,Th,1,,
1241.0,EEE F244,MICROELECTRONIC CIRCUITS,3,-,3.0,1.0,ANU GUPTA,5105.0,T Th S,2,,08/05 FN
,,Tutorial,,,,1.0,Abhijit R Asati,2206.0,W,1,,
,,,,,,2.0,Kari Babu Ravi Teja,2207.0,W,1,,
,,,,,,3.0,Nitin Chaturvedi,2204.0,W,1,,
,,,,,,4.0,Rupam Gosw ami,2222.0,W,1,,
,,,,,,5.0,Pankaj Arora,2215.0,W,1,,
1900.0,EEE F246,ELECTRIC & ELECTRONIC CIR LAB,-,2,2.0,1.0,SUJAN YENUGANTI,2139.0,M,1 2 3,,
,,,,,,,Tulsi Ram Sharma,,,,,
1657.0,EEE F266,STUDY PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1244.0,EEE F312,POWER SYSTEMS,3,-,3.0,1.0,HITESHDUTT MATHUR,6109.0,T Th S,4,,11/05 FN
,,Tutorial,,,,1.0,Hitesh Dutt Mathur,2221.0,W,1,,
,,,,,,2.0,Ashish Patel,2235.0,W,1,,
,,,,,,3.0,Pavitra Sharma(RS),2216.0,W,1,,
1245.0,EEE F341,ANALOG ELECTRONICS,3,1,4.0,1.0,VINOD KUMAR CHAUBEY,5105.0,M W F,5,,13/05 FN
,,Practical,,,,1.0,Ritish Kumar (RS),2241.0,T,2 3,,
,,,,,,,Ankita Dixit (RS),,,,,
,,,,,,2.0,Ashish Kumar Verma (RS),2241.0,T,7 8,,
,,,,,,,Teena Gakhar (RS),,,,,
,,,,,,3.0,Sambhavi Shukla,2241.0,T,9 10,,
,,,,,,,Ashish Kumar Verma (RS),,,,,
,,,,,,4.0,Teena Gakhar (RS),2241.0,Th,2 3,,
,,,,,,,Sambhavi Shukla,,,,,
,,,,,,5.0,Ankita Dixit (RS),2241.0,Th,7 8,,
,,,,,,,TBA (Eee/Ins),,,,,
,,Tutorial,,,,1.0,Pankaj Arora,2204.0,S,1,,
,,,,,,2.0,Rupam Gosw ami,2235.0,S,1,,
,,,,,,3.0,Abhijit R Asati,2214.0,S,1,,
,,,,,,4.0,Arnab Hazra,2207.0,S,1,,
,,,,,,5.0,Hitesh Dutt Mathur,2222.0,S,1,,
1246.0,EEE F342,POWER ELECTRONICS,3,1,4.0,1.0,RAJNEESHKUMAR,6151.0,M W F,4,,04/05 FN
,,,,,,2.0,Aditya Raw  Gautam,6109.0,M W F,4,,
,,Practical,,,,1.0,Prashant Upadhyay (RS),2119.0,T,2 3,,
,,,,,,,Akhilesh Kumar Mishra (RS),,,,,
,,,,,,2.0,Dave Heema (RS),2119.0,T,7 8,,
,,,,,,,Dhananjay Kumar (RS),,,,,
,,,,,,3.0,Sisir KumarYadav (RS),2119.0,T,9 10,,
,,,,,,,Dave Heema (RS),,,,,
,,,,,,4.0,Dhananjay Kumar (RS),2119.0,Th,2 3,,
,,,,,,,Prashant Upadhyay (RS),,,,,
,,,,,,5.0,Akhilesh Kumar Mishra (RS),2119.0,Th,9 10,,
,,,,,,,Sisir KumarYadav (RS),,,,,
,,Tutorial,,,,1.0,Aditya Raw  Gautam,2235.0,Th,1,,
,,,,,,2.0,Rajneesh Kumar,2221.0,Th,1,,
,,,,,,3.0,Ashish Patel,2216.0,Th,1,,
,,,,,,4.0,Hari Om Bansal,1205.0,Th,1,,
,,,,,,5.0,Dheerendra Singh,2203.0,Th,1,,
1255.0,EEE F346,DATA COMMUNIC & NETWORKS,2,-,2.0,1.0,HARSHAVARDHAN S,6158.0,T Th S,2,,08/05 FN
1731.0,EEE F366,LABORATORY PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1742.0,EEE F367,LABORATORY PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1691.0,EEE F376,DESIGN PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1758.0,EEE F377,DESIGN PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
2288.0,EEE F411,INTERNET OF THINGS,3,1,4.0,1.0,VINAY CHAMOLA,5103.0,M W F,9,,11/05 FN
1252.0,EEE F414,TELECOM SWIT SYS & NETWK,3,-,3.0,1.0,RAHUL SINGHAL,2204.0,T Th S,5,,09/05 FN
1250.0,EEE F431,MOBILE TELECOM NETWORKS,3,-,3.0,1.0,S M ZAFARUDDIN,2207.0,T Th S,3,,14/05 FN
1247.0,EEE F432,MEDICAL INSTRUMENTATION,3,-,3.0,1.0,SUJAN YENUGANTI,6151.0,M W F,7,,05/05 FN
2335.0,EEE F436,ELECTROMAGNETIC COMPABILITY,3,-,3.0,1.0,PRAVEEN KUMAR A V,2216.0,M W F,8,,02/05 FN
1249.0,EEE F472,SATELLITE COMMUNICATION,3,-,3.0,1.0,SAINATH BITRAGUNTA,2207.0,M W F,7,,05/05 FN
1855.0,EEE F474,ANTENNA THEO AND DESIGN,3,1,4.0,1.0,NAVNEET GUPTA,2216.0,T Th S,2,,08/05 FN
,,Practical,,,,,Ritesh Kumar (RS),2237.0,T,8 9,,
1895.0,EEE F477,MODELING OF FIELD-EFFECT NANO DEVICES,3,-,3,1,RUPAM GOSWAMI,2203,M W F,8,,02/05 FN
1716.0,EEE F491,SPECIAL PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
462.0,EEE G510,RF MICROELECTRONICS,-,-,5.0,1.0,CHANDRA SHEKHAR,5103.0,M W F,4,,02/05 FN
,,,,,,,Pankaj Arora,,,,,
2175.0,EEE G547,DEVICE DRIVERS,3,2,5.0,1.0,DEVESH SAMAIYA,5103.0,M W F,5,,13/05 AN
96.0,EEE G592,MOBILE PERSONAL COMMUNIC,3,2,5.0,1.0,VINOD KUMAR CHAUBEY,2214.0,M W F,8,,02/05 AN
,,Practical,,,,,Rahul Sharma (RS),2145.0,Th,8 9,,
80.0,EEE G622,ADVANCED DIGITAL COMMUNI,3,2,5.0,1.0,SAINATH BITRAGUNTA,2214.0,M W F,3,,06/05 AN
1539.0,FIN F311,DERIVATIVES & RISK MGMT,3,-,3.0,1.0,ARUN KUMAR VAISH,6163.0,M W F,8,,02/05 FN
1545.0,FIN F313,SECUR ANAL & PORTFOL MGT,3,-,3.0,1.0,ARYA KUMAR,6109.0,M W F,2,,01/05 FN
1542.0,FIN F315,FINANCIAL MANAGEMENT,3,-,3.0,1.0,RAJAN PANDEY,6164.0,M W F,9,,12/05 FN
1130.0,GS F211,MOD POLITICAL CONCEPTS,3,-,3.0,1.0,VEENA RAMCHANDRAN,6164.0,T Th S,5,,09/05 FN
1135.0,GS F223,INTRO TO MASS COMM,3,-,3.0,1.0,PUSHPLATA,6164.0,M W F,8,,02/05 FN
1136.0,GS F224,PRINT & AUDIO-VISU ADVER,2,1,3.0,1.0,SANGEETA SHARMA,6152.0,M W F,9,,12/05 FN
1169.0,GS F231,DYN OF SOCIAL CHANGE,3,-,3.0,1.0,SUNITA RAINA,6151.0,T Th S,4,,11/05 FN
1170.0,GS F232,INTRODUCTORY PSYCHOLOGY,3,-,3.0,1.0,TANU SHUKLA,1234.0,M W F,8,,02/05 FN
1171.0,GS F233,PUBLIC POLICY,3,-,3.0,1.0,SAILAJA NANDIGAMA,6104.0,M W F,4,,02/05 AN
1172.0,GS F234,DEVELOPMENT ECONOMICS,3,-,3.0,1.0,A K GIRI,6152.0,M W F,5,,13/05 FN
1158.0,GS F241,CREATIVE WRITING,2,1,3.0,1.0,DEVIKA,6105.0,M W F,9,,12/05 FN
1159.0,GS F242,CULTURAL STUDIES,3,-,3.0,1.0,MUHAMMEDPUTHUSSERI,6156.0,M W F,9,,12/05 FN
1160.0,GS F243,CURRENT AFFAIRS,3,-,3.0,1.0,SANJIV KR CHOUDHARY,6163.0,M W F,5,,13/05 FN
1161.0,GS F244,REPORT & WRITE FOR MEDIA,2,1,3.0,1.0,GAJENDRA S CHAUHAN,1234.0,M W F,4,,02/05 AN
1165.0,GS F245,EFFECTIVE PUBLIC SPEAK,2,1,3.0,1.0,PUSHPLATA,1223.0,T Th S,5,,09/05 FN
1659.0,GS F266,STUDY PROJECT,-,-,3.0,1.0,SANJIV KR CHOUDHARY,,,,,
1174.0,GS F312,APPLIED PHILOSOPHY,3,-,3.0,1.0,KUMAR NEERAJ SACHDEV,1234.0,T Th S,4,,11/05 FN
1137.0,GS F322,CRITI ANAL OF LIT & CINE,3,-,3.0,1.0,KUMAR S BHATTACHARYA,6151.0,T Th S,5,,09/05 FN
1175.0,GS F331,TECH IN SOCIAL RESEARCH,3,-,3.0,1.0,TANU SHUKLA,6153.0,M W F,4,,05/05 AN
1176.0,GS F332,CONTEMPORARY INDIA,3,-,3.0,1.0,HARIKRISHNANG NAIR,6101.0,M W F,8,,02/05 FN
1177.0,GS F333,PUBLIC ADMINISTRATION,3,-,3.0,1.0,SAILAJA NANDIGAMA,1226.0,M W F,9,,12/05 FN
1178.0,GS F334,GLOBAL BUSINESS TEC & KS,3,-,3.0,1.0,PRAVEEN GOYAL,6159.0,T Th S,4,,11/05 FN
1164.0,GS F342,COMPUTER MEDIATED COMM,3,-,3.0,1.0,VIRENDRA SINGH NIRBAN,6164.0,T Th S,4,,11/05 FN
1168.0,GS F343,SHORT FILM & VIDEO PROD,-,-,3.0,1.0,SUSHILA SHEKHAWAT,6151.0,M W F,5,,13/05 FN
1733.0,GS F366,LABORATORY PROJECT,-,-,3.0,1.0,SANJIV KR CHOUDHARY,,,,,
1744.0,GS F367,LABORATORY PROJECT,-,-,3.0,1.0,SANJIV KR CHOUDHARY,,,,,
1693.0,GS F376,DESIGN PROJECT,-,-,3.0,1.0,SANJIV KR CHOUDHARY,,,,,
1760.0,GS F377,DESIGN PROJECT,-,-,3.0,1.0,SANJIV KR CHOUDHARY,,,,,
1718.0,GS F491,SPECIAL PROJECT,-,-,3.0,1.0,SANJIV KR CHOUDHARY,,,,,
1602.0,HSS F221,READINGS FROM DRAMA,3,-,3.0,1.0,KUMAR S BHATTACHARYA,6152.0,M W F,7,,05/05 FN
1603.0,HSS F222,LINGUISTICS,3,-,3.0,1.0,SANJIV KR CHOUDHARY,6108.0,T Th S,5,,09/05 FN
1596.0,HSS F223,APPR OF INDIAN MUSIC,3,-,3.0,1.0,ANIL RAI,1226.0,M W F,4,,04/05 FN
1627.0,HSS F235,INTRODUCTORY PHILOSOPHY,3,-,3.0,1.0,ANUPAM YADAV,6152.0,M W F,8,,02/05 FN
1628.0,HSS F236,SYMBOLIC LOGIC,3,-,3.0,1.0,ANUPAM YADAV,1234.0,T Th S,5,,09/05 FN
1776.0,HSS F266,STUDY PROJECT,-,-,3.0,1.0,SANJIV KR CHOUDHARY,,,,,
1777.0,HSS F323,ORGANIZATIONAL PSYCHOLOGY,3,-,3.0,1.0,RAJNEESHCHOUBISA,6163.0,T Th S,4,,11/05 FN
1155.0,HSS F325,CINEMATIC ADAPTATION,3,-,3.0,1.0,DEVIKA,6152.0,T Th S,4,,11/05 FN
1609.0,HSS F328,HUMAN RESOURCE DEVELOP,3,-,3.0,1.0,RAJNEESHCHOUBISA,6102.0,M W F,8,,02/05 FN
1597.0,HSS F329,MUSICOLOGY-AN INTRODUCTN,3,-,3.0,1.0,ANIL RAI,6153.0,T Th S,5,,09/05 FN
1599.0,HSS F334,SRIMAD BHAGAVAD GITA,3,-,3.0,1.0,MANOJ KANNAN,6101.0,M W F,9,,12/05 FN
1623.0,HSS F343,PROFESSIONAL ETHICS,3,-,3.0,1.0,KUMAR NEERAJ SACHDEV,6102.0,M W F,9,,12/05 FN
1625.0,HSS F345,GANDHIAN THOUGHTS,3,-,3.0,1.0,HARIKRISHNANG NAIR,1227.0,M W F,5,,13/05 FN
1341.0,INSTR F241,MICROPROC & INTERFACING,3,1,4.0,1.0,NITINCHATURVEDI,5102.0,T Th S,3,,14/05 FN
,,,,,,2.0,JP Misra,5101.0,T Th S,3,,
,,Practical,,,,1.0,Punit Khari (RS),6117.0,T,7 8,,
,,,,,,,Radha Bhardw aj,,,,,
,,,,,,2.0,Rahul Sharma (RS),6117.0,T,9 10,,
,,,,,,,Suraj Baloda (RS),,,,,
,,,,,,3.0,Krishna Veer Singh (RS),6116.0,T,7 8,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,4.0,Tejasvi Alladi (RS),6116.0,Th,9 10,,
,,,,,,,Poonam Poonia (RS),,,,,
,,,,,,5.0,Ziyaur Rahman (RS),6114.0,Th,9 10,,
,,,,,,,Anukaran Khanna (RS),,,,,
,,,,,,6.0,TBA (Eee/Ins),6018.0,M,4 5,,
,,,,,,,Poonam Poonia (RS),,,,,
,,,,,,7.0,Poonam Poonia (RS),6018.0,W,4 5,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,8.0,Anukaran Khanna (RS),6018.0,F,4 5,,
,,,,,,,Ziyaur Rahman (RS),,,,,
,,,,,,9.0,Poonam Poonia (RS),6017.0,Th,7 8,,
,,,,,,,Tejasvi Alladi (RS),,,,,
,,,,,,10.0,TBA (Eee/Ins),6117.0,F,8 9,,
,,,,,,,Krishna Veer Singh (RS),,,,,
,,,,,,11.0,Suraj Baloda (RS),6017.0,F,8 9,,
,,,,,,,TBA (Eee/Ins),,,,,
,,,,,,12.0,Radha Bhardw aj,6116.0,F,8 9,,
,,,,,,,Punit Khari (RS),,,,,
,,Tutorial,,,,1.0,Devesh Samaiya,2207.0,M,1,,
,,,,,,2.0,Nitin Chaturvedi,1201.0,M,1,,
,,,,,,3.0,Vinay Chamola,2204.0,M,1,,
,,,,,,4.0,G S Sesha Chalapathi,2206.0,M,1,,
,,,,,,5.0,Aditya Raw  Gautam,2222.0,M,1,,
,,,,,,6.0,Satyandra Kumar Mourya,2207.0,T,1,,
,,,,,,7.0,G S Sesha Chalapathi,2235.0,T,1,,
,,,,,,8.0,Vinay Chamola,2214.0,T,1,,
1342.0,INSTR F242,CONTROL SYSTEMS,3,-,3.0,1.0,HARI OM BANSAL,5101.0,M W F,2,,01/05 FN
,,Tutorial,,,,1.0,Hari Om Bansal,2206.0,T,1,,
,,,,,,2.0,Bijoy K Mukharjee,1203.0,T,1,,
,,,,,,3.0,Puneet Mishra,2204.0,T,1,,
,,,,,,4.0,K K Gupta,2221.0,T,1,,
,,,,,,5.0,Dheerendra Singh,2222.0,T,1,,
1343.0,INSTR F243,SIGNALS & SYSTEMS,3,-,3.0,1.0,ANANTHA KRISHNA CHINTAN,1227.0,M W F,3,,06/05 FN
,,,,,,2.0,Paw an K Ajmera,1234.0,M W F,3,,
,,Tutorial,,,,1.0,Anantha Krishna Chintanpalli,2222.0,Th,1,,
,,,,,,2.0,S M Zafaruddin,2204.0,Th,1,,
,,,,,,3.0,Paw an K Ajmera,2214.0,Th,1,,
,,,,,,4.0,Jahagirdar Ankush Chandrakant,2207.0,Th,1,,
,,,,,,5.0,Shishir Maheshw ari,2206.0,Th,1,,
1344.0,INSTR F244,MICROELECTRONIC CIRCUITS,3,-,3.0,1.0,ANU GUPTA,5105.0,T Th S,2,,08/05 FN
,,Tutorial,,,,1.0,Abhijit R Asati,2206.0,W,1,,
,,,,,,2.0,Kari Babu Ravi Teja,2207.0,W,1,,
,,,,,,3.0,Nitin Chaturvedi,2204.0,W,1,,
,,,,,,4.0,Rupam Gosw ami,2222.0,W,1,,
,,,,,,5.0,Pankaj Arora,2215.0,W,1,,
1660.0,INSTR F266,STUDY PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1348.0,INSTR F341,ANALOG ELECTRONICS,3,1,4.0,1.0,VINOD KUMAR CHAUBEY,5105.0,M W F,5,,13/05 FN
,,Practical,,,,1.0,Ritish Kumar (RS),2241.0,T,2 3,,
,,,,,,,Ankita Dixit (RS),,,,,
,,,,,,2.0,Ashish Kumar Verma (RS),2241.0,T,7 8,,
,,,,,,,Teena Gakhar (RS),,,,,
,,,,,,3.0,Sambhavi Shukla,2241.0,T,9 10,,
,,,,,,,Ashish Kumar Verma (RS),,,,,
,,,,,,4.0,Teena Gakhar (RS),2241.0,Th,2 3,,
,,,,,,,Sambhavi Shukla,,,,,
,,,,,,5.0,Ankita Dixit (RS),2241.0,Th,7 8,,
,,,,,,,TBA (Eee/Ins),,,,,
,,Tutorial,,,,1.0,Pankaj Arora,2204.0,S,1,,
,,,,,,2.0,Rupam Gosw ami,2235.0,S,1,,
,,,,,,3.0,Abhijit R Asati,2214.0,S,1,,
,,,,,,4.0,Arnab Hazra,2207.0,S,1,,
,,,,,,5.0,Hitesh Dutt Mathur,2222.0,S,1,,
1349.0,INSTR F342,POWER ELECTRONICS,3,1,4.0,1.0,RAJNEESHKUMAR,6151.0,M W F,4,,04/05 FN
,,,,,,2.0,Aditya Raw  Gautam,6109.0,M W F,4,,
,,Practical,,,,1.0,Prashant Upadhyay (RS),2119.0,T,2 3,,
,,,,,,,Akhilesh Kumar Mishra (RS),,,,,
,,,,,,2.0,Dave Heema (RS),2119.0,T,7 8,,
,,,,,,,Dhananjay Kumar (RS),,,,,
,,,,,,3.0,Sisir KumarYadav (RS),2119.0,T,9 10,,
,,,,,,,Dave Heema (RS),,,,,
,,,,,,4.0,Dhananjay Kumar (RS),2119.0,Th,2 3,,
,,,,,,,Prashant Upadhyay (RS),,,,,
,,,,,,5.0,Akhilesh Kumar Mishra (RS),2119.0,Th,9 10,,
,,,,,,,Sisir KumarYadav (RS),,,,,
,,Tutorial,,,,1.0,Aditya Raw  Gautam,2235.0,Th,1,,
,,,,,,2.0,Rajneesh Kumar,2221.0,Th,1,,
,,,,,,3.0,Ashish Patel,2216.0,Th,1,,
,,,,,,4.0,Hari Om Bansal,1205.0,Th,1,,
,,,,,,5.0,Dheerendra Singh,2203.0,Th,1,,
1350.0,INSTR F343,INDUS INSTRUMENT & CONT,3,-,3.0,1.0,PUNEETMISHRA,6101.0,T Th S,4,,11/05 FN
,,,,,,,Surekha Bhanot,,,,,
,,Tutorial,,,,1.0,Puneet Mishra,1231.0,W,1,,
,,,,,,2.0,Sujan Yenuganti,2214.0,W,1,,
1734.0,INSTR F366,LABORATORY PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1694.0,INSTR F376,DESIGN PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1761.0,INSTR F377,DESIGN PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1352.0,INSTR F414,TELECOM SWIT SYS & NETWK,3,-,3.0,1.0,RAHUL SINGHAL,2204.0,T Th S,5,,09/05 FN
1351.0,INSTR F432,MEDICAL INSTRUMENTATION,3,-,3.0,1.0,SUJAN YENUGANTI,6151.0,M W F,7,,05/05 FN
1719.0,INSTR F491,SPECIAL PROJECT,-,-,3.0,1.0,VINOD KUMAR CHAUBEY,,,,,
1532.0,IS F311,COMPUTER GRAPHICS,3,-,3.0,1.0,JENNIFERRANJANI J.,6104.0,T Th S,3,,14/05 FN
1331.0,IS F462,NETWORK PROGRAMMING,3,-,3.0,1.0,K HARI BABU,6153.0,T Th S,2,,08/05 FN
1011.0,MATH F112,MATHEMATICS-II,3,-,3.0,1.0,Gaurav Dw ivedi,5102.0,T Th S,5,,02/05 AN
,,,,,,,Krishnendra Shekhaw at,,,,,
,,,,,,2.0,Sangita Yadav,5102.0,M W F,8,,
,,,,,,,Ashish Tiw ari,,,,,
,,,,,,3.0,JITENDERKUMAR,5102.0,M W F,4,,
,,,,,,,Trilok Mathur,,,,,
,,Tutorial,,,,1.0,Balram Dubey,1201.0,T,9,,
,,,,,,2.0,Ashish Tiw ari,2215.0,T,9,,
,,,,,,3.0,Devendra Kumar,1204.0,T,9,,
,,,,,,4.0,Rishikesh Vaidya,1203.0,T,9,,
,,,,,,5.0,Jitender Kumar,1231.0,T,9,,
,,,,,,6.0,Krishnendra Shekhaw at,1226.0,T,9,,
,,,,,,7.0,Sangita Yadav,1227.0,T,9,,
,,,,,,8.0,Sumanta Pasari,2216.0,T,9,,
,,,,,,9.0,Rishikesh Vaidya,1203.0,Th,8,,
,,,,,,10.0,Balram Dubey,1204.0,Th,9,,
,,,,,,11.0,Trilok Mathur,1231.0,Th,9,,
,,,,,,12.0,Ankit Kumar (RS),1226.0,Th,9,,
,,,,,,13.0,Vinod Kumar (RS),1225.0,Th,9,,
,,,,,,14.0,Kapil kumar Choudhary (RS),2216.0,Th,9,,
,,,,,,15.0,Suresh Kumar,6107.0,F,5,,
,,,,,,16.0,Gaurav Dw ivedi,1232.0,F,5,,
,,,,,,17.0,Bhupendra K Sharma,6157.0,F,5,,
,,,,,,18.0,Amol Holkundkar,1201.0,F,5,,
,,,,,,19.0,Amol Holkundkar,6152.0,S,3,,
,,,,,,21.0,Gaurav Dw ivedi,1204.0,S,3,,
,,,,,,22.0,Sumanta Pasari,1205.0,F,7,,
,,,,,,23.0,Bhupendra K Sharma,6157.0,S,3,,
,,,,,,24.0,Balram Dubey,1219.0,S,3,,
,,,,,,25.0,Devendra Kumar,1226.0,S,3,,
1012.0,MATH F113,PROBABILITY & STATISTICS,3,-,3.0,1.0,SUMANTA PASARI,5105.0,M W F,4,,08/05 AN
,,,,,,,Rajiv Kumar,,,,,
,,,,,,2.0,Chandra Shekhar (MATH),5105.0,M W F,8,,
,,,,,,,Rakhee,,,,,
,,,,,,3.0,Suresh Kumar,5105.0,T Th S,5,,
,,,,,,,Shivi Agarwal,,,,,
,,Tutorial,,,,1.0,Anirudh Singh Rana,1205.0,T,9,,
,,,,,,2.0,Chandra Shekhar (MATH),2214.0,T,9,,
,,,,,,3.0,Gaurav Dw ivedi,2204.0,T,9,,
,,,,,,4.0,Pradeep Kr H Keskar,1234.0,T,9,,
,,,,,,5.0,Rajesh Kumar (MATH),2203.0,T,9,,
,,,,,,6.0,Rajiv Kumar,2221.0,T,9,,
,,,,,,7.0,Rakhee,1225.0,T,9,,
,,,,,,8.0,Shivi Agarwal,1223.0,T,9,,
,,,,,,9.0,Suresh Kumar,6154.0,T,9,,
,,,,,,10.0,Pradeep Kr H Keskar,2215.0,Th,9,,
,,,,,,11.0,Divyum Sharma,2214.0,Th,9,,
,,,,,,12.0,Gaurav Dw ivedi,2203.0,Th,9,,
,,,,,,13.0,Rakhee,1205.0,Th,9,,
,,,,,,14.0,Shivi Agarwal,6108.0,Th,9,,
,,,,,,15.0,Sumanta Pasari,1220.0,Th,9,,
,,,,,,16.0,Suresh Kumar,6101.0,Th,9,,
,,,,,,17.0,Yogendra Sharma (RS),1203.0,Th,9,,
,,,,,,18.0,Pinki (RS),1202.0,Th,9,,
,,,,,,19.0,Sumanta Pasari,2204.0,S,3,,
,,,,,,20.0,Anirudh Singh Rana,1202.0,S,3,,
,,,,,,21.0,Divyum Sharma,1231.0,S,3,,
,,,,,,22.0,Suresh Kumar,6162.0,S,3,,
,,,,,,23.0,Rajesh Kumar (MATH),1201.0,S,3,,
,,,,,,24.0,Shivani Sharma (RS),1205.0,S,3,,
1340.0,MATH F231,NUMBER THEORY,3,-,3.0,1.0,DIVYUM SHARMA,6155.0,M W F,7,,05/05 FN
,,Tutorial,,,,,Divyum Sharma,6108.0,T,7,,
1465.0,MATH F241,MATHEMATICAL METHODS,3,-,3.0,1.0,BHUPENDRAK SHARMA,6101.0,M W F,2,,01/05 FN
,,Tutorial,,,,,Bhupendra K Sharma,6101.0,T,1,,
1466.0,MATH F242,OPERATIONS RESEARCH,3,-,3.0,1.0,CHANDRA SHEKHAR (MATH),6102.0,T Th S,3,,14/05 FN
,,Tutorial,,,,,Chandra Shekhar (MATH),6102.0,M,1,,
1467.0,MATH F243,GRAPHS AND NETWORKS,3,-,3.0,1.0,KRISHNENDRASHEKHAWAT,6102.0,M W F,3,,06/05 FN
,,Tutorial,,,,,Krishnendra Shekhaw at,6102.0,Th,1,,
1468.0,MATH F244,MEASURE & INTEGRATION,3,-,3.0,1.0,TRILOK MATHUR,6102.0,T Th S,2,,08/05 FN
,,Tutorial,,,,,Trilok Mathur,6102.0,W,1,,
1662.0,MATH F266,STUDY PROJECT,-,-,3.0,1.0,BHUPENDRAK SHARMA,,,,,
1475.0,MATH F314,ALGEBRA-II,3,-,3.0,1.0,JITENDERKUMAR,6107.0,T Th S,3,,14/05 FN
1472.0,MATH F341,INTRO TO FUNCTIONAL ANAL,3,-,3.0,1.0,ASHISH TIWARI,6153.0,M W F,5,,13/05 FN
,,Tutorial,,,,,Ashish Tiw ari,6153.0,S,1,,
1473.0,MATH F342,DIFFERENTIAL GEOMETRY,3,-,3.0,1.0,PRADEEPKR H KESKAR,6102.0,T Th S,4,,11/05 FN
,,Tutorial,,,,,Pradeep Kr H Keskar,6102.0,W,4,,
,,,,,,,Sangita Yadav,,,,,
1474.0,MATH F343,PARTIAL DIFF EQUATIONS,3,-,3.0,1.0,RAJESH KUMAR (MATH),6102.0,T Th S,5,,09/05 FN
,,Tutorial,,,,,Rajesh Kumar (MATH),6102.0,Th,9,,
1479.0,MATH F353,STATISTICAL INFER & APP,3,-,3.0,1.0,RAKHEE,6160.0,T Th S,2,,08/05 FN
1679.0,MATH F366,LABORATORY PROJECT,-,-,3.0,1.0,BHUPENDRAK SHARMA,,,,,
1696.0,MATH F376,DESIGN PROJECT,-,-,3.0,1.0,BHUPENDRAK SHARMA,,,,,
1882.0,MATH F420,MATHEMATICAL MODELLING,3,-,4.0,1.0,BALRAM DUBEY,6104.0,M W F,3,,06/05 FN
1921.0,MATH F422,NUM MTHD FOR PARTIAL DIFF EQ,3,1,4.0,1.0,DEVENDRA KUMAR,6108.0,M W F,9,,12/05 FN
,,Practical,,,,,Devendra Kumar,6016.0,F,1 2,,
2191.0,MATH F424,APPLIED STOCHASTIC PROCESS,3,1,4.0,1.0,ANIRUDHSINGH RANA,6157.0,M W F,8,,02/05 FN
,,Practical,,,,,Anirudh Singh Rana,6116.0,Th,7,,
1721.0,MATH F491,SPECIAL PROJECT,-,-,3.0,1.0,BHUPENDRAK SHARMA,,,,,
244.0,MBA C483,MARKETING RESEARCH,3,-,3.0,1.0,ANIL K BHATT,6151.0,T Th S,3,,08/05 AN
2207.0,MBA G506,NEGOTIATION SKILL & TECH,2,-,2.0,1.0,MOHAMMAD FARAZ NAIM,6155.0,T,1 2,,02/05 AN
2212.0,MBA G509,INVEST BANK & FIN SERV,3,-,3.0,1.0,SAURABH CHADHA,6158.0,M W F,3,,04/05 AN
2214.0,MBA G510,HUMAN RESOURCE MGMT,-,-,4.0,1.0,JAYASHREE MAHESH,6155.0,M F,4 5,,06/05 AN
2218.0,MBA G516,CORPORATE FINANCE & TAX,-,-,4.0,1.0,SAURABH CHADHA,6155.0,T Th,4 5,,11/05 AN
2220.0,MBA G518,MARKETING,-,-,4.0,1.0,ANIL K BHATT,6155.0,T Th,8 9,,15/05 AN
2221.0,MBA G519,PRODUCT & OPERATION MGMT,-,-,4.0,1.0,RAJESH MATAI,6155.0,Th S,1 2,,01/05 AN
2222.0,MBA G521,SUPPLY CHAIN MANAGEMENT,-,-,4.0,1.0,SATYENDRA KR SHARMA,6155.0,M W,8 9,,09/05 AN
939.0,MBA G523,PROJECT MANAGEMENT,-,-,4.0,1.0,RAJESH MATAI,6154.0,M W F,3,,04/05 AN
2232.0,MBA G532,RISK MANAGEMENT & INSURA,3,-,3.0,1.0,ANIL K BHATT,6107.0,M W F,3,,04/05 AN
2235.0,MBA G537,SECUR ANAL & PORTFOL MGT,3,-,3.0,1.0,ARYA KUMAR,6109.0,M W F,2,,01/05 FN
2241.0,MBA G571,MANAGEMENT INFORM SYSTEM,3,-,3.0,1.0,NIRANKUSHDUTTA,6155.0,W S,4 5,,13/05 AN
2243.0,MBA G575,FINANCIAL ENGINEERING,3,-,3.0,1.0,UDAYAN CHANDA,6159.0,M W F,3,,04/05 AN
2330.0,MBA G578,GAME THEORY & BUSINESS STRATEGY,3,-,3,1,UDAYAN CHANDA,6101,T Th S,3,,08/05 AN
2245.0,MBA G582,CREAT & LEAD ENTREP ORGN,3,-,3.0,1.0,JYOTI,6154.0,M W F,7,,05/05 FN
2246.0,MBA G583,MARKETING RESEARCH,3,-,3.0,1.0,ANIL K BHATT,6151.0,T Th S,3,,08/05 AN
1013.0,ME F110,WORKSHOP PRACTICE,-,4,2.0,1.0,GIRISHKANT,4110.0,M W,1 2,,13/05 FN
,,,,,,,Rahul Uke (RS),,,,,
,,,,,,2.0,Abhishesh Mishra (RS),4110.0,M W,6 7,,
,,,,,,,Ayush Ow hal (RS),,,,,
,,,,,,,Rishi Parvanda (RS),,,,,
,,,,,,3.0,Ashish Kumar Srivastava (RS),4110.0,T Th,1 2,,
,,,,,,,Abhishesh Mishra (RS),,,,,
,,,,,,,Shailendra Paw anr (RS),,,,,
,,,,,,4.0,Rahul Uke (RS),4110.0,T Th,3 4,,
,,,,,,,Ayush Ow hal (RS),,,,,
,,,,,,,Vasudev Singh Sengar (RS),,,,,
,,,,,,5.0,Harsh Sharma (RS),4110.0,T Th,7 8,,
,,,,,,,Diplesh Gautam (RS),,,,,
,,,,,,,Rishi Parvanda (RS),,,,,
,,,,,,6.0,Shailendra Paw anr (RS),4110.0,F S,1 2,,
,,,,,,,Ashish Kumar Srivastava (RS),,,,,
,,,,,,,Vasudev Singh Sengar (RS),,,,,
1263.0,ME F241,MACHINE DESIGN & DRAWING,3,1,4.0,1.0,M S DASGUPTA,6161.0,M W F,2,,14/05 FN
,,,,,,2.0,Gaurav Watts,6163.0,T Th S,3,,
,,Practical,,,,1.0,Anish Kumar(RS),6118.0,T,7 8,,
,,,,,,2.0,Rahul Priyadarshi (RS),6118.0,T,9 10,,
,,,,,,3.0,Amresh Kumar (RS),6118.0,Th,7 8,,
,,,,,,4.0,TBA (Me),6118.0,Th,9 10,,
1264.0,ME F242,IC ENGINES,2,-,2.0,1.0,SACHIN U BELGAMWAR,6163.0,T Th,2,,08/05 FN
,,,,,,2.0,Saket Verma,6161.0,T Th,2,,
,,Tutorial,,,,1.0,Saket Verma,6109.0,S,2,,
,,,,,,2.0,A R Harikrishnan,6159.0,S,2,,
,,,,,,3.0,Suvanjan Bhattacharyya,6104.0,S,2,,
1265.0,ME F243,PRODUCTION TECHNIQUES I,2,1,3.0,1.0,KULDIPSINGH SANGWAN,6163.0,M W,3,,06/05 FN
,,,,,,,Prateek Kala,,,,,
,,Practical,,,,1.0,Nitish Gokhale (RS),4110.0,M,8 9,,
,,,,,,2.0,Santosh Sarasw at (RS),4110.0,T,9 10,,
,,,,,,3.0,Shrikanta Paw ar (RS),4110.0,F,8 9,,
,,,,,,4.0,Rishi Kumar (RS),4110.0,Th,9 10,,
1266.0,ME F244,KIN & DYN OF MACHINES,3,-,3.0,1.0,Amit R Singh,6152.0,M W F,2,,01/05 FN
,,,,,,2.0,JITENDRAS RATHORE,6161.0,T Th S,3,,
,,Tutorial,,,,1.0,Jitendra S Rathore,1201.0,T,1,,
,,,,,,2.0,Amit R Singh,1202.0,T,1,,
,,,,,,3.0,Sharad Srivastava,1204.0,T,1,,
,,,,,,4.0,Amol M R Marathe,1227.0,T,1,,
1663.0,ME F266,STUDY PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
2286.0,ME F340,INTRODUCTION TO SPORTS ENGINEERING,3,-,3,1,M S DASGUPTA,6101,M W F,10,,15/05 FN
,,,,,,,R Gupta,,,,,
1270.0,ME F341,PRIMEMOVERS & FLUID MACH,2,1,3.0,1.0,Aneesh A. M,6158.0,M W,5,,11/05 FN
,,,,,,2.0,MANOJ SONI,6158.0,T Th,4,,
,,Practical,,,,1.0,Vivek Tiw ari,2124.0,M,1 2,,
,,,,,,2.0,Ashish Khare (RS),2124.0,T,7 8,,
,,,,,,3.0,Santosh Kumar Saini (RS),2124.0,Th,7 8,,
,,,,,,4.0,Ramesh Kumar (RS),2124.0,S,1 2,,
1272.0,ME F342,COMPUTER AIDED DESIGN,3,1,4.0,1.0,MURALI PALLA,6163.0,M W F,4,,04/05 FN
,,,,,,2.0,Deepak Sharma,6163.0,T Th S,5,,
,,Tutorial,,,,1.0,Murali Palla,6102.0,F,1,,
,,,,,,2.0,Deepak Sharma,6109.0,F,1,,
,,,,,,3.0,Arun Kumar Jalan,6107.0,F,1,,
,,,,,,4.0,K P Venkatesh,6151.0,F,1,,
1271.0,ME F343,MECHANICAL VIBRATIONS,3,-,3.0,1.0,K P Venkatesh,6161.0,T Th S,4,,13/05 FN
,,,,,,2.0,ARUN KUMAR JALAN,1226.0,M W F,5,,
,,Tutorial,,,,1.0,Arun Kumar Jalan,1202.0,Th,1,,
,,,,,,2.0,K P Venkatesh,1203.0,Th,1,,
,,,,,,3.0,Jitendra S Rathore,1204.0,Th,1,,
1273.0,ME F344,ENGINEERING OPTIMIZATION,2,-,2.0,1.0,RAJESH P MISHRA,6164.0,M W,4,,09/05 FN
,,,,,,2.0,Aakash Chand Rai,6161.0,T Th,5,,
,,Tutorial,,,,1.0,Sachin U Belgamw ar,1201.0,W,1,,
,,,,,,2.0,Rajesh P Mishra,1227.0,W,1,,
,,,,,,3.0,Aakash Chand Rai,1205.0,W,1,,
,,,,,,4.0,Shyam Sundar Yadav,1232.0,W,1,,
1680.0,ME F366,LABORATORY PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1697.0,ME F376,DESIGN PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1764.0,ME F377,DESIGN PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1281.0,ME F420,POWER PLANT ENGINEERING,3,-,3.0,1.0,P SRINIVASAN,6107.0,M W F,9,,12/05 FN
,,Tutorial,,,,,A R Harikrishnan,2206.0,T,9,,
1810.0,ME F423,MICRO-FLUIDICS & ITS APP,-,-,4.0,1.0,ANEESH A. M,2216.0,M W F,2,,01/05 FN
1282.0,ME F432,COMPUTER AIDED MANUFACT,3,-,3.0,1.0,TUFAN CHANDRA BERA,2207.0,T Th,2,,08/05 FN
,,Practical,,,,,Tufan Chandra Bera,4110.0,W,8 9,,
1778.0,ME F433,SOLAR THERMAL PROCESS ENGG,3,1,4.0,1.0,MANOJ SONI,1232.0,M W F,3,,06/05 FN
1283.0,ME F441,AUTOMOTIVE VEHICLES,3,-,3.0,1.0,SAKET VERMA,2204.0,M W F,3,,06/05 FN
1287.0,ME F461,REFRIGERATION & AIRCOND,3,-,3.0,1.0,SUVANJAN BHATTACHARYYA,1226.0,M W F,7,,05/05 FN
1290.0,ME F491,SPECIAL PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
2059.0,ME G513,HEAT & COOL OF BUILDINGS,-,-,5.0,1.0,AAKASH CHAND RAI,1219.0,M W F,3,,06/05 AN
410.0,ME G515,COMPUT FLUID DYNAMICS,-,-,5.0,1.0,SHYAM SUNDAR YADAV,1231.0,M W F,7,,05/05 AN
2079.0,ME G535,ADV ENGG MATHEMATICS,3,2,5.0,1.0,AMOL M R MARATHE,2214.0,T Th S,3,,14/05 AN
266.0,ME G611,COMP AIDED ANAL & DESIGN,2,3,5.0,1.0,MURALI PALLA,1225.0,T Th S,4,,11/05 AN
224.0,MEL G632,ANALOG IC DESIGN,3,2,5.0,1.0,ANU GUPTA,2235.0,M W F,9,,12/05 AN
484.0,MEL G641,CAD FOR IC DESIGN,3,2,5.0,1.0,ABHIJIT R ASATI,2207.0,M W F,8,,02/05 AN
817.0,MEL G642,VLSI ARCHITECTURE,2,2,4.0,1.0,CHANDRA SHEKHAR,5103.0,T Th S,2,,08/05 AN
,,,,,,,S Gurunarayanan,,,,,
,,Practical,,,,,Abheek Gupta (RS),2123.0,T,8 9,,
,,,,,,,Kanika (RS),,,,,
1398.0,MF F241,MACHINE DESIGN & DRAWING,3,1,4.0,1.0,M S DASGUPTA,6161.0,M W F,2,,14/05 FN
,,,,,,2.0,Gaurav Watts,6163.0,T Th S,3,,
,,Practical,,,,1.0,Anish Kumar(RS),6118.0,T,7 8,,
,,,,,,2.0,Rahul Priyadarshi (RS),6118.0,T,9 10,,
,,,,,,3.0,Amresh Kumar (RS),6118.0,Th,7 8,,
,,,,,,4.0,TBA (Me),6118.0,Th,9 10,,
1399.0,MF F242,MANUFACTURING MANAGEMENT,2,-,2.0,1.0,ABHIJIT K DIGALWAR,6157.0,M W,3,,06/05 FN
,,Tutorial,,,,,Abhijit K Digalw ar,6157.0,F,3,,
1400.0,MF F243,MANUFACTURING PROCESSES,2,1,3.0,1.0,GIRISHKANT,6108.0,T Th,2,,08/05 FN
,,Tutorial,,,,,Girish Kant,6151.0,S,2,,
1401.0,MF F244,KIN & DYN OF MACHINES,3,-,3.0,1.0,Amit R Singh,6152.0,M W F,2,,01/05 FN
,,,,,,2.0,JITENDRAS RATHORE,6161.0,T Th S,3,,
,,Tutorial,,,,1.0,Jitendra S Rathore,1201.0,T,1,,
,,,,,,2.0,Amit R Singh,1202.0,T,1,,
,,,,,,3.0,Sharad Srivastava,1204.0,T,1,,
,,,,,,4.0,Amol M R Marathe,1227.0,T,1,,
1664.0,MF F266,STUDY PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1405.0,MF F341,DESIGN OF MACHINE TOOLS,3,-,3.0,1.0,SHARAD SRIVASTAVA,2222.0,T Th S,4,,11/05 FN
,,Tutorial,,,,,Sharad Srivastava,2222.0,S,2,,
1407.0,MF F342,COMPUTER AIDED DESIGN,3,1,4.0,1.0,MURALI PALLA,6163.0,M W F,4,,04/05 FN
,,,,,,2.0,Deepak Sharma,6163.0,T Th S,5,,
,,Tutorial,,,,1.0,Murali Palla,6102.0,F,1,,
,,,,,,2.0,Deepak Sharma,6109.0,F,1,,
,,,,,,3.0,Arun Kumar Jalan,6107.0,F,1,,
,,,,,,4.0,K P Venkatesh,6151.0,F,1,,
1406.0,MF F343,CASTING & WELDING,3,1,4.0,1.0,TUFAN CHANDRA BERA,6159.0,M W F,5,,13/05 FN
,,Practical,,,,1.0,Abdullla Sultan (RS),4110.0,T,9 10,,
,,,,,,2.0,Chetan Jalendra (RS),4110.0,Th,9 10,,
1408.0,MF F344,ENGINEERING OPTIMIZATION,2,-,2.0,1.0,RAJESH P MISHRA,6164.0,M W,4,,09/05 FN
,,,,,,2.0,Aakash Chand Rai,6161.0,T Th,5,,
,,Tutorial,,,,1.0,Sachin U Belgamw ar,1201.0,W,1,,
,,,,,,2.0,Rajesh P Mishra,1227.0,W,1,,
,,,,,,3.0,Aakash Chand Rai,1205.0,W,1,,
,,,,,,4.0,Shyam Sundar Yadav,1232.0,W,1,,
1681.0,MF F366,LABORATORY PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1749.0,MF F367,LABORATORY PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1698.0,MF F376,DESIGN PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1765.0,MF F377,DESIGN PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1417.0,MF F418,LEAN MANUFACTURING,3,-,3.0,1.0,ABHIJIT K DIGALWAR,6153.0,T Th S,3,,14/05 FN
1418.0,MF F421,SUPPLY CHAIN MANAGEMENT,-,-,4.0,1.0,SRIKANTA ROUTROY,6154.0,M W F,8,,02/05 FN
1420.0,MF F473,PRODUCT DESIGN & DEVELOP,3,-,3.0,1.0,DEEPAK SHARMA,2206.0,M W F,9,,12/05 FN
1884.0,MF F485,SUSTAINABLE MANUFACTURING,3,-,3.0,1.0,KULDIPSINGH SANGWAN,6107.0,M W F,8,,02/05 FN
1422.0,MF F491,SPECIAL PROJECT,-,-,3.0,1.0,M S DASGUPTA,,,,,
1024.0,MGTS F211,PRINCIPLES OF MANAGEMENT,3,-,3.0,1.0,LEELA RANI,6103.0,M W F,7,,04/05 AN
,,,,,,,Mohammad Faraz Naim,,,,,
,,,,,,,Neetu Yadav,,,,,
,,,,,,2.0,Neetu Yadav,6103.0,T Th S,4,,
,,,,,,,Leela Rani,,,,,
,,,,,,,Mohammad Faraz Naim,,,,,
,,Tutorial,,,,1.0,Mohammad Faraz Naim,6163.0,S,1,,
,,,,,,2.0,Praveen Goyal,6164.0,S,1,,
,,,,,,3.0,Leela Rani,6159.0,S,1,,
,,,,,,4.0,Neetu Yadav,6160.0,S,1,,
369.0,MSE G511,MECHATRONICS,3,2,5.0,1.0,PRATEEKKALA,1225.0,M W F,9,,12/05 AN
389.0,MSE G512,MANUFACT PLANNING & CONT,-,-,4.0,1.0,RAJESH P MISHRA,6153.0,M W F,8,,02/05 AN
667.0,MUSIC N113T,INDIA CLASS MUSIC(INST)I,-,-,3.0,1.0,ANIL RAI,6065.0,M W F,10,,15/05 FN
673.0,MUSIC N114T,INDIA CLASS MUSIC(INST)II,-,-,3.0,1.0,ANIL RAI,6065.0,T Th S,10,,30/04 FN
1089.0,PHA F212,DISPENSING PHARMACY,2,1,3.0,1.0,DEEPAK CHITKARA,6159.0,M W,8,,02/05 FN
,,Practical,,,,1.0,Saurabh Sharma (RS),3151.0,T,7 8 9,,
,,,,,,,Rupesh Sanjay kumar Jain (RS),,,,,
,,,,,,,Srividya Gorantala,,,,,
,,,,,,,Sudeep Pukale (RS),,,,,
,,,,,,,Vamshi Krishn (RS),,,,,
,,,,,,2.0,Saurabh Sharma (RS),3151.0,W,1 2 3,,
,,,,,,,Rupesh Sanjay kumar Jain (RS),,,,,
,,,,,,,Srividya Gorantala,,,,,
,,,,,,,Sudeep Sudesh (RS),,,,,
,,,,,,,Vamshi Krishn (RS),,,,,
,,Tutorial,,,,,Deepak Chitkara,6157.0,W,4,,
1088.0,PHA F213,MICROBIOLOGY,2,1,3.0,1.0,ANIRUDDHA ROY,6162.0,T Th,3,,14/05 FN
,,Practical,,,,1.0,K Laxmi sw etha (RS),3114.0,W,1 2 3,,
,,,,,,,Geetika Wadhw a (RS),,,,,
,,,,,,,Hinge Nikita Subhash (RS),,,,,
,,,,,,,Pramita Saha (RS),,,,,
,,,,,,,Sw ati Sharma (RS),,,,,
,,,,,,2.0,K Laxmi sw etha (RS),3114.0,S,1 2 3,,
,,,,,,,Geetika Wadhw a (RS),,,,,
,,,,,,,Hinge Nikita Subhash (RS),,,,,
,,,,,,,Pramita Saha (RS),,,,,
,,,,,,,Sw ati Sharma (RS),,,,,
,,Tutorial,,,,,Aniruddha Roy,6162.0,M,1,,
1087.0,PHA F214,ANATOMY PHYSIO & HYGIENE,2,1,3.0,1.0,RAJEEV TALIYAN,6108.0,T Th,3,,14/05 FN
,,Practical,,,,1.0,Nisha Sharma (RS),3115.0,T,9 10,,
,,,,,,,Himanshu S. (RS),,,,,
,,,,,,,Mahipal Reddy (RS),,,,,
,,,,,,,Manisha Choudhari (RS),,,,,
,,,,,,,Sarath Lal (RS),,,,,
,,,,,,2.0,Nisha Sharma (RS),3115.0,Th,9 10,,
,,,,,,,Himanshu S. (RS),,,,,
,,,,,,,Mahipal Reddy (RS),,,,,
,,,,,,,Manisha Choudhari (RS),,,,,
,,,,,,,Violina K (RS),,,,,
,,Tutorial,,,,,Rajeev Taliyan,6108.0,S,3,,
1863.0,PHA F215,INTR TO MOL BIO & IMMUNO,3,-,3.0,1.0,ANIRUDDHA ROY,6162.0,M F,3,,06/05 FN
,,Tutorial,,,,,Aniruddha Roy,6162.0,T,1,,
1291.0,PHA F241,PHARMACEUTICAL CHEMISTRY,2,1,3.0,1.0,SANDEEPSUNDRIYAL,6162.0,T Th,2,,02/05 AN
,,Practical,,,,1.0,Sandeep Sundriyal,3151.0,M,9 10,,
,,,,,,,Ansari Imran Kaimudin,,,,,
,,,,,,,K V Krishna (RS),,,,,
,,,,,,,Prabhjeet Singh (RS),,,,,
,,,,,,,Sharyu Kesharwani (RS),,,,,
,,,,,,2.0,Vaibhav Dixit,3151.0,W,9 10,,
,,,,,,,Amritansh Bhanot (RS),,,,,
,,,,,,,Ansari Imran Kaimudin,,,,,
,,,,,,,K V Krishna (RS),,,,,
,,,,,,,Prabhjeet Singh (RS),,,,,
,,Tutorial,,,,,Sandeep Sundriyal,6104.0,M,2,,
1294.0,PHA F244,PHYSICAL PHARMACY,2,1,3.0,1.0,ANUPAMA MITTAL,6154.0,M W,5,,13/05 FN
,,Practical,,,,1.0,I.K samjibhai (RS),3149.0,T,7 8,,
,,,,,,,Kedar S. Prayag,,,,,
,,,,,,,Moumita Basak (RS),,,,,
,,,,,,,Tejashree,,,,,
,,,,,, 2.0, I.K samjibhai(RS), 3149.0, Th, 7 8,,
,,,,,,, Kedar S.Prayag,,,,,
,,,,,,, Moumita Basak(RS),,,,,
,,,,,,, Tejashree,,,,,
,,Tutorial,,,,,ANUPAMA MITTAL,6154.0,F,5,,
1665.0,PHA F266,STUDY PROJECT,-,-,3.0,1.0,ATISH T R PAUL,,,,,
1296.0,PHA F341,PHARMACOLOGY II,2,1,3.0,1.0,ANIL GAIKWAD,6162.0,T Th,4,,11/05 FN
,,Tutorial,,,,,ANIL GAIKWAD,6162.0,S,4,,
1298.0,PHA F342,MEDICINAL CHEMISTRY II,2,1,3.0,1.0,R MAHESH,6162.0,T Th,5,,09/05 FN
,,Practical,,,,1.0,Ginson George (RS),3150.0,T,7 8 9,,
,,,,,,,Arihant Kumar Singh (RS),,,,,
,,,,,,,Banoth Karan Kumar (RS),,,,,
,,,,,,,Deepak Kumar Sahel (RS),,,,,
,,,,,,,Samrat Mazumdar (RS),,,,,
,,,,,,2.0,Ginson George (RS),3150.0,Th,7 8 9,,
,,,,,,,Arihant Kumar Singh (RS),,,,,
,,,,,,,Banoth Karan Kumar (RS),,,,,
,,,,,,,Deepak Kumar Sahel (RS),,,,,
,,,,,,,Samrat Mazumdar (RS),,,,,
,,Tutorial,,,,,R Mahesh,6162.0,S,5,,
1301.0,PHA F343,FORENSIC PHARMACY,2,-,2.0,1.0,GAUTAM SINGHVI,6162.0,M W,4,,04/05 FN
,,Tutorial,,,,,Gautam Singhvi,6162.0,F,4,,
1302.0,PHA F344,NATURAL DRUGS,2,1,3.0,1.0,ATISH T R PAUL,6162.0,M W,5,,13/05 FN
,,Practical,,,,1.0,Pracheta Sengupta (RS),3117.0,T,1 2,,
,,,,,,,Dhanashree Surve,,,,,
,,,,,,,Karnam Sariravali (RS),,,,,
,,,,,,,Nisha Yadav (RS),,,,,
,,,,,,2.0,Pracheta Sengupta (RS),3117.0,Th,1 2,,
,,,,,,,Dhanashree Surve,,,,,
,,,,,,,M Kavya Shree (RS),,,,,
,,,,,,,Reena (RS),,,,,
,,Tutorial,,,,,ATISH T R PAUL,6162.0,F,5,,
1682.0,PHA F366,LABORATORY PROJECT,-,-,3.0,1.0,ATISH T R PAUL,,,,,
1699.0,PHA F376,DESIGN PROJECT,-,-,3.0,1.0,ATISH T R PAUL,,,,,
1766.0,PHA F377,DESIGN PROJECT,-,-,3.0,1.0,ATISH T R PAUL,,,,,
1304.0,PHA F414,BIOPHARMACEUTICS,3,-,3.0,1.0,SUNIL KUMAR DUBEY,1225.0,M W F,3,,06/05 FN
1306.0,PHA F416,CHEM OF SYNTHETIC DRUGS,3,-,3.0,1.0,VAIBHAV DIXIT,6107.0,M W F,7,,05/05 FN
1307.0,PHA F417,PHARMACOECONOMICS,3,-,3.0,1.0,MURALI M PANDEY,6158.0,M W F,8,,02/05 FN
1308.0,PHA F422,COSMETIC SCIENCE,2,1,3.0,1.0,MURALI M PANDEY,1225.0,T Th S,3,,14/05 FN
,,Practical,,,,,Rajesh Pradhan (RS),3149.0,M,1 2,,
,,,,,,,Sai Bhargava (RS),,,,,
1724.0,PHA F491,SPECIAL PROJECT,-,-,3.0,1.0,ATISH T R PAUL,,,,,
2132.0,PHA G545,IPR AND PHARMACEUTICALS,-,-,4.0,1.0,HEMANT R JADHAV,1220.0,M W F,4,,04/05 AN
2292.0,PHA G546,PHARMACEUTICAL BIO STATISTICS,3,-,3.0,1.0,RICHA SRIVASTAVA,5103.0,T Th S,3,,06/05 AN
67.0,PHA G611,ADVANCED PHARMACOLOGY,2,3,5.0,1.0,RAJEEV TALIYAN,2221.0,M W F,3,,06/05 AN
,,Practical,,,,,Sarathlal K C (RS),3115.0,M,7 8 9,,
,,,,,,,Shreya Das (RS),,,,,
,,,,,,,Violina K (RS),,,,,
953.0,PHA G614,CLINICAL PHARMA & THERAP,2,3,5.0,1.0,R MAHESH,6104.0,M W F,5,,13/05 AN
767.0,PHA G618,RETROSYNTHETIC ANALYSIS,3,2,5.0,1.0,S MURUGESAN,1220.0,M W F,5,,13/05 AN
677.0,PHA G621,ADVANCED MEDICINAL CHEM,2,3,5.0,1.0,HEMANT R JADHAV,1220.0,T Th S,5,,09/05 AN
,,Practical,,,,,Amritansh Bhanot (RS),3150.0,F,7 8 9,,
,,,,,,,Amit Sharma (RS),,,,,
,,,,,,,Prashant Auti(RS),,,,,
721.0,PHA G632,DOSAGE FORM DESIGN,2,3,5.0,1.0,ANIL JINDAL,1219.0,T Th S,4,,11/05 AN
,,Practical,,,,,Gautam Singhvi,3116.0,W,7 8 9,,
,,,,,,,Atharva Rajendra Bhide(RS),,,,,
,,,,,,,Rajesh Pradhan (RS),,,,,
1015.0,PHY F111,MECH OSCIL & WAVES,3,-,3.0,1.0,Anshuman Dalvi,5102.0,M W F,3,,05/05 AN
,,,,,,,Rishikesh Vaidya,,,,,
,,,,,,2.0,D BANDYOPADHYAY,5101.0,M W F,9,,
,,,,,,,Kaushar Vaidya,,,,,
,,Tutorial,,,,1.0,Bisw anath Layek,2214.0,T,8,,
,,,,,,2.0,Anshuman Dalvi,1227.0,T,8,,
,,,,,,3.0,D Bandyopadhyay,1232.0,T,8,,
,,,,,,4.0,Rakesh Choubisa,2203.0,T,8,,
,,,,,,5.0,Manjuladevi V,2207.0,T,8,,
,,,,,,6.0,Tapomoy G Sarkar,1201.0,T,8,,
,,,,,,7.0,Niladri Sarkar,2206.0,Th,8,,
,,,,,,8.0,Rakesh Choubisa,2214.0,Th,8,,
,,,,,,9.0,Tapomoy G Sarkar,1223.0,Th,8,,
,,,,,,10.0,Manjuladevi V,2207.0,S,4,,
,,,,,,11.0,D D Pant,2214.0,F,5,,
,,,,,,12.0,D D Pant,2203.0,S,4,,
1493.0,PHY F215,INTRO TO ASTRO & ASTROPH,3,-,3.0,1.0,KAUSHAR VAIDYA,6159.0,M W F,7,,05/05 FN
1482.0,PHY F241,ELECTROMAGNETIC THEO II,3,1,4.0,1.0,MADHUKAR MISHRA,6105.0,M W F,3,,06/05 FN
,,Tutorial,,,,,Madhukar Mishra,6105.0,Th,1,,
1483.0,PHY F242,QUANTUM MECHANICS I,3,-,3.0,1.0,NILADRI SARKAR,6105.0,M W F,2,,01/05 FN
,,Tutorial,,,,,Niladri Sarkar,6105.0,T,1,,
1484.0,PHY F243,MATH METHODS OF PHYSICS,3,-,3.0,1.0,RR MISHRA,6105.0,T Th S,2,,08/05 FN
,,Tutorial,,,,,RR Mishra,6105.0,W,1,,
1485.0,PHY F244,MODERN PHYSICS LAB,-,2,2.0,1.0,Amol Holkundkar,3124.0,T Th,7 8,,
,,,,,,,Madhukar Mishra,,,,,
,,,,,,2.0,D D PANT,3124.0,T Th,9 10,,
,,,,,,,Srijata Dey,,,,,
1666.0,PHY F266,STUDY PROJECT,-,-,3.0,1.0,RAJ KUMAR GUPTA,,,,,
1489.0,PHY F341,SOLID STATE PHYSICS,3,-,3.0,1.0,SUBHASHISH GANGOPADHYA,6105.0,T Th S,4,,11/05 FN
,,Tutorial,,,,,Subhashish Gangopadhyay,6157.0,T,7,,
1490.0,PHY F342,ATOMIC & MOLECULAR PHY,3,-,3.0,1.0,SRIJATA DEY,6105.0,T Th S,5,,09/05 FN
,,Tutorial,,,,,Srijata Dey,6105.0,F,1,,
1491.0,PHY F343,NUCLEAR & PARTICLE PHY,3,-,3.0,1.0,BISWANATH LAYEK,6105.0,M W F,5,,13/05 FN
,,Tutorial,,,,,Bisw anath Layek,6105.0,S,1,,
1492.0,PHY F344,ADVANCED PHYSICS LAB,-,3,3.0,1.0,Anshuman Dalvi,2222.0,F,9,,
,,Practical,,,,,ANSHUMAN DALVI,3243.0,M W,9 10,,
,,,,,,,Aditi Mandal (RS),,,,,
,,,,,,,Ashutosh Joshi (RS),,,,,
,,,,,,,D Bandyopadhyay,,,,,
,,,,,,,Manjuladevi V,,,,,
,,,,,,,Mishra Shw eta R,,,,,
,,,,,,,Neelakshi Sharma (RS),,,,,
,,,,,,,Raj Kumar Gupta,,,,,
,,,,,,,Soham Chatterjee (RS),,,,,
,,,,,,,Subhashish Gangopadhyay,,,,,
1683.0,PHY F366,LABORATORY PROJECT,-,-,3.0,1.0,RAJ KUMAR GUPTA,,,,,
1700.0,PHY F376,DESIGN PROJECT,-,-,3.0,1.0,RAJ KUMAR GUPTA,,,,,
1499.0,PHY F416,SOFT CONDEN MATTER PHY,3,1,4.0,1.0,NAVIN SINGH,2204.0,T Th S,2,,08/05 FN
1505.0,PHY F421,ADV QUANTUM MECHANICS,3,1,4.0,1.0,RAKESH CHOUBISA,2235.0,M W F,3,,06/05 FN
1725.0,PHY F491,SPECIAL PROJECT,-,-,3.0,1.0,RAJ KUMAR GUPTA,,,,,
327.0,SS G513,NETWORK SECURITY,3,1,4.0,1.0,ASHUTOSH BHATIA,6160.0,M W F,5,,13/05 AN
958.0,SS G515,DATA WAREHOUSING,3,2,5.0,1.0,AVINASH GAUTAM,6154.0,T Th S,5,,09/05 AN
,,Practical,,,,,Geetika Arora (RS),6119.0,Th,7 8,,
2107.0,SS G520,ADVANCED DATA MINING,3,1,4.0,1.0,POONAM GOYAL,6162.0,M W F,8,,02/05 AN
333.0,SS G653,SOFTWARE ARCHITECHTURES,3,2,5.0,1.0,SHASHANK GUPTA,6157.0,T Th S,4,,11/05 AN`









// --------------------VARIABLES AND CLASSES--------------------

var tt = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
];

let creditsInCart = 0;

let coursesToRead = [""];

function isNullOrWhiteSpace(str) {
    return (!str || str.length === 0 || /^\s*$/.test(str));
}

let fileInput = document.querySelector("#fileInput");

let coursePool = [];

let courseCart = [];

let compulsoryCourses = [];

let humanitiesElectives = [];

let daysDictionary = {
    M: 0,
    T: 1,
    W: 2,
    Th: 3,
    F: 4,
    S: 5,
};

let daysDictionaryReverse = {
    0: "M",
    1: "T",
    2: "W",
    3: "Th",
    4: "F",
    5: "S",
}

class Course {
    constructor() {
        this.comCode = null;
        this.courseNo = null;
        this.courseTitle = null;
        this.credits = [];
        this.ic = null;
        this.lectureSections = [];
        this.tutorialSections = [];
        this.practicalSections = [];
        this.compreDate = null;
    }
}

class Section {
    constructor() {
        this.commonHour = null;
        this.type = null;
        this.sectionNo = null;
        this.instructors = [];
        this.roomNo = null;
        this.days = [];
        this.hours = [];
    }
}

class Instructor {
    constructor(instructor, department) {
        this.instructor = instructor;
        this.department = department;
    }
}

class CartItem {
    constructor(course) {
        this.course = course;
        this.lectureSection = null;
        this.tutorialSection = null;
        this.practicalSection = null;
    }
}

// --------------------FUNCTIONS--------------------



function refreshAll() {
    refreshCredits();
    refreshCart();
    refreshCatalog();
    refreshCompreTimetable();
    refreshColors();
}

function refreshCredits() {
    let credits = 0;
    for (let i in courseCart) {
        let course = courseCart[i].course;
        credits += course.credits[2];
    }
    creditsInCart = credits;
    document.getElementById("credits-label").innerHTML = "Credits: " + creditsInCart;
}

function removeCartItem(cartItem) {
    let course = cartItem.course;
    if (cartItem.lectureSection) {
        for (let i in course.lectureSections) {
            let section = course.lectureSections[i];
            if (section.sectionNo == cartItem.lectureSection) {
                removeSection(course, section);
            }
        }
    }
    if (cartItem.practicalSection) {
        for (let i in course.practicalSections) {
            let section = course.practicalSections[i];
            if (section.sectionNo == cartItem.practicalSection) {
                removeSection(course, section);
            }
        }
    }
    if (cartItem.tutorialSection) {
        for (let i in course.tutorialSections) {
            let section = course.tutorialSections[i];
            if (section.sectionNo == cartItem.tutorialSection) {
                removeSection(course, section);
            }
        }
    }

    let courseNotEquals = function (el) {
        return !(el.course.courseNo == course.courseNo);
    }

    // let cartPanel = document.getElementById("control-panel");
    // for (let i in cartPanel.childNodes) {
    //     if (cartPanel.childNodes[i].course.courseNo == course.courseNo) {
    //         cartPanel.removeChild(cartPanel.childNodes[i]);
    //     }
    // }

    courseCart = courseCart.filter(courseNotEquals);
}

function addCartItem(course) {
    let courseItem = new CartItem(course);

    if (course.lectureSections.length == 1) {
        courseItem.lectureSection = 1;
    }
    if (course.practicalSections.length == 1) {
        courseItem.practicalSection = 1;
    }
    if (course.tutorialSections.length == 1) {
        courseItem.tutorialSection = 1;
    }

    courseCart.push(courseItem);

    //Add course in GUI
    let itemObject = document.createElement("div");
    itemObject.setAttribute("class", "cart-item");
    itemObject.setAttribute("id", course.courseNo);

    let courseLabel = document.createElement("label");
    courseLabel.innerHTML = course.courseNo + ": " + course.courseTitle;
    itemObject.appendChild(courseLabel);

    let lineBreak = document.createElement("br");
    itemObject.appendChild(lineBreak);

    let lectureLabel = document.createElement("label");
    lectureLabel.innerHTML = "Lecture: ";
    itemObject.appendChild(lectureLabel);

    let lectureSelector = document.createElement("select");
    let selectedIndex = 0;
    let emptyOption = document.createElement("option");
    emptyOption.value = "";
    lectureSelector.add(emptyOption);

    for (let i in course.lectureSections) {
        let section = course.lectureSections[i];
        if (!checkClash(course, section)) {
            let sectionOption = document.createElement("option");
            sectionOption.value = section.sectionNo.toString();
            if (courseItem.lectureSection == section.sectionNo) {
                selectedIndex = lectureSelector.length;
                addSection(course, section);
            }
            let sectionOptionString = "";
            sectionOptionString += section.sectionNo.toString() + ". ";
            for (let j in section.days) {
                sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
            }
            for (let j in section.hours) {
                sectionOptionString += section.hours[j].toString() + " ";
            }
            sectionOption.innerHTML = sectionOptionString;
            lectureSelector.add(sectionOption);
        }
    }
    lectureSelector.selectedIndex = selectedIndex;
    if (course.lectureSections.length == 1) {
        lectureSelector.disabled = true;
    }
    let handleSelector = function () {
        let section = null;
        if (courseItem.lectureSection) {
            for (let i in course.lectureSections) {
                section = course.lectureSections[i];
                if (section.sectionNo == courseItem.lectureSection) {
                    removeSection(course, section);
                    courseItem.lectureSection = null;
                }
            }
        }
        if (lectureSelector.value != "") {
            for (let i in course.lectureSections) {
                section = course.lectureSections[i];
                if (section.sectionNo.toString() == lectureSelector.value) {
                    addSection(course, section);
                    courseItem.lectureSection = section.sectionNo;
                }
            }
        }
        refreshAll();
    }
    lectureSelector.setAttribute("class", "lectureSelector");
    lectureSelector.addEventListener('change', handleSelector);
    itemObject.appendChild(lectureSelector);

    if (course.practicalSections.length != 0) {
        let lineBreak = document.createElement("br");
        itemObject.appendChild(lineBreak);

        let practicalLabel = document.createElement("label");
        practicalLabel.innerHTML = "Practical: ";
        itemObject.appendChild(practicalLabel);

        let practicalSelector = document.createElement("select");
        let emptyOption = document.createElement("option");
        emptyOption.value = "";
        practicalSelector.add(emptyOption);

        let selectedIndex = 0;

        for (let i in course.practicalSections) {
            let section = course.practicalSections[i];
            if (!checkClash(course, section)) {
                let sectionOption = document.createElement("option");
                sectionOption.value = section.sectionNo.toString();
                if (courseItem.practicalSection == section.sectionNo) {
                    selectedIndex = practicalSelector.length;
                    addSection(course, section);
                }
                let sectionOptionString = "";
                sectionOptionString += section.sectionNo.toString() + ". ";
                for (let j in section.days) {
                    sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                }
                for (let j in section.hours) {
                    sectionOptionString += section.hours[j].toString() + " ";
                }
                sectionOption.innerHTML = sectionOptionString;
                practicalSelector.add(sectionOption);
            }
        }
        practicalSelector.selectedIndex = selectedIndex;
        if (course.practicalSections.length == 1) {
            practicalSelector.disabled = true;
        }
        let handleSelector = function () {
            let section = null;
            if (courseItem.practicalSection) {
                for (let i in course.practicalSections) {
                    section = course.practicalSections[i];
                    if (section.sectionNo == courseItem.practicalSection) {
                        removeSection(course, section);
                        courseItem.practicalSection = null;
                    }
                }
            }
            if (practicalSelector.value != "") {
                for (let i in course.practicalSections) {
                    section = course.practicalSections[i];
                    if (section.sectionNo.toString() == practicalSelector.value) {
                        addSection(course, section);
                        courseItem.practicalSection = section.sectionNo;
                    }
                }
            }
            refreshAll();
        }
        practicalSelector.setAttribute("class", "practicalSelector");
        practicalSelector.addEventListener('change', handleSelector);
        itemObject.appendChild(practicalSelector);
    }

    if (course.tutorialSections.length != 0) {
        let lineBreak = document.createElement("br");
        itemObject.appendChild(lineBreak);

        let tutorialLabel = document.createElement("label");
        tutorialLabel.innerHTML = "Tutorial: ";
        itemObject.appendChild(tutorialLabel);

        let tutorialSelector = document.createElement("select");
        let emptyOption = document.createElement("option");
        emptyOption.value = "";
        tutorialSelector.add(emptyOption);

        let selectedIndex = 0;

        for (let i in course.tutorialSections) {
            let section = course.tutorialSections[i];
            if (!checkClash(course, section)) {
                let sectionOption = document.createElement("option");
                sectionOption.value = section.sectionNo.toString();
                if (courseItem.tutorialSection == section.sectionNo) {
                    selectedIndex = tutorialSelector.length;
                    addSection(course, section);
                }
                let sectionOptionString = "";
                sectionOptionString += section.sectionNo.toString() + ". ";
                for (let j in section.days) {
                    sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                }
                for (let j in section.hours) {
                    sectionOptionString += section.hours[j].toString() + " ";
                }
                sectionOption.innerHTML = sectionOptionString;
                tutorialSelector.add(sectionOption);
            }
        }
        tutorialSelector.selectedIndex = selectedIndex;
        if (course.tutorialSections.length == 1) {
            tutorialSelector.disabled = true;
        }
        let handleSelector = function () {
            let section = null;
            if (courseItem.tutorialSection) {
                for (let i in course.tutorialSections) {
                    section = course.tutorialSections[i];
                    if (section.sectionNo == courseItem.tutorialSection) {
                        removeSection(course, section);
                        courseItem.tutorialSection = null;
                    }
                }
            }
            if (tutorialSelector.value != "") {
                for (let i in course.tutorialSections) {
                    section = course.tutorialSections[i];
                    if (section.sectionNo.toString() == tutorialSelector.value) {
                        addSection(course, section);
                        courseItem.tutorialSection = section.sectionNo;
                    }
                }
            }
            refreshAll();
        }
        tutorialSelector.setAttribute("class", "tutorialSelector");
        tutorialSelector.addEventListener('change', handleSelector);
        itemObject.appendChild(tutorialSelector);

    }

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "REMOVE";
    let handleRemoveBtn = function () {
        removeCartItem(courseItem);
        document.getElementById("control-panel").removeChild(document.getElementById(course.courseNo));
        refreshAll();
    };
    removeBtn.onclick = handleRemoveBtn;
    lineBreak = document.createElement("br");
    itemObject.appendChild(lineBreak);
    itemObject.appendChild(removeBtn);
    document.getElementById("control-panel").appendChild(itemObject);
}

function refreshCartOld() {
    let cartPanel = document.getElementById("control-panel");

    for (let i in cartPanel.childNodes) {
        let itemObject = cartPanel.childNodes[i];
        let courseItem = null;
        for (let j in courseCart) {
            if (courseCart[j].course.courseNo == itemObject.id) {
                courseItem = courseCart[j];
            }
        }

        //Repopulate section options
        let lectureSelector = null;
        let practicalSelector = null;
        let tutorialSelector = null;

        for (let j in itemObject.childNodes) {
            let nodeClass = itemObject.childNodes[j].className;
            if (nodeClass == "lectureSelector") {
                lectureSelector = itemObject.childNodes[j];
            }
            if (nodeClass == "practicalSelector") {
                practicalSelector = itemObject.childNodes[j];
            }
            if (nodeClass == "tutorialSelector") {
                tutorialSelector = itemObject.childNodes[j];
            }
        }

        let selectedIndex = 0;

        let selector = lectureSelector;

        if (selector) {
            while (selector.length > 1) {
                selector.remove(1);
            }
            for (let j in courseItem.course.lectureSections) {
                let section = courseItem.course.lectureSections[j];
                if (!checkClash(courseItem.course, section)) {
                    let sectionOption = document.createElement("option");
                    sectionOption.value = section.sectionNo.toString();
                    if (courseItem.lectureSection == section.sectionNo) {
                        selectedIndex = lectureSelector.length;
                    }
                    let sectionOptionString = "";
                    sectionOptionString += section.sectionNo.toString() + ". ";
                    for (let j in section.days) {
                        sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                    }
                    for (let j in section.hours) {
                        sectionOptionString += section.hours[j].toString() + " ";
                    }
                    sectionOption.innerHTML = sectionOptionString;
                    lectureSelector.add(sectionOption);
                    if (courseItem.course.lectureSections.length == 1) {
                        selectedIndex = 1;
                        lectureSelector.disabled = true;
                    }
                }
            }
            lectureSelector.selectedIndex = selectedIndex;
        }

        selectedIndex = 0;

        selector = practicalSelector;

        if (selector) {
            while (selector.length > 1) {
                selector.remove(1);
            }
            for (let j in courseItem.course.practicalSections) {
                let section = courseItem.course.practicalSections[j];
                if (!checkClash(courseItem.course, section)) {
                    let sectionOption = document.createElement("option");
                    sectionOption.value = section.sectionNo.toString();
                    if (courseItem.practicalSection == section.sectionNo) {
                        selectedIndex = practicalSelector.length;
                    }
                    let sectionOptionString = "";
                    sectionOptionString += section.sectionNo.toString() + ". ";
                    for (let j in section.days) {
                        sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                    }
                    for (let j in section.hours) {
                        sectionOptionString += section.hours[j].toString() + " ";
                    }
                    sectionOption.innerHTML = sectionOptionString;
                    practicalSelector.add(sectionOption);
                    if (courseItem.course.practicalSections.length == 1) {
                        selectedIndex = 1;
                        practicalSelector.disabled = true;
                    }
                }
            }
            practicalSelector.selectedIndex = selectedIndex;
        }

        selectedIndex = 0;

        selector = tutorialSelector;

        if (selector) {
            while (selector.length > 1) {
                selector.remove(1);
            }
            for (let j in courseItem.course.tutorialSections) {
                let section = courseItem.course.tutorialSections[j];
                if (!checkClash(courseItem.course, section)) {
                    let sectionOption = document.createElement("option");
                    sectionOption.value = section.sectionNo.toString();
                    if (courseItem.tutorialSection == section.sectionNo) {
                        selectedIndex = tutorialSelector.length;
                    }
                    let sectionOptionString = "";
                    sectionOptionString += section.sectionNo.toString() + ". ";
                    for (let j in section.days) {
                        sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                    }
                    for (let j in section.hours) {
                        sectionOptionString += section.hours[j].toString() + " ";
                    }
                    sectionOption.innerHTML = sectionOptionString;
                    tutorialSelector.add(sectionOption);
                    if (courseItem.course.tutorialSections.length == 1) {
                        selectedIndex = 1;
                        tutorialSelector.disabled = true;
                    }
                }
            }
            tutorialSelector.selectedIndex = selectedIndex;
        }

    }
}


function checkClash(course, section) {
    var clashExists = false;
    if (section.commonHour) {
        let day = section.commonHour.day;
        let hour = section.commonHour.hour - 1;
        if (tt[hour][day]) {
            if (!(tt[hour][day].course.courseNo == course.courseNo && tt[hour][day].section.type == section.type)) {
                clashExists = true;
            }
        }
    }
    for (let i in section.days) {
        for (let j in section.hours) {
            let day = section.days[i];
            let hour = section.hours[j] - 1;
            if (tt[hour][day]) {
                if (!(tt[hour][day].course.courseNo == course.courseNo && tt[hour][day].section.type == section.type)) {
                    clashExists = true;
                }
            }
        }
    }
    return clashExists;
}

function addSection(course, section) {
    if (section.commonHour) {
        let day = section.commonHour.day;
        let hour = section.commonHour.hour - 1;
        tt[hour][day] = { course, section };

        document.getElementById(hour.toString() + day.toString()).innerHTML = stringCommonHour(course, section);
    }
    for (let i in section.days) {
        for (let j in section.hours) {
            let day = section.days[i];
            let hour = section.hours[j] - 1;
            tt[hour][day] = { course, section };
            document.getElementById(hour.toString() + day.toString()).innerHTML = stringSection(course, section);
        }
    }
    // refreshDisplay();
}

function removeSection(course, section) {
    if (section.commonHour) {
        let day = section.commonHour.day;
        let hour = section.commonHour.hour - 1;
        tt[hour][day] = null;
        let node = document.getElementById(hour.toString() + day.toString());
        while (node.childNodes.length > 0) {
            node.removeChild(node.childNodes[0]);
        }
    }
    for (let i in section.days) {
        for (let j in section.hours) {
            let day = section.days[i];
            let hour = section.hours[j] - 1;
            tt[hour][day] = null;
            let node = document.getElementById(hour.toString() + day.toString());
            while (node.childNodes.length > 0) {
                node.removeChild(node.childNodes[0]);
            }
        }
    }
    // refreshDisplay();
}

function courseClashOld(course) {
    let clash = false;
    if (course.lectureSections[0].commonHour) {
        clash = checkClash(course, course.lectureSections[0]);
    }
    let allLecturesClash = Boolean(course.lectureSections.length);
    let allTutorialsClash = Boolean(course.tutorialSections.length);
    let allPracticalsClash = Boolean(course.practicalSections.length);
    for (let i in course.lectureSections) {
        if (!checkClash(course, course.lectureSections[i])) {
            allLecturesClash = false;
            break;
        }
    }
    for (let i in course.practicalSections) {
        if (!checkClash(course, course.practicalSections[i])) {
            allPracticalsClash = false;
            break;
        }
    }
    for (let i in course.tutorialSections) {
        if (!checkClash(course, course.tutorialSections[i])) {
            allTutorialsClash = false;
            break;
        }
    }
    let compreClashes = false;
    let creditsExceed = false;
    let cartCredits = 0;
    for (let i in courseCart) {
        let courseItem = courseCart[i];
        cartCredits += courseItem.course.credits[2];
        if ((courseItem.course.compreDate.date.getTime() == course.compreDate.date.getTime()) && (courseItem.course.compreDate.time == course.compreDate.time)) {
            compreClashes = true;
        }
        if ((cartCredits + course.credits[2]) > 25) {
            creditsExceed = true;
        }
    }
    clash = clash || allLecturesClash || allTutorialsClash || allPracticalsClash || compreClashes || creditsExceed;
    return clash;
}

function courseClash(course) {
    let clash = false;
    let commonHourClashes = false;
    if (course.lectureSections[0].commonHour) {
        commonHourClashes = checkClash(course, course.lectureSections[0]);
    }
    let allLecturesClash = Boolean(course.lectureSections.length);
    let allTutorialsClash = Boolean(course.tutorialSections.length);
    let allPracticalsClash = Boolean(course.practicalSections.length);
    for (let i in course.lectureSections) {
        if (!checkClash(course, course.lectureSections[i])) {
            allLecturesClash = false;
            break;
        }
    }
    for (let i in course.practicalSections) {
        if (!checkClash(course, course.practicalSections[i])) {
            allPracticalsClash = false;
            break;
        }
    }
    for (let i in course.tutorialSections) {
        if (!checkClash(course, course.tutorialSections[i])) {
            allTutorialsClash = false;
            break;
        }
    }
    let compreClashes = false;
    let creditsExceed = false;
    let cartCredits = 0;
    for (let i in courseCart) {
        let courseItem = courseCart[i];
        cartCredits += courseItem.course.credits[2];
        if ((courseItem.course.compreDate.date.getTime() == course.compreDate.date.getTime()) && (courseItem.course.compreDate.time == course.compreDate.time)) {
            compreClashes = true;
        }
        if ((cartCredits + course.credits[2]) > 25) {
            creditsExceed = true;
        }
    }
    clash = commonHourClashes || allLecturesClash || allTutorialsClash || allPracticalsClash || compreClashes || creditsExceed;
    let clashStr = "";
    if (clash) {
        if (creditsExceed) {
            clashStr = "Credits exceed";
        } else if (compreClashes) {
            clashStr = "Compre clash";
        } else if (commonHourClashes) {
            clashStr = "Common hour clash";
        } else if (allLecturesClash) {
            clashStr = "All lecture sections clash";
        } else if (allTutorialsClash) {
            clashStr = "All tutorial sections clash";
        } else if (allPracticalsClash) {
            clashStr = "All practical sections clash";
        }
    }
    return clashStr;
}

function stringSection(course, section) {
    return course.courseNo + "\n" + course.courseTitle + "\n" + section.type + "\nSection: " + section.sectionNo;
}

function stringCommonHour(course, section) {
    return course.courseNo + "\n" + course.courseTitle + "\nCommon Hour\nSection: " + section.sectionNo;
}

function compulsoryTimings(course) {
    let findCompulsorySection = function (sections) {
        let compulsorySection = "";
        if (sections.length == 1) {
            for (let j in sections[0].days) {
                let day = sections[0].days[j];
                compulsorySection += (daysDictionaryReverse[day.toString()] + " ");
            }
            for (let j in sections[0].hours) {
                let hour = sections[0].hours[j];
                compulsorySection += (hour.toString() + " ");
            }
        }
        if ((sections.length != 0) && sections[0].commonHour) {
            compulsorySection += (daysDictionaryReverse[sections[0].commonHour.day.toString()] + " ");
            compulsorySection += sections[0].commonHour.hour.toString();
        }
        return compulsorySection;
    }
    let compulsoryTimingsStr = "";
    let tempStr = "";
    compulsoryTimingsStr += findCompulsorySection(course.lectureSections);
    tempStr = findCompulsorySection(course.practicalSections);
    if (compulsoryTimingsStr != "" && tempStr != "") {
        compulsoryTimingsStr += ",<br/>";
        compulsoryTimingsStr += tempStr;
    }
    tempStr = findCompulsorySection(course.tutorialSections);
    if (compulsoryTimingsStr != "" && tempStr != "") {
        compulsoryTimingsStr += ",<br/>";
        compulsoryTimingsStr += tempStr;
    }
    return compulsoryTimingsStr;
}

function refreshCatalog() {
    let catalog = document.getElementById("configuration-panel");
    catalog.scrollLeft = 0;
    while (catalog.childNodes.length > 0) {
        catalog.removeChild(catalog.childNodes[0]);
    }
    let enabledCoursesIndex = 0;
    let disabledCourseAdded = false;
    outer:
    for (let i in coursePool) {
        let course = coursePool[i];
        for (let j in courseCart) {
            if (course.courseNo == courseCart[j].course.courseNo) {
                continue outer;
            }
        }
        // if (!courseClash(course) && courseMatchesSearch(course)) {
        if (courseMatchesSearch(course)) {
            //add course to catalog
            let catalogItem = document.createElement("div");
            catalogItem.setAttribute("class", "catalog-item");

            let courseLabel = document.createElement("label");
            courseLabel.innerHTML = course.courseNo + ": " + course.courseTitle;


            let compulsoryTimingsStr = compulsoryTimings(course);
            if (compulsoryTimingsStr != "") {
                courseLabel.innerHTML += ("<br/><br/>Requires:<br/>" + compulsoryTimingsStr);
            }
            if (course.compreDate.date.getTime()) {
                courseLabel.innerHTML += ("<br/><br/>Compre:<br/>" + course.compreDate.date.getDate() + "/" + (course.compreDate.date.getMonth() + 1) + " " + course.compreDate.time);
            }
            catalogItem.appendChild(courseLabel);

            let lineBreak = document.createElement("br");
            catalogItem.appendChild(lineBreak);

            let addBtn = document.createElement("button");
            let addCourseToCart = function () {
                addCartItem(course);
                refreshAll();
            }
            addBtn.onclick = addCourseToCart;
            addBtn.innerHTML = "ADD";
            // let courseIsClashing = courseClashOld(course);
            let courseClashReason = courseClash(course);
            // if (courseIsClashing) {
            if (courseClashReason != "") {
                addBtn.disabled = true;
                addBtn.style.opacity = "0.3";
            }
            catalogItem.appendChild(addBtn);
            // if (courseIsClashing) {
            if (courseClashReason != "") {
                catalogItem.innerHTML += ("<br/>Disabled: " + courseClashReason);
                catalog.appendChild(catalogItem);
                disabledCourseAdded = true;
            }
            else {
                if (disabledCourseAdded) {
                    catalog.insertBefore(catalogItem, catalog.childNodes[enabledCoursesIndex++]);
                }
                else {
                    catalog.appendChild(catalogItem);
                    enabledCoursesIndex++;
                }
            }
        }
    }
}

function refreshCart() {
    let cartPanel = document.getElementById("control-panel");

    for (let i in cartPanel.childNodes) {
        let itemObject = cartPanel.childNodes[i];
        let courseItem = null;
        for (let j in courseCart) {
            if (courseCart[j].course.courseNo == itemObject.id) {
                courseItem = courseCart[j];
            }
        }

        //Repopulate section options
        let lectureSelector = null;
        let practicalSelector = null;
        let tutorialSelector = null;

        for (let j in itemObject.childNodes) {
            let nodeClass = itemObject.childNodes[j].className;
            if (nodeClass == "lectureSelector") {
                lectureSelector = itemObject.childNodes[j];
            }
            if (nodeClass == "practicalSelector") {
                practicalSelector = itemObject.childNodes[j];
            }
            if (nodeClass == "tutorialSelector") {
                tutorialSelector = itemObject.childNodes[j];
            }
        }

        let selectedIndex = 0;

        let selector = lectureSelector;

        if (selector) {
            while (selector.length > 1) {
                selector.remove(1);
            }
            for (let j in courseItem.course.lectureSections) {
                let section = courseItem.course.lectureSections[j];
                // if (!checkClash(courseItem.course, section)) {
                let sectionOption = document.createElement("option");
                sectionOption.value = section.sectionNo.toString();
                if (courseItem.lectureSection == section.sectionNo) {
                    selectedIndex = lectureSelector.length;
                }
                let sectionOptionString = "";
                sectionOptionString += section.sectionNo.toString() + ". ";
                for (let j in section.days) {
                    sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                }
                for (let j in section.hours) {
                    sectionOptionString += section.hours[j].toString() + " ";
                }
                if (document.getElementById("instructor-toggle").checked) {
                    sectionOptionString += section.instructors[0].instructor;
                }
                sectionOption.innerHTML = sectionOptionString;
                if (checkClash(courseItem.course, section)) {
                    sectionOption.disabled = true;
                }
                lectureSelector.add(sectionOption);
                if (courseItem.course.lectureSections.length == 1) {
                    selectedIndex = 1;
                    lectureSelector.disabled = true;
                }
                // }
            }
            lectureSelector.selectedIndex = selectedIndex;
        }

        selectedIndex = 0;

        selector = practicalSelector;

        if (selector) {
            while (selector.length > 1) {
                selector.remove(1);
            }
            for (let j in courseItem.course.practicalSections) {
                let section = courseItem.course.practicalSections[j];
                // if (!checkClash(courseItem.course, section)) {
                let sectionOption = document.createElement("option");
                sectionOption.value = section.sectionNo.toString();
                if (courseItem.practicalSection == section.sectionNo) {
                    selectedIndex = practicalSelector.length;
                }
                let sectionOptionString = "";
                sectionOptionString += section.sectionNo.toString() + ". ";
                for (let j in section.days) {
                    sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                }
                for (let j in section.hours) {
                    sectionOptionString += section.hours[j].toString() + " ";
                }
                if (document.getElementById("instructor-toggle").checked) {
                    sectionOptionString += section.instructors[0].instructor;
                }
                sectionOption.innerHTML = sectionOptionString;
                if (checkClash(courseItem.course, section)) {
                    sectionOption.disabled = true;
                }
                practicalSelector.add(sectionOption);
                if (courseItem.course.practicalSections.length == 1) {
                    selectedIndex = 1;
                    practicalSelector.disabled = true;
                }
                // }
            }
            practicalSelector.selectedIndex = selectedIndex;
        }

        selectedIndex = 0;

        selector = tutorialSelector;

        if (selector) {
            while (selector.length > 1) {
                selector.remove(1);
            }
            for (let j in courseItem.course.tutorialSections) {
                let section = courseItem.course.tutorialSections[j];
                // if (!checkClash(courseItem.course, section)) {
                let sectionOption = document.createElement("option");
                sectionOption.value = section.sectionNo.toString();
                if (courseItem.tutorialSection == section.sectionNo) {
                    selectedIndex = tutorialSelector.length;
                }
                let sectionOptionString = "";
                sectionOptionString += section.sectionNo.toString() + ". ";
                for (let j in section.days) {
                    sectionOptionString += daysDictionaryReverse[section.days[j]] + " ";
                }
                for (let j in section.hours) {
                    sectionOptionString += section.hours[j].toString() + " ";
                }
                if (document.getElementById("instructor-toggle").checked) {
                    sectionOptionString += section.instructors[0].instructor;
                }
                sectionOption.innerHTML = sectionOptionString;
                if (checkClash(courseItem.course, section)) {
                    sectionOption.disabled = true;
                }
                tutorialSelector.add(sectionOption);
                if (courseItem.course.tutorialSections.length == 1) {
                    selectedIndex = 1;
                    tutorialSelector.disabled = true;
                }
                // }
            }
            tutorialSelector.selectedIndex = selectedIndex;
        }

    }
}

function refreshCompreTimetable() {
    let compreDatesList = [];
    for (let i in courseCart) {
        let compreDate = courseCart[i].course.compreDate;
        compreDate['courseNo'] = courseCart[i].course.courseNo;
        compreDatesList.push(compreDate);
    }
    let comprePanel = document.getElementById("compre-timetable");
    let compreString = "Compre Timetable:<br/>";
    if (compreDatesList.length > 0) {
        let minCompreDate = null;
        let minCompreIndex = -1;
        while (compreDatesList.length > 0) {
            minCompreDate = compreDatesList[0];
            minCompreIndex = 0;
            for (let j in compreDatesList) {
                let compreDate = compreDatesList[j];
                if (compreDate.date.getTime() < minCompreDate.date.getTime()) {
                    minCompreDate = compreDate;
                    minCompreIndex = j;
                } else if ((compreDate.date.getTime() == minCompreDate.date.getTime()) && (minCompreDate.time == "AN")) {
                    minCompreDate = compreDate;
                    minCompreIndex = j;
                }
            }
            compreString += (minCompreDate.date.getDate() + "/" + (minCompreDate.date.getMonth() + 1) + " " + minCompreDate.time + " (" + minCompreDate.courseNo + ")<br/>");
            compreDatesList.splice(minCompreIndex, 1);
        }
    }
    comprePanel.innerHTML = compreString;
}

function refreshColors() {
    if (document.getElementById("color-toggle").checked) {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 12; j++) {
                if (tt[j][i]) {
                    for (let k in courseCart) {
                        if (courseCart[k].course.courseNo == tt[j][i].course.courseNo) {
                            document.getElementById(j.toString() + i.toString()).setAttribute("class", "course-" + k.toString());
                        }
                    }
                }
                else {
                    document.getElementById(j.toString() + i.toString()).setAttribute("class", "course-none");
                }
            }
        }
    } else {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 12; j++) {
                document.getElementById(j.toString() + i.toString()).setAttribute("class", "course-none");
            }
        }
    }
}

function courseMatchesSearch(course) {
    let courseMatches = false;
    let searchKeyword = document.getElementById("search-bar").value;
    searchKeyword = searchKeyword.toUpperCase();
    if ((searchKeyword == "") || (course.courseNo.includes(searchKeyword)) || (course.courseTitle.includes(searchKeyword))) {
        courseMatches = true;
    }
    return courseMatches;
}

function readttbooklet() {
    // let reader = new FileReader();
    // reader.onload = function () {
    // let rawText = reader.result;
    let rawText = booklet
    let splitText = rawText.split(/,|\n/);

    for (let i = 0; i < splitText.length;) {
        //ADD FILTRATION CLAUSE HERE
        let skipCourse = true;
        for (let j in coursesToRead) {
            let coursePrefix = coursesToRead[j];
            if (splitText[i + 1].startsWith(coursePrefix)) {
                skipCourse = false;
            }
        }
        // if ( !splitText[i+1].startsWith("CS F2") &&!splitText[i+1].startsWith("GS") && !splitText[i+1].startsWith("HSS") ) {
        if (skipCourse) {
            console.log("Skipping course: " + splitText[i + 1]);
            do {
                i += 12;
            } while (isNullOrWhiteSpace(splitText[i]) && i < splitText.length);
            continue;
        }

        let j = i;

        //Read Course Details
        let newCourse = new Course();
        newCourse.comCode = parseInt(splitText[j], 10);
        newCourse.courseNo = splitText[j + 1];
        newCourse.courseTitle = splitText[j + 2];
        let individualCredits = splitText[j + 3].split(' ');
        individualCredits = individualCredits.filter(Boolean);
        for (let k = 0; k < 3; k++) {
            newCourse.credits.push(parseInt(individualCredits[k], 10));
        }
        newCourse.compreDate = splitText[j + 11];
        if (newCourse.compreDate) {
            let compreDateList = splitText[j + 11].split(" ");
            compreDateList = compreDateList.filter(Boolean);
            compreDateList[0] = compreDateList[0].split("/");
            newCourse.compreDate = {
                date: new Date(2019, parseInt(compreDateList[0][1]) - 1, parseInt(compreDateList[0][0])),
                time: compreDateList[1],
            }
        } else {
            newCourse.compreDate = {
                date: new Date(2019, 11, 28),
                time: 'TBA'
            }
        }


        //Read Lecture Sections
        do {
            let newSection = new Section();

            if (splitText[j + 10]) {
                let commonHourList = splitText[j + 10].split(' ');
                commonHourList = commonHourList.filter(Boolean);
                newSection.commonHour = {
                    // day: commonHourList[0],
                    day: daysDictionary[commonHourList[0]],
                    // hour: commonHourList[1],
                    hour: parseInt(commonHourList[1]),
                    // room: commonHourList[2],
                    room: parseInt(commonHourList[2]),
                };
            }

            newSection.type = "Lecture";
            newSection.sectionNo = parseInt(splitText[j + 4]);
            newSection.roomNo = parseInt(splitText[j + 7]);

            let daysList = splitText[j + 8].split(' ');
            daysList = daysList.filter(Boolean);
            for (let day in daysList) {
                // if (day) {
                newSection.days.push(daysDictionary[daysList[day]]);
                // }
            }

            let hoursList = splitText[j + 9].split(' ');
            hoursList = hoursList.filter(Boolean);
            for (let hour in hoursList) {
                // if (hour) {
                newSection.hours.push(parseInt(hoursList[hour]));
                // }
            }
            do {
                let newInstructor = new Instructor(splitText[j + 5], splitText[j + 6]);
                newSection.instructors.push(newInstructor);
                j += 12;
            } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + 2]) && isNullOrWhiteSpace(splitText[j + 4]) && (j < splitText.length));
            newCourse.lectureSections.push(newSection);
        } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + 2]) && (j < splitText.length));

        //Read Practical Sections
        if (isNullOrWhiteSpace(splitText[j]) && (splitText[j + 2] == 'Practical')) {
            do {
                let newSection = new Section();

                newSection.type = "Practical";
                newSection.sectionNo = parseInt(splitText[j + 4]);
                newSection.roomNo = parseInt(splitText[j + 7]);

                let daysList = splitText[j + 8].split(' ');
                daysList = daysList.filter(Boolean);
                for (let day in daysList) {
                    // if (day) {
                    newSection.days.push(daysDictionary[daysList[day]]);
                    // }
                }

                let hoursList = splitText[j + 9].split(' ');
                hoursList = hoursList.filter(Boolean);
                for (let hour in hoursList) {
                    // if (hour) {
                    newSection.hours.push(parseInt(hoursList[hour]));
                    // }
                }
                do {
                    let newInstructor = new Instructor(splitText[j + 5], splitText[j + 6]);
                    newSection.instructors.push(newInstructor);
                    j += 12;
                } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + 2]) && isNullOrWhiteSpace(splitText[j + 4]) && (j < splitText.length));
                newCourse.practicalSections.push(newSection);
            } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + 2]) && (j < splitText.length));
        }

        //Read Tutorial Sections
        if (isNullOrWhiteSpace(splitText[j]) && (splitText[j + 2] == 'Tutorial')) {
            do {
                let newSection = new Section();

                newSection.type = "Tutorial";
                newSection.sectionNo = parseInt(splitText[j + 4]);
                newSection.roomNo = parseInt(splitText[j + 7]);

                let daysList = splitText[j + 8].split(' ');
                daysList = daysList.filter(Boolean);
                for (let day in daysList) {
                    // if (day) {
                    newSection.days.push(daysDictionary[daysList[day]]);
                    // }
                }

                let hoursList = splitText[j + 9].split(' ');
                hoursList = hoursList.filter(Boolean);
                for (let hour in hoursList) {
                    // if (hour) {
                    newSection.hours.push(parseInt(hoursList[hour]));
                    // }
                }
                do {
                    let newInstructor = new Instructor(splitText[j + 5], splitText[j + 6]);
                    newSection.instructors.push(newInstructor);
                    j += 12;
                } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + 2]) && isNullOrWhiteSpace(splitText[j + 4]) && (j < splitText.length));
                newCourse.tutorialSections.push(newSection);
            } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + 2]) && (j < splitText.length));
        }

        i = j;

        //INSERT FILTER CONDITION HERE
        // if (!newCourse.courseNo.startsWith("CS")) {
        //     delete newCourse;
        // }
        coursePool.push(newCourse);
        console.log("Read course: " + newCourse.courseNo);
    }

    //ACTION TO TAKE AFTER TT IS READ
    document.getElementById("search-bar").addEventListener('keyup', refreshAll);
    document.getElementById("search-bar").addEventListener('change', refreshAll);
    document.getElementById("search-bar").addEventListener('input', refreshAll);
    document.getElementById("search-bar").addEventListener('search', refreshAll);
    refreshAll();

    // };
    // reader.readAsBinaryString(fileInput.files[0]);
}

fileInput.addEventListener('change', readttbooklet);

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result;
}


function readttbookletserver() {
    let rawText = booklet;
    let splitText = rawText.split(/,|\n/);

    for (let i = 0; i < splitText.length;) {
        // ****** Optionally skip white spaces

        let j = i;

        //Read Course Details
        let newCourse = new Course();
        newCourse.comCode = parseInt(splitText[j + COM_CODE_COL], 10);
        newCourse.courseNo = splitText[j + COURSE_NO_COL];
        newCourse.courseTitle = splitText[j + COURSE_TITLE_COL];

        // IF CREDITS ARE IN ONE COLUMN
        // let individualCredits = splitText[j + 3].split(' ');
        // individualCredits = individualCredits.filter(Boolean);
        // for (let k = 0; k < 3; k++) {
        //     if (individualCredits[k] == '-') {
        //         newCourse.credits.push(0);
        //     } else {
        //         newCourse.credits.push(parseInt(individualCredits[k], 10));
        //     }
        // }

        // IF CREDITS ARE IN INDIVIDUAL COLUMNS
        if (splitText[j + CREDIT_L_COL].includes("-") || isNullOrWhiteSpace(splitText[j + CREDIT_L_COL])) {
            newCourse.credits.push(0);
        } else {
            newCourse.credits.push(parseInt(splitText[j + CREDIT_L_COL], 10));
        }
        if (splitText[j + CREDIT_P_COL].includes("-") || isNullOrWhiteSpace(splitText[j + CREDIT_P_COL])) {
            newCourse.credits.push(0);
        } else {
            newCourse.credits.push(parseInt(splitText[j + CREDIT_P_COL], 10));
        }
        if (splitText[j + CREDIT_U_COL].includes("-") || isNullOrWhiteSpace(splitText[j + CREDIT_U_COL])) {
            newCourse.credits.push(0);
        } else {
            newCourse.credits.push(parseInt(splitText[j + CREDIT_U_COL], 10));
        }

        // newCourse.compreDate = splitText[j + COMPRE_COL] || "25/12 FN";
        let tempCompreDateStr = splitText[j + COMPRE_COL] || "16/05 FN";
        let compreDateList = tempCompreDateStr.split(" ");
        compreDateList = compreDateList.filter(Boolean);
        compreDateList[0] = compreDateList[0].split("/");
        newCourse.compreDate = {
            date: new Date(2020, parseInt(compreDateList[0][1]) - 1, parseInt(compreDateList[0][0])),
            time: compreDateList[1],
        }

        //Read Lecture Sections
        do {
            let newSection = new Section();

            if (splitText[j + CH_COL]) {
                let commonHourList = splitText[j + CH_COL].split(' ');
                commonHourList = commonHourList.filter(Boolean);
                newSection.commonHour = {
                    // day: commonHourList[0],
                    day: daysDictionary[commonHourList[0]],
                    // hour: commonHourList[1],
                    hour: parseInt(commonHourList[1]),
                    // room: commonHourList[2],
                    room: parseInt(commonHourList[2]),
                };
            }

            newSection.type = "Lecture";
            newSection.sectionNo = parseInt(splitText[j + SECTION_NO_COL]) || 1;
            newSection.roomNo = parseInt(splitText[j + ROOM_NO_COL]);

            let daysList = splitText[j + DAYS_COL].split(' ');
            daysList = daysList.filter(Boolean);
            for (let day in daysList) {
                // if (day) {
                newSection.days.push(daysDictionary[daysList[day]]);
                // }
            }

            let hoursList = splitText[j + HOURS_COL].split(' ');
            hoursList = hoursList.filter(Boolean);
            for (let hour in hoursList) {
                // if (hour) {
                newSection.hours.push(parseInt(hoursList[hour]));
                // }
            }
            do {
                let newInstructor = new Instructor(splitText[j + INSTRUCTOR_NAME_COL], "");
                newSection.instructors.push(newInstructor);
                j += TOTAL_COL;
            } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + COURSE_TITLE_COL]) && isNullOrWhiteSpace(splitText[j + SECTION_NO_COL]) && (j < splitText.length));
            newCourse.lectureSections.push(newSection);
        } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + COURSE_TITLE_COL]) && (j < splitText.length));

        //Read Practical Sections
        if (isNullOrWhiteSpace(splitText[j]) && (splitText[j + COURSE_TITLE_COL] == 'Practical')) {
            do {
                let newSection = new Section();

                newSection.type = "Practical";
                newSection.sectionNo = parseInt(splitText[j + SECTION_NO_COL]) || 1;
                newSection.roomNo = parseInt(splitText[j + ROOM_NO_COL]);

                let daysList = splitText[j + DAYS_COL].split(' ');
                daysList = daysList.filter(Boolean);
                for (let day in daysList) {
                    // if (day) {
                    newSection.days.push(daysDictionary[daysList[day]]);
                    // }
                }

                let hoursList = splitText[j + HOURS_COL].split(' ');
                hoursList = hoursList.filter(Boolean);
                for (let hour in hoursList) {
                    // if (hour) {
                    newSection.hours.push(parseInt(hoursList[hour]));
                    // }
                }
                do {
                    let newInstructor = new Instructor(splitText[j + INSTRUCTOR_NAME_COL], "");
                    newSection.instructors.push(newInstructor);
                    j += TOTAL_COL;
                } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + COURSE_TITLE_COL]) && isNullOrWhiteSpace(splitText[j + SECTION_NO_COL]) && (j < splitText.length));
                newCourse.practicalSections.push(newSection);
            } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + COURSE_TITLE_COL]) && (j < splitText.length));
        }

        //Read Tutorial Sections
        if (isNullOrWhiteSpace(splitText[j]) && (splitText[j + COURSE_TITLE_COL] == 'Tutorial')) {
            do {
                let newSection = new Section();

                newSection.type = "Tutorial";
                newSection.sectionNo = parseInt(splitText[j + SECTION_NO_COL]) || 1;
                newSection.roomNo = parseInt(splitText[j + ROOM_NO_COL]);

                let daysList = splitText[j + DAYS_COL].split(' ');
                daysList = daysList.filter(Boolean);
                for (let day in daysList) {
                    // if (day) {
                    newSection.days.push(daysDictionary[daysList[day]]);
                    // }
                }

                let hoursList = splitText[j + HOURS_COL].split(' ');
                hoursList = hoursList.filter(Boolean);
                for (let hour in hoursList) {
                    // if (hour) {
                    newSection.hours.push(parseInt(hoursList[hour]));
                    // }
                }
                do {
                    let newInstructor = new Instructor(splitText[j + INSTRUCTOR_NAME_COL], "");
                    newSection.instructors.push(newInstructor);
                    j += TOTAL_COL;
                } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + COURSE_TITLE_COL]) && isNullOrWhiteSpace(splitText[j + SECTION_NO_COL]) && (j < splitText.length));
                newCourse.tutorialSections.push(newSection);
            } while (isNullOrWhiteSpace(splitText[j]) && isNullOrWhiteSpace(splitText[j + COURSE_TITLE_COL]) && (j < splitText.length));
        }

        i = j;

        coursePool.push(newCourse);
        console.log("Read course: " + newCourse.courseNo);
    }

    //ACTION TO TAKE AFTER TT IS READ
    document.getElementById("search-bar").addEventListener('keyup', refreshAll);
    document.getElementById("search-bar").addEventListener('change', refreshAll);
    document.getElementById("search-bar").addEventListener('input', refreshAll);
    document.getElementById("search-bar").addEventListener('search', refreshAll);
    document.getElementById("instructor-toggle").addEventListener('change', refreshAll);
    document.getElementById("color-toggle").addEventListener('change', refreshAll);
    refreshAll();
}

window.onload = readttbookletserver;