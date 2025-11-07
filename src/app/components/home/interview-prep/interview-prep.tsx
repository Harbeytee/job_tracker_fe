"use client";

// import React, { useState, useEffect } from "react";
// import {
//   Clock,
//   CheckCircle,
//   XCircle,
//   Award,
//   AlertCircle,
//   Play,
//   RotateCcw,
//   ChevronRight,
// } from "lucide-react";

// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   correctAnswer: number;
//   explanation: string;
//   difficulty: "Easy" | "Medium" | "Hard";
// }

// interface UserAnswer {
//   questionId: number;
//   selectedAnswer: number | null;
//   timeSpent: number;
// }

// type InterviewStage = "setup" | "instructions" | "interview" | "results";

// const InterviewPrep: React.FC = () => {
//   const [stage, setStage] = useState<InterviewStage>("setup");

//   // Setup Form State
//   const [setupData, setSetupData] = useState({
//     role: "",
//     company: "",
//     experienceLevel: "mid",
//     interviewType: "technical",
//     duration: 30,
//     numberOfQuestions: 10,
//   });

//   // Interview State
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
//   const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
//   const [questionStartTime, setQuestionStartTime] = useState(Date.now());
//   const [isTimerRunning, setIsTimerRunning] = useState(false);

//   // Mock Questions Data
//   const questions: Question[] = [
//     {
//       id: 1,
//       question: "What is the time complexity of binary search?",
//       options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
//       correctAnswer: 1,
//       explanation:
//         "Binary search has O(log n) time complexity because it divides the search space in half with each iteration.",
//       difficulty: "Easy",
//     },
//     {
//       id: 2,
//       question: "Which HTTP method is idempotent?",
//       options: ["POST", "PUT", "PATCH", "All of the above"],
//       correctAnswer: 1,
//       explanation:
//         "PUT is idempotent, meaning multiple identical requests have the same effect as a single request.",
//       difficulty: "Medium",
//     },
//     {
//       id: 3,
//       question: "What is a closure in JavaScript?",
//       options: [
//         "A function that returns another function",
//         "A function combined with references to its surrounding state",
//         "A way to close browser windows",
//         "A type of loop",
//       ],
//       correctAnswer: 1,
//       explanation:
//         "A closure is a function combined with its lexical environment, allowing it to access variables from its outer scope.",
//       difficulty: "Medium",
//     },
//     {
//       id: 4,
//       question: "What does ACID stand for in database transactions?",
//       options: [
//         "Atomicity, Consistency, Isolation, Durability",
//         "Authentication, Consistency, Integration, Data",
//         "Access, Control, Identity, Delivery",
//         "Array, Class, Interface, Declaration",
//       ],
//       correctAnswer: 0,
//       explanation:
//         "ACID stands for Atomicity, Consistency, Isolation, and Durability - the four key properties of database transactions.",
//       difficulty: "Easy",
//     },
//     {
//       id: 5,
//       question: "What is the difference between let and var in JavaScript?",
//       options: [
//         "No difference",
//         "let is function-scoped, var is block-scoped",
//         "var is function-scoped, let is block-scoped",
//         "let can be redeclared, var cannot",
//       ],
//       correctAnswer: 2,
//       explanation:
//         "var is function-scoped while let is block-scoped. let also prevents redeclaration in the same scope.",
//       difficulty: "Easy",
//     },
//   ];

