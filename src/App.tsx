import React from 'react';
import styled from 'styled-components';

const PageStyle = styled.div`
display: flex;
flex-direction: column;
`;
const TopDiv = styled.div`
display: flex;
flex-direction: row;
background: #339966;
color: white;
`;
const TopImageDiv  = styled.div`
width: 420px;
`;
const TopContentDiv = styled.div`
display: flex;
flex-direction: column;
padding: 20px 40px;
`;
const ContentDiv = styled.div`
clear: both;
display: flex;                  /* establish flex container */
flex-direction: row;            /* default value; can be omitted */
flex-wrap: nowrap;              /* default value; can be omitted */
justify-content: space-between;
height: 100%;
`;
const LeftBarDiv = styled.div`
float: left;
width: 420px;
background: #d9f2e6;
color: #2f2d2d;
font-family: "Helvetica CE";
margin-right: 10px;
`;

const MainContentDiv = styled.div`
float: right;
width: 100%;
height: 100%;
`;

const CommercialExpDiv = styled.div`
`;

const CompanyDiv = styled.div`
`;

const RodoDiv = styled.div`
font-style: italic; 
font-size: 12px;
`;

const HeaderSpan = styled.div`
color: white;
font-size: 25px;
font-weight: 400;
font-family: "Helvetica CE";
`;

const Test = styled.p`
color: #2f2d2d;
font-size: 16px;
font-family: "Open Sans";
padding: 2px 2px 2px 2px;
`;

