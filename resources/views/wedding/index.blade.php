@extends('layouts.app')

@section('content')

@include('wedding.sections.cover')
@include('wedding.sections.countdown')
@include('wedding.sections.profile')
@include('wedding.sections.event')
@include('wedding.sections.gallery')
@include('wedding.sections.gift')
@include('wedding.sections.wishes')
@include('wedding.sections.footer')

<audio id="bgMusic" loop>
    <source src="{{ asset('music/wedding.mp3') }}" type="audio/mpeg">
</audio>

<button id="musicBtn" class="music-btn">
    <i class="bi bi-music-note-beamed"></i>
</button>

@endsection