 // URL’den parametreleri al
 const params = new URLSearchParams(window.location.search);
 const name = params.get("name");

 // Örnek hayvan bilgileri
 const animals = {
     "max": { age: "3 Yaş", status: "Barınakta / Golden Retriever", vaccinated: "Tüm aşıları tamamlandı", health: "Sağlıklı / Kısırlaştırıldı" },
     "luna": { age: "2 Yaş", status: "Barınakta / Tekir Kedi", vaccinated: "Tüm aşıları tamamlandı", health: "Sağlıklı / Kısırlaştırıldı" },
     "karamel": { age: "1 Yaş", status: "Barınakta / Melez", vaccinated: "Tüm aşıları tamamlandı", health: "Sağlıklı / Kısırlaştırıldı" }
 };

 // Sayfaya bilgileri ekle
 if (name && animals[name]) {
     document.getElementById("animalName").textContent = name;
     document.getElementById("age").textContent = animals[name].age;
     document.getElementById("status").textContent = animals[name].status;
     document.getElementById("vaccinated").textContent = animals[name].vaccinated;
     document.getElementById("health").textContent = animals[name].health;
 } else {
     document.querySelector(".details").innerHTML = "<p>Bu hayvanın bilgileri bulunamadı.</p>";
 }
