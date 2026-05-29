import { useState } from "react";
import { MessageCircle, X, Phone, Send } from "lucide-react";

type Step = "start" | "issue" | "type" | "urgency" | "result";

const issues = ["Paper Jam", "Print Quality", "Not Printing", "Network Issue", "Driver Error", "Other"];
const types = ["Inkjet", "Laser", "All-in-One", "Dot Matrix", "Other"];
const urgencies = ["Urgent (today)", "Within 2-3 days", "Not urgent"];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("start");
  const [answers, setAnswers] = useState({ issue: "", type: "", urgency: "" });

  const reset = () => { setStep("start"); setAnswers({ issue: "", type: "", urgency: "" }); };

  const suggestService = () => {
    if (answers.issue === "Paper Jam" || answers.issue === "Not Printing") return "Printer Repair";
    if (answers.issue === "Network Issue") return "Network Setup";
    if (answers.issue === "Driver Error") return "Troubleshooting";
    return "Troubleshooting";
  };

  const waLink = `https://wa.me/?text=${encodeURIComponent(`Hi, I need help.\nIssue: ${answers.issue}\nPrinter: ${answers.type}\nUrgency: ${answers.urgency}`)}`;

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-xl shadow-accent/30 flex items-center justify-center hover:shadow-2xl active:scale-95 transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] max-h-[500px] bg-card rounded-2xl shadow-2xl shadow-primary/15 border border-border/60 flex flex-col overflow-hidden animate-fade-up">
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">PrinterPro Assistant</p>
              <p className="text-xs opacity-70">We're here to help!</p>
            </div>
            <button onClick={() => { setOpen(false); reset(); }} className="hover:opacity-70 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm">
            {step === "start" && (
              <div className="space-y-3 animate-fade-in">
                <div className="bg-muted rounded-lg p-3">Hi! 👋 I can help you find the right printer service. What issue are you facing?</div>
                <div className="flex flex-wrap gap-2">
                  {issues.map(i => (
                    <button key={i} onClick={() => { setAnswers(a => ({ ...a, issue: i })); setStep("type"); }}
                      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 active:scale-95 transition-all">
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "type" && (
              <div className="space-y-3 animate-fade-in">
                <div className="bg-accent/10 rounded-lg p-3 text-accent font-medium">Issue: {answers.issue} ✓</div>
                <div className="bg-muted rounded-lg p-3">What type of printer do you have?</div>
                <div className="flex flex-wrap gap-2">
                  {types.map(t => (
                    <button key={t} onClick={() => { setAnswers(a => ({ ...a, type: t })); setStep("urgency"); }}
                      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 active:scale-95 transition-all">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "urgency" && (
              <div className="space-y-3 animate-fade-in">
                <div className="bg-accent/10 rounded-lg p-3 text-accent font-medium text-xs">
                  Issue: {answers.issue} • Printer: {answers.type} ✓
                </div>
                <div className="bg-muted rounded-lg p-3">How urgent is this?</div>
                <div className="flex flex-wrap gap-2">
                  {urgencies.map(u => (
                    <button key={u} onClick={() => { setAnswers(a => ({ ...a, urgency: u })); setStep("result"); }}
                      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 active:scale-95 transition-all">
                      {u}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "result" && (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-muted rounded-lg p-3">
                  Based on your inputs, we recommend: <strong>{suggestService()}</strong>
                </div>
                <div className="bg-accent/10 rounded-lg p-3 text-center font-semibold text-accent">
                  📞 Call now for instant support!
                </div>
                <div className="flex gap-2">
                  <a href="tel:+919876543210" className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
                    <Phone className="w-3.5 h-3.5" /> Call
                  </a>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-lg bg-success text-accent-foreground text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
                    <Send className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
                <button onClick={reset} className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Start over
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
