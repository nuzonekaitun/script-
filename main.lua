repeat task.wait() until game:IsLoaded()

-- ทำงานเฉพาะใน Blox Fruits เท่านั้น
if game.PlaceId == 2753915549 or game.PlaceId == 4442272183 or game.PlaceId == 7449423635 then
    if _G.Script_Mode == "PVP" then 
        loadstring(game:HttpGet("https://raw.githubusercontent.com/xshiba/CreamSoScute/main/LoadP.lua", true))()
    elseif _G.Script_Language == "Thai" then 
        loadstring(game:HttpGet("https://raw.githubusercontent.com/xshiba/CreamSoScute/main/LoadTh.lua", true))()
    elseif getgenv().Script_Mode == "Kaitun_Script" then 
        loadstring(game:HttpGet("https://raw.githubusercontent.com/xshiba/CreamSoScute/main/LoadKT.lua", true))()
    else 
        loadstring(game:HttpGet("https://raw.githubusercontent.com/xshiba/CreamSoScute/main/LoadNormal.lua", true))()
    end
end
