import { LinkButton } from "../components/button/Button";

// For the Home page
import AnalysisLogo from "../assets/missions/analysis.svg";
import EcosystemsLogo from "../assets/missions/ecosystems.svg";
import DataLogo from "../assets/missions/data.svg";
import ExplorationLogo from "../assets/missions/exploration.svg";
import BibliographyLogo from "../assets/missions/bibliography.svg";
import SuggestionsLogo from "../assets/missions/suggestions.svg";
import OSSLibraries from "../assets/DataLogo.png";
import OSSEcosystemsLogo from "../assets/data_analysis/EcosystemsLogo.png";
import YearLogo from "../assets/data_analysis/YearLogo.png";

// For the Graphs in the Quick Facts page
import DumbbellGraph from "../components/graphs/DumbbellGraph";
import PercentageGraph from "../components/graphs/PercentGraph";
import PolarGraph from "../components/graphs/PolarGraph";
import StackLineGraph from "../components/graphs/StackLineGraph";
import QuickFactsGraph from "../components/graphs/QuickFactsGraph";
import NeelyBarGraph from "../components/graphs/NeelyBarGraph";

import TabContainer from "../components/graphs-container/TabContainer";
import { EcosystemCard } from "../components/card/Card";

// For the Graphs in the Gallery page
import LineGraph from "../components/graphs/LineGraph";

import { Divider, Space, Typography } from "antd";

