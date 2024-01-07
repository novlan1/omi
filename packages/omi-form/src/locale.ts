export const localeErrorMessages: Record<string, Record<string, string>> = {
  en: {
    root: 'value of form',
  },
  zh: {
    root: '表单值',
    'number.base': '{#label} 必须是数字',
    'number.min': '{#label} 最小值 {#limit}',
    'number.max': '{#label} 最大值 {#limit}',
    'any.required': '{#label} 是必须的',
    'number.integer': '{#label} 必须是整数',
    'string.uuid': '{#label} 必须是有效的 UUID',
    'any.custom': '{#label} 未通过自定义验证',
    'any.default': '{#label} 在运行默认方法时抛出错误',
    'any.failover': '{#label} 在运行故障转移方法时抛出错误',
    'any.invalid': '{#label} 包含无效值',
    'any.only': '{#label} 必须与 {#valids} 相同',
    'any.ref': '{#label} 引用了 {#ref}，它不是数字',
    'any.unknown': '{#label} 不允许',
    'object.with': '{#label} 缺少必需字段 "{#peer}"',
    'object.missing': '{#label} 缺少必需字段 "{#peers}"',
    'object.xor': '{#label} 包含冲突字段 {#peers}',
    'alternatives.all': '{#label} 必须满足所有替代条件',
    'alternatives.any': '{#label} 必须满足任一替代条件',
    'alternatives.match': '{#label} 必须匹配某个替代条件',
    'alternatives.one': '{#label} 只能满足一个替代条件',
    'alternatives.types': '{#label} 的类型错误',
    'array.base': '{#label} 必须是数组',
    'array.excludes': '{#label} 包含不允许的值',
    'array.includesRequiredBoth': '{#label} 必须同时包含指定的已知和未知值',
    'array.includesRequiredKnowns': '{#label} 必须包含指定的已知值',
    'array.includesRequiredUnknowns': '{#label} 必须包含指定的未知值',
    'array.includes': '{#label} 必须包含指定值',
    'array.length': '{#label} 的长度必须是 {#limit}',
    'array.max': '{#label} 的最大长度是 {#limit}',
    'array.min': '{#label} 的最小长度是 {#limit}',
    'array.orderedLength': '{#label} 的顺序长度必须是 {#limit}',
    'array.sort': '{#label} 必须按指定顺序排序',
    'array.sort.mismatching': '{#label} 排序不匹配',
    'array.sort.unsupported': '{#label} 不支持排序',
    'array.sparse': '{#label} 不允许稀疏数组',
    'array.unique': '{#label} 必须具有唯一的值',
    'array.hasKnown': '{#label} 必须具有已知值',
    'array.hasUnknown': '{#label} 必须具有未知值',
    'binary.base': '{#label} 必须是二进制数据',
    'binary.length': '{#label} 的长度必须是 {#limit}',
    'binary.max': '{#label} 的最大长度是 {#limit}',
    'binary.min': '{#label} 的最小长度是 {#limit}',
    'boolean.base': '{#label} 必须是布尔值',
    'date.base': '{#label} 必须是日期',
    'date.format': '{#label} 日期格式错误',
    'date.greater': '{#label} 必须大于 {#limit}',
    'date.less': '{#label} 必须小于 {#limit}',
    'date.max': '{#label} 必须早于或等于 {#limit}',
    'date.min': '{#label} 必须晚于或等于 {#limit}',
    'date.strict': '{#label} 日期格式必须严格遵循',
    'function.arity': '{#label} 函数的参数个数必须是 {#n}',
    'function.class': '{#label} 必须是一个类',
    'function.maxArity': '{#label} 函数的最大参数个数是 {#n}',
    'function.minArity': '{#label} 函数的最小参数个数是 {#n}',
    'number.greater': '{#label} 必须大于 {#limit}',
    'number.infinity': '{#label} 不能是无穷大',
    'number.less': '{#label} 必须小于 {#limit}',
    'number.multiple': '{#label} 必须是 {#base} 的倍数',
    'number.negative': '{#label} 必须是负数',
    'number.port': '{#label} 必须是有效的端口号',
    'number.positive': '{#label} 必须是正数',
    'number.precision': '{#label} 必须精确到 {#limit} 位小数',
    'number.unsafe': '{#label} 是不安全的数字',
    'object.unknown': '{#label} 是未知的对象',
    'object.and': '{#label} 必须同时满足 {#peers}',
    'object.assert': '{#label} 不满足指定条件',
    'object.base': '{#label} 必须是对象',
    'object.length': '{#label} 的键数必须是 {#limit}',
    'object.max': '{#label} 的最大键数是 {#limit}',
    'object.min': '{#label} 的最小键数是 {#limit}',
    'object.nand': '{#label} 不能同时满足 {#peers}',
    'object.pattern.match': '{#label} 键值对必须匹配指定模式',
    'object.refType': '{#label} 引用了错误的类型',
    'object.regex': '{#label} 键必须满足正则表达式',
    'object.rename.multiple': '{#label} 不能重命名多个键',
    'object.rename.override': '{#label} 重命名不能覆盖现有键',
    'object.schema': '{#label} 必须是 Joi schema',
    'object.instance': '{#label} 必须是类的实例',
    'object.without': '{#label} 不能和 {#peers} 同时存在',
    'object.oxor': '{#label} 只能满足一个互斥条件',
    'string.alphanum': '{#label} 必须是字母数字字符',
    'string.base64': '{#label} 必须是有效的 base64 字符串',
    'string.base': '{#label} 必须是字符串',
    'string.creditCard': '{#label} 必须是有效的信用卡号',
    'string.dataUri': '{#label} 必须是有效的 dataUri 字符串',
    'string.domain': '{#label} 必须是有效的域名',
    'string.email': '{#label} 必须是有效的电子邮件地址',
    'string.empty': '{#label} 不能为空',
    'string.guid': '{#label} 必须是有效的 GUID',
    'string.hexAlign': '{#label} 十六进制对齐失败',
    'string.hex': '{#label} 必须是有效的十六进制字符串',
    'string.hostname': '{#label} 必须是有效的主机名',
    'string.ipVersion': '{#label} 必须是有效的 IP 版本',
    'string.ip': '{#label} 必须是有效的 IP 地址',
    'string.isoDate': '{#label} 必须是有效的 ISO 日期',
    'string.isoDuration': '{#label} 必须是有效的 ISO 时长',
    'string.length': '{#label} 的长度必须是 {#limit}',
    'string.lowercase': '{#label} 必须是小写字符串',
    'string.max': '{#label} 的最大长度是 {#limit}',
    'string.min': '{#label} 的最小长度是 {#limit}',
    'string.normalize': '{#label} 必须是 unicode 规范化的字符串',
    'string.pattern.base': '{#label} 的值 {#value} 未能匹配所需的模式',
    'string.pattern.name': '{#label} 的值 {#value} 未能匹配 {#name} 模式',
    'string.pattern.invert.base': '{#label} 的值 {#value} 匹配了反向模式',
    'string.pattern.invert.name': '{#label} 的值 {#value} 匹配了反向的 {#name} 模式',
    'string.token': '{#label} 必须是有效的令牌',
    'string.trim': '{#label} 必须是修剪过的字符串',
    'string.uppercase': '{#label} 必须是大写字符串',
    'string.uri': '{#label} 必须是有效的 URI',
    'string.uriCustomScheme': '{#label} 必须是符合 {#scheme} 模式的有效 uri',
    'string.uriRelativeOnly': '{#label} 必须是有效的相对 uri',
    'symbol.base': '{#label} 必须是符号',
    'symbol.map': '{#label} 必须是符号映射',
  },
}

export const registerLocale = (locale: string, messages: Record<string, string>) => {
  localeErrorMessages[locale] = messages
}
