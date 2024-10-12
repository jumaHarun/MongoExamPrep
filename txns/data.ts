import { Document } from "mongodb";

export type TTxn = {
  date: Date;
  amount: number;
  transaction_code: "buy" | "sell";
  symbol: string;
  price: string;
  total: string;
};
export interface DBTxn extends Document {
  account_id: number;
  transaction_count: number;
  bucket_start_date: Date;
  bucket_end_date: Date;
  transactions: TTxn[];
}

type TTierAndDetails = {
  [key: string]: {
    tier: string;
    id: string;
    active: boolean;
    benefits: string[];
  };
};
export interface DBCustomer extends Document {
  username: string;
  name: string;
  address: string;
  birthdate: Date;
  email: string;
  active: boolean;
  accounts: number[];
  tier_and_details: TTierAndDetails;
}

export interface DBAccount extends Document {
  account_id: number;
  limit: number;
  products: string[];
}

export const LIMITS = [10000, 9000, 7000, 8000, 3000, 5000];

export const PRODUCTS = [
  "Brokerage",
  "InvestmentStock",
  "CurrencyService",
  "Commodity",
  "Derivatives",
  "InvestmentFund",
];

export const SYMBOLS = [
  "znga",
  "adbe",
  "aapl",
  "fb",
  "csco",
  "intc",
  "amd",
  "ebay",
  "nflx",
  "sap",
  "nvda",
  "tsl",
  "ibm",
  "team",
  "goog",
  "amzn",
  "crm",
  "bb",
  "msft",
];

