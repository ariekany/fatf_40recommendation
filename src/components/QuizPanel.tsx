import React from 'react';
import { QuizQuestion } from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';

interface QuizPanelProps {
  quizKey: string;
  label: string;
  quiz: QuizQuestion;
  selectedOption: number | undefined;
  onSelectAnswer: (quizKey: string, optionIdx: number, isCorrect: boolean) => void;
  onResetAnswer?: (quizKey: string) => void;
}

export const QuizPanel: React.FC<QuizPanelProps> = ({
  quizKey,
  label,
  quiz,
  selectedOption,
  onSelectAnswer,
  onResetAnswer
}) => {
  const { t } = useLanguage();
  const hasAnswered = selectedOption !== undefined;
  const isCorrect = hasAnswered && selectedOption === quiz.answer;

  return (
    <section
      className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 space-y-4 shadow-2xs"
      aria-label={`Knowledge Check for ${label}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EDE6D6] pb-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#0B4F3F] shrink-0" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#5A6B65]">
            {t('Knowledge Verification', 'Uji Pemahaman')} · {label}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {hasAnswered && (
            <span
              className={`text-xs font-mono font-semibold flex items-center gap-1 ${
                isCorrect ? 'text-emerald-800' : 'text-rose-800'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {t('● VERIFIED CORRECT', '● JAWABAN BENAR')}
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-3.5 h-3.5" />
                  <span>
                    {t(
                      '▲ INCORRECT — REVIEW EXPLANATION',
                      '▲ KURANG TEPAT — SIMAK PENJELASAN'
                    )}
                  </span>
                </>
              )}
            </span>
          )}
          {hasAnswered && onResetAnswer && (
            <button
              type="button"
              onClick={() => onResetAnswer(quizKey)}
              className="inline-flex items-center gap-1 text-xs text-[#6E7D77] hover:text-[#141E1B] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t('Retry', 'Ulangi')}</span>
            </button>
          )}
        </div>
      </div>

      <h4 className="text-base font-semibold text-[#141E1B] leading-snug">
        {quiz.q}
      </h4>

      <div className="space-y-2">
        {quiz.options.map((opt, idx) => {
          const isThisSelected = selectedOption === idx;
          const isThisCorrect = idx === quiz.answer;

          let btnStyle =
            'bg-[#F9F6F0]/70 border-[#E5DEC9] text-[#141E1B] hover:bg-[#F3EFE6] hover:border-[#D0C6B0]';
          if (hasAnswered) {
            if (isThisCorrect) {
              btnStyle =
                'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-medium';
            } else if (isThisSelected && !isThisCorrect) {
              btnStyle = 'bg-rose-50/90 border-rose-300 text-rose-950';
            } else {
              btnStyle = 'bg-[#F9F6F0]/40 border-[#E5DEC9]/60 text-[#6E7D77]';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() =>
                onSelectAnswer(quizKey, idx, idx === quiz.answer)
              }
              className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-colors flex items-start justify-between gap-3 cursor-pointer ${btnStyle}`}
            >
              <div className="flex items-start gap-2.5">
                <span className="font-mono text-xs opacity-70 mt-0.5 shrink-0">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span className="leading-relaxed">{opt}</span>
              </div>
              {hasAnswered && isThisCorrect && (
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              )}
              {hasAnswered && isThisSelected && !isThisCorrect && (
                <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div
          className={`p-4 rounded-lg border text-xs leading-relaxed ${
            isCorrect
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
              : 'bg-amber-50/80 border-amber-200 text-amber-950'
          }`}
        >
          <strong className="font-semibold">
            {t('Authoritative Rationale: ', 'Penjelasan Standar FATF: ')}
          </strong>
          {quiz.explain}
        </div>
      )}
    </section>
  );
};
