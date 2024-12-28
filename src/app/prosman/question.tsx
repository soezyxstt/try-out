'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Eraser } from 'lucide-react';

interface QuestionProps {
  question: {
    id: string;
    text: string;
    answers: {
      id: string;
      text: string;
      isCorrect: boolean;
    }[];
    explanation: string | null;
  };
  index: number;
  result?: {
    questionId: string;
    correct: boolean;
  };
  onAnswerSelected?: (questionId: string) => void;
  onAnswerReset?: (questionId: string) => void;
}

export default function Question({ question, index, result, onAnswerSelected, onAnswerReset }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleReset = () => {
    setSelectedAnswer('');
    onAnswerReset?.(question.id);
  };

  return (
    <div>
      <CardHeader className='relative'>
        <div className='flex gap-2 items-center'>
          <div className='flex items-center gap-2'>
            <p className='text-base'>{`${index}. ${question.text}`}</p>
            {!result && (
              <Eraser
                className={`min-h-4 min-w-4 h-4 w-4 cursor-pointer transition-opacity ${
                  !selectedAnswer
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:text-green-600'
                }`}
                onClick={() => selectedAnswer && handleReset()}
              />
            )}
          </div>
          {result && (
            <span
              className={`text-sm font-medium ${
                result.correct ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {result.correct ? '✓' : '✗'}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <RadioGroup
          name={`question-${question.id}`}
          onValueChange={(value) => {
            setSelectedAnswer(value);
            onAnswerSelected?.(question.id);
          }}
          value={selectedAnswer}
        >
          {question.answers.map((answer) => (
            <div
              key={answer.id}
              className={`flex items-center space-x-2 p-2 rounded-md ${
                result && answer.isCorrect ? 'bg-green-50' : ''
              }`}
            >
              <RadioGroupItem
                value={answer.id}
                id={answer.id}
                disabled={result !== undefined}
              />
              <Label
                htmlFor={answer.id}
                className={`flex-grow ${
                  result && answer.isCorrect ? 'font-medium text-green-600' : ''
                }`}
              >
                {answer.text}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {result && question.explanation && (
          <Accordion
            type='single'
            collapsible
            className='mt-4'
          >
            <AccordionItem value='explanation'>
              <AccordionTrigger className='text-xs italic'>
                Show Explanation
              </AccordionTrigger>
              <AccordionContent className=''>
                {question.explanation}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </div>
  );
}