//   // Timer Effect
//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (isTimerRunning && timeRemaining > 0 && stage === "interview") {
//       interval = setInterval(() => {
//         setTimeRemaining((prev) => {
//           if (prev <= 1) {
//             setIsTimerRunning(false);
//             setStage("results");
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerRunning, timeRemaining, stage]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const handleStartInterview = () => {
//     if (!setupData.role || !setupData.company) {
//       alert("Please fill in all required fields");
//       return;
//     }
//     setStage("instructions");
//   };

//   const handleBeginInterview = () => {
//     setStage("interview");
//     setIsTimerRunning(true);
//     setQuestionStartTime(Date.now());
//     setTimeRemaining(setupData.duration * 60);
//   };

//   const handleAnswerSelect = (answerIndex: number) => {
//     const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
//     const existingAnswerIndex = userAnswers.findIndex(
//       (a) => a.questionId === questions[currentQuestionIndex].id
//     );

//     if (existingAnswerIndex >= 0) {
//       const updated = [...userAnswers];
//       updated[existingAnswerIndex] = {
//         questionId: questions[currentQuestionIndex].id,
//         selectedAnswer: answerIndex,
//         timeSpent,
//       };
//       setUserAnswers(updated);
//     } else {
//       setUserAnswers([
//         ...userAnswers,
//         {
//           questionId: questions[currentQuestionIndex].id,
//           selectedAnswer: answerIndex,
//           timeSpent,
//         },
//       ]);
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setQuestionStartTime(Date.now());
//     } else {
//       setIsTimerRunning(false);
//       setStage("results");
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setQuestionStartTime(Date.now());
//     }
//   };

//   const getSelectedAnswer = (questionId: number) => {
//     return userAnswers.find((a) => a.questionId === questionId)?.selectedAnswer;
//   };

//   const calculateResults = () => {
//     const correct = userAnswers.filter(
//       (answer, index) =>
//         answer.selectedAnswer === questions[index].correctAnswer
//     ).length;
//     const total = questions.length;
//     const percentage = Math.round((correct / total) * 100);
//     return { correct, total, percentage };
//   };

//   const handleRetake = () => {
//     setStage("setup");
//     setCurrentQuestionIndex(0);
//     setUserAnswers([]);
//     setTimeRemaining(1800);
//     setIsTimerRunning(false);
//   };

//   // Setup Stage
//   if (stage === "setup") {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">
//               Interview Prep
//             </h1>
//             <p className="text-gray-600">
//               Prepare for your upcoming interview with timed practice questions
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Setup Your Practice Session
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Role/Position <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={setupData.role}
//                   onChange={(e) =>
//                     setSetupData({ ...setupData, role: e.target.value })
//                   }
//                   placeholder="e.g., Senior Software Engineer"
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Company <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={setupData.company}
//                   onChange={(e) =>
//                     setSetupData({ ...setupData, company: e.target.value })
//                   }
//                   placeholder="e.g., Google, Microsoft, Startup Inc."
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Experience Level
//                 </label>
//                 <select
//                   value={setupData.experienceLevel}
//                   onChange={(e) =>
//                     setSetupData({
//                       ...setupData,
//                       experienceLevel: e.target.value,
//                     })
//                   }
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
//                 >
//                   <option value="entry">Entry Level (0-2 years)</option>
//                   <option value="mid">Mid Level (3-5 years)</option>
//                   <option value="senior">Senior Level (5+ years)</option>
//                   <option value="lead">Lead/Principal (10+ years)</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Interview Type
//                 </label>
//                 <select
//                   value={setupData.interviewType}
//                   onChange={(e) =>
//                     setSetupData({
//                       ...setupData,
//                       interviewType: e.target.value,
//                     })
//                   }
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
//                 >
//                   <option value="technical">Technical/Coding</option>
//                   <option value="behavioral">Behavioral</option>
//                   <option value="system-design">System Design</option>
//                   <option value="mixed">Mixed</option>
//                 </select>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Duration (minutes)
//                   </label>
//                   <select
//                     value={setupData.duration}
//                     onChange={(e) =>
//                       setSetupData({
//                         ...setupData,
//                         duration: Number(e.target.value),
//                       })
//                     }
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
//                   >
//                     <option value="15">15 minutes</option>
//                     <option value="30">30 minutes</option>
//                     <option value="45">45 minutes</option>
//                     <option value="60">60 minutes</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Number of Questions
//                   </label>
//                   <select
//                     value={setupData.numberOfQuestions}
//                     onChange={(e) =>
//                       setSetupData({
//                         ...setupData,
//                         numberOfQuestions: Number(e.target.value),
//                       })
//                     }
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
//                   >
//                     <option value="5">5 questions</option>
//                     <option value="10">10 questions</option>
//                     <option value="15">15 questions</option>
//                     <option value="20">20 questions</option>
//                   </select>
//                 </div>
//               </div>

//               <button
//                 onClick={handleStartInterview}
//                 className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 Continue to Instructions
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Instructions Stage
//   if (stage === "instructions") {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center">
//         <div className="max-w-3xl mx-auto">
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//               Instructions
//             </h2>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
//                 <Clock className="w-6 h-6 text-blue-600 mt-1" />
//                 <div>
//                   <h3 className="font-bold text-gray-900 mb-1">Time Limit</h3>
//                   <p className="text-gray-700">
//                     You have <strong>{setupData.duration} minutes</strong> to
//                     complete all questions. The timer will start when you begin.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
//                 <AlertCircle className="w-6 h-6 text-purple-600 mt-1" />
//                 <div>
//                   <h3 className="font-bold text-gray-900 mb-1">
//                     Question Format
//                   </h3>
//                   <p className="text-gray-700">
//                     You will answer{" "}
//                     <strong>
//                       {questions.length} multiple-choice questions
//                     </strong>
//                     . Each question has only one correct answer.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
//                 <Award className="w-6 h-6 text-green-600 mt-1" />
//                 <div>
//                   <h3 className="font-bold text-gray-900 mb-1">Navigation</h3>
//                   <p className="text-gray-700">
//                     You can navigate between questions and change your answers
//                     anytime before the timer runs out.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
//                 <CheckCircle className="w-6 h-6 text-orange-600 mt-1" />
//                 <div>
//                   <h3 className="font-bold text-gray-900 mb-1">Results</h3>
//                   <p className="text-gray-700">
//                     After completion, you&apos;ll see your score and detailed
//                     explanations for each question.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-lg mb-8">
//               <h3 className="font-bold text-gray-900 mb-3">
//                 Your Session Details:
//               </h3>
//               <div className="grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="text-gray-600">Role:</span>
//                   <p className="font-semibold">{setupData.role}</p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Company:</span>
//                   <p className="font-semibold">{setupData.company}</p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Experience Level:</span>
//                   <p className="font-semibold capitalize">
//                     {setupData.experienceLevel}
//                   </p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Interview Type:</span>
//                   <p className="font-semibold capitalize">
//                     {setupData.interviewType.replace("-", " ")}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 onClick={() => setStage("setup")}
//                 className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-bold hover:bg-gray-300 transition-colors"
//               >
//                 Back to Setup
//               </button>
//               <button
//                 onClick={handleBeginInterview}
//                 className="flex-1 bg-indigo-600 text-white py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 <Play className="w-5 h-5" />
//                 Start Interview
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Interview Stage
//   if (stage === "interview") {
//     const currentQuestion = questions[currentQuestionIndex];
//     const selectedAnswer = getSelectedAnswer(currentQuestion.id);
//     const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Header with Timer */}
//           <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   {setupData.role} Interview
//                 </h2>
//                 <p className="text-sm text-gray-600">{setupData.company}</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="text-right">
//                   <p className="text-sm text-gray-600">Time Remaining</p>
//                   <div
//                     className={`text-2xl font-bold flex items-center gap-2 ${
//                       timeRemaining < 300 ? "text-red-600" : "text-indigo-600"
//                     }`}
//                   >
//                     <Clock className="w-6 h-6" />
//                     {formatTime(timeRemaining)}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Progress Bar */}
//             <div className="mt-4">
//               <div className="flex justify-between text-sm text-gray-600 mb-2">
//                 <span>
//                   Question {currentQuestionIndex + 1} of {questions.length}
//                 </span>
//                 <span>{Math.round(progress)}% Complete</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Question Card */}
//           <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
//             <div className="mb-6">
//               <span
//                 className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                   currentQuestion.difficulty === "Easy"
//                     ? "bg-green-100 text-green-800"
//                     : currentQuestion.difficulty === "Medium"
//                     ? "bg-yellow-100 text-yellow-800"
//                     : "bg-red-100 text-red-800"
//                 }`}
//               >
//                 {currentQuestion.difficulty}
//               </span>
//             </div>

//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               {currentQuestion.question}
//             </h3>

//             <div className="space-y-3">
//               {currentQuestion.options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswerSelect(index)}
//                   className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
//                     selectedAnswer === index
//                       ? "border-indigo-600 bg-indigo-50"
//                       : "border-gray-300 hover:border-indigo-300 hover:bg-gray-50"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                         selectedAnswer === index
//                           ? "border-indigo-600 bg-indigo-600"
//                           : "border-gray-300"
//                       }`}
//                     >
//                       {selectedAnswer === index && (
//                         <CheckCircle className="w-4 h-4 text-white" />
//                       )}
//                     </div>
//                     <span className="font-medium text-gray-900">{option}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="flex justify-between items-center">
//             <button
//               onClick={handlePreviousQuestion}
//               disabled={currentQuestionIndex === 0}
//               className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               Previous
//             </button>

//             <div className="flex gap-2">
//               {questions.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentQuestionIndex(index)}
//                   className={`w-10 h-10 rounded-lg font-semibold transition-all ${
//                     index === currentQuestionIndex
//                       ? "bg-indigo-600 text-white"
//                       : getSelectedAnswer(questions[index].id) !== undefined
//                       ? "bg-green-100 text-green-700 border-2 border-green-300"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>

//             {currentQuestionIndex === questions.length - 1 ? (
//               <button
//                 onClick={() => {
//                   setIsTimerRunning(false);
//                   setStage("results");
//                 }}
//                 className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
//               >
//                 Finish Interview
//               </button>
//             ) : (
//               <button
//                 onClick={handleNextQuestion}
//                 className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Results Stage
//   if (stage === "results") {
//     const results = calculateResults();

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Results Header */}
//           <div className="bg-white rounded-xl shadow-lg p-8 mb-6 text-center">
//             <div className="mb-6">
//               <Award className="w-20 h-20 text-indigo-600 mx-auto mb-4" />
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                 Interview Complete!
//               </h2>
//               <p className="text-gray-600">Here&apos;s how you performed</p>
//             </div>

