const subscribeButton = document.querySelector('#email-form button');
if (subscribeButton) {


subscribeButton.addEventListener('click', function() {
    const emailInput = document.querySelector('#email-form input');
    const notification = document.getElementById('notification');
    
    if (emailInput.value.trim() === '') {
        alert("Lütfen bir e-posta adresi girin!");
        return;
    }

    // Bildirimi göster
    notification.innerText = `${emailInput.value} adresiyle başarıyla abone olundu!`;
    notification.style.display = 'block';

    // 3 saniye sonra bildirimi gizle
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);

    // Formu sıfırla
    emailInput.value = '';
}); // <--- if bloğu kapanışı
};

document.addEventListener('DOMContentLoaded', function() {
    // Geri yukarı kaydır butonu
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animasyonlar
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });

    // Navigasyon butonlarına tıklama olayları
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktif buton stilini ayarla
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Sayfa geçişi simülasyonu
            const page = this.textContent.trim().toLowerCase();
            console.log(`${page} sayfasına geçiliyor...`);
        });
    });

    // Arama ikonuna tıklama olayı
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', function() {
        // Arama alanını açma/kapama fonksiyonu
        const searchForm = document.createElement('div');
        searchForm.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1001;">
                <div style="background: white; padding: 30px; border-radius: 10px; width: 80%; max-width: 500px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="margin: 0;">Arama Yap</h3>
                        <i class="fas fa-times" style="cursor: pointer; font-size: 20px;" id="closeSearch"></i>
                    </div>
                    <input type="text" placeholder="Ne aramak istersiniz?" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; margin-bottom: 15px;">
                    <button class="button" style="width: 100%;">Ara</button>
                </div>
            </div>
        `;
        document.body.appendChild(searchForm);
        
        document.getElementById('closeSearch').addEventListener('click', function() {
            document.body.removeChild(searchForm);
        });
    });

    // Daha fazla bağlantılarına tıklama olayı
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const animalCard = this.closest('.animal-card');
            const animalName = animalCard.querySelector('.animal-info:nth-child(2)').textContent.split(': ')[1];
            
            // Hayvan detay modalı
            const detailModal = document.createElement('div');
            detailModal.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1001;">
                    <div style="background: white; padding: 30px; border-radius: 10px; width: 90%; max-width: 700px; max-height: 90vh; overflow-y: auto;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <h2 style="margin: 0;">${animalName} Hakkında</h2>
                            <i class="fas fa-times" style="cursor: pointer; font-size: 20px;" id="closeModal"></i>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 20px;">
                            <div style="background: #f1f1f1; height: 300px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-dog" style="font-size: 80px; color: #ddd;"></i>
                            </div>
                            <div>
                                <h3>Kişisel Bilgiler</h3>
                                <p style="margin: 10px 0;">Bu sevimli dostumuz size yoldaş olmak için sabırsızlanıyor! Oyun oynamayı seven, enerjik ve sevgi dolu bir karaktere sahip.</p>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                                        <strong>Adı:</strong> ${animalName}
                                    </div>
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                                        <strong>Yaş:</strong> ${animalCard.querySelector('.animal-info:nth-child(3)').textContent.split(': ')[1]}
                                    </div>
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                                        <strong>Durum:</strong> ${animalCard.querySelector('.animal-info:nth-child(4)').textContent.split(': ')[1]}
                                    </div>
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                                        <strong>Aşılılık:</strong> ${animalCard.querySelector('.animal-info:nth-child(5)').textContent.split(': ')[1]}
                                    </div>
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; grid-column: span 2;">
                                        <strong>Sağlık Durumu:</strong> ${animalCard.querySelector('.animal-info:nth-child(6)').textContent.split(': ')[1]}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>Karakter Özellikleri</h3>
                                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                                    <span style="background: #e9f5ff; color: #0072b1; padding: 8px 15px; border-radius: 20px; font-size: 14px;">Sevecen</span>
                                    <span style="background: #fff4e5; color: #ff8c00; padding: 8px 15px; border-radius: 20px; font-size: 14px;">Enerjik</span>
                                    <span style="background: #f5e9ff; color: #8b00ff; padding: 8px 15px; border-radius: 20px; font-size: 14px;">Dost Canlısı</span>
                                    <span style="background: #e9fff4; color: #00b15d; padding: 8px 15px; border-radius: 20px; font-size: 14px;">Oyuncu</span>
                                    <span style="background: #ffe9e9; color: #ff0000; padding: 8px 15px; border-radius: 20px; font-size: 14px;">Sadık</span>
                                </div>
                            </div>
                            <div>
                                <h3>Hayvan Hikayesi</h3>
                                <p style="margin: 10px 0; line-height: 1.6;">
                                    ${animalName} yaklaşık 3 ay önce sokaklardan barınağımıza getirildi. İlk geldiğinde biraz çekingendi, ancak kısa sürede sevgi dolu ortamımıza alıştı ve gerçek karakterini göstermeye başladı. Çok oyuncu ve sevecen bir yapıya sahip. Diğer hayvanlarla çok iyi anlaşıyor ve insanlarla vakit geçirmeyi seviyor. Özellikle top oyunlarına bayılıyor!
                                </p>
                                <p style="margin: 10px 0; line-height: 1.6;">
                                    Artık ${animalName}'in kalıcı ve sevgi dolu bir aileye kavuşma zamanı geldi. Eğer ona yuva olmak istiyorsanız, aşağıdaki "Sahiplen" butonuna tıklayabilir ve başvuru formunu doldurabilirsiniz.
                                </p>
                            </div>
                            <div style="display: flex; gap: 10px; margin-top: 10px;">
                                <button class="button" style="flex: 1; background-color: #4caf50;"><i class="fas fa-home"></i> Sahiplen</button>
                                <button class="button outlined" style="flex: 1;"><i class="fas fa-heart"></i> Destek Ol</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(detailModal);
            
            document.getElementById('closeModal').addEventListener('click', function() {
                document.body.removeChild(detailModal);
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    loadComments(); // Sayfa yüklenince yorumları getir

    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitComment();
        });
    }
});

function submitComment() {
    const userName = document.getElementById('userName').value.trim();
    const userComment = document.getElementById('userComment').value.trim();
    const userRating = document.querySelector('input[name="userRating"]:checked');

    if (!userName || !userComment || !userRating) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const comment = {
        name: userName,
        comment: userComment,
        rating: userRating.value,
        time: new Date().toLocaleString('tr-TR')
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    addCommentToUI(comment);

    // Formu sıfırla
    document.getElementById('commentForm').reset();
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => addCommentToUI(comment));
}

function addCommentToUI(comment) {
    const commentsContainer = document.getElementById('commentsContainer');

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-box';
    commentDiv.innerHTML = `
        <div><strong>${comment.name}</strong> - <small>${comment.time}</small></div>
        <div>${'⭐'.repeat(comment.rating)}</div>
        <p>${comment.comment}</p>
        <hr>
    `;
    commentsContainer.prepend(commentDiv);
    
}

function toggleChat() {
  const chat = document.getElementById('chatBody');
  const icon = document.getElementById('chatToggleIcon');
  chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
  icon.textContent = chat.style.display === 'flex' ? '▼' : '▲';
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addMessage(content, type) {
  const chatMessages = document.getElementById("chatMessages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-message ${type}`;
  msgDiv.innerHTML = `<div class="msg">${type === 'bot' ? '<strong>PatiBot 🐾</strong><br>' : ''}${content}</div><div class="time">${type === 'bot' ? 'PatiBot' : 'Siz'} - ${getCurrentTime()}</div>`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage(event) {
  if (event.key === "Enter") sendMessageManual();
}

function sendMessageManual() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(text);
    addMessage(reply, 'bot');
  }, 1000);
}

function quickReply(text) {
  document.getElementById("chatInput").value = text;
  sendMessageManual();
}

function getBotReply(input) {
  input = input.toLowerCase();
  if (input.includes("çalışma") || input.includes("saat")) return "Hafta içi 09:00 - 18:00 arası hizmet veriyoruz.";
  if (input.includes("sahiplen")) return "Hayvan sahiplenmek için barınağımıza gelip form doldurmanız yeterlidir.";
  if (input.includes("bağış")) return "Web sitemizdeki 'Bağış Yap' sayfasından kolayca bağış yapabilirsiniz.";
  return "Bu konuda size en kısa sürede yardımcı olacağız.";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("botTime").textContent = getCurrentTime();
});




