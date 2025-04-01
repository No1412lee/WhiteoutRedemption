import requests
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
    "梦浮生": "74907513",
    "大梦谁先觉": "398918200",
    "平生我自知": "400376643",
    "草堂春睡足": "61685237",
    "窗外日迟迟": "400474481",
    "南光太郎": "50393103",
    "柠小檬": "51917092",
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
    "[122]曦 城": "444513087",
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
    "肖恩克小1": "74940322",
    "肖恩克小2": "73514790",
    "肖恩克小3": "72630076",
    "肖恩克小4": "153756087",
    "肖恩克小5": "75005585",
    "肖恩克小6": "250954273",
    "肖恩克小7": "249678380",
    "肖恩克小8": "251629365",
    "肖恩克小9": "248155956",
    "鼠小1": "450484054",
    "鼠小2": "450582160",
    "鼠小3": "451646812",
    "[330]桃桃桃不掉": "59374564",
    "[330]梨梨梨不开": "59571453",
    "[330]不可以打我": "79347789",
    "[330]小小敉": "62815477",

    "[999]珺璟如晔": "169564351",
    "[Koi]地狱里的油条": "169089644",
    "[Koi]momo酱": "169514960",
    "[Koi]清风明月": "169858869",
    "[Koi]关你西红柿呀": "169875645",
    "[Koi]晚 风": "168531895",
    "[Koi]随便玩玩玩": "170269383",
    "[Koi]爱吃草莓的小西瓜": "171660947",
    "[Koi]无名小镇（种田版）": "170121987",
    "[Koi]cfar": "170629393",
    "[Koi]我叫托马斯": "171154073",
    "[Koi]走向复兴": "169581006",
    "[Koi]倚楼听风雨": "168712439",
    "[Koi]猛踹瘸子好腿": "170629706",
    "[Koi]浮生若梦": "228921398",
    "[CNH]火凤燎原": "170415993",
    "[WAF]红云劫": "171563070",
    "[WAF]雷震雨": "168614615",
    "[WAF]两杆老烟枪": "171661537",
    "[WAF]永恒之瞳丨旻": "170367516",
    "[jmf]中系少女豆腐酱": "169727484",
    "Gabrielle": "170941105",
}
all_cdk = [
    # 通用
    # "WJDR111", "WJDR222", "WJDR333", "WJDR666",
    # "WJDR2025", "WJDR168", "WJDR899", "WJDR988",
    # "FH666", "FH777", "FH888", "FH6666", "FH7777", "FH8888",
    # "WZY666", "WZY777", "WZY888",
    # "TILI520", "WJDRtaptap", "666WJDR2024", "WJDRTB6666", "WOAIWJDR",

    # 节日
    "VWO50",
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
}
url_gift = "https://wjdr-giftcode-api.campfiregames.cn/api/gift_code"

retry_limit = 5
error_login = 0
totol_error_gift = 0
totol_success_gift = 0
totol_retry_limit = 0
sleep_time = 2.5
cdk_sleep_time = 1.5
timeout_sleep_time = 15

for player_name, fid in all_fid.items():
    response_data = login_fid(headers, fid)
    if response_data["msg"] != "success":
        error_login += 1
        print("[Error] login response_data: " + str(response_data))
        time.sleep(sleep_time)
    else:
        success_gift = 0
        for cdk in all_cdk:
            for retry in range(retry_limit):
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
                    if retry < retry_limit - 1:
                        time.sleep(timeout_sleep_time * (retry + 1))
                        response_data = login_fid(headers, fid)
                        if response_data["msg"] != "success":
                            print(f"[Error] Login {player_name} {fid} {response_data}")
                        time.sleep(sleep_time)
                    continue
                # print(response_data)
                if response_data["msg"] == "RECEIVED.":
                    totol_error_gift += 1
                    print(f"Already redeemed {cdk}")
                    # print("gift response_data: " + str(response_data))
                    break
                elif response_data["msg"] == "STOVE_LV ERROR.":
                    totol_error_gift += 1
                    print(f"Player {player_name}:{fid} level not up to standard")
                    # print("gift response_data: " + str(response_data))
                    break
                elif response_data["msg"] == "SUCCESS":
                    success_gift += 1
                    print(f"[Success] {cdk}")
                    break
                else:
                    print(f"{response_data}")
                    if retry < retry_limit - 1:
                        time.sleep(5 * (retry + 1))
                        response_data = login_fid(headers, fid)
                        if response_data["msg"] != "success":
                            print(f"[Error] Login {player_name} {fid} {response_data}")
                        time.sleep(sleep_time)
            else:
                print(f"[Error] Retry limit {player_name} {fid} cdk={cdk}")
                totol_retry_limit += 1
            time.sleep(cdk_sleep_time)
        time.sleep(sleep_time)

        totol_success_gift += success_gift
        print(f"=> {player_name} {fid} success_gift={success_gift}")

print(f"error_login = {error_login} totol_error_gift = {totol_error_gift} totol_success_gift = {totol_success_gift}")
if totol_retry_limit > 0:
    print(f"[Error] totol_retry_limit = {totol_retry_limit}")