//             <div className="grid grid-cols-3 gap-6">
//               <div className="p-4 bg-indigo-50 rounded-lg">
//                 <p className="text-sm text-gray-600 mb-1">Score</p>
//                 <p className="text-3xl font-bold text-indigo-600">
//                   {results.percentage}%
//                 </p>
//               </div>
//               <div className="p-4 bg-green-50 rounded-lg">
//                 <p className="text-sm text-gray-600 mb-1">Correct</p>
//                 <p className="text-3xl font-bold text-green-600">
//                   {results.correct}
//                 </p>
//               </div>
//               <div className="p-4 bg-gray-50 rounded-lg">
//                 <p className="text-sm text-gray-600 mb-1">Total</p>
//                 <p className="text-3xl font-bold text-gray-700">
//                   {results.total}
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={handleRetake}
//               className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto"
//             >
//               <RotateCcw className="w-5 h-5" />
//               Start New Session
//             </button>
//           </div>

//           {/* Question Review */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold text-gray-900">Review Answers</h3>

//             {questions.map((question, index) => {
//               const userAnswer = getSelectedAnswer(question.id);
//               const isCorrect = userAnswer === question.correctAnswer;

//               return (
//                 <div
//                   key={question.id}
//                   className="bg-white rounded-xl shadow-lg p-6"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
//                         isCorrect ? "bg-green-100" : "bg-red-100"
//                       }`}
//                     >
//                       {isCorrect ? (
//                         <CheckCircle className="w-6 h-6 text-green-600" />
//                       ) : (
//                         <XCircle className="w-6 h-6 text-red-600" />
//                       )}
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="font-bold text-gray-900">
//                           Question {index + 1}
//                         </span>
//                         <span
//                           className={`px-2 py-1 rounded text-xs font-semibold ${
//                             question.difficulty === "Easy"
//                               ? "bg-green-100 text-green-800"
//                               : question.difficulty === "Medium"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {question.difficulty}
//                         </span>
//                       </div>

