import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Loader2, Trash2, Search, Download, LogOut, Printer } from "lucide-react";
import * as XLSX from "xlsx";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  printer: string;
  message: string;
  timestamp: { seconds: number };
}

const AdminPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (user) fetchInquiries();
  }, [user]);

  const fetchInquiries = async () => {
    setDataLoading(true);
    try {
      const q = query(collection(db, "inquiries"), orderBy("timestamp", "desc"));
      const snap = await getDocs(q);
      setInquiries(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Inquiry)));
    } catch { /* Firebase not configured */ }
    setDataLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setLoginError("Invalid email or password");
    }
    setLoginLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    await deleteDoc(doc(db, "inquiries", id));
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  const exportToExcel = () => {
    const data = filtered.map((i) => ({
      Name: i.name,
      Email: i.email,
      Phone: i.phone,
      Services: i.services.join(", "),
      Printer: i.printer || "N/A",
      Message: i.message,
      Date: new Date(i.timestamp.seconds * 1000).toLocaleDateString(),
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inquiries");
    XLSX.writeFile(wb, "inquiries.xlsx");
  };

  const filtered = inquiries.filter(
    (i) =>
      i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      i.phone.includes(searchTerm) ||
      i.services.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
              <Printer className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to manage inquiries</p>
          </div>
          <form onSubmit={handleLogin} className="bg-card rounded-2xl p-6 shadow-lg border border-border/60 space-y-4">
            <input
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
            />
            <input
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
            />
            {loginError && <p className="text-destructive text-xs">{loginError}</p>}
            <button type="submit" disabled={loginLoading}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm active:scale-[0.97] transition-all disabled:opacity-60 flex items-center justify-center gap-2">
              {loginLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loginLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Printer className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold">PrinterPro Admin</span>
          </div>
          <button onClick={() => signOut(auth)} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold">Inquiries ({filtered.length})</h2>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input className="w-full sm:w-64 pl-9 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Search name, phone, service..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <button onClick={exportToExcel} className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1.5 active:scale-[0.97] transition-transform">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {dataLoading ? (
          <div className="text-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" /></div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-medium">No inquiries found</p>
            <p className="text-sm mt-1">Inquiries from the contact form will appear here.</p>
          </div>
        ) : (
          <div className="bg-card rounded-xl border border-border/60 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Printer</th>
                  <th className="px-4 py-3 font-semibold">Message</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold w-16"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((i) => (
                  <tr key={i.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-medium">{i.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{i.phone}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {i.services.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs">{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{i.printer || "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">{i.message || "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {i.timestamp ? new Date(i.timestamp.seconds * 1000).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => handleDelete(i.id)} className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
