import { useEffect, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import User from './components/User';

function App() {
  const [question_num , question_set] = useState(1);
  const [STOP , setSTOP] = useState(false);
  const [username , setusername] = useState(null);
  const [earned , setearned] = useState("$ 0"); 
  const data = [
    {
      id: 1,
      question: "Which of the following corresponds to ‘ek bataa do’?",
      answers: [
        {
          text: "Pura",
          verdict: false,
        },
        {
          text: "Sawa",
          verdict: false,
        },
        {
          text: "Adha",
          verdict: true,
        },
        {
          text: "pauna",
          verdict: false,
        }
      ],
    },
    {
      id: 2,
      question: "Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [{
          text: "Agni",
          verdict: false,
        },
        {
          text: "Indra",
          verdict: false,
        },
        {
          text: "Hanuman",
          verdict: false,
        },
        {
          text: "Ganesha",
          verdict: true,
        }
      ],
    },
    {
      id: 3,
      question: "Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali?",
      answers: [
        {
          text: "P.B. Shelley",
          verdict: false,
        },
        {
          text: "W.B. Yeats",
          verdict: true,
        },
        {
          text: "Alfred Tennyson",
          verdict: false,
        },
        {
          text: "T.S. Elliot",
          verdict: false,
        }
      ],
    },
    {
      id: 4,
      question: "Which of these sports requires you to shout out a word loudly during play?",
      answers: [
        {
          text: "Ludo",
          verdict: false,
        },
        {
          text: "Kho-kho",
          verdict: true,
        },
        {
          text: "Playing cards",
          verdict: false,
        },
        {
          text: "Chess",
          verdict: false,
        }
      ],
    },
    {
      id: 5,
      question: "Which of these spices is the smallest in size?",
      answers: [
        {
          text: "Ajwain",
          verdict: true,
        },
        {
          text: "Jeera",
          verdict: false,
        },
        {
          text: "Saunf",
          verdict: false,
        },
        {
          text: "Methi Seeds",
          verdict: false,
        }
      ],
    },
    {
      id: 6,
      question: "Which of these spices is the smallest in size?",
      answers: [
        {
          text: "Ajwain",
          verdict: true,
        },
        {
          text: "Jeera",
          verdict: false,
        },
        {
          text: "Saunf",
          verdict: false,
        },
        {
          text: "Methi Seeds",
          verdict: false,
        }
      ],
    },
    {
      id: 7,
      question: "Who are the only married couple elected to the 16th Lok Sabha?",
      answers: [
        {
          text: "Sukhbir Singh-Harshimrat Kaur Badal",
          verdict: false,
        },
        {
          text: "Pappu Yadav-Ranjeet Ranjan",
          verdict: true,
        },
        {
          text: "Priya Ranjan-Deepa Dasmunshi",
          verdict: false,
        },
        {
          text: "Prakash-Brinda Karat",
          verdict: false,
        }
      ],
    },
    {
      id: 8,
      question: "Which of these stages is one of the four stages of human life in ancient Indian tradition?",
      answers: [
        {
          text: "Dronacharya",
          verdict: false,
        },
        {
          text: "Vasudevacharya",
          verdict: false,
        },
        {
          text: "Kripacharya",
          verdict: false,
        },
        {
          text: "Bramhacharya",
          verdict: true,
        }
      ],
    },
    {
      id: 9,
      question: "In which of these two sports is the term ‘free hit’ used?",
      answers: [
        {
          text: "Football, Squash",
          verdict: false,
        },
        {
          text: "Badminton, Tennis",
          verdict: false,
        },
        {
          text: "Badminton, Cricket",
          verdict: false,
        },
        {
          text: "Hockey, Cricket",
          verdict: true,
        }
      ],
    },
    {
      id: 10,
      question: "During which of these legendary events did Lord Vishnu take the form of Kurma?",
      answers: [
        {
          text: "Samudra Manthan",
          verdict: true,
        },
        {
          text: "Kaliya Naag Mardan",
          verdict: false,
        },
        {
          text: "Hiranyakashipu Sanhar",
          verdict: false,
        },
        {
          text: "Kurukshetra Yudh",
          verdict: false,
        }
      ],
    },
    {
      id: 11,
      question: "Which of these is a popular crisp snack prepared with besan and spices?",
      answers: [
        {
          text: "Bikaneri bhujia",
          verdict: true,
        },
        {
          text: "Junagadhi Khandvi",
          verdict: false,
        },
        {
          text: "Kalkattia Sondesh",
          verdict: false,
        },
        {
          text: "Veg kolhapuri",
          verdict: false,
        }
      ],
    },
    {
      id: 12,
      question: "Which newspaper once kept its editorial cloumn blank as a mark of protest against the emergency of 1975?",
      answers: [
        {
          text: "Hindustan Times",
          verdict: false,
        },
        {
          text: "The Hindu",
          verdict: false,
        },
        {
          text: "The Indian Express",
          verdict: true,
        },
        {
          text: "The Times of India",
          verdict: false,
        }
      ],
    },
  ];
  const money_list = [
    {id : 1 , amount : `$ 1000`},
    {id : 2 , amount : "$ 2000"},
    {id : 3 , amount : "$ 4000"},
    {id : 4 , amount : "$ 8000"},
    {id : 5 , amount : "$ 12000"},
    {id : 6 , amount : "$ 24000"},
    {id : 7 , amount : "$ 36000"},
    {id : 8 , amount : "$ 50000"},
    {id : 9 , amount : "$ 10000"},
    {id : 10 , amount :"$ 20000"},
    {id : 11 , amount :"$ 30000"},
    {id : 12 , amount :"$ 50000"}
  ].reverse();
  useEffect(()=>{
    question_num > 1 &&
    setearned(money_list.find((m) => m.id === question_num - 1).amount);
  } , [money_list , question_num]); 
  return (
    <>
    <div className="main">
      {username ?
      (
        <>
          {STOP  ? <h1 className='endtext'>You Earned: {earned} </h1> : (
            <>
              <div className="display">
                <div className="top">
                  <div className="timer">
                    <Timer setSTOP = {setSTOP} question_num = {question_num}/>
                  </div>
                </div>
                <div className="bottom">
                  <Trivia data={data} setSTOP={setSTOP} question_num={question_num} question_set= {question_set} />
                </div>
              </div>
            </>
          )}
          <div className="leaderBoard">
            <ul className='list'>
              {money_list.map((m) =>(
              <li className={question_num === m.id ? 'money_list active':'money_list'}>
                <span className='money_list_no'>{m.id}</span> <span className='money_amount'>{m.amount}</span>
              </li>
              ))}
            </ul>
          </div>
      </>
    )  : <User setusername={setusername} /> }
    </div>
    </>);
    
}

export default App;
