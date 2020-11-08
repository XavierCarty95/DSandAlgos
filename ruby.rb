# Description:
# review the code below that uses the Marvel API (http://developer.marvel.com/).
# Please keep this code private (do not post on a public github)

# -- comics id of 30090 and 162
# You can grab an API key from here:
# https://taxjar-tech-interview.herokuapp.com/apikey


require 'digest/md5'
require "net/http"
require "uri"
require "json"

class Marvel
  attr_reader :public_key, :private_key

  def initialize(options={})
    @public_key ='gtDx6m7b6QH5YvWptDMfnR3M'
    @private_key='i6yQgtoCGsPHzQT1bhF8iDmW'
  end

  def get_the_characters
    uri = URI.parse("http://taxjar-tech-interview.herokuapp.com")

    http =  Net::HTTP.new(uri.host, uri.port)
    request=Net::HTTP::Get.new("/v1/public/characters#{auth_params(@public_key,@private_key)}&limit=1")
    @response = http.request(request)
    response = @response.body
    hash = JSON.parse(response)
    hash["data"]["total"]
    hash
    
     
rescue
    nil
  end

def get_characters_in_comics(comic_ids_array = [])
       puts comic_ids_array[:comic_ids].join(",")
    comic_ids = to_csv(comic_ids_array)
    puts comic_ids.to_i

    uri = URI.parse("http://taxjar-tech-interview.herokuapp.com")
    http = Net::HTTP.new(uri.host, uri.port)
   request = Net::HTTP::Get.new("/v1/public/characters#{auth_params(@public_key,@private_key)}&comics=#{comic_ids_array[:comic_ids][0]},#{comic_ids_array[:comic_ids][1]},&limit1")
  
   
    @response = http.request(request)
    response = @response.body
    hash = JSON.parse(response)
    hash
    # #  hash
    # puts hash["data"]["total"]
    # # # hash
  end

  def auth_params(publick,privatek)
      ts = Time.now.to_i
      hash = Digest::MD5.hexdigest("#{ts}#{privatek}#{publick}")
      "?ts=#{ts}&apikey=#{publick}&hash=#{hash}"
  end

  def to_csv(array)
  output = ''
  is_first = true
  array.each do |x|
  unless is_first
  output = output + ','
  end
  output = output + x.to_s
  is_first = false
  end
  
  return output
  end

end