export const USERNAMES = [
  "roconnor",
  "patrick05",
  "odonnellbrandon",
  "ronald62",
  "susanfranco",
  "brownbrian",
  "hjohnson",
  "kanelinda",
  "petergilbert",
  "laurapatterson",
  "williamstone",
  "williamadams",
  "nathan71",
  "hunterdaniel",
  "alexsanders",
  "luke58",
  "eric10",
  "qjohnson",
  "miranda64",
  "hmccarty",
  "efischer",
  "mollyspencer",
  "weaverlarry",
  "murraygregory",
  "robertperez",
  "umarshall",
  "ihill",
  "johnsonshelly",
  "dianefoster",
  "caroline49",
  "samantha27",
  "kroberts",
  "jeremiah94",
  "steven82",
  "icooke",
  "christinadavies",
  "lisapowell",
  "archersarah",
  "mccartyjonathan",
  "zgrant",
  "chelsey19",
  "brenda56",
  "leechristine",
  "christopherdean",
  "fordjames",
  "ecollins",
  "taylorbullock",
  "lauren69",
  "derek98",
  "shelbyoliver",
  "lyoung",
  "xgrant",
  "ethanarias",
  "karenfarrell",
  "jenniferstephens",
  "hmyers",
  "janetharris",
  "rebecca82",
  "patriciawade",
  "cynthiaunderwood",
  "beverly20",
  "hornlucas",
  "bryanjones",
  "courtneyholland",
  "ashley97",
  "kylewilliams",
  "swiggins",
  "dominique55",
  "tknight",
  "thomas48",
  "hurstmatthew",
  "dana88",
  "whitejill",
  "bobby06",
  "michael24",
  "kathyjones",
  "natalie11",
  "andreaking",
  "hthornton",
  "allenhubbard",
  "steven67",
  "tammygonzalez",
  "emily13",
  "mathewsnicholas",
  "stephen89",
  "avega",
  "fgibson",
  "wmartinez",
  "joshuagarcia",
  "tateashley",
  "shanebrown",
  "todd60",
  "perezsarah",
  "uklein",
  "tinajacobs",
  "wendy61",
  "marysmith",
  "ashley98",
  "thomascunningham",
  "wilcoxjustin",
  "weberdominic",
  "nicole28",
  "wwilson",
  "ramirezbrian",
  "holmesjasmine",
  "zriley",
  "ojohnson",
  "nunezdale",
  "meganbrewer",
  "gburton",
  "emiller",
  "sherryrobinson",
  "simpsonjared",
  "williammurphy",
  "terrychristine",
  "sydney77",
  "sthompson",
  "amanda41",
  "ksweeney",
  "christine68",
  "pwarren",
  "millerrenee",
  "rwelch",
  "qramsey",
  "serranobrian",
  "lawrence38",
  "uvelazquez",
  "stephenthompson",
  "james75",
  "jacobmiller",
  "icook",
  "sarathompson",
  "oroberts",
  "awilliams",
  "hernandezlauren",
  "austinfisher",
  "jdavis",
  "mgray",
  "jeffaustin",
  "julierobertson",
  "caitlinmcdonald",
  "rachel83",
  "mckenzie36",
  "roger47",
  "maria18",
  "wesley20",
  "rfox",
  "campbellalicia",
  "jennifer33",
  "joshua52",
  "skinnercraig",
  "imurphy",
  "josephswanson",
  "rhondagreene",
  "krystalanderson",
  "briannamercado",
  "zimmermanchristopher",
  "christopherallen",
  "apeck",
  "emily28",
  "qknight",
  "wilsonandrew",
  "psnow",
  "dpitts",
  "andreawalker",
  "steven28",
  "johnsonjohn",
  "monica24",
  "eugene04",
  "watsonbridget",
  "guerrerothomas",
  "cody34",
  "nicole89",
  "ogonzalez",
  "edwardszachary",
  "joel58",
  "jeremyclark",
  "walshtimothy",
  "alvarezdavid",
  "portermaria",
  "nathaniel64",
  "carrollanita",
  "leonardbryan",
  "jennifer58",
  "denisepayne",
  "pfranklin",
  "nicholasbarber",
  "amartin",
  "gregoryharrison",
  "xestrada",
  "anntaylor",
  "xgarcia",
  "oliviamcconnell",
  "jsaunders",
  "christophercooper",
  "okrueger",
  "xrodriguez",
  "steve73",
  "rogersdenise",
  "michael22",
  "johnmartinez",
  "matthewray",
  "jamesray",
  "jacksoncolleen",
  "rodriguezjeffrey",
  "nguyenjulie",
  "rmason",
  "sarahbrooks",
  "michael58",
  "charlotte30",
  "jennifer15",
  "ashley11",
  "cbradley",
  "nicholassnyder",
  "thomasboyd",
  "aspencer",
  "thomasmendoza",
  "ronaldbarton",
  "ubentley",
  "davidestrada",
  "bernardowens",
  "keith63",
  "uwong",
  "hardinsharon",
  "jessica94",
  "anthonygarza",
  "david77",
  "hpatrick",
  "durankatie",
  "patrick23",
  "ogreen",
  "emily48",
  "zsanders",
  "jennifer54",
  "anthony45",
  "obrienstephanie",
  "abrown",
  "garymiller",
  "gonzalesgabriel",
  "marc02",
  "stricklandjeffery",
  "vjordan",
  "elizabethjackson",
  "waterskatherine",
  "joshua25",
  "amanda70",
  "robertbradshaw",
  "timothyayers",
  "ianjones",
  "matthewharris",
  "johnsonbarbara",
  "paultorres",
  "stricklandmichael",
  "zcole",
  "hernandezlouis",
  "tracydavis",
  "earroyo",
  "yfreeman",
  "kevinbenson",
  "jennifer12",
  "vcarpenter",
  "blairholly",
  "hillrachel",
  "markwells",
  "raymond33",
  "carolynmorris",
  "barnessarah",
  "stewartmonique",
  "david37",
  "thomasdavid",
  "utorres",
  "bmoran",
  "spearsalec",
  "morgandenise",
  "greenmelanie",
  "mirandachad",
  "nicolesmith",
  "salazarbilly",
  "marylong",
  "melinda02",
  "william51",
  "sharon50",
  "elizabeth49",
  "ebeasley",
  "williamrojas",
  "bakerandre",
  "emilybrooks",
  "kristinabaird",
  "linda48",
  "patricia44",
  "thompsonkevin",
  "mwells",
  "casey21",
  "fmiller",
  "stephanie68",
  "jdawson",
  "suzanne81",
  "courtneysexton",
  "lisaroberts",
  "charleshudson",
  "eric29",
  "amy56",
  "odonovan",
  "riversmckenzie",
  "lschwartz",
  "martinrichard",
  "richardsanchez",
  "glopez",
  "zchandler",
  "nathaniel41",
  "eroberts",
  "charlescollins",
  "nicholassmith",
  "rivaslonnie",
  "brownanne",
  "kingraymond",
  "carla86",
  "gonzalezjonathan",
  "mortonaustin",
  "kelly68",
  "angelathomas",
  "audreyortiz",
  "wellsjoseph",
  "patricia65",
  "gfriedman",
  "janetking",
  "qnelson",
  "zcampbell",
  "davidsonomar",
  "erobinson",
  "kylejenkins",
  "stonekaren",
  "lisanavarro",
  "ambercraig",
  "amanda78",
  "walkerashley",
  "pjordan",
  "djames",
  "lejoshua",
  "tracyedwards",
  "ryan87",
  "jmitchell",
  "twright",
  "jenniferhopkins",
  "velazquezangela",
  "candace06",
  "leeortiz",
  "hughesann",
  "ricechristina",
  "stewartmichele",
  "dawsonmelissa",
  "nsalinas",
  "markjohnson",
  "nelsonmaria",
  "yjohnson",
  "marccolon",
  "ecasey",
  "fcain",
  "anthonyandrade",
  "dianabautista",
  "nmason",
  "peter77",
  "kimberlycarpenter",
  "mariebrady",
  "amanda54",
  "avaughan",
  "maryfuller",
  "jlee",
  "sarahhayden",
  "xdavis",
  "maxwellhannah",
  "nlawson",
  "wellsantonio",
  "mirandajones",
  "matthew71",
  "kwelch",
  "mmiller",
  "hrogers",
  "pbrown",
  "xavierwillis",
  "laura78",
  "nicole25",
  "jason27",
  "raymond47",
  "sharpallison",
  "rebecca18",
  "kevinsellers",
  "yubarry",
  "bishopshawn",
  "edward39",
  "erikadavis",
  "jgutierrez",
  "toneal",
  "shawn43",
  "rcannon",
  "uwhite",
  "hillcaroline",
  "gwendolynwilliams",
  "melissaho",
  "james47",
  "landerson",
  "spencealexis",
  "smccall",
  "morrowhenry",
  "jameshawkins",
  "catherine45",
  "timothyvelasquez",
  "selenamunoz",
  "zachary93",
  "davisjames",
  "christophersnyder",
  "kayla67",
  "hbond",
  "heather23",
  "johnkrause",
  "diazsharon",
  "atorres",
  "uortiz",
  "leekara",
  "andrew79",
  "jeffreyskinner",
  "morrisnicole",
  "rothdaryl",
  "hallyvonne",
  "james33",
  "kristen26",
  "isabel77",
  "juliemccoy",
  "robersonmichael",
  "linda08",
  "ncardenas",
  "joshua27",
  "michelewilliams",
  "floressandra",
  "alexandra72",
  "nataliebrooks",
  "wmanning",
  "wmurray",
  "jperez",
  "warrenashley",
  "keithbuck",
  "glennkimberly",
  "qwaller",
  "andrewhamilton",
  "scottfisher",
  "pgilbert",
  "andrea41",
  "thomas16",
  "emily32",
  "stephaniefreeman",
  "michael73",
  "nicholas29",
  "cameron30",
  "amandawilliams",
  "gsmith",
  "peterwolfe",
  "joseph83",
  "lisa89",
  "santosjordan",
  "ggreen",
  "ebonyoconnor",
  "tracierodriguez",
  "katherinenunez",
  "wesleygill",
  "jose42",
  "fletchernicole",
  "robin78",
  "wolfheather",
  "crodriguez",
  "bcherry",
  "rhonda93",
  "smcintyre",
  "madeline96",
  "clifford40",
  "martinallen",
  "mistyjohnson",
  "matthewcochran",
  "craiglee",
  "portermichael",
  "ayalafrances",
  "charles28",
  "qlopez",
  "willie94",
  "leeryan",
  "joshua19",
  "justinjohnson",
  "joneskevin",
  "rodney14",
  "zgraham",
  "tina17",
  "valenciajennifer",
  "billy76",
  "briana39",
  "paul82",
  "michael26",
  "laurie54",
  "allenjennifer",
];

