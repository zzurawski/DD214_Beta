import React from "react";
import { Card } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { QUERY_ARTICLES } from "../Utils/queries";
import "../components/Styles/articles.css"
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function Articles() {
    const { loading, data } = useQuery(QUERY_ARTICLES);
    const articles = data?.articles || [];
    return (
        <div id="articles-group">
            {loading ? (
                <h3 className="loading3">Loading Articles....</h3>
            ) : (
                <Card.Group className="centered" itemsPerRow={1} key={articles.id}>
                    <Card
                    
                className="articleCard1"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                    <Card.Content id='article1'>
                    <Card.Header className="title">
                    RETRIEVAL OF THE MEMORIAL PLAQUE FROM CLEVELAND’S MT. CARMEL CHURCH (EAST) AND RESULTANT STORY
                    </Card.Header>
                    <Card.Meta>Posted by JC Sullivan</Card.Meta>
                    <Card.Description className="article-body1">
                     While re-dedicating the Irish Cultural Garden on Cleveland’s MLK Drive, the late Senator Voinovich said, “I have always found those closest to their roots to be the best citizens.” I can’t argue with that. Growing up in what has been called ‘Ethnicity’, Cleveland is home to many who have remained close to their roots. One of those is the Italian Community.
                    <br></br><br></br>On a recent morning I drove to the Office of MCR Inc., Willoughby, and founder Frank Piunno, Sr. I was there to photograph the plaque that is the subject of this story. Not surprisingly, several members and friends of the extended Piunno family were also there. I was privileged to meet founder Frank Piunno, Sr., as well as Lou Lentine , Antony Granito, Don and Tony Mazzoliini and my friend Russ Davis.
                    <br></br><br></br><img alt="MichaelPiunno" src={require('../article-images/MichaelPiunno.jpg')} className="image1"/>The bronze plaque originally hung on a wall of the old Our Lady of Mount Carmel Church in the East 110th Street and Woodland Avenue neighborhood of Cleveland. When the Diocese of Cleveland announced it would close the Church, two co-conspirators sprang into action.
                    <br></br><br></br>Frank Piunno, Sr., with his co-conspirator Russ Davis, seized the Plaque from the Church before it disappeared to who knows where and would probably have been melted down for the scrap value by outsiders. On it are the names of twenty parishioners who were killed in Action in WWII. One of the names on this plaque is that of Sgt. Michael F. Piunno, whose Italian-American family and community have never forgotten him.
                    <br></br><br></br>Michael was born Sept. 24, 1922, to Francesco and Maria Giuseppa Piunno, the 7th of 8 children: Anna Marie (Fatica), Giuseppe (Joseph), Donato (Dan), Rose Marie (Granito), Joseph Anthony, Camilla “Carrie” Marie, with the Trinitarian Order, Michael Joseph and Frank Joseph. While in grade school Michael was an Altar boy, like so many of us who lived in Catholic parishes were. Afterwards he studied at Benedictine High School, graduating in 1942.
                    <br></br><br></br><img alt="89" src={require('../article-images/89thCrossingtheRhine[655].jpg')} className="image2"/>Michael enlisted in the United States Army Nov. 16, 1942. After Basic Training he was assigned to the 89th Infantry Division. They deployed to France where they received additional training, most likely from combat veterans. The Division was part of General Patton’s Third Army. 
                    <br></br><br></br> Sgt. Piunno was part of the action that began on the 26th of March as they crossed the Rhine “under intense fire”.  Once into Germany, on April 4, they overran Ohrdruf, a subcamp of Buchenwald, where Michael undoubtedly witnessed the atrocities there. It was the first concentration camp liberated by the U.S. Army.  
                    <br></br><br></br>According to the 89th Division History, they captured Zwickau, Germany on April 17, the day Michael was killed. Up until V-E Day the Division lost 325 battle deaths and 1,029 wounded.
                    <br></br><br></br><img alt="OLMC" src={require('../article-images/OLMCPlaque.JPG')} className="image3"/> It wasn’t until 1949 that Michael’s remains were returned to the family in Cleveland. On March 26 a Requiem Mass was cele brated at Our Lady of Mount Carmel. Burial took place in the Veterans Section of Calvary Cemetery, Cleveland, four years after his death.
                    <br></br><br></br>The original plaque now hangs honorably in the lobby of MCR Inc.. with the name of Michael J. Piunno and nineteen other heroes from the parish who were Killed in Action during the war. The American flag that covered Michael’s coffin is also displayed there. Michael’s family received his Purple Heart, Combat Infantryman Badge and other decorations earned. 
                    < br></br><br></br>Like other families who lost loved ones during the war, Michael’s death was suffered in silence. However, his family, and the Italian community of Cleveland. have not been silent about his memory and sacrifice.
                    < br></br><br></br>Each year Benedictine High School,  Michael’s Alma Mater, holds an Italian Festa Night at the school in his honor. 

                    </Card.Description>
                        <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'I found this to be interesting regarding our local veterans! Read more on DD214Chronicle.com'}
                        hashtag="#DD214Chronicle"
                        >
                            <FacebookIcon size={32} round className="fb" />
                        </FacebookShareButton>
                    </Card.Content>
                    </Card>


                    <Card
                className="articleCard1"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                    <Card.Content id="article2">
                    <Card.Header className="title">
                    Phoenix 62, American Hero
                    </Card.Header>
                    <Card.Meta>Posted by Jacob Arnett</Card.Meta>
                    <Card.Description className="article-body1">
                    “Hero? I’m no hero! Just doing my job to the best of ability, and for my brothers.” I could picture Pat saying this to me, upon reading this. I’ve had many conversations about his war, the Vietnam War, with John “Pat” McKeany, and my experiences in Iraq and Afghanistan. Pat and his wife Rita would often contact my carpet cleaning company in Las Vegas, Noble Carpet Cleaners, and Pat and I would chat while I cleaned upholstery. I still remember how, when I first arrived to the Mckeany residence, I saw his Vietnam War medals on a plaque on the wall. He told me the story of his participation as a helicopter pilot in a battle called Lam Son 719 which, according to author Larry Freeland, was “The battle that decimated America’s helicopter force in Vietnam.” Unfortunately, in April of 2021, Pat passed away due to complications from Agent Orange-associated cancer. I had known about Pat’s progressive cancer since the day we met, and though he sometimes spoke of his mortality, I made the mistake of bringing up how perhaps he could be thankful for the time he did have when others we’ve known, him and I both, were taken much too soon. I had expressed agreement of one’s questioning of their own mortality, when I should have felt the inclination to pursue the strategy of hope. This mistake I will not make again. I want to leave you with this heroic man’s own words, as Pat did write down his story for his family, a 20-page document simply titled “Vietnam Experience.” The following was written in his hand, from the copy he gave to me.
                  <img src={require('../article-images/PatHUEY[695].png')} className="image1"/><br></br><br></br>On February 18, 1971 a helicopter was shot down onto a landing zone (LZ) named “Ranger North”, resulting in an American helicopter crew member being stranded. There was an attempt to extract the stranded soldier without success. Two days later an operation was conducted to rescue the stranded soldier by the Phoenix (my company). Captain Nelson, of the Phoenix, successfully landed and rescued the stranded soldier. While taking off from the landing zone he encountered heavy enemy fire. He recalled, after the operation, that he saw muzzle flashes on the entire hillside he faced (hillside adjacent to Ranger South) while exiting Ranger North. His helicopter burst in flames. Fortunately, he was able to cut his fuel supply and make an emergency landing onto another hilltop landing zone nearby called Ranger South. Ranger South was surrounded by the enemy, as well. It was amazing that Captain Nelson was able to autorotate the helicopter into the LZ. Cutting the fuel caused an engine failure. He landed on the hilltop LZ which had a clearing large enough for two helicopters. Even though they were still taking fire when they landed, everyone safely exited and moved away from the burning aircraft. 
                  <br></br><br></br>I was flying with Butch Doan, that day, on a separate operation nearby. We heard an emergency radio call from Captain Nelson and immediately flew to the LZ to attempt a rescue. Now there were five Americans on the ground. 
                  <br></br><br></br>Butch and I decided to perform a cork screw approach from about 400’ AGL while circling down to the LZ. We took heavy enemy fire. A small arms round hit between Butch and I, piercing through the helicopter’s console causing plastic to fly everywhere. We took other small arms fire hits as well. When we landed in the LZ the helicopter that made the emergency landing was engulfed in flames. The M-60 machine gun ammunition that was on board the burning helicopter was “cooking off” making the tracers look like a fireworks display. The combination of enemy fire and bullets cooking off from the burning helicopter made for an intense experience. 
                  <br></br><br></br><img src={require('../article-images/PHOENIXPILOTS_CREW.jpg')} className="image2"/>We sat on the ground for what seemed like an eternity. Finally, three of the stranded crew members ran across the LZ and jumped onto our helicopter. The South Vietnamese soldiers, together with the remaining stranded soldiers, were hunkered down trying to avoid the chaos. The enemy fire was intense. As we took off, we were again hit by enemy small arms fire. A short way from exiting the LZ we took a hit from a 50 Caliber round to the helicopter’s mast head. The helicopter started to shake violently. I checked the instruments and everything was in the green. Other than the violent shaking the helicopter was running fine. Fortunately, we were able to fly to a nearby secure LZ (LZ 30) to be rescued. Another one of our Phoenix aircraft went in to get the remaining crew members. Amazingly, everyone made it out alive and there were no American casualties that day. Unfortunately, Captain Nelson died a few days later, in a separate operation on March 5th. I’m proud to say that I was among 6 pilots awarded with the Silver Star that day. The Silver Star is the third highest award under the Medal of Honor and the Cross of Gallantry. All other crew members received Distinguished Flying crosses for their contribution in the operation. These were the first medals for conspicuous gallantry awarded in the Lamson 719 operation. 
                  <br></br><br></br>On March 5, 1971 Captain Nelson was our company flight lead for a 10 aircraft insertion of troops into Landing Zone Sophia inside Laos. Our 10 aircraft followed a few other companies that were inserting troops in front of us. The aircraft in charge of the entire operation lost control of the move causing many aircraft to go off the intended course. The result was devastating since aircraft were landing in an area that was not prepped or secure. 
                  <br></br><br></br>The radios were blaring with every aircraft taking fire and some being shot down. I became enraged as it didn’t make sense that aircraft in front of me were off course and flying too slowly. Fortunately, I made a quick decision not to follow all of the other aircraft. I became flight lead and made an announcement on the radio to have the remaining aircraft follow me into the originally intended LZ location. Its location was a short distance north of where the other aircraft had been landing. It turned out that my decision was one of the best ones I made in Lamson 719. None of the remaining aircraft took any fire.
                  <br></br><br></br>As I was coming out of the correct landing zone there was chaos and confusion. So many helicopters had been shot down or damaged. I met up with my fellow Phoenix pilots in trail formation as we took off to return to Khe Sanh. While gaining altitude I noticed Captain Nelson’s aircraft to the far left. I saw his aircraft burst into flames and explode. It immediately plummeted to the ground from at least 500’ AGL. No ground search could be done at the time since there were so many enemy troops in the area. The bodies of Captain Nelson and his crew were not recovered until 1989. 
                  <br></br><br></br>My last month in Vietnam was pretty quiet except for one event. I wasn’t flying this particular day. Word came that one of our helicopters was shot down. David Soyland was the pilot in command. A few of our helicopter crews were there to help, but the LZ was swarming with enemy and too hot to attempt a rescue. One of the gunships reported that they saw Soyland running away from the enemy as they were firing upon him. To this day they haven’t found Soyland’s remains. Interestingly, his Dog Tags are on display at a Hanoi museum. 
                  <br></br><br></br>President Nixon awarded the 101st Airborne Division with the Presidential Unit Citation for our extraordinary heroism in action against an armed enemy during Lamson 719. 
                  <br></br><br></br>Thank you, Pat 
                  <br></br>Call sign “PHOENIX 62”
                  <br></br>C/158 AVN 101st Airborne Division
                  <br></br>9/20/49-4/26/21

                    </Card.Description>
                    <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'I found this to be interesting regarding our local veterans! Read more on DD214Chronicle.com'}
                        hashtag="#DD214Chronicle"
                        >
                            <FacebookIcon size={32} round className="fb" />
                        </FacebookShareButton>
                    </Card.Content>
                    </Card>
                   
                    <Card
                className="articleCard1"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                    <Card.Content id="article2">
                    <Card.Header className="title">
                    Warrior Beat Drums up Gratifying Therapy for Vets
                    </Card.Header>
                    <Card.Meta>Posted by Jerri Donohue</Card.Meta>
                    <Card.Description className="article-body1">
                    During his stay at the Louis Stokes Cleveland Department of Veterans Affairs Medical Center, Trevor Meyer felt his anxiety spike in the evenings. 
                    <br></br><br></br>“I can’t speak highly enough about the quality of care at the VA,” Meyer said. “The program was great - until 4:30 when the hospital closed.” 
                    <br></br><br></br>The former Navy Corpsman had toured with a band for two years before enlisting in 1997. He attempted various careers after receiving a medical discharge early in 2001, including operating a music studio and club in a Brooklyn, New York warehouse. After a decade, his alcohol abuse made life unman-ageable, however. In 2015, Meyer returned to Ohio to address it.
                    <br></br><br></br><img src={require('../article-images/TrevorHeadshot.jpg')} className="image1"/>His music background helped Meyer during his month at the Veterans Affairs Recovery Center (VARC); he spent his evenings thumping on a practice pad he’d brought with him. A resident observed that the activity seemed “relaxing”. Meyer remembered that comment, and the interest shown by other veterans, when his therapist suggested he find a way to use drums in an alcohol-free environment.
                    <br></br><br></br>“I developed the seed for Warrior Beat there [at the VA],” Meyer said.
                    <br></br><br></br>Within a year of his hospitalization, Meyer and his friend Ben Lehman co-founded Warrior Beat, a 501(c)3 nonprofit that brings drum therapy to veterans dealing with depression, post traumatic stress disorder and other problems. They used grant money to purchase drums and recruited Mike Reyes, a retired Army sergeant and full time musician, to help design a program tailored to veterans with no prior music experience. Then they held weekly group drumming sessions in a rented space in Can-ton, Meyer’s home town.   
                    <br></br><br></br><img src={require('../article-images/drumming.jpg')} className="image2"/>Participants of all ages find the physical activity releas-es endorphins naturally to relieve tension.  Meyer said other benefits include deeper respiration and better circulation. When drumming is a tool to manage pain, individuals suffering from arthritic joints sometimes opt for reduced medicine.   
                    <br></br><br></br>The science of entrainment factors in these positive re-sults.
                    <br></br><br></br>“When there’s a dominant rhythm, lesser ones lock into that major one,” Meyer said. “Everything in our bodies vibrates. It [drumming] synchronizes the left and right parts of our brain, usually within five minutes.”
                    <br></br><br></br>Meyer recommends drumming as a complement to talk therapy because it connects mind, body and spirit. He offered the ex-ample of Wilson Hall, a nonresidential treatment facility in Massillon. Counselors there reported that patients who spent 40 minutes drumming expressed themselves more easily in the subsequent therapy session. 
                    <br></br><br></br><img src={require('../article-images/vetsdrumminggood.jpg')} className="image3"/>The VA in Chillicothe contacted Warrior Beat in 2019 to help implement a drum therapy program. Meyer and Reyes designed an intensive, weeklong course for Veterans Administration person-nel. They certified 30 employees to facilitate drum circles, and have since trained more than 200 staff members at VA fa-cilities in Oregon, Washington, Colorado, Alaska and Arkansas - and in Columbus, Cincinnati, Cleveland and Dayton.
                    <br></br><br></br>When the COVID pandemic struck, the nonprofit developed Vet-erans Drum from Home, a virtual VA program, so that existing drum circles could continue. Homebound veterans began to join. Enrollment grew after social distancing ended. Currently vet-erans in several states access the platform through Veterans Integrated Service Network (VISN). The Veterans Administration supplies the drums.
                    <br></br><br></br>Run in 8-week cycles, the hourlong sessions consist of 15 minutes of instruction, 30 minutes of jamming, and 10 minutes of guided meditation. They conclude with questions and feed-back, and anyone who needs immediate counseling can also speak with VA staff. 
                    <br></br><br></br>A second livestream program offers VA employees 30-minute “de-stressing” sessions. Meyer said some gather as a depart-ment “to have fun making noise without a drum,” beating on desks and incorporating the same techniques taught that week in Veterans Drum from Home. 
                    <br></br><br></br>Although Warrior Beat recently closed its location in Can-ton, it serves a burgeoning number of virtual participants. This fall, Meyer and his work with Warrior Beat will appear on “After Action,” a Public Broadcasting Service series.
                    <br></br><br></br>“The PBS program will be a huge help in promoting our pro-grams nationally,” Meyer said.
                    <br></br><br></br>Meanwhile, some veterans, including Meyer, have made thera-peutic drumming a routine for years.
                    <br></br><br></br>“I drum almost every day for therapy,” Meyer said.
                    <br></br><br></br>To learn about joining a drum therapy program, contact Meyer at
                    <br></br><a href="mailto:trevor@warriorbeat.org">trevor@warriorbeat.org"</a>

                    </Card.Description>
                    <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'I found this to be interesting regarding our local veterans! Read more on DD214Chronicle.com'}
                        hashtag="#DD214Chronicle"
                        >
                            <FacebookIcon size={32} round className="fb" />
                        </FacebookShareButton>
                    </Card.Content>
                    </Card>
                    
                    <Card
                className="articleCard1"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                    <Card.Content id="article2">
                    <Card.Header className="title">
                    Unlikely, Unusual, Unbreakable Friendship: John Glenn and Ted Williams
                    </Card.Header>
                    <Card.Meta>Posted by Nancy Peacock</Card.Meta>
                    <Card.Description className="article-body1">
                    Down through the ages the military has forged unlikely friendships between fellow combatants who have been responsible for saving each other’s lives. Author Adam Lazarus has successfully chronicled one of the more fascinating examples of this phenomena with his newest book The Wingmen: The Unlikely, Unusual, Unbreakable Friendship Between John Glenn and Ted Williams (Citadel Press, August 2023).
                    <br></br><br></br>In 1942, Williams led the American League in home runs, RBI, and batting average. Despite these impressive stats, Williams had a reputation for quarreling with reporters, being short-tempered with fans, and being lazy in the outfield. Although he had a protected draft status as the sole support of his mother, he enlisted in the Navy at the end of the 1942 season. He became an enthusiastic fighter pilot, and after the war Williams was made a Volunteer Reservist, and promoted to the rank of captain.
                    <br></br><br></br><img src={require('../article-images/Wingmenbookcover.jpeg')} className="image1"/>The Selective Service Extension Act was passed in 1950.  Two years later, during the tenth year of Williams’ career with the Boston Red Sox, the 32-year-old was abruptly called up to active duty in the Korean War. Nowadays, it is hard to imagine a sports superstar with a wife and child who would be required to return to combat. But patriotism was popular among World War II veterans and some thought Williams’ celebrity might make this new war more acceptable to the average American.
                    <br></br><br></br>Back in the Air Force, he became an exceptional jet pilot and was transferred to an airbase in Korea.  At a squadron meeting, Williams saw two officers and thought to himself, “That looks like the right stuff to me …one of them was John Glenn.”
                    <br></br><br></br>Major John Glenn already had an impressive service record as a career Marine jet pilot with two distinguished Flying Crosses. Both Williams and Glenn racked up impressive service records on enemy bombing missions. They became friends and eventually took R&R with a group of fellow officers in Kyoto, Japan. When a group of Japanese kids recognized Williams, he rewarded them by pitching an invisible ball to the surprised batter who swung with all his might. Williams turned and pretended to watch the ball soar out of sight. Fifty years later, Glenn fondly recalled the joy Williams shared with the youngsters.
                    <br></br><br></br>“Nothing gave him more pleasure than talking in that inimitable booming voice of his about those Marine days in Korea,” Glenn said. “And he still remembered those kids in Kyoto.”
                    <br></br><br></br>Lazarus details the harrowing missions Glenn flew with Williams as his wingman, including a mission in which Williams’ plane was hit and set ablaze. Glenn pulled alongside Williams’ plane, pointed upwards and the two pilots climbed together to an altitude so high that the flames were extinguished by a lack of oxygen. At a memorial service for Glenn 63 years after this mission, Glenn was remembered by a four-star general: “His wingman in Korea, the great baseball player Ted Williams, once called him ‘one of the calmest men I have ever met, no matter how perilous the situation.’”
                    <br></br><br></br>Following their tours in Korea, Williams returned to the Red Sox lineup in August 1953. Glenn became a celebrity test pilot, setting a record for transcontinental supersonic flight. Following newsreels of the flight, Glenn appeared on TV shows and guest speaking engagements. Eventually, Glenn auditioned for and was accepted into NASA’s Project Mercury space program.
                    <br></br><br></br>Over the course of the next several decades, both men remained friends while pursuing diametrically opposed career paths. Glenn’s celebrity as an astronaut catapulted him to a political career as a long-time U.S. Senator from Ohio. Williams contracted with Sears to create a line of sporting equipment, authored two books on baseball technique, and pursued baseball-related business ventures. Lazarus skillfully takes the reader on each man’s journey while noting the many times they reconnected during their lifetimes.
                    <br></br><br></br>“As different as they were, as much as they disagreed on so many issues, especially politics, Ted Williams and John Glenn enjoyed each other’s company,” Lazarus wrote. 
                    <br></br><br></br>Forty years after they flew side-by-side in Korea, Lazarus maintained that the two men shared a connection unbroken by time. Glenn’s description said it best: “When you fly in combat with somebody, there’s a bond that runs so deep you cannot describe it.” 
                    </Card.Description>
                    <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'I found this to be interesting regarding our local veterans! Read more on DD214Chronicle.com'}
                        hashtag="#DD214Chronicle"
                        >
                            <FacebookIcon size={32} round className="fb" />
                        </FacebookShareButton>
                    </Card.Content>
                    </Card>

                    <Card
                className="articleCard1"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                    <Card.Content id="article2">
                    <Card.Header className="title">
                    A Local Hero’s Greatest Sacrifice: 1LT George "Bud" Reuter

                    </Card.Header>
                    <Card.Meta>Posted by Christopher R. Zurawski</Card.Meta>
                    <Card.Description className="article-body1">
                    Operation Tidal Wave was conducted by 177th US Army Air Corps B-24 bombers based in Libya to conduct an air attack on nine oil refineries surrounding Ploiești, Romania on 1 August 1943, during World War II. It was a strategic bombing mission to deny petroleum-based fuel to Axis forces.  Unfortunately, the mission resulted in no significant curtailment of petroleum output.
                    <br></br><br></br>The 93rd Bombardment Heavy Group was on temporary assignment to North Africa. Bud and half of his fellow crewmates already flew their 25 combat missions. However, the experienced bombardiers and navigators were much needed for this daring assignment, so Bud was recruited for Operation Tidal Wave–regardless of meeting the 25-mission mark. Bud and two crewmates were flying on a new B-24 aircraft, “Hell’s Wench”.
                    <br></br><br></br>This operation was one of the costliest for the US Air Corps in the European Theater, with 89 aircraft and 660 crewmen lost. It was proportionally the most costly major Allied air raid of the war, and its date was later referred to as "Black Sunday". Five Medals of Honor, 56 Distinguished Service Crosses and numerous other medals were awarded for valorous service to the aircrew of this operation. This bombing campaign in Ploiești was one of the bloodiest and most heroic missions of all time.
                    <br></br><br></br>After the operation, the Romanian government recovered and buried 216 Americans killed in the raid. Of these 216, only 27 crew members were identifiable. The “Unknowns” were buried by Romanian citizens in the Hero Section of the Civilian and Military Cemetery of Bolovan, Ploiești. The American Graves Registration Command (AGRC) conducted a large-scale exhumation of Bolovan Cemetery and recovered dozens of remains that could not be identified but were believed to belong to casualties from 1 August 1943. Eventually, AGRC was unable to identify more than 80 remains from Bolovan Cemetery. They reinterred those they could not identify at Ardennes American Cemetery in Neupré, Belgium and Henri-Chapelle American Cemetery in Hombourg, Belgium.
                    <br></br><br></br>1LT George “Bud” J. Reuter was killed in this mission on 1 August 1943, near Ploiesti, Romania . Bud was born on 21 June 1918 in Harrison, Indiana, to John George and Elizabeth Theodocia (Johns) Reuter of Harrison, Indiana.
                    <br></br><br></br>Bud was attending college when World War II broke out. He had a photographic memory and was an excellent student who wanted to pursue a future career in engineering. He wanted to fight and protect his country, so he joined the Army Air Corps on 9 December 1941 at Craig Field in Selma, Alabama. His father John worked at NACA (now NASA) as an engineer and Bud wanted to follow in his footsteps. He was never able to.
                    <br></br><br></br>On 10 January 2023, the Defense POW/MIA Accounting Agency identified the missing remains of 1LT George J. ”Bud” Reuter. During the postwar operations, the American Graves Registration Command exhumed unknown remains and reinterring those that could not be identified. 1LT Reuter is memorialized on the Tablets of the Missing at the Florence American Cemetery in Impruneta, Italy.
                    <br></br><br></br>Bud was finally laid to rest near his parents on Saturday, 29 July 29 2023 at 1300 hours at Sunset Cemetery in North Olmsted, Ohio, with full Military Honors. Dignatries and the community from all over honored this World War II Veteran. A special thanks go to Ralph Reynoldsof VFW Ohio, who spent countless hours ensuring this Veteran returned home.
                    <br></br><br></br>1LT Reuter was awarded the Silver Star, Purple Heart, Distinguished Flying Cross, and Air Medal for conspicuous gallantry in action against the enemy while serving with the 9th Air Force in the European Theater of Operations. Additionally, he was awarded the World War II Victory Medal, American Campaign Medal, Army Good Conduct Medal, and European-African-Middle Eastern Campaign.
                    <br></br><br></br>The reason we reflect on Bud’s service, these medals and this battle is because he and his comrades volunteered to fight tyranny and the harbingers of death. He went to war and continually volunteered so future generations would not have to witness such horrors. These medals are to remind us of his bravery and sacrifice–to ensure his family he truly loved them.

                    </Card.Description>
                    <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'I found this to be interesting regarding our local veterans! Read more on DD214Chronicle.com'}
                        hashtag="#DD214Chronicle"
                        >
                            <FacebookIcon size={32} round className="fb" />
                        </FacebookShareButton>
                    </Card.Content>
                    </Card>


                    <Card
                className="articleCard1"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                    <Card.Content id="article2">
                    <Card.Header className="title">
                        Green Berets are Always Training
                    </Card.Header>
                    <Card.Meta>Posted by Christopher R. Zurawski</Card.Meta>
                    <Card.Description className="article-body1">
                        As Ed emerged from the wood line, he was covered in dirt and sweat but he moved with a careful and calculated grace, every step measured to avoid unnecessary haste. His face was intense and focused, revealing a soldier hardened by countless hours of training and experience.
                        <br></br><br></br>Carrying a state-of-the-art assault rifle with a well-worn grip, he held it close to his body, ready to react at a moment's notice. Ammunition pouches adorned their tactical vest, showcasing the weight of the competition. A pistol was strapped to his thigh, a symbol of proficiency in close-quarters combat.
                        <br></br><br></br><img src={require('../article-images/GBAT.jpg')} className="image1"/>Ed’s body language spoke of readiness and alertness. He was tense yet prepared to respond to the targets as they appeared. Despite the heavy gear and the burden he carried, he moved quickly, expertly maneuvering with the heavy ammo cans and sandbags used to simulate the weight of sensitive items and fellow Soldiers. 
                        <br></br><br></br>Sweat dripped down his forehead, glistening in the sunlight as he emerged at the firing line. With his heart rate elevated, he scanned the area, assessing the situation and analyzing the targets. His eyes darted from tree to tree, searching for the targets. Ed began engaging the targets until all were eliminated. 
                        <br></br><br></br>Each year the Green Berets of Special Forces Association Chapter XXXV bands together to conduct the Tactical Application Shoot (TAS). This is an annual fundraiser like no other. It is a grueling all-day event designed to test the competitor’s intestinal fortitude. This shooting competition combines cross-fit, marksmanship, and resilience.  Moreover, this is a way to train others, build their confidence and support the community.
                        <br></br><br></br><img src={require('../article-images/GBAT2.jpg')} className="image2"/>This all-day competition consisted of six battles each competitor had to compete in. Every battle consisted of physical challenges to raise the heart rate and stress the shooter. The targets were also arrayed to challenge everyone. The toughest battle was the “spinner”, a sophisticated steel target requiring a balance of timing and precision.  This target was set up as a sniper engagement with the rifle after traversing several tank traps with sandbags and a casualty. This single battle challenged every shooter to the point of breaking. Only the steadiest of shooters were successful during this battle. 
                        <br></br><br></br>The other battles included engaging targets from behind a vtac board at angles, moving targets, transition stations and traversing across a rope bridge. No matter the engagement scenario, the shooter was graded on speed, accuracy and attention to detail. 
                        <br></br><br></br><img src={require('../article-images/GBATPicture3.jpg')} className="image3"/>There were four categories and each were filled with the shooters of all ranks. The elites and Masters included Green Berets and other operators. The intermediates were filled with young shooters who far exceeded the physical standards and expectations on the range. Even more involved were our novices. This is where the team was heavily involved in training competitors new to the sport and less familiar with competition shooting. We spent more time coaching and assisting these shooters.
                        <br></br><br></br>The competitors fought bravery and stood strong. Everyone finished and walked away proud. They spent the Saturday traversing undulating terrain, carrying heavy weights over defiant obstacles. They fired about 250 rounds from the pistol and the rifle at targets both stationary and moving ranging from 10 meters to 250 meters. 
                        <br></br><br></br>SFA Chapter XXXV will conduct a similar event next year which will include different shooting events with less physical activities in the morning and more challenging and physical events in the afternoon. This allows the event to be more inclusive and social with our community. There will also be a cookout and a campout at the conclusion of the festivities. Stay tuned. 
                    </Card.Description>
                    <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'I found this to be interesting regarding our local veterans! Read more on DD214Chronicle.com'}
                        hashtag="#DD214Chronicle"
                        >
                            <FacebookIcon size={32} round className="fb" />
                        </FacebookShareButton>
                    </Card.Content>
                    </Card>
                </Card.Group>
            )}
        </div>
    )
}