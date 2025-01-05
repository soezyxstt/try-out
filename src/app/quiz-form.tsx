'use client';

import { useState } from 'react';
import Question from './question';
import { Separator } from '@/components/ui/separator';
import CircularProgress from '@/components/circular-progress';
import { createResponses } from '@/db/action';
import type { Prisma } from '@prisma/client';
import { usePathname } from 'next/navigation';

interface QuizFormProps {
  questions: Prisma.QuestionGetPayload<{
    include: { answers: true };
  }>[];
  scores: number[];
}

interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  answers: { questionId: string; correct: boolean }[];
}

export default function QuizForm({ questions, scores }: QuizFormProps) {
  const [results, setResults] = useState<QuizResult | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(
    new Set()
  );
  const [isLoading, setIsLoading] = useState(false);
  const id = usePathname().split('/')[2];

  const handleAnswerSelected = (questionId: string) => {
    setAnsweredQuestions((prev) => new Set([...prev, questionId]));
  };

  console.log('id', id);

  const handleAnswerReset = (questionId: string) => {
    setAnsweredQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.delete(questionId);
      return newSet;
    });
  };

  function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const answers = questions.map((question) => {
      const selectedAnswerId = formData.get(`question-${question.id}`);
      const correct =
        question.answers.find((a) => a.id === selectedAnswerId)?.isCorrect ||
        false;

      return {
        questionId: question.id,
        answers: [selectedAnswerId ? selectedAnswerId.toString() : ''],
        score: correct ? question.points : 0,
        correct,
      };
    });

    createResponses({
      input: answers.filter((a) => a.answers[0] !== ''),
      testId: id,
    });

    const correctAnswers = answers.filter((a) => a.correct).length;
    const score = Math.round((correctAnswers / questions.length) * 100);

    setResults({
      totalQuestions: questions.length,
      correctAnswers,
      score,
      answers,
    });

    setAnsweredQuestions(new Set());
    setIsLoading(false);
  }

  const rank = scores.filter((sc) => sc <= (results?.correctAnswers ?? 0)).length;
  const percentage = Math.round(rank/scores.length * 10000)/100;

  return (
    <form
      action={handleSubmit}
      className='relative pb-20'
    >
      {results && (
        <div className='mt-6 p-4 bg-green-200 rounded-lg'>
          <h3 className='font-semibold'>Results</h3>
          <p>Score: {results.score}%</p>
          <p>
            Correct Answers: {results.correctAnswers}/{results.totalQuestions}
          </p>
          <p className=''>
            You passed <span className='font-semibold'>{`${percentage}%`}</span>{' '}
            of the responses
          </p>
        </div>
      )}
      {questions.map((question, index) => (
        <div key={question.id}>
          <Question
            question={question}
            index={index + 1}
            result={results?.answers.find((a) => a.questionId === question.id)}
            onAnswerSelected={handleAnswerSelected}
            onAnswerReset={handleAnswerReset}
          />
          {index < questions.length - 1 && (
            <Separator className='my-4 bg-cyan-700' />
          )}
        </div>
      ))}

      {!results && (
        <button
          type='submit'
          disabled={isLoading}
          className='mt-6 w-full bg-gradient-to-r disabled:cursor-not-allowed from-cyan-500 via-blue-500 to-indigo-500 text-primary-foreground rounded-md px-4 py-2'
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      )}

      {results && (
        <div className='mt-6 p-4 bg-muted rounded-lg'>
          <h3 className='font-semibold'>Results</h3>
          <p>Score: {results.score}%</p>
          <p>
            Correct Answers: {results.correctAnswers}/{results.totalQuestions}
          </p>
          <p className=''>
            You passed <span className='font-semibold'>{`${percentage}%`}</span>{' '}
            of the responses
          </p>
        </div>
      )}

      <div className='fixed bottom-4 right-4 md:bottom-8 md:right-8'>
        <CircularProgress
          progress={answeredQuestions.size}
          total={questions.length}
        />
      </div>
    </form>
  );
}
