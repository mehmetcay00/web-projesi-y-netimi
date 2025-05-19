document.addEventListener('DOMContentLoaded', function () {
    // URL'den hayvan adını alma
    const urlParams = new URLSearchParams(window.location.search);
    const animalName = urlParams.get('name');

    // Hayvan verilerini tanımla
    const animalsData = {
        'max': {
            name: 'Max',
            type: 'Golden Retriever',
            age: '3 Yaş',
            gender: 'Erkek',
            weight: '26 kg',
            vaccination: 'Tüm aşıları tamamlandı',
            health: 'Sağlıklı / Kısırlaştırıldı',
            icon: 'fas fa-dog',
            description: `Max, 3 yaşında sevgi dolu bir Golden Retriever...`,
            characteristics: ['Sadık', 'Oyuncu', 'Zeki', 'Arkadaş canlısı', 'Enerjik'],
            requirements: [
                'Günlük egzersiz ve oyun zamanı',
                'Sevgi dolu bir aile ortamı',
                'Temel eğitim bilgisi',
                'Düzenli veteriner kontrolleri',
                'Uygun beslenme'
            ]
        },
        'luna': {
            name: 'Luna',
            type: 'Tekir Kedi',
            age: '2 Yaş',
            gender: 'Dişi',
            weight: '4 kg',
            vaccination: 'Tüm aşıları tamamlandı',
            health: 'Sağlıklı / Kısırlaştırıldı',
            icon: 'fas fa-cat',
            description: `Luna, 2 yaşında sevimli bir tekir kedi...`,
            characteristics: ['Sakin', 'Sevecen', 'Uyumlu', 'Temiz', 'Bağımsız'],
            requirements: [
                'Kedi maması ve temiz su',
                'Temiz kum kabı',
                'Sevgi ve ilgi',
                'Sakin bir yaşam alanı',
                'Düzenli tımar ve veteriner kontrolleri'
            ]
        },
        'karamel': {
            name: 'Karamel',
            type: 'Melez',
            age: '1 Yaş',
            gender: 'Erkek',
            weight: '12 kg',
            vaccination: 'Tüm aşıları tamamlandı',
            health: 'Sağlıklı / Kısırlaştırıldı',
            icon: 'fas fa-dog',
            description: `Karamel, yaklaşık 1 yaşında sevimli bir melez köpek...`,
            characteristics: ['Sevecen', 'Uysal', 'Öğrenmeye istekli', 'Sosyal', 'Aktif'],
            requirements: [
                'Düzenli yürüyüşler',
                'Devam eden eğitim',
                'Kaliteli mama',
                'Sevgi ve sabır',
                'Veteriner kontrolleri'
            ]
        }
    };

    // Belirtilen hayvan bilgilerini bul
    const animal = animalsData[animalName?.toLowerCase()];
    
    if (animal) {
        const detailContent = `
            <div class="animal-detail-section">
                <div class="animal-detail-header">
                    <div class="animal-profile">
                        <div class="animal-avatar">
                            <i class="${animal.icon}"></i>
                        </div>
                        <div class="animal-name">${animal.name}</div>
                    </div>
                    <div class="animal-meta">
                        <h1 class="animal-title">${animal.name}</h1>
                        <p class="animal-subtitle">${animal.type}</p>
                        <div class="animal-stats">
                            <div class="stat-item"><i class="fas fa-calendar-alt"></i> <span>Yaş: ${animal.age}</span></div>
                            <div class="stat-item"><i class="fas fa-venus-mars"></i> <span>Cinsiyet: ${animal.gender}</span></div>
                            <div class="stat-item"><i class="fas fa-weight"></i> <span>Ağırlık: ${animal.weight}</span></div>
                            <div class="stat-item"><i class="fas fa-syringe"></i> <span>Aşı: ${animal.vaccination}</span></div>
                            <div class="stat-item"><i class="fas fa-heartbeat"></i> <span>Sağlık: ${animal.health}</span></div>
                        </div>
                    </div>
                </div>

                <div class="animal-description">
                    <h2>Hikayesi</h2>
                    <p>${animal.description}</p>
                </div>

                <div class="animal-characteristics">
                    <h2>Öne Çıkan Özellikleri</h2>
                    <ul>
                        ${animal.characteristics.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>

                <div class="animal-requirements">
                    <h2>Sahiplenme Koşulları</h2>
                    <ul>
                        ${animal.requirements.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        document.getElementById('animal-detail').innerHTML = detailContent;
    } else {
        document.getElementById('animal-detail').innerHTML = `<p>Hayvan bilgisi bulunamadı.</p>`;
    }
});
