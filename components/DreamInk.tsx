import React, { useState } from 'react';
import { generateCreativeConcept } from '../services/geminiService';
import { ConsultationState } from '../types';
import { EMAIL } from '../constants';

interface DreamInkProps {
  onClose: () => void;
}

const DreamInk: React.FC<DreamInkProps> = ({ onClose }) => {
  const [state, setState] = useState<ConsultationState>({
    prompt: '',
    response: '',
    isLoading: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.prompt.trim()) return;

    setState(prev => ({ ...prev, isLoading: true, error: null, response: '' }));

    try {
      const concept = await generateCreativeConcept(state.prompt);
      setState(prev => ({ ...prev, isLoading: false, response: concept }));
    } catch (err: any) {
      setState(prev => ({ ...prev, isLoading: false, error: err.message || 'Something went wrong.' }));
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-cream w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-monet-blue to-monet-lilac p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="font-display text-2xl">Dream Ink Generator</h2>
            <p className="font-serif italic text-sm opacity-90">Let AI visualize your surreal tattoo concept</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-slate-200 text-2xl">&times;</button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          {!state.response ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-serif text-slate-700 text-lg">
                  What defines your memory or emotion?
                </label>
                <textarea
                  className="w-full h-32 p-4 border border-monet-blue/30 rounded-md bg-white focus:ring-2 focus:ring-monet-blue focus:border-transparent outline-none resize-none font-sans text-slate-600 placeholder:italic placeholder:text-slate-300"
                  placeholder="e.g., The feeling of swimming in a lake at midnight under a full moon, silence, cold water..."
                  value={state.prompt}
                  onChange={(e) => setState(prev => ({ ...prev, prompt: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                disabled={state.isLoading || !state.prompt.trim()}
                className="w-full py-3 bg-vangogh-blue text-white font-sans font-bold tracking-widest uppercase rounded hover:bg-slate-700 transition-colors disabled:opacity-50 flex justify-center items-center"
              >
                {state.isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Dreaming...
                  </span>
                ) : (
                  "Generate Concept"
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-float" style={{ animationDuration: '10s' }}>
              <div className="p-6 bg-white border-l-4 border-monet-yellow shadow-inner">
                <h3 className="font-display text-xl text-vangogh-blue mb-4">The Muse Speaks:</h3>
                <p className="font-serif text-lg leading-relaxed text-slate-700 whitespace-pre-wrap">
                  {state.response}
                </p>
              </div>
              
              <div className="flex gap-4">
                 <button
                  onClick={() => setState(prev => ({ ...prev, response: '' }))}
                  className="flex-1 py-3 border border-slate-300 text-slate-500 font-sans text-sm font-bold uppercase hover:bg-slate-50 transition-colors"
                >
                  Dream Again
                </button>
                <a
                  href={`mailto:${EMAIL}?subject=Booking Request: Dream Ink Concept&body=Hi Han,%0A%0AI used your Dream Ink generator and loved this concept:%0A%0A"${state.response}"%0A%0AI would like to book a consultation.`}
                  className="flex-1 py-3 bg-monet-green text-white font-sans text-sm font-bold uppercase text-center hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  Book This Tattoo
                </a>
              </div>
            </div>
          )}

          {state.error && (
            <div className="mt-4 text-center text-red-500 font-sans text-sm">
              {state.error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DreamInk;