//                       <h4 className="text-lg font-semibold text-gray-900 mb-4">
//                         {question.question}
//                       </h4>

//                       <div className="space-y-2 mb-4">
//                         {question.options.map((option, optIndex) => (
//                           <div
//                             key={optIndex}
//                             className={`p-3 rounded-lg border-2 ${
//                               optIndex === question.correctAnswer
//                                 ? "border-green-500 bg-green-50"
//                                 : optIndex === userAnswer && !isCorrect
//                                 ? "border-red-500 bg-red-50"
//                                 : "border-gray-200"
//                             }`}
//                           >
//                             <div className="flex items-center gap-2">
//                               {optIndex === question.correctAnswer && (
//                                 <CheckCircle className="w-5 h-5 text-green-600" />
//                               )}
//                               {optIndex === userAnswer && !isCorrect && (
//                                 <XCircle className="w-5 h-5 text-red-600" />
//                               )}
//                               <span
//                                 className={`${
//                                   optIndex === question.correctAnswer
//                                     ? "font-semibold text-green-900"
//                                     : optIndex === userAnswer && !isCorrect
//                                     ? "font-semibold text-red-900"
//                                     : "text-gray-700"
//                                 }`}
//                               >
//                                 {option}
//                               </span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="p-4 bg-blue-50 rounded-lg">
//                         <p className="text-sm font-semibold text-blue-900 mb-1">
//                           Explanation:
//                         </p>
//                         <p className="text-sm text-blue-800">
//                           {question.explanation}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

// export default InterviewPrep;

import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { Icon } from "@/app/ui-library/components/icons/icon";
import { useRouter } from "next/navigation";

export default function InterviewPrep() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
          <Icon name="target" size={100} />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-primary">
        Level Up Your Interview Game
      </h1>
      <p className="text-xl text-center my-4 max-w-xl mx-auto">
        Develop real-world confidence through interactive challenges designed to
        elevate your performance in any interview.
      </p>

      <PrimaryButton
        onClick={() => router.push("/interview-prep/setup")}
        trailingIcon="chevron-right"
      >
        Start Your Journey
      </PrimaryButton>
    </div>
  );
}
