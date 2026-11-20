import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { ProfileUser } from './components/profile-user/profile-user';
import { FriendsList } from './components/friends-list/friends-list';
import { NotificationList } from './components/notification-list/notification-list';
import { ConferenceList } from './components/conference-list/conference-list';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, ProfileUser, FriendsList, NotificationList, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}