const texts = {
    home: {
        title: "Home",
        path: "/",
        content: {
            intro: {
                title: <><u><b>LEARN</b></u> AND <u><b>VISUALIZE</b></u></>,
                subtitle:"GENDER DEMOGRAPHICS ACROSS THE OPEN-SOURCE SOFTWARE COMMUNITY",
                description: "OSS Census is committed to study and spread awareness of the underlying inequalities in the movement that is changing the face of technology",
                button: "LEARN MORE",
            },
            problem: {
                title: "THE PROBLEM",
                description: 
                <div>
                    Open-source software (OSS) is now ubiquitous, forming a 
                    solid digital infrastructure for our everyday life. This 
                    digital infrastructure requires tremendous efforts to 
                    develop and maintain. Without constant support, destructive 
                    consequences such as 
                    <LinkButton href="https://heartbleed.com/">
                        "The Heartbleed Bug"
                    </LinkButton> 
                    could occur. Because of this, maintaining OSS is undoubtedly 
                    crucial.
                    <br/>
                    <br/>
                    However, several obstacles hinder OSS's sustainability. One 
                    major obstacle is the inadequate diversity, especially in 
                    gender, which 
                    <LinkButton href="https://journals.sagepub.com/doi/pdf/10.1177/1461444811422887?casa_token=nZsTM6mo6XYAAAAA:f5R1CvpZM9GXD-CC8uMC1C9njToDXFUOy3SOBrZe75naWHogjbRNFzVoe5ZxiG__fePJuzzYLrF5-g">
                        causes a subsequent unwelcoming culture
                    </LinkButton>. Moreover, since gender diversity is shown to be 
                    <LinkButton href="https://cmustrudel.github.io/papers/chi15.pdf">
                        associated with higher productivity
                    </LinkButton>, increasing gender diversity can boost a team's performance.
                </div>
            },
            mission: {
                title: "THE MISSION",
                description: [
                    {
                        title: "analysis",
                        logo: <img src={AnalysisLogo} alt="a logo representing the process of analysis" />,
                        description: "Read through a chronological analysis of the gender distribution in open-source software communities",
                    },
                    {
                        title: "ecosystems",
                        logo: <img src={EcosystemsLogo} alt="a logo representing the ecosystems" />,
                        description: "An OSS ecosystem constitutes interdependent OSS libraries. We provide a decomposition of gender distribution in 32 ecosystems",
                    },
                    {
                        title: "data",
                        logo: <img src={DataLogo} alt="a logo representing data" />,
                        description: "Statistics of gender representation based on roles",
                    }, 
                    {
                        title: "exploration",
                        logo: <img src={ExplorationLogo} alt="a logo representing the process of exploration" />,
                        description: "An interface for free exploration of the census",
                    },
                    {
                        title: "bibilography",
                        logo: <img src={BibliographyLogo} alt="a logo representing bibliography" />,
                        description: "Bibliography of prior studies on gender in OSS",
                    },
                    {
                        title: "suggestions",
                        logo: <img src={SuggestionsLogo} alt="a logo representing the suggestions" />,
                        description: "Strategies to enhance diversity and inclusion"
                    }
                ],
            },
            data: {
                title: "THE DATA",
                description: 
                <div>
                    We used two data-sets for pre-processing.
                    <br/><br/>
                    <span className="font-bold">Registered OSS Libraries</span>
                    <br/><br/>
                    We downloaded the list of registered OSS libraries, released in Jan 2020, from
                    <LinkButton href="https://libraries.io/data">libraries.io</LinkButton>. We considered each package manager as one ecosystem 
                    and then we retrieved each projects’ commit history from<LinkButton href="https://worldofcode.org/">World of Code</LinkButton>. 
                    This dataset is denoted as OSS on the website.
                    <br/><br/>
                    <img src={OSSLibraries} className="OSS-libraries-img" alt="a logo representing bibliography" />
                    <br/><br/>
                    <span className="font-bold">Github Public Repositories</span>
                    <br/><br/>
                    We downloaded the list of registered OSS libraries, released in Jan 2020, from<LinkButton href="https://libraries.io/data">libraries.io</LinkButton>. We considered each package manager as one ecosystem and then we retrieved each projects’ commit history from World of Code. This dataset is denoted as OSS on the website.
                    <br/><br/>
                    We used data from 
                    <LinkButton href="https://ghtorrent.org/">GHTorrent</LinkButton>,
                    which consists of all GitHub activities until Mar 2021. Because GitHub projects may contain projects for personal or educational use, we excluded projects with fewer than four people as a heuristic. This dataset is denoted as PUBLIC on the website.
                </div>
            },
            gender: {
                title: "GENDER INFERENCE",
                description: 
                <div>
                    We used computational approaches to infer binary gender from names. In this study, we chose to use
                    <LinkButton href="https://namsor.app/">NamSor</LinkButton>, an automatic tool that can infer gender
                    based on one’s name and cultural background, for its high accuracy among similar tools**.
                    <br/><br/>
                    We acknowledge that binary gender does not reflect the current perception of gender. Moreover, name-based inference has limitations.
                    However, our results can still provide insights into the gender diversity status in OSS. Future researchers could use the results to conduct more targeted studies.
                    <br/><br/>
                    <span className="annotation">* Please see our annotated bibliography** Sebo, P. (2021). Performance of gender detection tools: a comparative study of name-to-gender inference services. Journal of the Medical Library Association: JMLA, 109(3), 414.</span>
                </div>
            },
            analysis: {
                title: "DATA ANALYSIS",
                description: [
                    {
                        title: "Year",
                        logo: <img src={YearLogo} alt="a logo representing the year" />,
                        description: "We aggregated data by time and visualized how gender distribution and female participation in OSS has changed from year to year.",
                    },
                    {
                        title: "OSS Ecosystems",
                        logo: <img src={OSSEcosystemsLogo} alt="a logo representing the ecosystems" />,
                        description: <>Our analysis considered each package manager registered at<LinkButton href="https://libraries.io/data">libraries.io</LinkButton>as one ecosystem. We then aggregated data based on each ecosystem and visualized how gender distribution varies across different ecosystems."</>,
                    },
                    {
                        title: "Contributors",
                        logo: <img src={OSSEcosystemsLogo} alt="a logo representing data" />,
                        description: <>
                            We divided contributors into two categories:
                            <LinkButton href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8870179&casa_token=zeXxx_ecz5UAAAAA:mpOzo_72wLc-WCK19YPPtFfNShNxq0TEvOoqNFXAKFHSyhos6apVjzBV42iPTmoZbDMquMWvaQ&tag=1">
                                core and peripheral.
                            </LinkButton>
                            To identify core contributors for each ecosystem, we identified projects whose number of commits were in the top 10% of their ecosystem. Then, within each of the top projects, we identified each project's core developers as those who made more than 10% of the commits within that three-month window. We analyzed and compared gender distributions among core contributors and all contributors."</>,
                    }
                ],
            }

        }
    },
    overview: {
        title: "Overview",
        path: "/overview",
        content: {
            siderLayout: {
                title: "Census Overview",
                description: "",
                sections: [
                    {
                        title: "QUICK FACTS",
                        description: "View a summary outlining important distinctions between open-source software libraries and public repositories",
                        content: {
                            comparison: {
                                title: ["Registered OSS Libraries", "GitHub Public Repositories"],
                                metrics: [
                                    {
                                        metric: "Largest Ecosystem",
                                        value: [<EcosystemCard ecosystem="NPM" />, <EcosystemCard ecosystem="Javascript" />],
                                    },
                                    {
                                        metric: "Community with highest women %",
                                        value: [<EcosystemCard ecosystem="CRAN" />, <EcosystemCard ecosystem="HTML" />],
                                    },
                                    {
                                        metric: "All vs Core",
                                        description: <>
                                            We divided contributors into two categories: 
                                            <LinkButton href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8870179&casa_token=zeXxx_ecz5UAAAAA:mpOzo_72wLc-WCK19YPPtFfNShNxq0TEvOoqNFXAKFHSyhos6apVjzBV42iPTmoZbDMquMWvaQ&tag=1">
                                                core and peripheral.
                                            </LinkButton>To identify core contributors for each ecosystem, we identified projects whose number of commits were in the top 10% of their ecosystem. Then, within each of the top projects, we identified each project's core developers as those who made more than 10% of the commits within that three-month window. We analyzed and compared gender distributions among core contributors and all contributors."
                                        </>,
                                        value: [
                                            <Space direction="vertical">
                                                <NeelyBarGraph max="7.5%" items={[{label: "2008", value: "2.25%"}, {label: "2021", value:"4.87%"}]}/> 
                                                <Typography.Text className="comparison-value-highcharts-graph-xaxis">% women among all contributors</Typography.Text> 
                                                <NeelyBarGraph max="7.5%" items={[{label: "2008", value: "2.13%"}, {label: "2021", value:"5.27%"}]}/>
                                                <Typography.Text className="comparison-value-highcharts-graph-xaxis">% women among core contributors</Typography.Text>
                                            </Space>,
                                            <Space direction="vertical">
                                                <NeelyBarGraph max="7.5%" items={[{label: "2008", value: "3.64%"}, {label: "2021", value:"6.87%"}]}/> 
                                                <Typography.Text className="comparison-value-highcharts-graph-xaxis">% women among all contributors</Typography.Text> 
                                                <NeelyBarGraph max="7.5%" items={[{label: "2008", value: "3.69%"}, {label: "2021", value:"7.09%"}]}/> 
                                                <Typography.Text className="comparison-value-highcharts-graph-xaxis">% women among core contributors</Typography.Text>
                                            </Space>,
                                        ],
                                    },
                                ]
                            },
                        }
                    },
                    {
                        title: "CONTRIBUTIONS",
                        description: "Starting with women percentage of 2.13% among core contributors in year xxxx and 2.25% among all contributors , the number has been steadily growing between 2008 and 2021. Moreover, we found that, between 2014 and 2021, the women percentage among cores has surpassed the percentage among all, leaving a slight but constant margin of 0.3%.",
                        // content: "% OSS Contributors by Gender",
                        content: <PercentageGraph category="Contributor"/>,
                    },
                    {
                        title: "CONTRIBUTORS AND COMMITS",
                        description: "It is a well-known phenomenon that the percentage of women contributors is low in the OSS community. Through mining the data of open-source projects on GitHub, we found that women’s participation among all contributors has been constantly low, with the percentage being lower than higher than 5.0%.",
                        // content: "Active Contributors and Commits in ALl Public Projects",
                        content: 
                        <TabContainer labels={["Contributors", "Commits"]}>
                            <StackLineGraph category="Contributor" ecosystem="All"/>
                            <StackLineGraph category="Commit" ecosystem="All"/>
                        </TabContainer>
                    },
                    {
                        title: "% WOMEN IN ECOSYSTEMS",
                        description: "The graph shows the percentage of women contributors at its maximum and minimum in each ecosystem. Some ecosystems have a higher percentage of women contributors than others.",
                        // content: "Min and Max % Women in Ecosystems 2008-2019",
                        content: <DumbbellGraph category="Contributor"/>
                    },
                    {
                        title: "ECOSYSTEMS BY SIZE AND WOMEN %",
                        description: "More specific to gender distributions, we observed that the percentages of female contributors varied across different ecosystems. We also found that languages that are commonly used for web development, especially frontend development, like HTML and CSS, have higher female ratio in general.",
                        // content: "Contributors by Ecosystem Size and % Women",
                        content: <PolarGraph category="Contributor" year="2019" />,
                    }
                ]
            },
        }
    },
    gallery: {
        title: "Gallery",
        path: "/gallery",
        content: {
            siderLayout: {
                title: "ECOSYSTEMS GALLERY",
                description: "",
                sections: [
                    {
                        title: "% WOMEN OVER TIME",
                        description: "The lines demonstrate the change in the number of women in open source projects with the change of time from 2008 to 2019. (The scale is not on 0-100%.)Genders in the dataset are inferred based on name and cultural background with the tool NamSor, limited by the tool's binary gender inference capability.",
                        content: <>
                            <Typography.Text strong>Average across ecosystems</Typography.Text>
                            <Divider style={{borderColor: "#BDBDBD", margin: "16px 0 32px 0"}}/>
                            <LineGraph category="Contributor" ecosystem="All" />
                        </>,
                    }
                ]
            },
            galleryLayout: {
                title: "ECOSYSTEMS BREAKDOWN",
                contents: {},
            }
        }
    },
    comparisons: {
        title: "Comparisons",
        path: "/comparisons",
        content: {
            siderLayout: {
                title: "GRAPH COMPARISONS",
                description: "Choose which of the two graph type you would want to display.\n\nContributors will show the number of active contributors working on the chosen project in a given year. Commits will show how many commits are made to the chosen project in a given year.",
            }
        }
    },
    resources: {
        title: "Resources",
        path: "/resources",
        content: {
            siderLayout: {
                title: "RESOURCES",
                description: "Before us, numerous of scholars have worked on the problem of gender diversity in OSS, and broadly, STEM (Science, Technology, Engineering, and Math) fields. Along with our analysis, we compiled a list of prior works that reported gender representation across the years. We grouped prior studies by their data collection methods, such as survey or data mining, and their samples, such as the entire OSS population or sub-population of specific ecosystems or projects.",
                sections: [
                    {
                        title: "OVERVIEW OF GENDER DIVERSITY IN OSS",
                        content: {
                            references: [
                                {
                                    title: "‘Patches don’t have gender’: What is not open in open source software",
                                    author: "Nafus, D. (2012). ‘Patches don’t have gender’: What is not open in open source software.",
                                    container: "New Media & Society, 14(4), 669-683.",
                                },
                                {
                                    title: "Diversity and inclusion in open source software (oss) projects: Where do we stand?",
                                    author: "Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?.",
                                    container: "In 2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM) (pp. 1-11). IEEE.",
                                },
                                {
                                    title: "FLOSS Participants' Perceptions About Gender and Inclusiveness: A Survey",
                                    author: "Lee, A., & Carver, J. C. (2019, May). FLOSS participants' perceptions about gender and inclusiveness: a survey.",
                                    container: "In 2019 IEEE/ACM 41st International Conference on Software Engineering (ICSE) (pp. 677-687). IEEE.",
                                },
                                {
                                    title: "FLOSS Participants' Perceptions About Gender and Inclusiveness: A Survey",
                                    author: "Lee, A., & Carver, J. C. (2019, May). FLOSS participants' perceptions about gender and inclusiveness: a survey.",
                                    container: "In 2019 IEEE/ACM 41st International Conference on Software Engineering (ICSE) (pp. 677-687). IEEE."
                                }
                            ],
                        },
                    },
                    {
                        title: "BENEFITS OF DIVERSITY",
                        content: {
                            references: [
                                {
                                    title: "Gender and tenure diversity in github teams",
                                    author: "B. Vasilescu, D. Posnett, B. Ray, M. G. van den Brand, A. Serebrenik, P. Devanbu, and V. Filkov, “Gender and tenure diversity in github teams,”", 
                                    container: "In Proceedings of the 33rd annual ACM conference on human factors in computing systems, 2015, pp. 3789–3798."
                                },
                                {
                                    title: "The effects of diversity in global, distributed collectives: A study of open source project success",
                                    author: "Daniel, S., Agarwal, R., & Stewart, K. J. (2013). The effects of diversity in global, distributed collectives: A study of open source project success.",
                                    container: "Information Systems Research, 24(2), 312-333.",
                                },
                                {
                                    title: "nformation Systems Research, 24(2), 312-333.",
                                    author: "Moon, E. (2013, January). Gendered patterns of politeness in free/libre open source software development.",
                                    container: "In 2013 46th Hawaii International Conference on System Sciences (pp. 3168-3177). IEEE."
                                }
                            ],
                        },
                    },
                    {
                        title: "FAIRNESS",
                        content: 
                        <table className="table-auto w-full mt-8 rounded">
                            <thead>
                            <tr className="text-left headerPadding">
                                <th>Title</th>
                                <th>Ecosystems</th>
                                <th>Reference</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="tablePadding">
                                <td className="font-bold">Gender differences and bias in open source: pull request acceptance of women versus men</td>
                                <td>Objective-C, Matlab, Ruby, Python, C++, PHP</td>
                                <td>Terrell, J., Kofink, A., Middleton, J., Rainear, C., Murphy-Hill, E., Parnin, C., & Stallings, J. (2017). Gender differences and bias in open source: Pull request acceptance of women versus men. <i>PeerJ Computer Science</i>, 3, e111.</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">Gendered behavior as a disadvantage in open source software development</td>
                                <td>JavaScript, HTML, CSS, Ruby, PHP, Python, Jupyter Notebook, R, C++, CSS</td>
                                <td>Vedres, B., & Vasarhelyi, O. (2019). Gendered behavior as a disadvantage in open source software development. <i>EPJ Data Science, 8</i>(1), 25.</td>
                            </tr>
                            </tbody>
                        </table>
                    },
                    {
                        title: "PAST CENSUS",
                        content: 
                        <table className="table-auto w-full mt-8 rounded">
                            <thead>
                            <tr className="text-left headerPadding">
                                <th>Title</th>
                                <th>Year</th>
                                <th>Data Source</th>
                                <th>Sample Size</th>
                                <th>Women Percentage</th>
                                <th>Reference</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="tablePadding">
                                <td className="font-bold">Who Is Doing It</td>
                                <td>2001</td>
                                <td>Online Survey</td>
                                <td>5,478</td>
                                <td>0%</td>
                                <td>Robles, G., Scheider, H., Tretkowski, I., & Weber, N. (2001). Who is doing it. A research on Libre Software developers.</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">Free/libre and open source software: Survey and study</td>
                                <td>2002</td>
                                <td>Online Survey</td>
                                <td>2,748</td>
                                <td>1.10%</td>
                                <td>Ghosh, R. A., Glott, R., Krieger, B., & Robles, G. (2002). Free/libre and open source software: Survey and study.</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">Why hackers do what they do: Understanding motivation and effort in free/open source software projects</td>
                                <td>2001-2002</td>
                                <td>Email</td>
                                <td>684</td>
                                <td>2.50%</td>
                                <td>Lakhani, K. R., & Wolf, R. G. (2003). Why hackers do what they do: Understanding motivation and effort in free/open source software projects. Open Source Software Projects (September 2003).</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">Working for free? Motivations for participating in open-source projects</td>
                                <td>2002</td>
                                <td>Email</td>
                                <td>79</td>
                                <td>5.00%</td>
                                <td>Alexander Hars, S. O. (2002). Working for free? Motivations for participating in open-source projects. <i>International journal of electronic commerce, 6</i>(3), 25-39.</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">FLOSS-US the free/libre/open source software survey for 2003</td>
                                <td>2003</td>
                                <td>Online Survey</td>
                                <td>1,588</td>
                                <td>1.60%</td>
                                <td>David, P. A., Waterman, A., & Arora, S. (2003). FLOSS-US the free/libre/open source software survey for 2003. <i>Stanford Institute for Economic Policy Research, Stanford University, Stanford, CA (http://www. stanford. edu/group/floss-us/report/FLOSS-US-Report. pdf).</i></td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">Motivations in open source software communities: The mediating role of effort intensity and goal commitment</td>
                                <td>2010</td>
                                <td>Online Survey</td>
                                <td>230</td>
                                <td>4.00%</td>
                                <td>Ke, W., & Zhang, P. (2009). Motivations in open source software communities: The mediating role of effort intensity and goal commitment. <i>International Journal of Electronic Commerce, 13</i>(4), 39-66.</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">Women in free/libre/open source software: The situation in the 2010s</td>
                                <td>2013</td>
                                <td>Online Survey</td>
                                <td>2,183</td>
                                <td>10.35%</td>
                                <td>Robles, G., Reina, L. A., González-Barahona, J. M., & Domínguez, S. D. (2016, May). Women in free/libre/open source software: The situation in the 2010s. In <i>IFIP International Conference on Open Source Systems</i> (pp. 163-173). Springer, Cham.</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">Gender and tenure diversity in github teams</td>
                                <td>2015</td>
                                <td>Online Survey</td>
                                <td>816</td>
                                <td>24.00%</td>
                                <td>Vasilescu, B., Posnett, D., Ray, B., van den Brand, M. G., Serebrenik, A., Devanbu, P., & Filkov, V. (2015, April). Gender and tenure diversity in GitHub teams. In <i>Proceedings of the 33rd annual ACM conference on human factors in computing systems</i> (pp. 3789-3798).</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">GitHub Open Source Survey</td>
                                <td>2017</td>
                                <td>Online Survey</td>
                                <td>6,000</td>
                                <td>5.00%</td>
                                <td><a href="https://opensourcesurvey.org/2017/">GitHub Survey</a></td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">StackOverflow Developer Survey Results</td>
                                <td>2017</td>
                                <td>Online Survey</td>
                                <td>64,000</td>
                                <td>7.60%</td>
                                <td><a href="https://insights.stackoverflow.com/survey/2017">StackOverflow Survey</a></td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">FLOSS participants' perceptions about gender and inclusiveness: a survey</td>
                                <td>2019</td>
                                <td>Online Survey</td>
                                <td>119</td>
                                <td>10.90%</td>
                                <td>Lee, A., & Carver, J. C. (2019, May). FLOSS participants' perceptions about gender and inclusiveness: a survey. In <i>Proceedings of the 41st International Conference on Software Engineering (ICSE)</i> (pp. 677-687). IEEE.</td>
                            </tr>
                            <tr className="tablePadding">
                                <td className="font-bold">The shifting sands of motivation: Revisiting what drives contributors in open source</td>
                                <td>2021</td>
                                <td>Online Survey</td>
                                <td>242</td>
                                <td>7.60%</td>
                                <td>Gerosa, M., Wiese, I., Trinkenreich, B., Link, G., Robles, G., Treude, C., ... & Sarma, A. (2021, May). The shifting sands of motivation: Revisiting what drives contributors in open source. In <i>Proceedings of the 43rd International Conference on Software Engineering (ICSE)</i> (pp. 1046-1058). IEEE.</td>
                            </tr>
                            </tbody>
                        </table>,
                    },
                    {
                        title: "DATA MINING",
                        content: 
                        <table className="table-auto w-full mt-8 rounded">
                                <thead>
                                    <tr className="text-left headerPadding">
                                        <th>Title</th>
                                        <th>Year</th>
                                        <th>Data Source</th>
                                        <th>Gender Inferece</th>
                                        <th>Sample Size</th>
                                        <th>Women Percentage</th>
                                        <th>Reference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Gender differences in early free and open source software joining process</td>
                                        <td>2012</td>
                                        <td>email subscribers</td>
                                        <td>US Census</td>
                                        <td>1,931</td>
                                        <td>8.27%</td>
                                        <td>Kuechler, V., Gilbertson, C., & Jensen, C. (2012, September). Gender differences in early free and open source software joining process. In <i>IFIP International Conference on Open Source Systems</i> (pp. 78-93). Springer, Berlin, Heidelberg.</td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Gender, representation and online participation: A quantitative study of stackoverflow</td>
                                        <td>2012</td>
                                        <td>StackOverflow</td>
                                        <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a></td>
                                        <td>2,588</td>
                                        <td>11.24%</td>
                                        <td>Vasilescu, B., Capiluppi, A., & Serebrenik, A. (2012, December). Gender, representation and online participation: A quantitative study of stackoverflow. In <i>2012 International Conference on Social Informatics</i> (pp. 332-338). IEEE.</td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Contributions of the under-appreciated: Gender bias in an open-source ecology</td>
                                        <td>2015</td>
                                        <td>GitHub</td>
                                        <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a></td>
                                        <td>1,049,345</td>
                                        <td>8.71%</td>
                                        <td>Kofink, A. (2015, October). Contributions of the under-appreciated: Gender bias in an open-source ecology. In <i>Companion Proceedings of the 2015 ACM SIGPLAN International Conference on Systems, Programming, Languages and Applications: Software for Humanity</i> (pp. 83-84).</td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">A data set for social diversity studies of GitHub teams</td>
                                        <td>2015</td>
                                        <td>GitHub</td>
                                        <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a></td>
                                        <td>837,392</td>
                                        <td>9.00%</td>
                                        <td>Vasilescu, B., Serebrenik, A., & Filkov, V. (2015, May). A data set for social diversity studies of GitHub teams. In <i>2015 IEEE/ACM 12th working conference on mining software repositories</i> (pp. 514-517). IEEE.</td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Gender differences and bias in open source: Pull request acceptance of women versus men</td>
                                        <td>2017</td>
                                        <td>GitHub</td>
                                        <td>modified <a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + Google+</td>
                                        <td>328,988</td>
                                        <td>6.36%</td>
                                        <td>Terrell, J., Kofink, A., Middleton, J., Rainear, C., Murphy-Hill, E., Parnin, C., & Stallings, J. (2017). Gender differences and bias in open source: Pull request acceptance of women versus men. <i>PeerJ Computer Science</i>, 3, e111.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Going farther together: The impact of social capital on sustained participation in open source</td>
                                    <td>2019</td>
                                    <td>GitHub</td>
                                    <td><a href="https://namsor.app/">Namsor</a></td>
                                    <td>300,000</td>
                                    <td>9.70%</td>
                                    <td>Qiu, H. S., Nolte, A., Brown, A., Serebrenik, A., & Vasilescu, B. (2019, May). Going farther together: The impact of social capital on sustained participation in open source. In <i>Proceedings of 2019 ieee/acm 41st international conference on software engineering (ICSE)</i> (pp. 688-699). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>modified <a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + Google+ + LinkedIn + Facebook + Google Search</td>
                                    <td>4,543</td>
                                    <td>8.80%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Gender diversity in the OpenStack community: A new report</td>
                                    <td>2013-2017</td>
                                    <td>OpenStack Summit in Barcelona and Boston</td>
                                    <td><a href="https://genderize.io/">genderize.io</a></td>
                                    <td>-</td>
                                    <td>9.80%</td>
                                    <td>Izquierdo, D., Huesman, N., Serebrenik, A., & Robles, G. (2018). Openstack gender diversity report. <i>IEEE Software</i>, 36(1), 28-33.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Gender diversity in the OpenStack community: A new report</td>
                                    <td>2017</td>
                                    <td>Online Survey</td>
                                    <td><a href="https://genderize.io/">genderize.io</a></td>
                                    <td>-</td>
                                    <td>10.40%</td>
                                    <td>Izquierdo, D., Huesman, N., Serebrenik, A., & Robles, G. (2018). Openstack gender diversity report. <i>IEEE Software</i>, 36(1), 28-33.</td>
                            </tr><tr className="tablePadding">
                                    <td className="font-bold">Work practices and perceptions from women core developers in OSS communities</td>
                                    <td>2020</td>
                                    <td>GitHub</td>
                                    <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + <a href="https://namsor.app/">Namsor</a></td>
                                    <td>242,662</td>
                                    <td>5.35%</td>
                                    <td>Canedo, E. D., Bonifácio, R., Okimoto, M. V., Serebrenik, A., Pinto, G., & Monteiro, E. (2020, October). Work practices and perceptions from women core developers in oss communities. In <i>Proceedings of the 14th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11).</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Work practices and perceptions from women core developers in OSS communities</td>
                                    <td>2020</td>
                                    <td>GitHub</td>
                                    <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + <a href="https://namsor.app/">Namsor</a></td>
                                    <td>1,954 core</td>
                                    <td>2.30%</td>
                                    <td>Canedo, E. D., Bonifácio, R., Okimoto, M. V., Serebrenik, A., Pinto, G., & Monteiro, E. (2020, October). Work practices and perceptions from women core developers in oss communities. In <i>Proceedings of the 14th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11).</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Gender Typicality of Behavior Predicts Success on Creative Platforms</td>
                                    <td>2021</td>
                                    <td>GitHub</td>
                                    <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8103473&casa_token=vWUCiK1GIEcAAAAA:2S9TgfzyrSWkSj_2Uxxb7M4Mia77AdIwmhhV5AqkptTD7043xcqXO-vjnFBq6MkG8REobrZHrA&tag=1">Simple Gender</a></td>
                                    <td>1,634,373</td>
                                    <td>5.49%</td>
                                    <td>Vasarhelyi, O., & Vedres, B. (2021). Gender Typicality of Behavior Predicts Success on Creative Platforms. <i>arXiv preprint arXiv:2103.01093</i>.</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Including everyone, everywhere: Understanding opportunities and challenges of geographic gender-inclusion in oss</td>
                                    <td>2021</td>
                                    <td>GitHub</td>
                                    <td><a href="https://genderize.io/">genderize.io</a></td>
                                    <td>65,132</td>
                                    <td>10.00%</td>
                                    <td>Prana, G. A. A., Ford, D., Rastogi, A., Lo, D., Purandare, R., & Nagappan, N. (2021). Including everyone, everywhere: Understanding opportunities and challenges of geographic gender-inclusion in oss. <i>IEEE Transactions on Software Engineering</i>.</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Worldwide Gender Differences in Public Code Contributions: and how they have been affected by the COVID-19 pandemic</td>
                                    <td>2022</td>
                                    <td>Software Heritage</td>
                                    <td><a href="https://pypi.org/project/gender-guesser/">GENDER GUESSER</a></td>
                                    <td>21.4M</td>
                                    <td>10.00%</td>
                                    <td>Rossi, D., & Zacchiroli, S. (2022). Worldwide Gender Differences in Public Code Contributions. <i>arXiv preprint arXiv:2202.07278</i>.</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Worldwide Gender Differences in Public Code Contributions</td>
                                    <td>2022</td>
                                    <td>Software Heritage</td>
                                    <td><a href="https://pypi.org/project/gender-guesser/">GENDER GUESSER</a></td>
                                    <td>21.4M</td>
                                    <td>10.00%</td>
                                    <td>Rossi, D., & Zacchiroli, S. (2022). Worldwide Gender Differences in Public Code Contributions. In <i>Proceedings of 2022 International Conference on Software Engineering (ICSE)</i>. IEEE.</td>
                            </tr>
                            </tbody>
                        </table>,
                    },
                    {
                        title: "Ecosystems or Projects",
                        content: 
                        <table className="table-auto w-full mt-8 rounded">
                                <thead>
                                    <tr className="text-left headerPadding">
                                        <th>Title</th>
                                        <th>Ecosystem</th>
                                        <th>Year</th>
                                        <th>Data Source</th>
                                        <th>Gender Inferece</th>
                                        <th>Sample Size</th>
                                        <th>Women Percentage</th>
                                        <th>Reference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Gender, representation and online participation: A quantitative study</td>
                                        <td>Drupal</td>
                                        <td>2014</td>
                                        <td>mailing list</td>
                                        <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a></td>
                                        <td>3,342</td>
                                        <td>9.81%</td>
                                        <td>Vasilescu, B., Capiluppi, A., & Serebrenik, A. (2014). Gender, representation and online participation: A quantitative study. <i>Interacting with Computers</i>, 26(5), 488-511.</td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Gender, representation and online participation: A quantitative study</td>
                                        <td>Wordpress</td>
                                        <td>2014</td>
                                        <td>mailing list</td>
                                        <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a></td>
                                        <td>3,611</td>
                                        <td>7.81%</td>
                                        <td>Vasilescu, B., Capiluppi, A., & Serebrenik, A. (2014). Gender, representation and online participation: A quantitative study. <i>Interacting with Computers</i>, 26(5), 488-511.</td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">ASF Committer Diversity Survey. 2016</td>
                                        <td>Apache</td>
                                        <td>2016</td>
                                        <td>Online survey</td>
                                        <td>-</td>
                                        <td>765</td>
                                        <td>5.20%</td>
                                        <td>Sharan, F. (2020). ASF Committer Diversity Survey. 2016.</td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Gender-diversity Analysis of the Linux Kernel Technical Contributions</td>
                                        <td>Linux</td>
                                        <td>2005-2016</td>
                                        <td>GitHub</td>
                                        <td><a href="genderize.io">genderize.io </a></td>
                                        <td>14,905</td>
                                        <td>8%</td>
                                        <td><a href="https://speakerdeck.com/bitergia/gender-diversity-analysis-of-the-linux-kernel-technical-contributions?slide=48">Linux Report</a></td>
                                    </tr>
                                    <tr className="tablePadding">
                                        <td className="font-bold">Preliminary report on the influence of capital in an ethical-modular project: Quantitative data from the 2016 Debian survey</td>
                                        <td>Debian</td>
                                        <td>2016</td>
                                        <td>Online survey</td>
                                        <td>-</td>
                                        <td>1,479</td>
                                        <td>2%</td>
                                        <td>Raissi, M., de Blanc, M., & Zacchiroli, S. (2017). Preliminary report on the influence of capital in an ethical-modular project: Quantitative data from the 2016 Debian survey. <i>Journal of Peer Production</i>, (10), 1-25.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Where Are Females in OSS Projects? Socio Technical Interactions</td>
                                    <td>Angular.js</td>
                                    <td>2019</td>
                                    <td>GitHub</td>
                                    <td><a href="https://namsor.app/">Namsor</a></td>
                                    <td>1,601</td>
                                    <td>3.40%</td>
                                    <td>Asri, I. E., & Kerzazi, N. (2019, September). Where Are Females in OSS Projects? Socio Technical Interactions. In <i>Working Conference on Virtual Enterprises</i> (pp. 308-319). Springer, Cham.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Where Are Females in OSS Projects? Socio Technical Interactions</td>
                                    <td>Moby</td>
                                    <td>2019</td>
                                    <td>GitHub</td>
                                    <td><a href="https://namsor.app/">Namsor</a></td>
                                    <td>1,824</td>
                                    <td>3.50%</td>
                                    <td>Asri, I. E., & Kerzazi, N. (2019, September). Where Are Females in OSS Projects? Socio Technical Interactions. In <i>Working Conference on Virtual Enterprises</i> (pp. 308-319). Springer, Cham.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Where Are Females in OSS Projects? Socio Technical Interactions</td>
                                    <td>Rails</td>
                                    <td>2019</td>
                                    <td>GitHub</td>
                                    <td><a href="https://namsor.app/">Namsor</a></td>
                                    <td>3,723</td>
                                    <td>4.20%</td>
                                    <td>Asri, I. E., & Kerzazi, N. (2019, September). Where Are Females in OSS Projects? Socio Technical Interactions. In <i>Working Conference on Virtual Enterprises</i> (pp. 308-319). Springer, Cham.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Where Are Females in OSS Projects? Socio Technical Interactions</td>
                                    <td>Django</td>
                                    <td>2019</td>
                                    <td>GitHub</td>
                                    <td><a href="https://namsor.app/">Namsor</a></td>
                                    <td>1,672</td>
                                    <td>5.30%</td>
                                    <td>Asri, I. E., & Kerzazi, N. (2019, September). Where Are Females in OSS Projects? Socio Technical Interactions. In <i>Working Conference on Virtual Enterprises</i> (pp. 308-319). Springer, Cham.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Where Are Females in OSS Projects? Socio Technical Interactions</td>
                                    <td>Elasticsearch</td>
                                    <td>2019</td>
                                    <td>GitHub</td>
                                    <td><a href="https://namsor.app/">Namsor</a></td>
                                    <td>1,127</td>
                                    <td>4.20%</td>
                                    <td>Asri, I. E., & Kerzazi, N. (2019, September). Where Are Females in OSS Projects? Socio Technical Interactions. In <i>Working Conference on Virtual Enterprises</i> (pp. 308-319). Springer, Cham.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Where Are Females in OSS Projects? Socio Technical Interactions</td>
                                    <td>TensorFlow</td>
                                    <td>2019</td>
                                    <td>GitHub</td>
                                    <td><a href="https://namsor.app/">Namsor</a></td>
                                    <td>1,735</td>
                                    <td>5.80%</td>
                                    <td>Asri, I. E., & Kerzazi, N. (2019, September). Where Are Females in OSS Projects? Socio Technical Interactions. In <i>Working Conference on Virtual Enterprises</i> (pp. 308-319). Springer, Cham.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>Android</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>258 core</td>
                                    <td>3.87%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>Chromium OS</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>151 core</td>
                                    <td>3.97%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>Couchbase</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>24 core</td>
                                    <td>4.17%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>Go</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>90 core</td>
                                    <td>7.77%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>LibreOffice</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>68 core</td>
                                    <td>1.47%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>OmapZoom</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>64 core</td>
                                    <td>10%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>oVirt</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>34 core</td>
                                    <td>2.94%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>

                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>Qt</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>159 core</td>
                                    <td>3.12%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>Typo3</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>73 core</td>
                                    <td>4.10%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>Whamcloud</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>genderComputer</td>
                                    <td>19 core</td>
                                    <td>0%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">The Linux Foundation Report on Diversity, Equity, and Inclusion in Open Source</td>
                                    <td>Linux</td>
                                    <td>2021</td>
                                    <td>Online survey</td>
                                    <td>-</td>
                                    <td>2,350</td>
                                    <td>14%</td>
                                    <td><a href="https://www.linuxfoundation.org/tools/the-2021-linux-foundation-report-on-diversity-equity-and-inclusion-in-open-source/">Linux Report</a></td>
                                </tr>




                                <tr className="tablePadding">
                                    <td className="font-bold">Diversity and inclusion in open source software (OSS) projects: Where do we stand?</td>
                                    <td>2019</td>
                                    <td>Gerrit</td>
                                    <td>modified <a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + Google+ + LinkedIn + Facebook + Google Search</td>
                                    <td>4,543</td>
                                    <td>8.80%</td>
                                    <td>Bosu, A., & Sultana, K. Z. (2019, September). Diversity and inclusion in open source software (OSS) projects: Where do we stand?. In <i>2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11). IEEE.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Gender diversity in the OpenStack community: A new report</td>
                                    <td>2013-2017</td>
                                    <td>OpenStack Summit in Barcelona and Boston</td>
                                    <td><a href="https://genderize.io/">genderize.io</a></td>
                                    <td>-</td>
                                    <td>9.80%</td>
                                    <td>Izquierdo, D., Huesman, N., Serebrenik, A., & Robles, G. (2018). Openstack gender diversity report. <i>IEEE Software</i>, 36(1), 28-33.</td>
                                </tr>
                                <tr className="tablePadding">
                                    <td className="font-bold">Gender diversity in the OpenStack community: A new report</td>
                                    <td>2017</td>
                                    <td>Online Survey</td>
                                    <td><a href="https://genderize.io/">genderize.io</a></td>
                                    <td>-</td>
                                    <td>10.40%</td>
                                    <td>Izquierdo, D., Huesman, N., Serebrenik, A., & Robles, G. (2018). Openstack gender diversity report. <i>IEEE Software</i>, 36(1), 28-33.</td>
                            </tr><tr className="tablePadding">
                                    <td className="font-bold">Work practices and perceptions from women core developers in OSS communities</td>
                                    <td>2020</td>
                                    <td>GitHub</td>
                                    <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + <a href="https://namsor.app/">Namsor</a></td>
                                    <td>242,662</td>
                                    <td>5.35%</td>
                                    <td>Canedo, E. D., Bonifácio, R., Okimoto, M. V., Serebrenik, A., Pinto, G., & Monteiro, E. (2020, October). Work practices and perceptions from women core developers in oss communities. In <i>Proceedings of the 14th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11).</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Work practices and perceptions from women core developers in OSS communities</td>
                                    <td>2020</td>
                                    <td>GitHub</td>
                                    <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + <a href="https://namsor.app/">Namsor</a></td>
                                    <td>1,954 core</td>
                                    <td>2.30%</td>
                                    <td>Canedo, E. D., Bonifácio, R., Okimoto, M. V., Serebrenik, A., Pinto, G., & Monteiro, E. (2020, October). Work practices and perceptions from women core developers in oss communities. In <i>Proceedings of the 14th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)</i> (pp. 1-11).</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Gender Typicality of Behavior Predicts Success on Creative Platforms</td>
                                    <td>2021</td>
                                    <td>GitHub</td>
                                    <td><a href="https://github.com/tue-mdse/genderComputer">genderComputer</a> + <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8103473&casa_token=vWUCiK1GIEcAAAAA:2S9TgfzyrSWkSj_2Uxxb7M4Mia77AdIwmhhV5AqkptTD7043xcqXO-vjnFBq6MkG8REobrZHrA&tag=1">Simple Gender</a></td>
                                    <td>1,634,373</td>
                                    <td>5.49%</td>
                                    <td>Vasarhelyi, O., & Vedres, B. (2021). Gender Typicality of Behavior Predicts Success on Creative Platforms. <i>arXiv preprint arXiv:2103.01093</i>.</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Including everyone, everywhere: Understanding opportunities and challenges of geographic gender-inclusion in oss</td>
                                    <td>2021</td>
                                    <td>GitHub</td>
                                    <td><a href="https://genderize.io/">genderize.io</a></td>
                                    <td>65,132</td>
                                    <td>10.00%</td>
                                    <td>Prana, G. A. A., Ford, D., Rastogi, A., Lo, D., Purandare, R., & Nagappan, N. (2021). Including everyone, everywhere: Understanding opportunities and challenges of geographic gender-inclusion in oss. <i>IEEE Transactions on Software Engineering</i>.</td>
                                </tr><tr className="tablePadding">
                                    <td className="font-bold">Worldwide Gender Differences in Public Code Contributions: and how they have been affected by the COVID-19 pandemic</td>
                                    <td>2022</td>
                                    <td>Software Heritage</td>
                                    <td><a href="https://pypi.org/project/gender-guesser/">GENDER GUESSER</a></td>
                                    <td>21.4M</td>
                                    <td>10.00%</td>
                                    <td>Rossi, D., & Zacchiroli, S. (2022). Worldwide Gender Differences in Public Code Contributions. <i>arXiv preprint arXiv:2202.07278</i>.</td>
                                </tr>
                            </tbody>
                        </table>,
                    }
                ]
            }
        }
    }
}

export default texts;