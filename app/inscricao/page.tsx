export default function InscricaoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Inscrição</h1>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="aspect-[640/1722] w-full max-w-3xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfAMWKNxuvZpUN1UmTh1m0aINzCIcqFuAD3f9h_8_klszPJnw/viewform?embedded=true"
              className="w-full h-full"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 