class App extends React.Component<{}> {
  render(){
    return (
      <PageStyle>
         <TopDiv>
            <TopImageDiv>
            </TopImageDiv>
            <TopContentDiv>
              
                <HeaderSpan>https://github.com/sweetashne</HeaderSpan>
            </TopContentDiv>
        </TopDiv>
        <ContentDiv>
            <LeftBarDiv>
                <h4>PROFILE</h4>
                <Test>
                    I would describe myself as a shy person, who likes skimboarding, running, and is really curious how software and games are made. I like to solve real problems and in most cases, I eventually end up reaching the goal, but often it takes more than I would like to.
                </Test>

                <h4>EDUCATION</h4>
                <h4>2014 – 2019</h4>
                <Test >
                    Bachelor of Engineering. University of Gdansk Faculty: Faculty of Mathematics, Physics and Informatics (in progress)
                </Test>
                <h4>2009 - 2013</h4>
                <Test>
                    Technical school of Mechanical and IT in Lebork
                </Test>

                <h4>SKILLS</h4>
                <h4>Programming Languages:</h4>
                <Test>
                    C#, TypeScript, C++
                </Test>
                <h4>Frameworks:</h4>
                <Test>
                    Entity Framework, ASP.NET MVC, .NET Core
                </Test>
                <h4>.NET Libraries:</h4>
                <Test>
                    IdentityServer3, Swagger, AutoMapper
                </Test>
                <h4>Web:</h4>
                <Test>
                    Angular, Node.js
                </Test>
                <h4>Databases:</h4>
                <Test>
                    MSSql
                </Test>
                <h4>Testing, Version Control System:</h4>
                <Test>
                    nUnit, xUnit, Moq, Autofixture, FluentAssertions, Git
                </Test>
                <h4>Tools:</h4>
                <Test>
                    Trello, VisualStudio + R#, Microsoft SQL Server Management Studio, Visual Studio Code
                </Test>
                <h4>Other:</h4>
                <Test>
                    WebApi, REST, JWT, OAuth
                </Test>

                <h4>LANGUAGES</h4>
                <Test>
                    <b>Polish</b> - native <br />
                    <b>English</b> - advanced <br />
                </Test>

                <h4>INTERESTS</h4>
                <Test>
                    <ul>
                        <li>Skimboard</li>
                        <li>Game development and C++</li>
                    </ul>
                </Test>
            </LeftBarDiv>
            <MainContentDiv>
                <CommercialExpDiv>
                    <h2>Projects</h2>

                    <CompanyDiv>
                        <h3>My Gym Friend</h3>
                        
						<p>
						As my thesis at the university, I choose to make an application that would be helpful to plan and keep track of training. Not only those in the gym but also jogging. 
None of the existing solutions was working for me, because all applications were too complex, I was not able to define a simple plan, for a week, and then duplicate it with small modification for different dates. Also, It was a simple and real case that would make my academic work more useful. Base on consultation I choose C# as a base for my backend, for the frontend I used angular2+ because it was simpler than other frameworks that I have seen, and it was using typescript by default. I also was using Ionic to port the app as a mobile app. Relational database made in MSSql with EF Core to load the data.
In the application user was authenticated with google account.
						</p>
                    </CompanyDiv>
					 <CompanyDiv>
                        <h3>Comic shelf</h3>
                        
						<p>
							Project for all comic and book fans, that don’t need to hold their collection in secret but with courage and enthusiasm share them with others. It was designed to be a platform for people that would like to lend others their treasures and get others in return, of course not for forever, but for the consulting term. In simple words comic lending platform. It was supposed to find a person that has a copy of the album of your dreams that would be willing to lend.
After seeing and using aspboilerplate in the Hungry Glutton project I wanted to check and try myself on using similar patterns but avoid most of the abstraction. Same as the template backend application was made in .NET Core, MSSql, and Angular on the frontend.
My responsibilities in this project were to help the main developer that was also a creator of the idea to implement and release it for him and his friends. I was included in the whole process of development. Starting with planning and selecting tasks that were added to the Kanban board on Trello. My favorite part here was to cooperate with other developers and solve more complex problems, plan how to create logic in code, how to test them in small unit tests and also in bigger chunks as an integration test.

Technologies: .NET Core 2.0, MSSql, Angular 7
						
						
						</p>
						<p>
						URL: https://github.com/Dpio/comic_shelf
						</p>
                    </CompanyDiv>     
					
                    <CompanyDiv>
                        <h3>Help and support for Dori</h3>
                        
						<p>
							Dori is a local business that runs three small stores in Łeba and Lębork. I created a small and simple business card page using angular because it was the easiest for me at that moment. I also set up hosting, deployed it, installed an SSL certificate, and managed it for a year. 
Additionally, I was managing the IT part of stores including modification of cash registers data, sync between them, maintaining the warehouse, and fixing small issues.

						</p>
                    </CompanyDiv>
 <CompanyDiv>
                        <h3>Hungry Glutton</h3>
                        
						<p>
						People working in office buildings can’t wait until their favourite sandwich supplier will be in the building, their biggest fear is that they will miss his visit. That’s why you need this app, it was designed to give you notification whenever Mr. Sandwich is near with his tasty food. It meant to connect and make communication easier. Those people often didn’t have access to the office internal space so they relied on the reception, that might be too busy to spread the call.
	This project was also based on https://aspnetboilerplate.com/. Open Source bootstrap for .NET project. This template allows to create application in .NET Core, MSSql, and Angular on the frontend. The same mentioned in the Comic shelf project.
	I was helping in development of proof of concept for this app. It was my first time seeing such complex framework with all levels of abstraction. First time I was writing and modifying tests written in xUnit. 
	We were trying to keep the process as real as possible, splitting issues into smaller isolated form, make code review. My goal was to understand why things are designed in such way.

Technologies: .NET Core 2.0, MSSql, Angular 7,
						</p>
                    </CompanyDiv>
                    <CompanyDiv>
                        <h3>Spherule The game</h3>
                        
						<p>
							Proof of concept that as a team we were able to create a simple game in Unity. Two developers and a person with too much experience in playing and exploring indie games world were trying to create something that they would like. The concept for this project was based on classic logic learning where the user is introduced to new techniques while moving with levels. The goal was to use available tools, such as ramps or trampolines to transport a ball from the starting point to a certain point, resolving small tasks for points. There were two states, design state when the user was able to modify the environment to reach the goal and phase of validation that the user was only able to observe without any interactions. 
My responsibilities in this project mainly focused on exploring Unity environment, finding the way to solve problems. I made the majority of the code that was created during this project. I was also cooperating and paired programming with the second developer in the team. We did meetings every week and discussed progress and next steps. On each of those, I was presenting a demo to our third friend that was in the role of the project manager.
What did I learn in this project is probably the most interesting. The most important would be basic knowledge of Unity, how to work with scenes, animations, how to use available physics, make UI, load asserts, manipulate objects, attach behaviors. Overall we didn’t publish this game anywhere because of lack of time and motivation.
						
						</p>
						<p>
						URL: https://github.com/sweetashne/GraKulka
						</p>
                    </CompanyDiv>
                </CommercialExpDiv>
            
			<RodoDiv>
				I hereby consent to my personal data being processed by Powel for the purpose of considering my application.
			</RodoDiv>
			</MainContentDiv>
            </ContentDiv>
       
      </PageStyle>
    );
  }
}

export default App;
