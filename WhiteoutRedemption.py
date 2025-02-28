﻿import requests
from datetime import datetime
import time

import hashlib
import json

def generate_sign(data):
    sorted_keys = sorted(data.keys())
    query_string = '&'.join(f"{key}={json.dumps(data[key]) if isinstance(data[key], (dict, list)) else data[key]}" for key in sorted_keys)

    fixed_string = "Uiv#87#SPan.ECsp"
    sign_string = query_string + fixed_string
    
    md5_hash = hashlib.md5(sign_string.encode('utf-8')).hexdigest()
    
    result = {
        'sign': md5_hash,
        **data
    }
    
    return result

def login_fid(headers, fid):
    timestamp_ms = int(datetime.now().timestamp() * 1000)
    data = {
        "fid": fid,
        "time": str(timestamp_ms),
    }

    data = generate_sign(data)
    # print("[POST]\n" + data)

    url_login = "https://wjdr-giftcode-api.campfiregames.cn/api/player"

    response = requests.post(
        url_login,
        headers=headers,
        data=data
    )
    response_data = response.json() if response.status_code == 200 else { "msg": "" }
    # print(response_data)
    return response_data

all_fid = {
    "南光太郎": "50393103",
    "柠小檬": "51917092",
    "梦浮生": "74907513",
    "大梦谁先觉": "398918200",
    "平生我自知": "400376643",
    "草堂春睡足": "61685237",
    "窗外日迟迟": "400474481",
    "林七七": "75136533",
    "林阿花": "75071234",
    "肖恩克": "74596284",
    "珍珠奶茶熊": "71351996",
    "春风何时来": "76496924",
    "LCB": "73776951",
    "萝卜": "72531954",
    "福多多": "77119652",
    "茉莉飘飘": "74219444",
    "[327]林千夜": "76431379",
    "[327]歪歪大王": "73809778",
    "[327]小点点": "78282886",
    "[327]祈愿婷": "73023472",
    "[327]软糯香甜": "50540374",
    "[H2O]升职發财饺": "78495863",
    "[327]对面的女孩看过来呀看过来": "73793064",
    "[327]一个人的城堡": "73564041",
    "[327]茉莉村村民大熊": "74219069",
    "[327]遇事不决可问春风": "78118973",
    "[327]煙 花": "74579488",
    "[327]@桃斯": "74399585",
    "[327]繁星&": "85249785",
    "[327]狂奔的兔子": "78430242",
    "[327]丢苦茶子的青纯男大": "51081013",
    "[327]小小汤圆圆。": "81889840",
    "[327]顾 笙": "51376119",
    "汤姆猫": "74825563",
    "纯真": "72777610",
    "汤姆猫_2": "60535909",
    "小新": "78138787",
    "[330]桃桃桃不掉": "59374564",
    "[330]梨梨梨不开": "59571453",
    "[330]不可以打我": "79347789",
}
all_cdk = [
    # 通用
    # "WJDR111", "WJDR222", "WJDR333", "WJDR666",
    # "WJDR2025", "WJDR168", "WJDR899", "WJDR988",
    # "FH666", "FH777", "FH888", "FH6666", "FH7777", "FH8888",
    # "WZY666", "WZY777", "WZY888",
    # "TILI520", "WJDRtaptap", "666WJDR2024", "WJDRTB6666", "WOAIWJDR",

    # 节日
    "270W0228",
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
}
url_gift = "https://wjdr-giftcode-api.campfiregames.cn/api/gift_code"

error_login = 0
totol_error_gift = 0
totol_success_gift = 0

for player_name, fid in all_fid.items():
    response_data = login_fid(headers, fid)
    if response_data["msg"] != "success":
        error_login += 1
        print("[Error] login response_data: " + str(response_data))
        time.sleep(1)
    else:
        success_gift = 0
        for cdk in all_cdk:
            for retry in range(3):
                timestamp_ms = int(datetime.now().timestamp() * 1000)
                data = {
                    "fid": fid,
                    "cdk": cdk,
                    "time": str(timestamp_ms)
                }
                data = generate_sign(data)
                # print("[POST]\n" + data)

                response = requests.post(
                    url_gift,
                    headers=headers,
                    data=data
                )
                try:
                    response_data = response.json()
                except Exception as e:
                    print(f"[Error] status_code {response.status_code}")
                    # print(response.text)
                    time.sleep(5 * (retry + 1))
                    response_data = login_fid(headers, fid)
                    if response_data["msg"] != "success":
                        print(f"[Error] Login {player_name} {fid} {response_data}")
                    continue
                # print(response_data)
                if response_data["msg"] != "SUCCESS":
                    totol_error_gift += 1
                    print(f"Already redeemed {cdk}")
                    # print("gift response_data: " + str(response_data))
                else:
                    success_gift += 1
                    print(f"[Success] {cdk}")
                time.sleep(1.5)
                break
            else:
                print(f"[Error] Retry limit {player_name} {fid} cdk={cdk}")

        totol_success_gift += success_gift
        print(f"=> {player_name} {fid} success_gift={success_gift}")

print(f"error_login = {error_login} totol_error_gift = {totol_error_gift} totol_success_gift = {totol_success_gift}")