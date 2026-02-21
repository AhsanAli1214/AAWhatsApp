import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { 
  Save, 
  Plus, 
  Trash2, 
  ChevronRight, 
  LayoutDashboard, 
  Settings, 
  Eye, 
  Code,
  ArrowLeft,
  Search,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { APP_DATA, storeApps } from "@/data/appData";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/logo.png";

export default function Admin() {
  const { toast } = useToast();
  const [apps, setApps] = useState(Object.values(APP_DATA));
  const [selectedApp, setSelectedApp] = useState<any>(apps[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<any>(apps[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = () => {
    toast({
      title: "Changes simulated",
      description: "In a real database environment, this would update appData.ts. For now, it updates the local state.",
    });
    setApps(prev => prev.map(a => a.slug === editedData.slug ? editedData : a));
    setSelectedApp(editedData);
    setIsEditing(false);
  };

  const handleAddNew = () => {
    const newApp = {
      ...apps[0],
      slug: `new-app-${Date.now()}`,
      name: "New App Name",
      subtitle: "App subtitle",
      shortDescription: "Short description for the card",
      longDescription: "Detailed description for the app page",
    };
    setApps(prev => [...prev, newApp]);
    setSelectedApp(newApp);
    setEditedData(newApp);
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] text-slate-900 flex flex-col">
      <Helmet>
        <title>Admin Dashboard | AA Mods</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Admin Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logo} alt="AA Mods Logo" className="h-8 w-8 rounded-lg" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-none">Management Console</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Secure Access Only</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1.5 px-3 py-1">
            <CheckCircle2 className="h-3.5 w-3.5" />
            System Live
          </Badge>
          <Button 
            onClick={handleAddNew}
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl gap-2"
          >
            <Plus className="h-4 w-4" /> Add New App
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar List */}
        <aside className="w-80 border-r border-slate-200 bg-white flex flex-col">
          <div className="p-4 border-b border-slate-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input 
                placeholder="Search apps..." 
                className="pl-9 bg-slate-50 border-none rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {filteredApps.map((app) => (
                <button
                  key={app.slug}
                  onClick={() => {
                    setSelectedApp(app);
                    setEditedData(app);
                    setIsEditing(false);
                  }}
                  className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all ${
                    selectedApp?.slug === app.slug 
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 shadow-sm" 
                      : "hover:bg-slate-50 text-slate-600"
                  }`}
                >
                  <img src={app.iconImage} className="h-10 w-10 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-sm truncate">{app.name}</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">{app.version}</p>
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${selectedApp?.slug === app.slug ? "rotate-90" : ""}`} />
                </button>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Editor Main Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {selectedApp ? (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-6">
                  <div className={`p-1 rounded-2xl bg-gradient-to-r ${selectedApp.gradient}`}>
                    <img src={selectedApp.iconImage} className="h-20 w-20 rounded-xl object-cover border-2 border-white/20" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black tracking-tight">{selectedApp.name}</h2>
                    <p className="text-slate-500 font-medium">Slug: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">{selectedApp.slug}</code></p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="rounded-xl gap-2"
                    onClick={() => {
                      if (isEditing) {
                        setIsEditing(false);
                        setEditedData(selectedApp);
                      } else {
                        setIsEditing(true);
                      }
                    }}
                  >
                    {isEditing ? <Eye className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
                    {isEditing ? "View Live" : "Edit Details"}
                  </Button>
                  {isEditing && (
                    <Button 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl gap-2 shadow-lg shadow-emerald-200"
                      onClick={handleSave}
                    >
                      <Save className="h-4 w-4" /> Save Changes
                    </Button>
                  )}
                </div>
              </div>

              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                      <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-500">Identity & Branding</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">App Name</label>
                        <Input value={editedData.name} onChange={e => setEditedData({...editedData, name: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Subtitle</label>
                        <Input value={editedData.subtitle} onChange={e => setEditedData({...editedData, subtitle: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Icon URL</label>
                        <Input value={editedData.iconImage} onChange={e => setEditedData({...editedData, iconImage: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Gradient Class</label>
                        <Input value={editedData.gradient} onChange={e => setEditedData({...editedData, gradient: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                      <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-500">Technical Data</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Version</label>
                        <Input value={editedData.version} onChange={e => setEditedData({...editedData, version: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Base Version</label>
                        <Input value={editedData.baseVersion} onChange={e => setEditedData({...editedData, baseVersion: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Download URL</label>
                        <Input value={editedData.directDownloadLink} onChange={e => setEditedData({...editedData, directDownloadLink: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Downloads Count</label>
                        <Input value={editedData.downloads} onChange={e => setEditedData({...editedData, downloads: e.target.value})} className="rounded-xl border-slate-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="col-span-full border-slate-200 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 flex flex-row items-center justify-between">
                      <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-500">Blog Content (Markdown)</CardTitle>
                      <Badge variant="outline" className="text-[10px] font-black tracking-tighter uppercase">Rich Editor</Badge>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Textarea 
                        value={editedData.blogMarkdown} 
                        onChange={e => setEditedData({...editedData, blogMarkdown: e.target.value})} 
                        className="min-h-[400px] font-mono text-sm p-4 rounded-xl border-slate-200 resize-none"
                      />
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                      <p className="text-xl font-black text-emerald-600">Active</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Downloads</p>
                      <p className="text-xl font-black text-slate-800">{selectedApp.downloads}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Version</p>
                      <p className="text-xl font-black text-slate-800">{selectedApp.version}</p>
                    </div>
                  </div>

                  <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="bg-white border-b border-slate-100">
                      <CardTitle className="text-lg font-bold">App Content Preview</CardTitle>
                      <CardDescription>Live display data from appData.ts</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="w-full justify-start rounded-none border-b border-slate-100 bg-slate-50/50 p-0 h-auto">
                          <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-white py-4 px-6 font-bold text-xs uppercase tracking-wider">Overview</TabsTrigger>
                          <TabsTrigger value="changelog" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-white py-4 px-6 font-bold text-xs uppercase tracking-wider">Changelog</TabsTrigger>
                          <TabsTrigger value="blog" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-white py-4 px-6 font-bold text-xs uppercase tracking-wider">Blog Content</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="p-6 m-0 prose prose-slate max-w-none">
                          <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Short Description</h4>
                          <p className="text-slate-700 leading-relaxed font-medium">{selectedApp.shortDescription}</p>
                          <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mt-6">Long Description</h4>
                          <p className="text-slate-600 leading-relaxed">{selectedApp.longDescription}</p>
                        </TabsContent>
                        <TabsContent value="changelog" className="p-6 m-0 space-y-3">
                          {selectedApp.changelog.map((item: string, i: number) => (
                            <div key={i} className="flex gap-3 items-start group">
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <p className="text-sm text-slate-700 font-medium">{item}</p>
                            </div>
                          ))}
                        </TabsContent>
                        <TabsContent value="blog" className="p-6 m-0 font-mono text-xs text-slate-500 bg-slate-50 whitespace-pre-wrap leading-relaxed">
                          {selectedApp.blogMarkdown}
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
              <LayoutDashboard className="h-16 w-16 opacity-10" />
              <p className="font-bold uppercase tracking-widest text-xs">Select an app to manage</p>
            </div>
          )}
        </main>
      </div>

      {/* Security Footer */}
      <footer className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><AlertCircle className="h-3 w-3" /> Root Access Active</span>
          <span className="h-1 w-1 rounded-full bg-slate-200" />
          <span>Encrypted Session</span>
        </div>
        <p>© 2026 AA MODS TECHNICAL CONTROL PANEL</p>
      </footer>
    </div>
  );
}
