dist = int(input("Distância (mt): "))

km = (dist / 1000)
pa = str(km)



new = str(km).split(".",1)
print("Corresponde a: ",new[0],"km e ,",(new[1]+"00"),"mt")
