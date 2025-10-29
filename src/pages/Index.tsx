import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const programs = [
    {
      title: "Ясельная группа",
      age: "1.5-3 года",
      description: "Мягкая адаптация, развитие речи, сенсорные игры",
      icon: "Baby",
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Младшая группа",
      age: "3-4 года",
      description: "Творчество, музыка, физкультура, первые знания",
      icon: "Palette",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Средняя группа",
      age: "4-5 лет",
      description: "Подготовка к чтению, математика, окружающий мир",
      icon: "BookOpen",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Подготовительная",
      age: "5-7 лет",
      description: "Полная подготовка к школе, логика, чтение, письмо",
      icon: "GraduationCap",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const teachers = [
    {
      name: "Елена Петровна",
      position: "Старший воспитатель",
      experience: "15 лет опыта",
      photo: "👩‍🏫"
    },
    {
      name: "Мария Ивановна",
      position: "Воспитатель младшей группы",
      experience: "8 лет опыта",
      photo: "👩‍💼"
    },
    {
      name: "Ольга Сергеевна",
      position: "Воспитатель средней группы",
      experience: "12 лет опыта",
      photo: "👩‍🎓"
    },
    {
      name: "Анна Михайловна",
      position: "Воспитатель подготовительной группы",
      experience: "10 лет опыта",
      photo: "👩‍🔬"
    }
  ];

  const reviews = [
    {
      name: "Екатерина М.",
      text: "Замечательный садик! Ребенок идет с удовольствием каждый день. Спасибо воспитателям за заботу и внимание!",
      rating: 5
    },
    {
      name: "Дмитрий С.",
      text: "Очень довольны качеством образования. Сын многому научился, стал более самостоятельным и общительным.",
      rating: 5
    },
    {
      name: "Алина К.",
      text: "Отличная подготовка к школе! Дочка уже читает и считает. Воспитатели профессионалы своего дела.",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🌈</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Радуга
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О садике</a>
            <a href="#programs" className="hover:text-primary transition-colors">Программы</a>
            <a href="#gallery" className="hover:text-secondary transition-colors">Галерея</a>
            <a href="#teachers" className="hover:text-accent transition-colors">Воспитатели</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-secondary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Детский сад "Радуга"
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Место, где каждый день наполнен радостью, открытиями и заботой о вашем ребенке! 🎨✨
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить нам
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на экскурсию
              </Button>
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-center">
            <div className="animate-bounce-gentle">
              <div className="text-5xl mb-2">🎈</div>
              <p className="text-sm font-semibold text-gray-700">15 лет работы</p>
            </div>
            <div className="animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-2">👶</div>
              <p className="text-sm font-semibold text-gray-700">120+ детей</p>
            </div>
            <div className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl mb-2">⭐</div>
              <p className="text-sm font-semibold text-gray-700">50+ отзывов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            О нашем садике
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Детский сад "Радуга" работает в Ставрополе с 2009 года. Мы создали уютное пространство, 
                где каждый ребенок чувствует себя как дома, а каждый день приносит новые открытия и радость.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Наша команда опытных педагогов с любовью относится к каждому ребенку, 
                помогая развивать таланты, учиться дружить и готовиться к школьной жизни.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Icon name="Shield" className="mx-auto mb-3 text-primary" size={40} />
                    <h3 className="font-bold text-lg mb-2">Безопасность</h3>
                    <p className="text-sm text-gray-600">Видеонаблюдение и охрана</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Icon name="Utensils" className="mx-auto mb-3 text-secondary" size={40} />
                    <h3 className="font-bold text-lg mb-2">Питание</h3>
                    <p className="text-sm text-gray-600">5-разовое здоровое меню</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/5a8a5b4b-3e63-4412-a126-e61f24b2555c/files/643677d3-8036-4108-977e-fee007ae83de.jpg" 
                alt="Детский садик Радуга" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Наши программы
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Комплексное развитие для детей от 1.5 до 7 лет
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-4 mx-auto`}>
                    <Icon name={program.icon as any} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{program.title}</h3>
                  <p className="text-center text-primary font-semibold mb-3">{program.age}</p>
                  <p className="text-gray-600 text-center text-sm">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Галерея
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/projects/5a8a5b4b-3e63-4412-a126-e61f24b2555c/files/7776d3b8-97ac-4d2f-b922-7f29c39d645c.jpg" 
                alt="Игровая комната" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/projects/5a8a5b4b-3e63-4412-a126-e61f24b2555c/files/94f4242b-2ffd-4cf0-9ca3-6937c0d16c44.jpg" 
                alt="Творческие занятия" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/projects/5a8a5b4b-3e63-4412-a126-e61f24b2555c/files/643677d3-8036-4108-977e-fee007ae83de.jpg" 
                alt="Игровая площадка" 
                className="w-full h-full object-cover"
              />
            </div>
            {[4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-200 flex items-center justify-center text-7xl">
                  {['🎯', '🎸', '⚽'][item - 4]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Наши воспитатели
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Команда профессионалов с большим сердцем
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-secondary"
              >
                <CardContent className="p-6">
                  <div className="text-8xl mb-4">{teacher.photo}</div>
                  <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{teacher.position}</p>
                  <p className="text-sm text-gray-600">{teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Стоимость
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary hover:border-primary hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Полный день</h3>
                  <p className="text-gray-600 mb-4">7:00 - 19:00</p>
                  <div className="text-5xl font-bold text-primary mb-2">25 000₽</div>
                  <p className="text-gray-600">в месяц</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>5-разовое питание</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Образовательная программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Творческие занятия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Прогулки на свежем воздухе</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary hover:border-secondary hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Неполный день</h3>
                  <p className="text-gray-600 mb-4">8:00 - 13:00</p>
                  <div className="text-5xl font-bold text-secondary mb-2">18 000₽</div>
                  <p className="text-gray-600">в месяц</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>3-разовое питание</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Образовательная программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Творческие занятия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Прогулка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Отзывы родителей
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-bold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Ставрополь, ул. Ленина, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (865) 123-45-67</p>
                    <p className="text-gray-600">+7 (988) 765-43-21</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@raduga-stavropol.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 7:00 - 19:00</p>
                    <p className="text-gray-600">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-5xl">🌈</span>
            <span className="text-3xl font-bold">Радуга</span>
          </div>
          <p className="text-white/90 mb-6">
            Детский сад полного дня в Ставрополе
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="outline" size="icon" className="bg-white/10 border-white/30 hover:bg-white/20">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/30 hover:bg-white/20">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/30 hover:bg-white/20">
              <Icon name="Phone" size={20} />
            </Button>
          </div>
          <p className="text-white/70 text-sm">
            © 2025 Детский сад "Радуга". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;