export const ACCOUNT_NUMBERS = [
  508146, 304194, 550665, 744220, 591354, 928230, 470650, 560166, 258443,
  467651, 632145, 211992, 238687, 581161, 827843, 481744, 723307, 412203,
  809533, 608510, 50948, 954254, 444626, 954953, 155327, 84115, 842570, 226398,
  394725, 830030, 903542, 505282, 495834, 802298, 351206, 351905, 570451,
  161460, 872805, 206062, 490490, 820176, 651827, 740604, 960568, 996263,
  150321, 430152, 215284, 436056, 719203, 951661, 78388, 973057, 287686, 312740,
  817222, 809938, 231223, 642405, 166084, 572998, 643375, 966314, 764007,
  348140, 738462, 212579, 451481, 546681, 731178, 846426, 564812, 788678,
  737334, 505260, 154492, 747054, 235779, 458381, 637895, 391838, 965232,
  446474, 846855, 870933, 56045, 235824, 541517, 434613, 590768, 938988, 622628,
  265862, 655073, 982709, 887464, 682405, 105134, 374953, 617621, 527223,
  181212, 403363, 446747, 733568, 893845, 987355, 446093, 304914, 268769,
  443252, 944895, 360452, 406971, 662854, 360655, 807144, 87409, 682382, 122923,
  183917, 464470, 448325, 278149, 950555, 408143, 373260, 738145, 602559,
  111626, 77690, 620350, 179746, 272399, 530132, 477706, 794675, 710568, 985280,
  998674, 957207, 231225, 852986, 294632, 312942, 308680, 600800, 382550,
  951840, 300405, 266920, 980184, 238373, 692687, 188293, 246018, 558048,
  459826, 149440, 451189, 712597, 775690, 180580, 359211, 691740, 146756,
  917475, 814901, 997433, 839727, 77397, 131176, 390126, 523931, 123689, 469791,
  114739, 884849, 126102, 773322, 615886, 109710, 146621, 300879, 635729,
  624859, 376846, 392268, 761257, 147275, 236908, 372043, 223693, 531283,
  755845, 654939, 140557, 732327, 198100, 136137, 508373, 689102, 569434,
  624318, 97487, 86373, 171900, 95914, 669029, 94177, 950785, 426231, 183400,
  569388, 363315, 431260, 615233, 383701, 575454, 456867, 557547, 289492,
  628472, 386971, 992584, 321695, 523507, 659017, 777962, 849766, 921942,
  296866, 816481, 442616, 703331, 890055, 768875, 278669, 238662, 784910,
  378693, 549655, 151378, 135185, 836981, 795756, 460069, 814632, 138703,
  623060, 994208, 118003, 447644, 906290, 881867, 362683, 380860, 174471,
  436662, 903675, 884822, 103062, 51645, 602560, 911207, 652071, 902818, 702924,
  614670, 174786, 208252, 861121, 827328, 434948, 669413, 373169, 246735,
  517824, 857050, 529190, 638191, 371974, 782023, 287485, 129932, 867593,
  781775, 788021, 198307, 959196, 547625, 526731, 624886, 432388, 230611, 76339,
  899684, 339477, 684319, 551774, 181687, 303316, 674464, 946116, 420660,
  324287, 337202, 299100, 276528, 676471, 691917, 59378, 350483, 837092, 460206,
  503933, 804549, 966629, 567199, 607567, 297499, 415745, 349536, 825051,
  333075, 450464, 96431, 963591, 182387, 333684, 660732, 692278, 351069, 212219,
  462528, 972041, 588012, 90117, 499604, 278603, 856800, 792665, 913758, 794875,
  884552, 498251, 87389, 782383, 429071, 694827, 623937, 933061, 486521, 667791,
  868181, 903651, 545935, 235687, 501408, 423254, 364643, 667881, 618708,
  702610, 60664, 885723, 182094, 527745, 979257, 51080, 371138, 254176, 855290,
  891045, 168924, 904260, 991412, 754737, 683393, 358036, 632303, 228290,
  874631, 397774, 952430, 815377, 216662, 722342, 275355, 69394, 468638, 598525,
  454704, 719343, 188363, 189806, 244662, 664679, 837317, 951324, 570536,
  299822, 130610, 406478, 847533, 243963, 312854, 447601, 248380, 858473,
  239538, 936320, 637133, 547567, 718678, 103346, 51822, 980639, 66611, 654392,
  585158, 532811, 83546, 493235, 904799, 964509, 162819, 972116, 617243, 292528,
  370854, 895735, 161714, 733789, 868245, 882090, 300714, 509290, 968012,
  401811, 798380, 950438, 644552, 292438, 565989, 162007, 465052, 158557,
  310074, 422649, 494340, 959435, 143720, 146967, 427384, 304730, 931314,
  141237, 66589, 611425, 857368, 556338, 646815, 916567, 275187, 175894, 914559,
  233540, 691668, 973739, 572981, 165706, 226865, 856354, 556654, 469336,
  176390, 964645, 316726, 505367, 276878, 230586, 540237, 313907, 786406,
  147575, 588722, 558864, 840433, 59715, 751513, 621326, 222581, 62845, 507622,
  219169, 126444, 914514, 642929, 90019, 720370, 729752, 384335, 455692, 502774,
  236337, 153460, 631901, 267252, 327942, 551334, 485390, 511276, 870028,
  386231, 980550, 343230, 352837, 518243, 911518, 171769, 328686, 107787,
  249078, 876702, 429119, 856329, 904392, 428217, 831097, 515560, 415928, 76399,
  557174, 541119, 514049, 109478, 167440, 591110, 317852, 336601, 170980,
  467666, 582902, 763879, 385397, 371349, 526519, 387877, 769877, 468861,
  288877, 639500, 147641, 402535, 280758, 875868, 491860, 861706, 495198,
  443178, 54685, 516709, 226641, 999198, 704067, 989774, 101383, 513374, 163788,
  667833, 181984, 522933, 591359, 858202, 923468, 571311, 79985, 370583, 534637,
  797297, 264502, 741049, 137090, 980867, 360322, 271109, 721093, 433314,
  671035, 895913, 261796, 486766, 384111, 584594, 657121, 896364, 645476,
  163269, 475604, 176639, 190959, 448816, 278866, 388578, 884748, 62713, 409325,
  300446, 574197, 565468, 640857, 210670, 875074, 379691, 96224, 141597, 561206,
  194523, 240753, 525396, 730522, 944578, 177814, 506677, 133274, 533671,
  839760, 158757, 126668, 187397, 96021, 470078, 426688, 918103, 436026, 129238,
  945232, 795040, 900264, 936999, 991663, 141868, 546211, 368168, 462501,
  632807, 935353, 879426, 846344, 604077, 370468, 823026, 763063, 463155,
  410092, 716494, 603062, 864905, 436071, 136139, 389592, 560102, 671031,
  913254, 333642, 578413, 841135, 380955, 418570, 863889, 413293, 719065,
  883283, 82467, 429282, 164260, 77032, 708669, 401048, 358133, 811931, 489178,
  68034, 54368, 459185, 433296, 509384, 307731, 949471, 309490, 986996, 177069,
  57322, 120556, 145588, 525530, 54977, 111287, 485840, 951500, 707812, 207806,
  568852, 55473, 70492, 63141, 51617, 157495, 648052, 209363, 612105, 987988,
  206656, 211212, 423171, 212024, 542264, 199711, 242287, 845284, 210513,
  409753, 798739, 311880, 678293, 568897, 859697, 640540, 727837, 859246,
  816962, 720825, 291224, 287076, 185549, 932130, 62872, 541950, 453480, 330961,
  738278, 904434, 572301, 925342, 375655, 945366, 472963, 828552, 912196,
  222061, 248398, 299072, 161597, 675631, 851281, 517750, 614135, 207715,
  678540, 71148, 120917, 668348, 437245, 826590, 353465, 380253, 595194, 344107,
  867364, 681381, 332179, 895054, 184422, 225602, 131201, 404183, 305656,
  133163, 409978, 238139, 440243, 444528, 200611, 363138, 969836, 698136,
  626807, 271625, 471113, 879203, 977774, 529972, 759185, 893678, 317449,
  768386, 493938, 489563, 604732, 257801, 341830, 478510, 996624, 329562,
  692927, 442724, 606333, 825576, 531370, 692070, 909802, 405559, 586395,
  759997, 327916, 626536, 180092, 312758, 510332, 157990, 984021, 346408,
  565763, 466310, 685011, 789739, 544701, 995700, 466107, 523409, 742134,
  497929, 225511, 124977, 741232, 67224, 737623, 965131, 199962, 57161, 147085,
  788442, 315164, 981028, 53124, 956881, 153377, 808642, 459249, 823908, 950726,
  537158, 88163, 139687, 89698, 591839, 706316, 384995, 397600, 664533, 323327,
  129968, 833855, 460514, 255004, 857689, 130870, 101920, 267947, 401997, 51253,
  278497, 748530, 718470, 98267, 390745, 889573, 700611, 765101, 995034, 944119,
  987387, 604215, 969957, 396044, 391557, 86494, 355301, 131885, 953567, 826367,
  187107, 714727, 117971, 987501, 265264, 934872, 350181, 907816, 154391,
  802829, 97500, 260799, 701602, 693557, 720906, 934308, 323373, 234369, 73934,
  753126, 357510, 328915, 965514, 621061, 394038, 144469, 924182, 122436,
  126833, 990274, 510435, 805151, 243254, 667014, 910860, 321208, 509894,
  383777, 776263, 999137, 436090, 871666, 626698, 229182, 466489, 177004,
  931602, 666856, 921679, 612356, 813016, 483041, 312052, 214845, 403531,
  923190, 674433, 935752, 452778, 371264, 155111, 639934, 627690, 771641,
  563516, 896066, 740050, 552174, 317282, 122551, 709294, 271554, 979789,
  388334, 882334, 124603, 470615, 448268, 897284, 165597, 782938, 614544,
  419542, 261248, 788012, 155156, 679236, 487210, 185394, 777752, 895006,
  814687, 767808, 428110, 105098, 293516, 82008, 739622, 700387, 519072, 481754,
  454289, 326212, 660047, 226253, 263864, 377488, 859762, 785013, 611229,
  289795, 501213, 537968, 333315, 924297, 155224, 558555, 884611, 340147,
  352008, 784245, 785350, 198855, 955053, 895434, 618333, 515170, 134434,
  475102, 698900, 369055, 951017, 462180, 451764, 979226, 920666, 771935,
  784651, 681468, 680724, 558623, 690308, 423510, 831600, 968920, 588389,
  182103, 328466, 483220, 591026, 922402, 921410, 852208, 183253, 206973,
  240685, 724673, 534789, 305286, 260504, 752970, 293111, 508452, 328105,
  240640, 577112, 635650, 918097, 674364, 859284, 347313, 199559, 59819, 678107,
  777410, 550456, 642554, 461954, 88799, 398775, 706522, 442357, 178000, 557378,
  770487, 892096, 714030, 233104, 578645, 744023, 292277, 977982, 285919,
  120472, 774952, 328304, 763768, 619619, 816560, 806864, 111213, 774388,
  876196, 436291, 421981, 946196, 473116, 150713, 716353, 132017, 253017,
  118623, 335182, 864809, 193987, 835955, 314671, 571880, 602143, 347967,
  301773, 942656, 247853, 520970, 103659, 149247, 118127, 585432, 668634,
  516280, 627333, 87286, 770262, 599752, 673123, 549170, 412983, 840171, 581892,
  132536, 831465, 647189, 700455, 807359, 329183, 519639, 357823, 584846, 66698,
  743212, 497088, 912504, 436380, 322023, 598715, 387816, 487188, 833631,
  778358, 980056, 962477, 341068, 308492, 214555, 524194, 425815, 980440,
  116390, 473748, 280867, 741476, 533756, 262488, 70441, 791099, 428949, 308785,
  65661, 790197, 657111, 611998, 951224, 762459, 109139, 937558, 154636, 892478,
  172950, 844838, 720842, 678737, 279899, 380304, 313926, 721947, 300735,
  657880, 499796, 218657, 134905, 558349, 470206, 995007, 720436, 435187,
  729049, 446688, 696619, 482653, 137994, 881767, 412013, 348352, 952666,
  185104, 303463, 822672, 969775, 976021, 569443, 973067, 851625, 167939,
  759079, 51474, 317556, 929644, 906796, 524171, 810947, 835570, 553343, 868418,
  165436, 423152, 601671, 162572, 744022, 228685, 885960, 61329, 631593, 896243,
  891056, 469980, 683382, 86702, 893492, 165279, 962115, 413410, 716490, 518420,
  87965, 960469, 568788, 851242, 894281, 979584, 332860, 452686, 950569, 585228,
  871665, 584619, 168349, 762032, 842086, 445672, 202669, 331169, 569420,
  570818, 135875, 226114, 122908, 201361, 175926, 337979, 407008, 853542,
  120270, 168620, 938326, 270514, 403445, 306033, 914197, 433811, 616103,
  500991, 880595, 452100, 717404, 769503, 736326, 813925, 622916, 222322, 59275,
  155366, 141474, 757913, 412107, 453177, 228298, 586861, 90414, 356073, 868414,
  928506, 396162, 602958, 120548, 262642, 225930, 668857, 981710, 852937,
  988949, 866159, 417993, 245503, 933986, 816225, 659814, 501702, 482719,
  475571, 447044, 377292, 264514, 931483, 975329, 627629, 204117, 971879,
  170945, 849780, 870466, 572114, 611752, 303388, 345766, 658755, 71674, 541512,
  721914, 516700, 88112, 292314, 630132, 602191, 277161, 935023, 674880, 587785,
  195007, 713819, 339678, 576646, 285707, 921629, 201862, 878471, 244782,
  369761, 771691, 83355, 319308, 731206, 675420, 509009, 918539, 237182, 778434,
  803669, 894663, 678037, 785786, 744624, 525945, 593441, 292224, 514152,
  404845, 644474, 153224, 326795, 344075, 886274, 129343, 461793, 385361,
  177799, 879238, 95826, 320075, 112468, 209755, 855373, 648021, 610738, 571279,
  55104, 855057, 727418, 201771, 774172, 445713, 987709, 375872, 935768, 423202,
  229899, 455365, 741535, 917660, 85791, 410867, 460439, 323636, 981035, 618428,
  87437, 227194, 837602, 387979, 874413, 749493, 159243, 698826, 795909, 937618,
  103536, 913332, 539248, 138634, 429604, 177869, 89646, 164836, 415759, 982027,
  577795, 745028, 460192, 273420, 285957, 160912, 917549, 552022, 862214,
  623185, 879735, 726966, 92217, 494443, 506845, 633806, 461657, 89466, 260499,
  77831, 958881, 923502, 540341, 130832, 937257, 565145, 789393, 385025, 996752,
  918519, 384574, 253554, 331043, 941541, 650729, 617210, 377923, 700899,
  716662, 580546, 833317, 761387, 632543, 587875, 335665, 303025, 317931, 82071,
  437371, 633220, 185130, 847434, 255267, 139582, 725209, 729536, 232492, 85228,
  701440, 616016, 943953, 459245, 639241, 947606, 662207, 595585, 873264,
  426335, 201161, 310737, 678779, 549112, 298562, 491353, 992602, 534355,
  205355, 853387, 616805, 630581, 498050, 881765, 912610, 871955, 484387,
  249810, 372015, 225728, 668949, 301176, 616602, 332256, 770312, 271186,
  388950, 297819, 255695, 796043, 838666, 905507, 385319, 726384, 833412,
  371629, 832510, 813161, 199407, 363061, 549289, 453851, 650995, 691022,
  898675, 240787, 593963, 683108, 356905, 686986, 851226, 943710, 152748,
  506711, 496316, 992173, 333677, 736396, 947160, 916626, 614528, 358213,
  205563, 775273, 186687, 175615, 141586, 596444, 59768, 930584, 898156, 344523,
  616040, 327520, 968786, 576395, 356904, 719866, 964253, 280906, 514695,
  674132, 646800, 619693, 126092, 741673, 312230, 677943, 55958, 774823, 116508,
  734321, 633630, 442170, 661661, 218214, 575786, 664029, 203285, 129971,
  973364, 448304, 827390, 327655, 994562, 69218, 218101, 610763, 643169, 826984,
  375486, 981821, 385747, 179020, 558061, 657218, 690617, 912589, 632705,
  981415, 325377, 372442, 472050, 58303, 265053, 996840, 712356, 544598, 874342,
  455317, 87191, 492843, 351063, 142442, 304450, 656564, 365969, 906770, 981753,
  750828, 700880, 214649, 323481, 811606, 351402, 766886, 113123, 463278,
  328627, 976027, 354107, 330318, 657243, 273823, 235286, 171129, 688134,
  818687, 838304, 932908, 896644, 779716, 580317, 688901, 202946, 814989,
  350748, 302149, 719393, 528224, 249109, 905866, 667074, 599670, 308215,
  344885, 993908, 727330, 713620, 596107, 625263, 570599, 552357, 609817,
  412109, 74632, 910579, 118134, 100721, 156715, 745392, 757619, 986196, 429495,
  894704, 559866, 951849, 627788, 960734, 261962, 730824, 708479, 842047,
  743205, 958411, 881424, 921272, 79999, 839927, 358684, 144876, 876756, 368133,
  689984, 155475, 147334, 635410, 223583, 193228, 372914, 666556, 130717,
  711252, 741762, 131371, 541871, 515844, 212417, 181073, 785218, 261128,
  765127, 679340, 457709, 463119, 475387, 958231, 130514, 696749, 902507,
];
