import React, { useState } from 'react';
import { Megaphone, Home, MessageSquare, Users, PlayCircle, Star, Search, MapPin, ChevronDown, ChevronLeft, GraduationCap, DollarSign, Phone, Video, Paperclip, Send, Plus, ChevronUp, Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Info, Image as ImageIcon, Smile, StickyNote } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const reelsData = [
    {
      id: 1,
      user: "Roven gaele Alacantara",
      avatar: "https://picsum.photos/seed/roven/100/100",
      caption: "Affordable shared rooms for students. Near MSU-IIT! 🎓 #StudentHousing #MSUIIT",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop",
      likes: "1k",
      comments: "500",
      shares: "50",
      thumb: "https://picsum.photos/seed/thumb1/100/100"
    },
    {
      id: 2,
      user: "Julian Throne",
      avatar: "https://picsum.photos/seed/julian/200/200",
      caption: "Penthouse view is amazing! Check out the new floor plan. #LuxuryLiving #IliganCity",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop",
      likes: "2.5k",
      comments: "1.2k",
      shares: "120",
      thumb: "https://picsum.photos/seed/thumb2/100/100"
    },
    {
      id: 3,
      user: "Maria Rodriguez",
      avatar: "https://picsum.photos/seed/maria/200/200",
      caption: "Touring the new dormitory today. So many great amenities! #DormLife #StudentHousing",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop",
      likes: "800",
      comments: "300",
      shares: "30",
      thumb: "https://picsum.photos/seed/thumb3/100/100"
    }
  ];

  const nextReel = () => {
    setCurrentReelIndex((prev) => (prev + 1) % reelsData.length);
  };

  const prevReel = () => {
    setCurrentReelIndex((prev) => (prev - 1 + reelsData.length) % reelsData.length);
  };

  const messages = [
    {
      id: 1,
      name: "Julian Throne",
      lastMessage: "I've attached the latest floor plan for the penthouse.",
      time: "10:00 AM",
      image: "https://picsum.photos/seed/julian/200/200",
      unread: true,
      type: 'Roommate',
      sender: 'other'
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      lastMessage: "The tour is scheduled for tomorrow at 10 AM.",
      time: "Yesterday",
      image: "https://picsum.photos/seed/maria/200/200",
      unread: false,
      type: 'Landlord',
      sender: 'me'
    },
    {
      id: 3,
      name: "troy B. Larosia",
      lastMessage: "Welcome to the Citi Chase premium experience.",
      time: "Monday",
      image: "https://picsum.photos/seed/troy/200/200",
      unread: false,
      type: 'Roommate',
      sender: 'other'
    }
  ];

  const chatHistory = [
    { id: 1, sender: 'me', text: "Hi! I saw the listing for the Standard Single Room. Is it still available for next semester?", type: 'user' },
    { id: 2, sender: 'Julian', text: "Hello Julian! Yes, we still have a few units left for the upcoming semester. Would you like to schedule a virtual tour or visit in person?", type: 'other' },
    { id: 3, sender: 'me', text: "An in-person visit would be great. Do you have any slots available this weekend?", type: 'user' },
    { id: 4, sender: 'Julian', text: "We're actually fully booked this weekend, but I have a slot open tomorrow afternoon at 2 PM. Would that work for you?", type: 'other' },
    { id: 5, sender: 'me', text: "Tomorrow at 2 PM works perfectly. What's the exact address again?", type: 'user' },
    { id: 6, sender: 'Julian', text: "Great! We're at Bgry San Miguel, Jorge Sheker Street, Iligan City. I've attached the latest floor plan for your reference.", type: 'other' },
  ];

  const filters = [
    'ALL', 'Near MSU-IIT', 'All Female', 'Solo Room', 
    'Shared Room', 'All Male', 'Affordable', 'Bed Spacer', 'Boarding House'
  ];

  const roommateFilters = [
    'ALL', 'Non-smoker', 'Quiet', 'Clean', 'Sporty', 'Friendly', 
    'Introvert', 'Morning person', 'Pet-friendly', 'Studious', 
    'Minimalist', 'Night owl', 'Extrovert', 'Cook'
  ];

  const cards = [
    {
      id: 1,
      title: "Yhuzuong's Dormitory",
      price: "P5000",
      location: "Iligan City, Lanao del norte 9200",
      rating: "5.00",
      reviews: 35,
      available: 6,
      image: "https://picsum.photos/seed/dorm1/800/600",
      amenities: ["Free Wifi", "Electricity", "Water"]
    },
    {
      id: 2,
      title: "Layla's Residences & Dormitory",
      price: "P6000",
      location: "Iligan City, Lanao del norte 9200",
      rating: "4.80",
      reviews: 22,
      available: 6,
      image: "https://picsum.photos/seed/dorm2/800/600",
      amenities: ["Free Wifi", "Aircon"]
    },
    {
      id: 3,
      title: "Nathan's Female Boarders",
      price: "P5000",
      location: "Iligan City, Lanao del norte 9200",
      rating: "5.00",
      reviews: 35,
      available: 3,
      image: "https://picsum.photos/seed/dorm3/800/600",
      amenities: ["Free Wifi", "Water", "Electricity"]
    }
  ];

  const roommates = [
    {
      id: 1,
      name: "Andrea C. Padillan",
      info: "MSU-IIT | 20yrs old | Female",
      location: "Tibanga, Iligan City",
      bio: "Looking for a quiet roommate who respects privacy. I'm a CS student and I spend most of my time coding.",
      tags: ["Non-smoker", "Quiet", "Clean", "+4 more"],
      listing: "Nathan's Female Boarders",
      price: "P2500-P3000 /monthly",
      image: "https://picsum.photos/seed/andrea/200/200"
    },
    {
      id: 2,
      name: "Irvin Z. Labaste",
      info: "MSU-IIT | 19yrs old | Male",
      location: "Saray, Iligan City",
      bio: "Clean and organized. Looking for a place near the city center. I cook often and enjoy a shared meal!",
      tags: ["Clean", "Night owl", "Introvert", "+6 more"],
      listing: "Layla's Residences & Dormitory",
      price: "P2600-P2800 /monthly",
      image: "https://picsum.photos/seed/irvin/200/200"
    },
    {
      id: 3,
      name: "Alex C. Gustavo",
      info: "MSU-IIT | 21yrs old | Male",
      location: "San Miguel, Iligan City",
      bio: "Morning person and pet friendly. I have a small dog and looking for a roommate that is ok with having a pet.",
      tags: ["Pet friendly", "Morning person", "Clean", "+6 more"],
      listing: "Nathan's Female Boarders",
      price: "P2500-P3000 /monthly",
      image: "https://picsum.photos/seed/alex/200/200"
    }
  ];

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="hero">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-icon-box">
            <Home size={24} color="white" />
          </div>

          <div className="search-bar">
            <Search size={20} color="white" className="search-icon-svg" />
            <input type="text" placeholder="What are you looking for?" />
          </div>

          <div className="nav-right-icon-box">
            <Megaphone size={28} strokeWidth={2} color="white" />
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="welcome-text">WELCOME TO</h1>
          <h2 className="khubo-text">KHUBO</h2>
          <div className="location-badge">
            {/* Pin Icon */}
            <svg width="26" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
            </svg>
            <span>Iligan City, Lanao Del Norte 9200</span>
          </div>
        </div>
      </section>

      {/* Main Wrapper */}
      <main className="main-wrapper">
        {/* Filter Pills */}
        <div className="filters">
          {filters.map((filter) => (
            <div 
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>

        {/* Recommended Section */}
        <section className="recommended-section">
          <h3>Recommended</h3>

          <div className="card-grid">
            {cards.map((card) => (
              <div key={card.id} className="card">
                <div className="card-image-container">
                  <img src={card.image} alt={card.title} className="card-image" referrerPolicy="no-referrer" />
                  <div className="availability-badge">{card.available} available</div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h4 className="card-title">{card.title}</h4>
                    <div className="card-price">{card.price}<span>/month</span></div>
                  </div>
                  <div className="card-location">{card.location}</div>
                  <div className="card-footer-info">
                    <div className="rating">
                      <Star size={14} fill="#ffd700" color="#ffd700" />
                      <span>{card.rating} ({card.reviews})</span>
                    </div>
                    <div className="amenities">
                      {card.amenities.map((amenity, idx) => (
                        <span key={idx} className="amenity-pill">{amenity}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );

  const renderRoommateFinder = () => (
    <div className="roommate-finder-page">
      {/* Hero Section */}
      <section className="roommate-hero">
        <nav className="roommate-navbar">
          <div className="nav-back-btn" onClick={() => setActiveTab('Home')}>
            <ChevronLeft size={32} color="white" />
          </div>
          <div className="nav-right-icon">
            <Megaphone size={28} strokeWidth={2} color="white" />
          </div>
        </nav>

        <div className="roommate-hero-content">
          <div className="roommate-title-group">
            <h1 className="roommate-hero-title">The Smarter Way to Share</h1>
            <p className="roommate-hero-subtitle">by <strong>KHUBO</strong></p>
          </div>
          
          <div className="roommate-search-container">
            <div className="roommate-search-box">
              <div className="search-section location-section">
                <MapPin size={24} color="#E71A23" fill="#E71A23" />
                <span className="search-text">Iligan City, Lanao Del Norte 9200</span>
                <ChevronDown size={24} color="white" />
              </div>
              <div className="search-divider-vertical"></div>
              <div className="search-section budget-section">
                <div className="budget-icon-circle">
                  <DollarSign size={18} color="white" />
                </div>
                <span className="search-text">Budget Range</span>
                <ChevronDown size={24} color="white" />
              </div>
              <button className="search-submit-btn">
                <Search size={20} color="white" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="main-wrapper">
        <div className="filters roommate-filters-row">
          {roommateFilters.map((filter) => (
            <div 
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>

        <section className="roommate-section">
          <h3 className="section-title">Looking for roommates</h3>
          
          <div className="roommate-grid">
            {roommates.map((roommate) => (
              <div key={roommate.id} className="roommate-card">
                <div className="roommate-card-header">
                  <div className="roommate-avatar">
                    <img src={roommate.image} alt={roommate.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="roommate-basic-info">
                    <h4 className="roommate-name">{roommate.name}</h4>
                    <div className="roommate-info-row">
                      <GraduationCap size={14} color="#54585F" />
                      <span>{roommate.info}</span>
                    </div>
                    <div className="roommate-info-row">
                      <MapPin size={14} color="#54585F" />
                      <span>{roommate.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="roommate-bio">"{roommate.bio}"</p>
                
                <div className="roommate-tags">
                  {roommate.tags.map((tag, idx) => (
                    <span key={idx} className="roommate-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="roommate-footer">
                  <div className="roommate-listing-info">
                    <h5 className="listing-name">{roommate.listing}</h5>
                    <div className="listing-price-box">
                      <span className="listing-price">{roommate.price}</span>
                      <span className="price-unit">/monthly</span>
                    </div>
                  </div>
                  <button className="apply-btn-full">Apply as Roommate</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );

  const renderMessages = () => (
    <div className="messages-page-v2">
      <div className="messages-container-v2">
        {/* Sidebar */}
        <aside className="messages-sidebar-v2">
          <div className="sidebar-header">
            <div className="sidebar-title-row">
              <ChevronLeft size={32} className="back-arrow-v2" onClick={() => setActiveTab('Home')} />
              <h2 className="sidebar-title">Messages</h2>
            </div>
            <div className="search-container-v2">
              <Search size={18} className="search-icon-v2" />
              <input type="text" placeholder="Search for conversation..." className="search-input-v2" />
            </div>
            
            <div className="filter-tabs-v2">
              <div className={`filter-tab-v2 ${activeFilter === 'ALL' ? 'active' : ''}`} onClick={() => setActiveFilter('ALL')}>ALL</div>
              <div className={`filter-tab-v2 ${activeFilter === 'Roommates' ? 'active' : ''}`} onClick={() => setActiveFilter('Roommates')}>Roommates</div>
              <div className={`filter-tab-v2 ${activeFilter === 'Landlords' ? 'active' : ''}`} onClick={() => setActiveFilter('Landlords')}>Landlords</div>
            </div>
          </div>

          <div className="conversations-list-v2">
            {messages.map((msg) => (
              <div key={msg.id} className={`conversation-item-v2 ${msg.id === 1 ? 'active' : ''}`}>
                <div className="avatar-v2">
                  <img src={msg.image} alt={msg.name} referrerPolicy="no-referrer" />
                </div>
                <div className="conversation-info-v2">
                  <span className="conversation-name-v2">{msg.name}</span>
                  <p className="conversation-snippet-v2">
                    {msg.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Area */}
        <main className="chat-area-v2">
          <header className="chat-header-v2">
            <div className="chat-user-info">
              <div className="chat-avatar-v2">
                <img src="https://picsum.photos/seed/julian/200/200" alt="Julian" referrerPolicy="no-referrer" />
              </div>
              <span className="chat-user-name">Julian Throne</span>
            </div>
            <div className="chat-actions-v2">
              <Phone size={24} className="action-icon-v2" />
              <Video size={28} className="action-icon-v2" />
            </div>
          </header>

          <div className="chat-messages-v2">
            {chatHistory.map((chat) => (
              <div key={chat.id} className={`chat-bubble-container ${chat.type}`}>
                <div className={`chat-bubble-v2 ${chat.type}`}>
                  {chat.text}
                </div>
              </div>
            ))}
          </div>

          <footer className="chat-input-container-v2">
            <div className="input-wrapper-v2">
              <Plus size={24} className="input-icon-v2" />
              <input type="text" placeholder="" className="chat-input-v2" />
              <div className="send-button-v2">
                <Send size={20} color="white" fill="white" />
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );

  const renderForYou = () => {
    return (
      <div className="foryou-page">
        {/* Static Background Blur */}
        <div className="foryou-bg">
          <img src={reelsData[0].image} alt="Background" referrerPolicy="no-referrer" />
          <div className="foryou-bg-overlay"></div>
        </div>

        {/* Header */}
        <header className="foryou-header">
          <div className="foryou-header-left">
            <ChevronLeft size={40} color="white" className="cursor-pointer" onClick={() => setActiveTab('Home')} />
            <div className="foryou-title-group">
              <h1 className="foryou-title">For You</h1>
              <span className="foryou-subtitle">by KHUBO</span>
            </div>
          </div>
          <div className="foryou-header-right">
            <Megaphone size={36} color="white" />
          </div>
        </header>

        {/* Main Content - Scrollable Container */}
        <main className="foryou-main scrollable-reels">
          {reelsData.map((reel) => (
            <div key={reel.id} className="foryou-layout-container">
              {/* Reel Card */}
              <div className="reel-card">
                <img src={reel.image} alt="Reel Content" className="reel-image" referrerPolicy="no-referrer" />
                
                {/* Reel Info Overlay */}
                <div className="reel-info-overlay">
                  <div className="reel-user-row">
                    <div className="reel-avatar">
                      <img src={reel.avatar} alt="User" referrerPolicy="no-referrer" />
                    </div>
                    <span className="reel-username">{reel.user}</span>
                  </div>
                  <p className="reel-caption">
                    {reel.caption}
                  </p>
                </div>
              </div>

              {/* Interactions Column (Outside Card) */}
              <div className="foryou-interactions-v3">
                <div className="social-action-item-v3">
                  <Heart size={26} color="white" fill="white" strokeWidth={2.5} />
                  <span>{reel.likes}</span>
                </div>
                <div className="social-action-item-v3">
                  <MessageCircle size={26} color="white" strokeWidth={3} />
                  <span>{reel.comments}</span>
                </div>
                <div className="social-action-item-v3">
                  <Send size={26} color="white" fill="white" strokeWidth={2.5} className="rotate-[-15deg]" />
                  <span>{reel.shares}</span>
                </div>
                <div className="social-action-item-v3">
                  <Bookmark size={26} color="white" strokeWidth={2.5} />
                </div>
                <div className="reel-mini-thumb-v3">
                  <img src={reel.thumb} alt="Thumb" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows (Centered Vertically) */}
          <div className="foryou-nav-arrows-v2 centered">
            <div className="nav-arrow-btn-v2" onClick={() => {
              const container = document.querySelector('.scrollable-reels');
              container?.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            }}>
              <ChevronUp size={36} color="white" strokeWidth={3} />
            </div>
            <div className="nav-arrow-btn-v2" onClick={() => {
              const container = document.querySelector('.scrollable-reels');
              container?.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }}>
              <ChevronDown size={36} color="white" strokeWidth={3} />
            </div>
          </div>
        </main>
      </div>
    );
  };

  const renderProfile = () => (
    <div className="profile-page-v2">
      {/* Hero Section */}
      <section className="profile-hero-v2">
        <div className="profile-hero-overlay">
          <div className="main-wrapper profile-hero-content">
            <div className="profile-header-card">
              <div className="profile-info-main">
                <div className="profile-avatar-large">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" alt="Michael B. Jordan" referrerPolicy="no-referrer" />
                </div>
                <div className="profile-text-info">
                  <div className="profile-name-row">
                    <h2 className="profile-display-name">Michael B. Jordan</h2>
                    <button className="profile-edit-btn">
                      <Plus size={20} className="rotate-45" />
                    </button>
                  </div>
                  <div className="profile-meta-row">
                    <span className="profile-meta-text">MSU-IIT | 20yrs old | Female</span>
                  </div>
                  <div className="profile-location-row">
                    <MapPin size={16} color="white" />
                    <span className="profile-location-text">Tibanga, Iligan City</span>
                  </div>
                </div>
              </div>
              
              <div className="profile-tags-row">
                <span className="profile-tag-v2">Introvert</span>
                <span className="profile-tag-v2">Pet-friendly</span>
                <span className="profile-tag-v2">Night owl</span>
                <span className="profile-tag-v2">Studious</span>
                <span className="profile-tag-v2">Non-smoker</span>
                <span className="profile-tag-v2">+5 more</span>
              </div>
            </div>

            <div className="profile-bio-container">
              <p className="profile-bio-text">
                "Clean and organized. Looking for a place near the city center. I cook often and enjoy a shared meal!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="profile-stats-section">
        <div className="main-wrapper">
          <div className="profile-stats-grid">
            <div className="stat-card-v2">
              <div className="stat-info">
                <span className="stat-label">Saved</span>
                <span className="stat-value">12 Houses</span>
              </div>
              <div className="stat-icon-box">
                <Bookmark size={20} />
              </div>
            </div>
            <div className="stat-card-v2">
              <div className="stat-info">
                <span className="stat-label">Reservation</span>
                <span className="stat-value">2 Houses</span>
              </div>
              <div className="stat-icon-box">
                <Bookmark size={20} />
              </div>
            </div>
            <div className="stat-card-v2">
              <div className="stat-info">
                <span className="stat-label">Roommate</span>
                <span className="stat-value">6 Applications</span>
              </div>
              <div className="stat-icon-box">
                <Users size={20} />
              </div>
            </div>
            <div className="stat-card-v2">
              <div className="stat-info">
                <span className="stat-label">Invitation</span>
                <span className="stat-value">0 Received</span>
              </div>
              <div className="stat-icon-box">
                <Send size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="my-reservation-section">
        <div className="main-wrapper">
          <h3 className="reservation-section-title">My Reservation</h3>
          <div className="reservation-card-v2">
            <div className="reservation-image-container">
              <img src="https://picsum.photos/seed/dorm2/800/600" alt="Layla's Residences" referrerPolicy="no-referrer" />
              <div className="availability-badge-v2">6 available</div>
            </div>
            <div className="reservation-details-v2">
              <div className="reservation-main-info">
                <h4 className="reservation-title-v2">Layla's Residences & Dormitory</h4>
                <p className="reservation-location-v2">Iligan City, Lanao del norte 9200</p>
                <div className="reservation-rating-row">
                  <Star size={16} fill="#FFEA00" color="#FFEA00" />
                  <span>5.00 (35)</span>
                  <div className="reservation-amenities">
                    <span className="amenity-pill-v2">Free Wifi</span>
                    <span className="amenity-pill-v2">Water</span>
                  </div>
                </div>
              </div>
              <div className="reservation-footer-v2">
                <div className="reservation-price-v2">
                  <span className="price-amount">P6000</span>
                  <span className="price-period">/month</span>
                </div>
                <div className="reservation-actions-v2">
                  <button className="cancel-res-btn">Cancel Reservation</button>
                  <button className="apply-now-btn">Apply now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {activeTab === 'Home' && renderHome()}
      {activeTab === 'Messages' && renderMessages()}
      {activeTab === 'Roommate' && renderRoommateFinder()}
      {activeTab === 'For you' && renderForYou()}
      {activeTab === 'Profile' && renderProfile()}
      {activeTab !== 'Messages' && activeTab !== 'For you' && (
        <nav className="bottom-nav">
          <a 
            href="#" 
            className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('Home'); }}
          >
            <Home size={26} />
            <span>Home</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${activeTab === 'Messages' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('Messages'); }}
          >
            <MessageSquare size={26} />
            <span>Messages</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${activeTab === 'Roommate' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('Roommate'); }}
          >
            <Users size={26} />
            <span>Roommate</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${activeTab === 'For you' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('For you'); }}
          >
            <PlayCircle size={26} />
            <span>For you</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${activeTab === 'Profile' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('Profile'); }}
          >
            <div className="profile-pic-container">
              <img src="https://picsum.photos/seed/user/100/100" alt="Profile" referrerPolicy="no-referrer" />
            </div>
            <span>Profile</span>
          </a>
        </nav>
      )}
    </div>
  );
};

export default App;
