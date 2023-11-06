"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';
import { updateUserProgress } from '../../functions';
import { getUserProgress } from '../../functions';
import { getAllQuestions } from '../../functions';
import { levelUp } from '../../functions';
import { sessionUp } from '../../functions';
import Level from '../../components/Level';
import "./style.css"


const Page = ({ searchParams }) => {
    const auth = useAuth();
    const router = useRouter();
    const data = JSON.parse(searchParams?.data);
    const [exam, setCurrentExam] = useState(null);
    const [level, setLevel] = useState(data);

    const [questions, setQuestions] = useState();
    const [levelData, setLevelData] = useState();
    const [lastpercentege, setLastpercentege] = useState(0);

    const [totalPercentage, setTotalPercentage] = useState();


    const levelsData = levelData;


    const unlockedLevels = levelsData?.filter(level => !level.isLocked);
    const reversedUnlockedLevels = unlockedLevels ? [...unlockedLevels].reverse() : [];

    const defaultSelectedLevel = reversedUnlockedLevels.length > 0 ? reversedUnlockedLevels[0].levelNumber : null;
    const defaultSelectedLevelName = reversedUnlockedLevels.length > 0 ? reversedUnlockedLevels[0].name : null;

    const [selectedLevelName, setSelectedLevelName] = useState(defaultSelectedLevelName || 'crypto');
    const [selectedLevel, setSelectedLevel] = useState(defaultSelectedLevel || 1);




    const handleLevelClick = (levelNumber, isLocked, levelname) => {
        setSelectedLevelName(levelname)
        if (!isLocked) {
            setSelectedLevel(levelNumber);
        }
    };

    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions?.length).fill(''));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswerChange = (event) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = event.target.value;
        setSelectedAnswers(updatedAnswers);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions?.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = () => {
        let score = 0;
        for (let i = 0; i < questions?.length; i++) {
            if (selectedAnswers[i] === questions[i].correctAnswer) {
                score++;
            }
        }
        return score;
    };

    const finishQuiz = async () => {
        const correctAnswers = calculateScore();
        const totalQuestions = questions?.length;
        const percentage = (correctAnswers / totalQuestions) * 100;

        if (percentage < 60) {
            alert('You Are Fail Minimum Achive 60% To Pass This Level')
        } else {
            const username = auth.user?.username || auth.user?.email;
            const levelNumber = selectedLevel;
            await updateUserProgress(username, level, percentage);
            await updateUserProgress(username, level + 1, 0);
            alert('You Pass This Level')
            const levelData = await getUserProgress(username);
            await setLevelData(levelData?.levels);
            await levelUp(auth.user.username, Number(levelData.lessonprogress.module + 1))
            await sessionUp(auth.user.username, Number(levelData.lessonprogress.module + 1), 1).then(router.push(`/courses`))
        }

        console.log(`You got ${correctAnswers} out of ${totalQuestions} questions correct.`);
        console.log(`Your percentage: ${percentage.toFixed(2)}%`);
    };




    // useEffect(() => {

    //     getLevelData();
    //   },[auth?.user]);
    
    
    // const data = JSON.parse(searchParams?.data);
    // setLevel(data);
    useEffect(() => {
        if (data == 13) {
            setCurrentExam('crypto');
        } else if (data == 23) {
            setCurrentExam('Beginner');
        } else if (data == 33) {
            setCurrentExam('intermediate');
        } else {
            setCurrentExam('Advanced');
        }
    });


    useEffect(() => {
        const lastObject = levelData ? levelData[levelData.length - 1] : null;
        setLastpercentege(lastObject?.percentage);

        let obtainPercentage = 0;

        levelData?.forEach(item => {
            obtainPercentage += item.percentage
        });

        setTotalPercentage(Number(obtainPercentage) / (levelData?.length * 100));

    }, [levelData, auth.user]);


    useEffect(() => {
        async function getQuestions() {
            const examQuestions = await getAllQuestions(exam);
            setQuestions(examQuestions);
        }
        getQuestions();
    });

    useEffect(() => {
        async function getLevels() {
            const username = auth.user?.username;
            const levelData = await getUserProgress(username);
            await setLevelData(levelData?.levels);
            // console.log(levelData?.levels);
        }
        getLevels();
    }, [auth.user]);
    return (
        <>
            {auth?.user === null || auth?.user === undefined || !auth?.user ?
                (
                    <>
                        <div className=" cover-container">
                            <h1>Login Required</h1>
                            <p>Please log in to access this page.</p>
                        </div>
                        <style jsx>{`

                          .cover-container {
                            color: #fff;
                            border-radius: 5px;
                            padding: 20px;
                            text-align: center;
                            margin-top: 4rem;
                            margin-bottom: 3rem;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                          }
                          .cover-container h1 {
                            font-size: 2rem;
                            margin-bottom: 10px;
                          }
                          .cover-container p {
                            font-size: 1.2rem;
                            margin-bottom: 20px;
                          }

                        `}</style>
                    </>
                ) : (
                    <>
                        <>
                            <div className="my-flex">
                                <div className="my-mg-top w-full max-lg:w-full max-sm:w-[100%]  ">
                                    <div className="p-10 quiz-container">
                                        {Number(lastpercentege) > 60 ?
                                            <>
                                                <div style={{ textAlign: 'center' }} className="p-10 selected-level">
                                                    <h3 style={{ fontWeight: 'bold', fontSize: '30px', color: 'green' }} >Congratulations</h3>
                                                    <div>
                                                        <h2>Quiz Completed!</h2>
                                                        <p style={{ fontWeight: 'bold', fontSize: '25px' }}>Your Percentage: {(Number(totalPercentage) * 100).toFixed(2)}%</p>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                            {/* {defaultSelectedLevel} */}
                                                {defaultSelectedLevelName !== null && (
                                                    <div style={{ textAlign: 'center' }} className="p-10 selected-level">
                                                        <h3 style={{ fontWeight: 'bold', fontSize: '20px' }} >Level : {exam}</h3>
                                                        <p style={{ fontSize: '13px' }}>Passing Marks 60/100</p>
                                                        <>
                                                            {currentQuestionIndex < questions?.length ? (
                                                                <div className="radio-input">
                                                                    <div className="info">
                                                                        <span className="question">{questions[currentQuestionIndex].question}</span>
                                                                        <span className="steps">{`${currentQuestionIndex + 1}/${questions?.length}`}</span>
                                                                    </div>
                                                                    {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                                                                        <div key={optionIndex}>
                                                                            <input
                                                                                type="radio"
                                                                                id={`value-${optionIndex}`}
                                                                                name={`value-radio-${currentQuestionIndex}`}
                                                                                value={option}
                                                                                checked={selectedAnswers[currentQuestionIndex] === option}
                                                                                onChange={handleAnswerChange}
                                                                            />
                                                                            <label htmlFor={`value-${optionIndex}`}>{option}</label>
                                                                        </div>
                                                                    ))}
                                                                    <div className="flex gap-2 ">
                                                                        {currentQuestionIndex > 0 && (
                                                                            <button className="back-button mg-auto" onClick={goToPreviousQuestion}>
                                                                                Back
                                                                            </button>
                                                                        )}

                                                                        <button
                                                                            className="submit-button mg-auto"
                                                                            onClick={currentQuestionIndex === questions?.length - 1 ? finishQuiz : goToNextQuestion}
                                                                            disabled={!selectedAnswers[currentQuestionIndex]}
                                                                        >
                                                                            {currentQuestionIndex === questions?.length - 1 ? "Finish" : "Next"}
                                                                        </button>

                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="result">
                                                                    <h2>Quiz Completed!</h2>
                                                                    <p>Your score: {calculateScore()} out of {questions?.length}</p>
                                                                </div>
                                                            )}
                                                        </>
                                                    </div>
                                                )}
                                            </>

                                        }
                                    </div>
                                </div>
                                {/* <div className="w-[25%] max-lg:w-full max-sm:w-[100%] quiz-layout">

                                    <h1>Quiz Levels</h1>
                                    <div className="level-container">
                                        {levelsData?.map((level) => (
                                            <Level
                                                key={level.levelNumber}
                                                levelName={level.name}
                                                levelNumber={level.levelNumber}
                                                percentage={level.percentage}
                                                isLocked={level.isLocked}
                                                onClick={() => handleLevelClick(level.levelNumber, level.isLocked, level.name)}
                                            />
                                        ))}
                                    </div>

                                </div> */}
                            </div>

                        </>

                    </>
                )
            }
        </>
    );
};

export default Page;
