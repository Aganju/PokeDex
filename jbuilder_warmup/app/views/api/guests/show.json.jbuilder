json.partial!("/api/guests/guest.json.jbuilder", guest: @guest)
json.gifts @guest.gifts do |gift|
  json.title gift.title
  json.description gift.description
end
