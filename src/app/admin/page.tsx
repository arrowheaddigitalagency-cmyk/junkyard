export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Leads", "Services", "FAQs", "Testimonials", "Site Content", "Images"].map((item) => (
          <div key={item} className="bg-white border border-border p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Manage {item}</h2>
            <p className="text-muted-foreground">View and edit {item.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
