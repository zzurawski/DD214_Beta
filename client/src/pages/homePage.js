import React from "react";
import { useQuery } from "@apollo/client";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { QUERY_ARTICLES } from "../Utils/queries";
import "../components/Styles/skate.css";

export default function HomePage() {
  return (
    <div id="homepage">
      <div>
        <h2 className="group">--STAND AT EASE--<h3>By Don Stark, Publisher / Sales Manager</h3></h2>
        
        
          <p className="at-ease-body"><img className="don" alt="Don" src={require("../article-images/don.png")} />Today we begin a new venture at the
              DD-214 Chronicle. It will focus on bringing more engagement with our readers and
              the community through the new website. It features current affairs, events affecting the Veteran community, links, and up-to-date events. Our writers are working to cover what is important to you, our readers. As we grow, we will include more about benefits services and initiatives that make your life
              better. Our new collaborative brings new initiatives with the Joint Veterans Council of Cuyahoga County, Cuyahoga Community College (Tri-C), the City of Cleveland and many others.
          </p>
      </div>
      <h2 className="group">--What's Happening in the Community--</h2>
        <div className="card-container">
          <Card.Group className="centered" itemsPerRow={2}>
              <Card
                className="articleCard"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                <Card.Content>
                  <Card.Header>
                    RETRIEVAL OF THE MEMORIAL PLAQUE FROM CLEVELAND’S MT. CARMEL CHURCH (EAST) AND RESULTANT STORY
                </Card.Header>
                  <Card.Meta>Posted by JC Sullivan</Card.Meta>
                  <Card.Description className="article-body">
                  While re-dedicating the Irish Cultural Garden on Cleveland’s MLK Drive, the late Senator Voinovich said, “I have always found those closest to their roots to be the best citizens.” I can’t argue with that. Growing up in what has been called ‘Ethnicity’, Cleveland is home to many who have remained close to their roots. One of those is the Italian Community.
                  <br></br><br></br>On a recent morning I drove to the Office of MCR Inc., Willoughby, and founder Frank Piunno, Sr. I was there to photograph the plaque that is the subject of this story. Not surprisingly, several members and friends of the extended Piunno family were also there. I was privileged to meet founder Frank Piunno, Sr., as well as Lou Lentine , Antony Granito, Don and Tony Mazzoliini and my friend Russ Davis.
                  <br></br><br></br><img alt="MichaelPiunno" src={require('../article-images/MichaelPiunno.jpg')} className="image"/>The bronze plaque originally hung on a wall of the old Our Lady of Mount Carmel Church in the East 110th Street and Woodland Avenue neighborhood of Cleveland. When the Diocese of Cleveland announced it would close the Church, two co-conspirators sprang into action.
                  <br></br><br></br>Frank Piunno, Sr., with his co-conspirator Russ Davis, seized the Plaque from the Church before it disappeared to who knows where and would probably have been melted down for the scrap value by outsiders. On it are the names of twenty parishioners who were killed in Action in WWII. One of the names on this plaque is that of Sgt. Michael F. Piunno, whose Italian-American family and community have never forgotten him.
                  <br></br><br></br>Michael was born Sept. 24, 1922, to Francesco and Maria Giuseppa Piunno, the 7th of 8 children: Anna Marie (Fatica), Giuseppe (Joseph), Donato (Dan), Rose Marie (Granito), Joseph Anthony, Camilla “Carrie” Marie, with the Trinitarian Order, Michael Joseph and Frank Joseph. While in grade school Michael was an Altar boy, like so many of us who lived in Catholic parishes were. Afterwards he studied at Benedictine High School, graduating in 1942.
                  <br></br><br></br>Michael enlisted in the United States Army Nov. 16, 1942. After Basic Training he was assigned to the 89th Infantry Division. They deployed to France where they received additional training, most likely from combat veterans. The Division was part of General Patton’s Third Army. 
                  <br></br><br></br> Sgt. Piunno was part of the action that began on the 26th of March as they crossed the Rhine “under intense fire”.  Once into Germany, on April 4, they overran Ohrdruf, a subcamp of Buchenwald, where Michael undoubtedly witnessed the atrocities there. It was the first concentration camp liberated by the U.S. Army.  
                  <br></br><br></br>According to the 89th Division History, they captured Zwickau, Germany on April 17, the day Michael was killed. Up until V-E Day the Division lost 325 battle deaths and 1,029 wounded.
                  <br></br><br></br> It wasn’t until 1949 that Michael’s remains were returned to the family in Cleveland. On March 26 a Requiem Mass was cele brated at Our Lady of Mount Carmel. Burial took place in the Veterans Section of Calvary Cemetery, Cleveland, four years after his death.
                  <br></br><br></br>The original plaque now hangs honorably in the lobby of MCR Inc.. with the name of Michael J. Piunno and nineteen other heroes from the parish who were Killed in Action during the war. The American flag that covered Michael’s coffin is also displayed there. Michael’s family received his Purple Heart, Combat Infantryman Badge and other decorations earned. 
                  < br></br><br></br>Like other families who lost loved ones during the war, Michael’s death was suffered in silence. However, his family, and the Italian community of Cleveland. have not been silent about his memory and sacrifice.
                  < br></br><br></br>Each year Benedictine High School,  Michael’s Alma Mater, holds an Italian Festa Night at the school in his honor. 
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui centered aligned container">
                    <Link to="/articles/#article1">
                      <Button
                        style={{ backgroundColor: "#000000", color: "#ffffff", border: "4px solid aqua" }}
                        class="cardBtn"
                      >
                        See more
                      </Button>
                    </Link>
                  </div>
                </Card.Content>
              </Card>


              <Card
                className="articleCard"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                <Card.Content>
                  <Card.Header>Phoenix 62, American Hero</Card.Header>
                  <Card.Meta>Posted by Jacob Arnett</Card.Meta>
                  <Card.Description className="article-body">
                  “Hero? I’m no hero! Just doing my job to the best of ability, and for my brothers.” I could picture Pat saying this to me, upon reading this. I’ve had many conversations about his war, the Vietnam War, with John “Pat” McKeany, and my experiences in Iraq and Afghanistan. Pat and his wife Rita would often contact my carpet cleaning company in Las Vegas, Noble Carpet Cleaners, and Pat and I would chat while I cleaned upholstery. I still remember how, when I first arrived to the Mckeany residence, I saw his Vietnam War medals on a plaque on the wall. He told me the story of his participation as a helicopter pilot in a battle called Lam Son 719 which, according to author Larry Freeland, was “The battle that decimated America’s helicopter force in Vietnam.” Unfortunately, in April of 2021, Pat passed away due to complications from Agent Orange-associated cancer. I had known about Pat’s progressive cancer since the day we met, and though he sometimes spoke of his mortality, I made the mistake of bringing up how perhaps he could be thankful for the time he did have when others we’ve known, him and I both, were taken much too soon. I had expressed agreement of one’s questioning of their own mortality, when I should have felt the inclination to pursue the strategy of hope. This mistake I will not make again. I want to leave you with this heroic man’s own words, as Pat did write down his story for his family, a 20-page document simply titled “Vietnam Experience.” The following was written in his hand, from the copy he gave to me.
                  <img alt="pat-huey" src={require('../article-images/PatHUEY[695].png')} className="image"/><br></br><br></br>On February 18, 1971 a helicopter was shot down onto a landing zone (LZ) named “Ranger North”, resulting in an American helicopter crew member being stranded. There was an attempt to extract the stranded soldier without success. Two days later an operation was conducted to rescue the stranded soldier by the Phoenix (my company). Captain Nelson, of the Phoenix, successfully landed and rescued the stranded soldier. While taking off from the landing zone he encountered heavy enemy fire. He recalled, after the operation, that he saw muzzle flashes on the entire hillside he faced (hillside adjacent to Ranger South) while exiting Ranger North. His helicopter burst in flames. Fortunately, he was able to cut his fuel supply and make an emergency landing onto another hilltop landing zone nearby called Ranger South. Ranger South was surrounded by the enemy, as well. It was amazing that Captain Nelson was able to autorotate the helicopter into the LZ. Cutting the fuel caused an engine failure. He landed on the hilltop LZ which had a clearing large enough for two helicopters. Even though they were still taking fire when they landed, everyone safely exited and moved away from the burning aircraft. 
                  <br></br><br></br>I was flying with Butch Doan, that day, on a separate operation nearby. We heard an emergency radio call from Captain Nelson and immediately flew to the LZ to attempt a rescue. Now there were five Americans on the ground. 
                  <br></br><br></br>Butch and I decided to perform a cork screw approach from about 400’ AGL while circling down to the LZ. We took heavy enemy fire. A small arms round hit between Butch and I, piercing through the helicopter’s console causing plastic to fly everywhere. We took other small arms fire hits as well. When we landed in the LZ the helicopter that made the emergency landing was engulfed in flames. The M-60 machine gun ammunition that was on board the burning helicopter was “cooking off” making the tracers look like a fireworks display. The combination of enemy fire and bullets cooking off from the burning helicopter made for an intense experience. 
                  <br></br><br></br>We sat on the ground for what seemed like an eternity. Finally, three of the stranded crew members ran across the LZ and jumped onto our helicopter. The South Vietnamese soldiers, together with the remaining stranded soldiers, were hunkered down trying to avoid the chaos. The enemy fire was intense. As we took off, we were again hit by enemy small arms fire. A short way from exiting the LZ we took a hit from a 50 Caliber round to the helicopter’s mast head. The helicopter started to shake violently. I checked the instruments and everything was in the green. Other than the violent shaking the helicopter was running fine. Fortunately, we were able to fly to a nearby secure LZ (LZ 30) to be rescued. Another one of our Phoenix aircraft went in to get the remaining crew members. Amazingly, everyone made it out alive and there were no American casualties that day. Unfortunately, Captain Nelson died a few days later, in a separate operation on March 5th. I’m proud to say that I was among 6 pilots awarded with the Silver Star that day. The Silver Star is the third highest award under the Medal of Honor and the Cross of Gallantry. All other crew members received Distinguished Flying crosses for their contribution in the operation. These were the first medals for conspicuous gallantry awarded in the Lamson 719 operation. 
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
                </Card.Content>
                <Card.Content extra>
                  <div className="ui centered aligned container">
                      <Button
                        style={{ backgroundColor: "#000000", color: "#ffffff", border: "4px solid aqua" }}
                        class="cardBtn"
                      >
                        See more
                      </Button>
                  </div>
                </Card.Content>
              </Card>
              <Card
                className="articleCard"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                <Card.Content>
                  <Card.Header>Warrior Beat Drums up Gratifying Therapy for Vets</Card.Header>
                  <Card.Meta>Posted by Jerri Donohue</Card.Meta>
                  <Card.Description className="article-body"> During his stay at the Louis Stokes Cleveland Department of Veterans Affairs Medical Center, Trevor Meyer felt his anxiety spike in the evenings. 
                    <br></br><br></br>“I can’t speak highly enough about the quality of care at the VA,” Meyer said. “The program was great - until 4:30 when the hospital closed.” 
                    <br></br><br></br>The former Navy Corpsman had toured with a band for two years before enlisting in 1997. He attempted various careers after receiving a medical discharge early in 2001, including operating a music studio and club in a Brooklyn, New York warehouse. After a decade, his alcohol abuse made life unman-ageable, however. In 2015, Meyer returned to Ohio to address it.
                    <br></br><br></br><img alt="trevor" src={require('../article-images/TrevorHeadshot.jpg')} className="image"/>His music background helped Meyer during his month at the Veterans Affairs Recovery Center (VARC); he spent his evenings thumping on a practice pad he’d brought with him. A resident observed that the activity seemed “relaxing”. Meyer remembered that comment, and the interest shown by other veterans, when his therapist suggested he find a way to use drums in an alco-hol-free environment.
                    <br></br><br></br>“I developed the seed for Warrior Beat there [at the VA],” Meyer said.
                    <br></br><br></br>Within a year of his hospitalization, Meyer and his friend Ben Lehman co-founded Warrior Beat, a 501(c)3 nonprofit that brings drum therapy to veterans dealing with depression, post traumatic stress disorder and other problems. They used grant money to purchase drums and recruited Mike Reyes, a retired Army sergeant and full time musician, to help design a program tailored to veterans with no prior music experience. Then they held weekly group drumming sessions in a rented space in Can-ton, Meyer’s home town.   
                    <br></br><br></br>Participants of all ages find the physical activity releas-es endorphins naturally to relieve tension.  Meyer said other benefits include deeper respiration and better circulation. When drumming is a tool to manage pain, individuals suffering from arthritic joints sometimes opt for reduced medicine.   
                    <br></br><br></br>The science of entrainment factors in these positive re-sults.
                    <br></br><br></br>“When there’s a dominant rhythm, lesser ones lock into that major one,” Meyer said. “Everything in our bodies vibrates. It [drumming] synchronizes the left and right parts of our brain, usually within five minutes.”
                    <br></br><br></br>Meyer recommends drumming as a complement to talk therapy because it connects mind, body and spirit. He offered the ex-ample of Wilson Hall, a nonresidential treatment facility in Massillon. Counselors there reported that patients who spent 40 minutes drumming expressed themselves more easily in the subsequent therapy session. 
                    <br></br><br></br>The VA in Chillicothe contacted Warrior Beat in 2019 to help implement a drum therapy program. Meyer and Reyes designed an intensive, weeklong course for Veterans Administration person-nel. They certified 30 employees to facilitate drum circles, and have since trained more than 200 staff members at VA fa-cilities in Oregon, Washington, Colorado, Alaska and Arkansas - and in Columbus, Cincinnati, Cleveland and Dayton.
                    <br></br><br></br>When the COVID pandemic struck, the nonprofit developed Vet-erans Drum from Home, a virtual VA program, so that existing drum circles could continue. Homebound veterans began to join. Enrollment grew after social distancing ended. Currently vet-erans in several states access the platform through Veterans Integrated Service Network (VISN). The Veterans Administration supplies the drums.
                    <br></br><br></br>Run in 8-week cycles, the hourlong sessions consist of 15 minutes of instruction, 30 minutes of jamming, and 10 minutes of guided meditation. They conclude with questions and feed-back, and anyone who needs immediate counseling can also speak with VA staff. 
                    <br></br><br></br>A second livestream program offers VA employees 30-minute “de-stressing” sessions. Meyer said some gather as a depart-ment “to have fun making noise without a drum,” beating on desks and incorporating the same techniques taught that week in Veterans Drum from Home. 
                    <br></br><br></br>Although Warrior Beat recently closed its location in Can-ton, it serves a burgeoning number of virtual participants. This fall, Meyer and his work with Warrior Beat will appear on “After Action,” a Public Broadcasting Service series.
                    <br></br><br></br>“The PBS program will be a huge help in promoting our pro-grams nationally,” Meyer said.
                    <br></br><br></br>Meanwhile, some veterans, including Meyer, have made thera-peutic drumming a routine for years.
                    <br></br><br></br>“I drum almost every day for therapy,” Meyer said.
                    <br></br><br></br>To learn about joining a drum therapy program, contact Meyer at
                    <br></br><br></br>trevor@warriorbeat.org
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui centered aligned container">
                      <a href="/articles"><Button
                        style={{ backgroundColor: "#000000", color: "#ffffff", border: "4px solid aqua" }}
                        class="cardBtn"
                      >
                        See more
                      </Button></a>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
        </div>
    </div>
  );
}
